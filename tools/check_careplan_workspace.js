#!/usr/bin/env node
// Verify fact-only wording, safe insertion, and coverage of the original saved form fields.
const assert=require('assert/strict'),fs=require('fs'),path=require('path'),vm=require('vm');
const ROOT=path.join(__dirname,'..'),W=require(path.join(ROOT,'careplan-words.js'));
const store=new Map(),c={window:{},document:{querySelector:()=>null,querySelectorAll:()=>[],addEventListener(){}},localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)},setTimeout:()=>0,clearTimeout(){},TextEncoder,Uint8Array,ArrayBuffer,DataView,Date,console};
vm.createContext(c);
for(const f of ['nanda-index','nanda-guides','form','labs','include','questions','coach','guidance'])vm.runInContext(fs.readFileSync(path.join(ROOT,'data/careplan',f+'.js'),'utf8'),c,{filename:f});
vm.runInContext(fs.readFileSync(path.join(ROOT,'apa-core.js'),'utf8'),c);
c.window.APA=c.APA;
vm.runInContext(fs.readFileSync(path.join(ROOT,'careplan.js'),'utf8'),c);
const D=c.window.CP_COACH,T=c.window.CP_TEST;
const all=[...Object.values(D.profiles),...Object.values(D.templates),...c.window.CP_SYSTEMS.map(s=>D.systemProfile(s[0],false)),...['sbar1','sbar2','sbar3'].flatMap(s=>['S','B','A','R'].map(k=>D.sbProfile(s,k)))];
for(const p of all){
 const ids=p.fields.map(f=>f.id);assert.equal(new Set(ids).size,ids.length,p.title+' duplicate facts');
 for(const f of p.fields)assert(f.label&&f.question&&f.from,p.title+' missing specific guidance');
 for(const pattern of p.patterns||[])for(const m of pattern.matchAll(/\{(\w+)\}/g))assert(ids.includes(m[1]),p.title+' unknown slot '+m[1]);
 assert.equal(W.assemble(p,{}).text,'',p.title+' must not invent an answer');
}
const respiratory=D.systemProfile('resp',false);
let r=W.assemble(respiratory,{reported:'dyspnea with walking',observed:'SpO₂ 93% on 2 L/min via nasal cannula; RR 24/min',context:'1005, after walking to the chair'});
assert(r.text.includes('SpO₂ 93% on 2 L/min via nasal cannula; RR 24/min'));
assert(!/clear|denies|unlabored|normal|alert/.test(r.text));
assert(!r.text.includes('Action / follow-up:'));
assert(!W.assemble(respiratory,{observed:'SpO₂ 93%'}).text,'Do not silently omit time/context in an observation sentence');
assert.deepEqual(Array.from(W.assemble(D.profiles.cc,{symptom:'nausea'}).missing),['source']);
r=W.assemble(D.profiles.q4,{kind:'risk',label:'Risk for infection',cause:'disruption of skin integrity',cues:'red incision'});
assert(!r.text.includes('as evidenced by'));assert(r.unused.includes('cues'));
assert.equal(W.assemble(D.profiles.q4,{kind:'problem',label:'Acute pain',cause:'physical injury'}).text,'');
assert.equal(W.assemble(D.templates.goal,{action:'walk to the chair',criterion:'with one-person assistance'}).text,'');
const inserted=W.append('Existing patient answer.','New patient wording.');
assert.equal(inserted.after,'Existing patient answer.\nNew patient wording.');
assert(!W.append(inserted.after,'New patient wording.').changed);
assert.equal(W.undo(inserted.after,inserted),inserted.before);
assert.equal(W.undo(inserted.after+' Later edit.',inserted),null,'Undo must preserve later edits');
assert(W.review('Patient is noncompliant and stable.',{}).some(x=>x.code==='neutral'));
assert(W.review('This supports monitoring.',{cite:true}).some(x=>x.code==='citation'));
assert(!W.review('This supports monitoring (Author, 2026).',{cite:true}).some(x=>x.code==='citation'));

// Exercise actual markup with a saved plan, abnormal lab, and several intervention rows.
T.set('info.initials','T.Q.');T.set('cc','Patient reports nausea since 0700.');
T.set('plan',[{c:'00132',rfx:'physical injury',aex:'reports pain 6/10',iv:[['A','Assess pain at 1100.','To evaluate the current response.','(Author, 2026)'],['T','Teach the agreed comfort measure.','To support participation.','']],ev:{s:'partly',d:'Pain 4/10 at 1100.'}}]);
T.set('fe.0.lab','k');T.set('fe.0.hl','Low');T.set('labs.k.c','3.2');
const markup=T.formMarkup(),stack=[],units=new Set(),paths=new Set();let fieldCount=0;
for(const m of markup.matchAll(/<\/?([a-zA-Z][\w-]*)\b([^>]*?)>/g)){
 const tag=m[1].toLowerCase(),closing=m[0][1]==='/',attrs=m[2],u=/\bdata-cp-unit="([^"]+)"/.exec(attrs),p=/\bdata-p="([^"]+)"/.exec(attrs);
 if(closing){const i=stack.map(x=>x.tag).lastIndexOf(tag);if(i>=0)stack.splice(i);continue;}
 if(u){assert(!units.has(u[1]),'Duplicate field unit '+u[1]);assert(!stack.some(x=>x.unit),'Nested focused unit '+u[1]);units.add(u[1]);}
 if(p){fieldCount++;paths.add(p[1]);assert(u||stack.some(x=>x.unit),'Saved field outside focused workspace: '+p[1]);}
 if(!['input','br','hr','img','meta','link','wbr'].includes(tag))stack.push({tag,unit:u&&u[1]});
}
for(const id of ['q1','q2','q3','q4','q5','q6','q7','rat1','vsrat1','asrat1','sys1.resp','sys2.resp','sbar1.S','sbar2.R','sbar3.R','labs.k','fe.0.cause','plan.0.stg','plan.0.iv.0','plan.0.ev'])assert(units.has(id),'Missing unit '+id);
for(const key of ['plan.0.iv.0.1','plan.0.iv.0.2','plan.0.iv.0.3','plan.0.ev.s','fe.0.lab','labs.k.r','sbar3.R','sys2.skin'])assert(paths.has(key),'Missing original answer '+key);
const before=T.plainText();T.set('_coach',{'q1::q1':{facts:{support:'PRIVATE ROUGH NOTES'},draft:'PRIVATE DRAFT'}});T.set('_workspace',{active:'q1'});
assert.equal(T.plainText(),before,'Private rough notes and navigation must stay out of the submitted form');
assert(T.docx().length>1000,'Word export still generates');
const page=fs.readFileSync(path.join(ROOT,'Care Plan Helper.html'),'utf8');
for(const f of ['data/careplan/coach.js','careplan-words.js','careplan-workspace.js'])assert(page.includes(f+'?v='),'Page must load '+f);
assert(page.indexOf('careplan.js?')<page.indexOf('careplan-workspace.js?'),'Core initializes before workspace');
console.log(`✓ care plan workspace: ${all.length} guidance profiles; ${units.size} focused fields cover ${fieldCount} original controls; fact-only drafts, safe insertion/undo and private-notes export checks pass`);
