// Diagnostic evidence and durable, append-only reports. No dependency on the UI.
(function(root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.E4DiagnosticCore = factory();
})(typeof window !== 'undefined' ? window : globalThis, function() {
  'use strict';
  var DAY = 86400000, PREFIX = 'e4-report-', VERSION = 1;
  function clone(x) { return JSON.parse(JSON.stringify(x)); }
  function id() { return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 11); }
  function answer(q) { return Array.isArray(q.a) ? q.a : [q.a]; }
  function correct(q, picks) { var a = answer(q); return picks.length === a.length && a.every(function(k) { return picks.indexOf(k) >= 0; }); }
  function shuffle(a, rng) { a = a.slice(); for (var i=a.length-1;i>0;i--) { var j=Math.floor(rng()*(i+1)), t=a[i];a[i]=a[j];a[j]=t; } return a; }
  function validQuestion(q) { return q && typeof q.id==='string' && typeof q.stem==='string' && Array.isArray(q.opts) && q.opts.length>1 && answer(q).length && answer(q).every(function(k){return Number.isInteger(k)&&k>=0&&k<q.opts.length;}); }
  function validReport(r) { return r && typeof r.id==='string' && Number.isFinite(r.finishedAt) && Number.isInteger(r.total) && r.total>0 && Number.isInteger(r.score) && r.score>=0 && r.score<=r.total && Array.isArray(r.questions) && Array.isArray(r.misses) && (r.items===undefined||Array.isArray(r.items)&&r.items.every(function(it){return it&&validQuestion(it.q)&&typeof it.ok==='boolean'&&(it.selected===null||Array.isArray(it.selected)&&it.selected.every(function(k){return Number.isInteger(k)&&k>=0&&k<it.q.opts.length;}));})); }
  function createStore(storage) {
    var memory={}, error='', corrupt={}, dirty={}, savedAt=0;
    function read(key, fallback) {
      if (Object.prototype.hasOwnProperty.call(memory,key)) return clone(memory[key]);
      try { var raw=storage.getItem(key);if(raw===null)return fallback;var value=JSON.parse(raw);memory[key]=value;return clone(value); }
      catch(e) { corrupt[key]=true;error='Saved data could not be read. Download a backup before making changes.';return fallback; }
    }
    function write(key, value) {
      if(corrupt[key]) { error='A saved record could not be read; it has been left untouched. Download your backup.';return false; }
      memory[key]=clone(value);dirty[key]=true;
      try { var raw=JSON.stringify(value);storage.setItem(key,raw);if(storage.getItem(key)!==raw)throw Error('Save verification failed');delete dirty[key];savedAt=Date.now();if(!Object.keys(dirty).length&&!Object.keys(corrupt).length)error='';return true; }
      catch(e) { error='Not saved to this device. Storage may be full or blocked. Keep this page open and download a backup.';return false; }
    }
    function keys() {
      var found=Object.keys(memory);
      try { for(var i=0;i<storage.length;i++){var k=storage.key(i);if(k&&found.indexOf(k)<0)found.push(k);} }
      catch(e) { error='Storage is unavailable. Keep this page open and download a backup.'; }
      return found;
    }
    function reports() {
      var index=read('e4-report-index',[]), names=keys();
      if(Array.isArray(index))index.forEach(function(k){if(names.indexOf(PREFIX+k)<0)names.push(PREFIX+k);});
      return names.filter(function(k){return k.indexOf(PREFIX)===0&&k!=='e4-report-index';}).map(function(k){return read(k,null);}).filter(validReport).sort(function(a,b){return b.finishedAt-a.finishedAt||a.id.localeCompare(b.id);});
    }
    function append(r) {
      if(!validReport(r))throw Error('Invalid report');
      var prior=read(PREFIX+r.id,null);
      if(prior) { if(JSON.stringify(prior)!==JSON.stringify(r)){error='A report with this ID already exists. Its original answers were preserved.';return false;}return write(PREFIX+r.id,prior); }
      if(!write(PREFIX+r.id,r))return false;
      // The index is only a recovery aid. Reports are recovered by their own keys.
      var index=read('e4-report-index',[]);if(!Array.isArray(index))index=[];
      if(index.indexOf(r.id)<0)index.push(r.id);
      write('e4-report-index',index);
      return !error;
    }
    function migrate(bank) {
      var old=read('e4-test-runs',[]);if(!Array.isArray(old))return;
      old.filter(validReport).forEach(function(r){
        if(read(PREFIX+'legacy-'+r.id,null))return;
        var copy=clone(r);copy.id='legacy-'+r.id;copy.legacy=true;copy.kind='legacy';
        copy.items=r.questions.map(function(qid){var q=bank.find(function(x){return x.id===qid;});return q?{q:clone(q),ok:r.misses.indexOf(qid)<0,selected:null,confidence:null}:null;}).filter(Boolean);
        append(copy);
      });
    }
    function backup() {
      var d={};keys().filter(function(k){return /^e4-(report-|diagnostic-|test($|-)|class-test$)/.test(k);}).forEach(function(k){
        try { var raw=storage.getItem(k);if(raw!==null)d[k]=raw; }catch(e){}
        if(Object.prototype.hasOwnProperty.call(memory,k))d[k]=JSON.stringify(memory[k]);
      });
      return {type:'nrs114-exam4-diagnostic',v:VERSION,at:Date.now(),d:d};
    }
    function importBackup(file) {
      if(!file||file.type!=='nrs114-exam4-diagnostic'||file.v!==VERSION||!file.d||typeof file.d!=='object')throw Error('Choose an Exam 4 diagnostic backup.');
      // Merge immutable reports only. Never replace current work or other exams.
      var entries=Object.keys(file.d).filter(function(k){return k.indexOf(PREFIX)===0&&k!=='e4-report-index';}).map(function(k){var r=JSON.parse(file.d[k]);if(!validReport(r)||k!==PREFIX+r.id)throw Error('Invalid report in backup.');return r;});
      entries.forEach(function(r){var existing=read(PREFIX+r.id,null);if(existing&&JSON.stringify(existing)!==JSON.stringify(r))throw Error('A report ID conflicts with an existing report. Nothing was replaced.');});
      var count=0;entries.forEach(function(r){if(!read(PREFIX+r.id,null)){if(!append(r))throw Error(error);count++;}});
      // A paused draft is recovered only if there is no current draft. Learning
      // evidence comes from reports; self-ratings never overwrite another device.
      if(!read('e4-diagnostic-session',null)&&file.d['e4-diagnostic-session']){
        var draft=JSON.parse(file.d['e4-diagnostic-session']);
        if(restore(draft))write('e4-diagnostic-session',draft);
      }
      if(file.d['e4-diagnostic-recall']){
        var incoming=JSON.parse(file.d['e4-diagnostic-recall']),current=read('e4-diagnostic-recall',{});
        if(incoming&&typeof incoming==='object'&&!Array.isArray(incoming)&&current&&typeof current==='object'){
          Object.keys(incoming).filter(function(k){return /^[a-z0-9-]+$/.test(k);}).forEach(function(k){
            var v=incoming[k];if(!v||typeof v!=='object'||Array.isArray(v))return;
            if(!current[k])current[k]=v;
            else if(v.draft&&v.draft!==current[k].draft){var list=current[k].importedDrafts||[];if(list.indexOf(v.draft)<0)list.push(v.draft);current[k].importedDrafts=list;}
          });
          if(!write('e4-diagnostic-recall',current))throw Error(error);
        }
      }
      if(file.d['e4-diagnostic-paused']){
        var imported=JSON.parse(file.d['e4-diagnostic-paused']),paused=read('e4-diagnostic-paused',[]);
        if(Array.isArray(imported)&&Array.isArray(paused)){
          imported.forEach(function(d){if(restore(d)&&!paused.some(function(p){return p.id===d.id;}))paused.push(d);});
          if(!write('e4-diagnostic-paused',paused))throw Error(error);
        }
      }
      return count;
    }
    return {read:read,write:write,reports:reports,append:append,migrate:migrate,backup:backup,importBackup:importBackup,
      status:function(){return {error:error,savedAt:savedAt};},refresh:function(){Object.keys(memory).forEach(function(k){if(!dirty[k])delete memory[k];});},
      retry:function(){var pending=Object.keys(dirty);pending.forEach(function(k){write(k,memory[k]);});return !error;}};
  }
  function evidence(reports, bank, legacyHistory) {
    var out={},known={};bank.forEach(function(q){known[q.id]=q;if(q.concept&&!out[q.concept])out[q.concept]={events:[],missedIds:[],seen:[],status:'untested'};});
    reports.slice().sort(function(a,b){return a.finishedAt-b.finishedAt;}).forEach(function(r){
      (r.items||[]).forEach(function(it){var q=it.q,d=q&&out[q.concept];if(!d)return;
        d.events.push({id:q.id,facet:q.facet||known[q.id]&&known[q.id].facet||q.concept,ok:!!it.ok,confidence:it.confidence,at:r.finishedAt,kind:r.kind||'diagnostic',legacy:!!r.legacy});
        if(d.seen.indexOf(q.id)<0)d.seen.push(q.id);
        if(!it.ok&&d.missedIds.indexOf(q.id)<0)d.missedIds.push(q.id);
      });
    });
    // Old latest-answer history is weak evidence, never proof of strength. A
    // previous miss remains discoverable even when a later answer was right.
    bank.forEach(function(q){var d=out[q.concept],h=legacyHistory&&legacyHistory[q.id];
      if(!d||!Array.isArray(h)||d.events.some(function(e){return e.id===q.id;}))return;
      if(h.length){h.forEach(function(value){d.events.push({id:q.id,facet:q.facet||q.concept,ok:value===1,at:0,legacy:true});});d.seen.push(q.id);}
      if(h.indexOf(0)>=0&&d.missedIds.indexOf(q.id)<0)d.missedIds.push(q.id);
    });
    Object.keys(out).forEach(function(k){var d=out[k],last={},independent=[];
      d.events.forEach(function(e){last[e.id]=e;});
      var recent=d.events.slice(-3),bad=recent.some(function(e){return !e.ok||e.confidence==='unsure';});
      Object.keys(last).forEach(function(qid){var e=last[qid];if(e.ok&&e.confidence==='sure'&&!e.legacy&&e.kind!=='repair')independent.push(qid);});
      var required=bank.filter(function(q){return q.concept===k;}).map(function(q){return q.facet||q.concept;});
      var covered=independent.map(function(qid){return known[qid].facet||k;});
      var distinct={};independent.forEach(function(qid){distinct[known[qid].evidenceId||qid]=true;});
      d.status=!d.events.length?'untested':bad?'weak':Object.keys(distinct).length>=2&&required.every(function(f){return covered.indexOf(f)>=0;})?'strength':'developing';
      d.right=Object.keys(last).filter(function(qid){return last[qid].ok;}).length;
      d.last=d.events.length?d.events[d.events.length-1].at:0;
    });
    return out;
  }
  function plan(bank, stats, chapters, count, mode, rng) {
    rng=rng||Math.random;
    var pool=bank.filter(function(q){return !q.aliasOf&&chapters.indexOf(q.chapter)>=0&&(mode!=='weak'||stats[q.concept]&&stats[q.concept].status==='weak');});
    var by={};shuffle(pool,rng).forEach(function(q){(by[q.concept]=by[q.concept]||[]).push(q);});
    Object.keys(by).forEach(function(k){var seen=stats[k]&&stats[k].seen||[];by[k].sort(function(a,b){return (seen.indexOf(a.id)>=0?1:0)-(seen.indexOf(b.id)>=0?1:0);});});
    var concepts=shuffle(Object.keys(by),rng);concepts.sort(function(a,b){var x=stats[a]||{},y=stats[b]||{},rank={untested:0,weak:1,developing:2,strength:3};return (rank[x.status]||0)-(rank[y.status]||0)||(x.last||0)-(y.last||0);});
    var selected=[],limit=count||pool.length;
    // Rotate chapters, then objectives within chapters. A long medication bank
    // cannot crowd all the interpersonal or legal concepts out of a short round.
    var chapterOrder=chapters.slice().sort(function(a,b){function exposure(ch){var cs=Object.keys(by).filter(function(k){return by[k][0]&&by[k][0].chapter===ch;});return cs.length?cs.reduce(function(n,k){return n+(stats[k]&&stats[k].seen.length||0);},0)/cs.length:Infinity;}return exposure(a)-exposure(b);});
    while(selected.length<limit){var before=selected.length;
      chapterOrder.forEach(function(ch){if(selected.length>=limit)return;var k=concepts.find(function(c){return by[c].length&&by[c][0].chapter===ch;});if(!k)return;selected.push(by[k].shift());concepts.splice(concepts.indexOf(k),1);concepts.push(k);});
      if(before===selected.length)break;
    }
    return selected;
  }
  function start(questions, mode, rng) {
    if(!questions.length)return null;
    return {v:VERSION,id:id(),kind:mode||'diagnostic',qs:clone(questions),i:0,items:[],selected:[],confidence:null,reason:'',answered:false,paused:false,
      order:shuffle(questions[0].opts.map(function(_,i){return i;}),rng||Math.random),startedAt:Date.now(),report:null};
  }
  function restore(s) {
    if(!s||s.v!==VERSION||typeof s.id!=='string'||!Array.isArray(s.qs)||!s.qs.length||!s.qs.every(validQuestion)||!Array.isArray(s.items)||!s.items.every(function(it){return it&&validQuestion(it.q)&&typeof it.ok==='boolean';})||!Number.isInteger(s.i)||s.i<0||s.i>s.qs.length||s.items.length<s.i)return null;
    var out=clone(s),q=out.qs[Math.min(out.i,out.qs.length-1)];
    out.selected=Array.isArray(out.selected)?out.selected.filter(function(k,i,a){return Number.isInteger(k)&&k>=0&&k<q.opts.length&&a.indexOf(k)===i;}):[];
    if(!Array.isArray(out.order)||out.order.length!==q.opts.length||new Set(out.order).size!==q.opts.length||!out.order.every(function(k){return Number.isInteger(k)&&k>=0&&k<q.opts.length;}))out.order=q.opts.map(function(_,i){return i;});
    return out;
  }
  function grade(s, bank) {
    if(!s||s.answered||s.i>=s.qs.length||!s.selected.length)return false;
    var q=s.qs[s.i],ok=correct(q,s.selected);
    s.items.push({q:clone(q),selected:s.selected.slice(),ok:ok,confidence:s.confidence||null,reason:s.reason||'',at:Date.now()});s.answered=true;
    if((!ok||s.confidence==='unsure')&&s.kind==='diagnostic'){
      var choices=bank.filter(function(x){return !x.aliasOf&&x.concept===q.concept&&s.qs.every(function(y){return (y.evidenceId||y.id)!==(x.evidenceId||x.id);});});
      var follow=choices.find(function(x){return (x.facet||x.concept)===(q.facet||q.concept);})||choices[0];
      if(follow){
        // Replace a later duplicate objective when possible; otherwise offer a
        // follow-up after the round. Never silently extend the chosen length.
        var at=s.qs.findIndex(function(x,i){return i>s.i+2&&s.qs.slice(0,i).some(function(y){return y.concept===x.concept;});});
        if(at>=0)s.qs[at]=clone(follow);else s.followUp=s.followUp||[];
        if(at<0&&s.followUp.every(function(x){return x.id!==follow.id;}))s.followUp.push(clone(follow));
      }
    }
    return true;
  }
  function advance(s, rng) { if(!s||!s.answered)return false;s.i++;s.selected=[];s.confidence=null;s.reason='';s.answered=false;if(s.i<s.qs.length)s.order=shuffle(s.qs[s.i].opts.map(function(_,i){return i;}),rng||Math.random);return true; }
  function report(s) {
    if(s.report)return s.report;
    if(!s.items.length)return null;
    s.report={v:VERSION,id:s.id,kind:s.kind,startedAt:s.startedAt,finishedAt:Date.now(),score:s.items.filter(function(x){return x.ok;}).length,total:s.items.length,
      planned:s.qs.length,questions:s.items.map(function(x){return x.q.id;}),misses:s.items.filter(function(x){return !x.ok;}).map(function(x){return x.q.id;}),items:clone(s.items)};
    return s.report;
  }
  function due(progress, concept, rating, now) {
    var p=progress[concept]||{round:0};p.round=rating==='again'?0:Math.min(3,(p.round||0)+1);p.due=now+([0,DAY,3*DAY,7*DAY][p.round]);p.rating=rating;p.reviewedAt=now;progress[concept]=p;return p;
  }
  function pending(events){var bad={};events.forEach(function(e){if(!e.ok||e.confidence==='unsure')bad[e.facet||e.id]=e;});return Object.keys(bad).filter(function(f){return !events.some(function(e){return (e.facet||e.id)===f&&e.kind==='repair'&&e.ok&&e.confidence!=='unsure'&&e.at>=bad[f].at;});});}
  function repaired(events){return events.some(function(e){return !e.ok||e.confidence==='unsure';})&&!pending(events).length;}
  return {createStore:createStore,evidence:evidence,plan:plan,start:start,restore:restore,grade:grade,advance:advance,report:report,due:due,repaired:repaired,pending:pending,answer:answer,correct:correct,clone:clone,validQuestion:validQuestion,validReport:validReport};
});
