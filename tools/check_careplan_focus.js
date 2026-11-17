#!/usr/bin/env node
// Relevance means the active syllabus field, not an inferred patient diagnosis.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const ROOT=path.resolve(__dirname,'..'),F=require('../careplan-focus'),W=require('../careplan-words');
const entries=new Map(),c={window:{},document:{querySelector:()=>null,querySelectorAll:()=>[],addEventListener(){}},localStorage:{getItem:k=>entries.get(k)||null,setItem:(k,v)=>entries.set(k,v)},setTimeout:()=>0,clearTimeout(){},TextEncoder,Uint8Array,ArrayBuffer,DataView,Date,console};
vm.createContext(c);
for(const name of ['nanda-index','nanda-guides','form','labs','simple','include','questions','coach','guidance'])vm.runInContext(fs.readFileSync(path.join(ROOT,'data/careplan',name+'.js'),'utf8'),c);
vm.runInContext(fs.readFileSync(path.join(ROOT,'apa-core.js'),'utf8'),c);c.window.APA=c.APA;
vm.runInContext(fs.readFileSync(path.join(ROOT,'careplan.js'),'utf8'),c);
const T=c.window.CP_TEST,D=c.window.CP_COACH,plain=v=>JSON.parse(JSON.stringify(v));
function focus(p,id,dest=id){return F.profile(p,{id,path:dest,get:T.get,diagnoses:T.DX});}
function visible(p,facts={}){return Array.from(F.visible(p,facts,T.get),f=>f.id);}
function draft(p,facts){return W.assemble(p,F.facts(p,facts,T.get));}
for(const id of ['rel1','vsrel1','asrel1','vsrel2','pmhmeds','q3','e1']){
 const p=focus(D.profiles[id],id),old=plain(D.profiles[id]);
 assert(p.fields.length<D.profiles[id].fields.length,id+' must shed neighboring-field prompts');
 assert.deepEqual(plain(D.profiles[id]),old,'Do not mutate legacy profiles');
 for(const pattern of p.patterns)for(const m of pattern.matchAll(/\{(\w+)\}/g))assert(p.fields.some(f=>f.id===m[1]));
 assert.equal(draft(p,{}).text,'');
}
const q4=focus(D.profiles.q4,'q4');
assert.deepEqual(visible(q4),['kind','label']);
assert.deepEqual(visible(q4,{kind:'risk'}),['kind','label','cause']);
assert.deepEqual(visible(q4,{kind:'promo'}),['kind','label','cues']);
assert.deepEqual(visible(q4,{kind:'problem'}),['kind','label','cause','cues']);
assert(!draft(q4,{kind:'risk',label:'Risk for infection',cause:'disruption of skin integrity',cues:'OLD INAPPLICABLE CUES'}).text.includes('CUES'));
assert(draft(q4,{kind:'promo',label:'Readiness for enhanced health knowledge',cause:'OLD UNRELATED FACTOR',cues:'expresses desire to learn'}).text.includes('expresses desire'));
assert(!draft(q4,{kind:'promo',label:'Readiness for enhanced health knowledge',cause:'OLD UNRELATED FACTOR',cues:'expresses desire to learn'}).text.includes('FACTOR'));
const psh=focus(D.profiles.psh,'psh');assert(!visible(psh).includes('effects'));assert(!visible(psh,{procedure:'None reported'}).includes('effects'));assert(visible(psh,{procedure:'Appendectomy, year unknown'}).includes('effects'));
const resp=focus(D.systemProfile('resp',false),'sys1.resp');
assert.deepEqual(visible(resp),['reported','observed','context']);
assert(!draft(resp,{observed:'RR 20/min',context:'1100 on room air',performed:'OLD CARE ACTION',plan:'OLD PLAN'}).text.includes('OLD'));
for(const s of ['sbar1','sbar2','sbar3'])for(const part of ['S','B','A','R']){
 const p=focus(D.sbProfile(s,part),s+'.'+part);assert(p.fields.length>=3&&p.fields.length<=4);assert.equal(draft(p,{}).text,'');
 if(part==='B')assert(!p.fields.some(f=>f.id==='time'),'Pending-task follow-up belongs in Recommendation');
}
T.set('orders',[['Verified oxygen order','','']]);
const rationale=focus(D.templates.orderRationale,'orders.0','orders.0.1');
assert(!visible(rationale).includes('order'));assert.equal(F.context(rationale,T.get).order,'Verified oxygen order');
assert(draft(rationale,{order:'STALE ORDER',mechanism:'entered explanation'}).text.includes('Verified oxygen order'));
assert(!draft(rationale,{order:'STALE ORDER',mechanism:'entered explanation'}).text.includes('STALE'));
const sig=F.signature(rationale,T.get);T.set('orders.0.0','Changed order');assert.notEqual(F.signature(rationale,T.get),sig,'Related-answer changes invalidate insertion context');
T.set('plan',[{c:'00132',iv:[['A','Assess the reported pain','','']],ev:{s:'partly'}}]);
const iv=focus(D.templates.interventionRationale,'plan.0.iv.0','plan.0.iv.0.2');
assert.deepEqual(visible(iv),['mechanism','patient']);assert(!draft(iv,{mechanism:'entered rationale',citation:'OLD CITATION'}).text.includes('OLD CITATION'));
const ev=focus(D.templates.evaluation,'plan.0.ev','plan.0.ev.d');assert.deepEqual(visible(ev),['time','data']);
assert(!draft(ev,{time:'1100',data:'pain 4/10',next:'UNRELATED NEXT PLAN'}).text.includes('NEXT PLAN'));assert(draft(ev,{time:'1100',data:'pain 4/10'}).text.includes('partly met'));
const risk=Object.values(T.DX).find(d=>d.t==='risk');T.set('plan.0.c',risk.c);T.set('plan.0.rfx','patient-specific risk factor');T.set('plan.0.aex','OLD ACTUAL SYMPTOMS');
const stmt=focus(D.profiles.q4,'plan.0.stmt');assert.deepEqual(visible(stmt),[]);assert(!F.context(stmt,T.get).cues);assert(!draft(stmt,{}).text.includes('SYMPTOMS'));

// Missing-field worksheet does not repeat completed answers or ask every age's interview.
let sheet=plain(T.interviewList());assert(sheet.every(e=>e.target&&e.d.them.length===1));assert.equal(new Set(sheet.map(e=>e.target)).size,sheet.length);
assert(!sheet.some(e=>e.target.startsWith('erik.')),'Without age, ask for age rather than all life stages');
assert(!sheet.some(e=>e.target==='fe.0.cause'),'Choose a result before questions about its cause');
T.set('cc','Saved chief complaint.');T.set('info.age','72');T.set('fe.0.lab','k');T.set('fe.0.rel','Saved relevance.');
sheet=plain(T.interviewList());assert(!sheet.some(e=>e.target==='cc'));assert(sheet.some(e=>e.target==='erik.a'));assert(sheet.some(e=>e.target==='fe.0.cause'));assert(!sheet.some(e=>e.target==='fe.0.rel'));
T.set('meds',[['Verified med','Verified order','Verified class','Confirmed indication','Verified checks']]);sheet=plain(T.interviewList());assert(!sheet.some(e=>e.target==='pmhmeds'),'Completed links already answer the relationship field');
T.set('fe',[{},{}]);let markup=T.formMarkup();assert(!markup.includes('data-p="fe.0.cause"'));T.set('fe.0.cause','Saved work without a selected lab');markup=T.formMarkup();assert(markup.includes('Saved work without a selected lab'),'Do not hide older partial work');
T.set('labs.k.c','3.2 mEq/L, specimen 0830');const lab=focus(D.templates.lab,'labs.k','labs.k.s');assert(!visible(lab).includes('trend'));assert(F.context(lab,T.get).trend.includes('3.2 mEq/L'));
const before=T.plainText();T.set('_coach',{'q4::q4':{facts:{cues:'PRIVATE OLD FACT'},draft:'PRIVATE DRAFT'}});assert.equal(T.plainText(),before);assert(T.docx().length>1000);assert(T.interviewDocx().length>1000);
const page=fs.readFileSync(path.join(ROOT,'Care Plan Helper.html'),'utf8');assert(page.indexOf('careplan-focus.js?')<page.indexOf('careplan-inline.js?'));assert(page.includes('Questions for unfinished fields (Word)'));
console.log('✓ Care-plan relevance: field-specific prompts, conditional diagnosis/history follow-ups, verified-context reuse, stale-context detection, focused unfinished-field sheet, retained drafts and full syllabus exports.');
