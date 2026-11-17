#!/usr/bin/env node
const assert=require('node:assert/strict'),C=require('../e4-diagnostic-core'),R=require('../e4-review');
const {storage,element,app}=require('./e4-test-page'),clone=C.clone,KEY='e4-diagnostic-review';
const base=app(),controller=base.W.E4Diagnostic.create({root:element(),storage:storage(),questions:base.W.MH_Q,topics:base.W.MH_TOPICS,navigate(){},rerender(){}}),bank=clone(controller.bank);
function report(q,id='original',at=1000){return {id,finishedAt:at,total:1,score:0,questions:[q.id],misses:[q.id],kind:'diagnostic',items:[{q:clone(q),selected:[q.opts.findIndex((_,k)=>!C.answer(q).includes(k))],ok:false,confidence:'sure',at}]};}
function seed(q,extra={}){return storage(Object.assign({'e4-report-original':JSON.stringify(report(q)),'e4-report-index':'["original"]'},extra));}
function state(ls){return JSON.parse(ls.getItem(KEY));}
function active(s){return s.tasks.find(q=>q.id===s.active);}
function noWriting(a){for(const text of ['<textarea','data-d="reveal"','data-d="spoken"','data-d="rate-got"','data-d="transfer"','data-d="confidence"'])assert(!a.el.innerHTML.includes(text),'Old required control remains: '+text);}
function answerCorrect(a,ls){let s=state(ls),q=active(s);if(q.reviewType==='match'){for(let i=R.work(s,q).selected.length;i<q.matchPrompts.length;i++)a.click('review-pick',String(i));}
 else if(q.reviewType==='order'){for(let i=R.work(s,q).selected.length;i<q.opts.length;i++)a.click('review-pick',String(i));}
 else if(Array.isArray(q.a)){q.a.forEach(k=>a.click('review-pick',String(k)));a.click('review-check');}
 else a.click('review-pick',String(q.a));}

// Every authored activity must have an objectively checked wrong path and a
// correct path. Merely selecting all sequence steps must not earn a pass.
for(const q of Object.values(R.activities)){
 assert(C.validQuestion(q));assert.equal(q.opts.length,q.optionWhy.length);
 let s=R.create([q],1000),current=R.current(s,[q.chapter]);R.work(s,current,()=>.5);
 if(q.reviewType==='order'){
  const wrong=[1,0].concat(q.opts.map((_,i)=>i).slice(2));wrong.forEach(k=>R.pick(s,q,k,1100));assert(!R.result(s,q.id).ok,'Wrong order must fail: '+q.id);
 }else{for(let i=0;i<q.matchPrompts.length;i++)R.pick(s,q,(i+1)%q.matchPrompts.length,1100);assert(!R.result(s,q.id).ok,'Wrong matches must fail: '+q.id);}
 assert.deepEqual(R.restore(s),s);assert(!R.pick(s,q,0,1200),'A second tap must not grade twice');assert.equal(s.results.length,1);
 s=R.create([q],1300);R.current(s,[q.chapter]);if(q.reviewType==='order')q.opts.forEach((_,i)=>R.pick(s,q,i,1400));else q.matchPrompts.forEach((_,i)=>R.pick(s,q,i,1400));assert(R.result(s,q.id).ok,q.id);const r=R.report(s,1500);assert(C.validReport(r));assert.equal(R.report(s,1600),r);R.acknowledge(s);assert.equal(R.report(s,1700),null);
}

const receptor=bank.find(q=>q.id==='e4d-receptors-1'),testDraft=C.start(bank.filter(q=>q.chapter==='34').slice(0,4),'diagnostic'),oldWriting={receptors:{draft:'Earlier private recall writing',past:[{draft:'Keep this too'}]}};
let ls=seed(receptor,{'e4-diagnostic-session':JSON.stringify(testDraft),'e4-diagnostic-recall':JSON.stringify(oldWriting),'e4-learn-v1':'{"keep":"lesson progress"}'}),a=app(ls,'#review');
assert(a.el.innerHTML.includes('Work through your misses'));noWriting(a);let s=state(ls);assert.equal(active(s).reviewType,'match');assert.equal(s.tasks.length,2);a.click('review-pick','0');assert.equal(state(ls).work[active(state(ls)).id].selected.length,1);assert.equal(state(ls).results.length,0,'Partial match must not grade');
a=app(ls,'#review');assert(a.el.innerHTML.includes('Match 2 of 3'));noWriting(a);a.click('review-pick','1');a.click('review-pick','2');assert(a.el.innerHTML.includes('Correct · saved'));assert.equal(state(ls).results.length,1);assert.equal(a.location.hash,'#review');
a.click('review-next');assert(!active(state(ls)).reviewActivity,'A different clinical case follows the connection activity');answerCorrect(a,ls);assert(a.el.innerHTML.includes('Correct · saved'));assert.equal(C.createStore(ls).reports().length,2,'The completed queue gets a separate report');
const completed=state(ls);assert.equal(JSON.parse(ls.getItem('e4-diagnostic-recall')).receptors.round,1,'One completed round advances spacing once, not once per activity');a.click('review-next');assert(a.el.innerHTML.includes('This round is complete'));assert.equal(C.createStore(ls).reports().length,2);assert.equal(ls.getItem('e4-diagnostic-session'),JSON.stringify(testDraft),'Review cannot overwrite a Test draft');assert.equal(ls.getItem('e4-report-original'),JSON.stringify(report(receptor)),'Original report must remain byte-for-byte intact');assert.equal(JSON.parse(ls.getItem('e4-diagnostic-recall')).receptors.draft,'Earlier private recall writing');assert.equal(ls.getItem('e4-learn-v1'),'{"keep":"lesson progress"}');
a=app(ls,'#review');assert(a.el.innerHTML.includes('This round is complete'));assert.equal(C.createStore(ls).reports().length,2);noWriting(a);
const newMiss=report(receptor,'later-miss',Date.now()+100);ls.setItem('e4-report-later-miss',JSON.stringify(newMiss));a=app(ls,'#review');assert(active(state(ls)),'A new Test miss must automatically enter Review');assert(a.el.innerHTML.includes('Match 1 of 3'));assert.equal(C.createStore(ls).reports().length,3);
const empty=storage();let emptyApp=app(empty,'#review');assert(emptyApp.el.innerHTML.includes('Nothing due'));empty.setItem('e4-report-original',JSON.stringify(report(receptor)));emptyApp=app(empty,'#review');assert(active(state(empty)),'An initially empty queue must pick up later misses automatically');

// Save or a temporary chapter exclusion must not advance a concept's
// schedule before its remaining case, nor advance it twice in one queue.
let mid=seed(receptor),midApp=app(mid,'#review');answerCorrect(midApp,mid);midApp.click('save');assert.equal((JSON.parse(mid.getItem('e4-diagnostic-recall')).receptors||{}).round,undefined,'Saving the connection alone must not award a spaced pass');
midApp.el.events.change({target:{matches:s=>s==='[data-d-chapter]',dataset:{dChapter:'3'},checked:false}});assert.equal((JSON.parse(mid.getItem('e4-diagnostic-recall')).receptors||{}).round,undefined,'Hiding the remaining case must not award a spaced pass');
midApp.el.events.change({target:{matches:s=>s==='[data-d-chapter]',dataset:{dChapter:'3'},checked:true}});midApp.click('review-next');answerCorrect(midApp,mid);assert.equal(JSON.parse(mid.getItem('e4-diagnostic-recall')).receptors.round,1);midApp.click('save');assert.equal(JSON.parse(mid.getItem('e4-diagnostic-recall')).receptors.round,1);

// Chapter changes project the same queue, without discarding an unfinished
// matching/ordering activity in a different chapter.
const phaseQ=bank.find(q=>q.concept==='phases'),phaseReport=report(phaseQ,'phase',1001);ls=seed(receptor,{'e4-report-phase':JSON.stringify(phaseReport)});a=app(ls,'#review');a.click('review-pick','0');const partial=state(ls).work['e4r-receptors'];
a.el.events.change({target:{matches:s=>s==='[data-d-chapter]',dataset:{dChapter:'3'},checked:false}});assert.equal(active(state(ls)).chapter,'9');assert.deepEqual(state(ls).work['e4r-receptors'],partial);
a.el.events.change({target:{matches:s=>s==='[data-d-chapter]',dataset:{dChapter:'3'},checked:true}});assert.deepEqual(state(ls).work['e4r-receptors'],partial);

// Ordering restores mid-sequence. SATA remains exact-set and uses one check
// because the app must not guess when multiple selection is finished.
ls=seed(phaseQ);a=app(ls,'#review');assert.equal(active(state(ls)).reviewType,'order');a.click('review-pick','0');a=app(ls,'#review');assert.equal(state(ls).work['e4r-phases'].selected.length,1);answerCorrect(a,ls);assert(a.el.innerHTML.includes('Correct · saved'));noWriting(a);
const sata=bank.find(q=>Array.isArray(q.a)&&q.a.length>1&&!q.reviewActivity);let single=R.create([sata],1000);R.current(single,[sata.chapter]);R.pick(single,sata,sata.a[0],1100);assert.equal(single.results.length,0);R.check(single,sata,1200);assert(!single.results[0].ok);

// Preserve the order of outcomes within one review report, even when two
// answers share a timestamp. A later miss cannot be repaired by an earlier
// correct answer from that same report.
const pair=clone(receptor),correct={q:pair,selected:C.answer(pair),ok:true,at:2000},wrong={q:pair,selected:[1],ok:false,at:2000};
function combined(items){return {id:'combined',finishedAt:3000,total:2,score:1,questions:items.map(it=>it.q.id),misses:[pair.id],kind:'repair',items};}
assert(C.pending(C.evidence([combined([correct,wrong])],bank,{}).receptors.events).length);assert.equal(C.pending(C.evidence([combined([wrong,correct])],bank,{}).receptors.events).length,0);

// Backup recovery includes the partially completed Review queue. A full or
// blocked store keeps the in-memory work available instead of losing it.
const backup=C.createStore(ls).backup(),fresh=storage(),freshStore=C.createStore(fresh);freshStore.importBackup(backup);assert(R.restore(JSON.parse(fresh.getItem(KEY))));
ls=seed(receptor);a=app(ls,'#review');const set=ls.setItem;ls.setItem=(k,v)=>{if(k===KEY)throw Error('quota');set(k,v);};a.click('review-pick','0');assert(a.el.innerHTML.includes('Not saved to this device'));assert.equal(C.createStore(ls).reports().length,1);ls.setItem=set;a.click('save');assert.equal(state(ls).work['e4r-receptors'].selected.length,1);

// Prior links now enter the same no-writing Review panel. The page never
// requires the old reveal/self-rate/transfer sequence.
ls=seed(receptor);a=app(ls,'#recall-receptors');assert(a.el.innerHTML.includes('Work through your misses'));noWriting(a);
console.log('✓ One-place Review: 9 match/order activities, tap-to-grade cases, exact SATA, mid-activity reload, chapter projection, objective spacing once per round, independent Test draft, immutable reports, backup/quota recovery and legacy links.');
