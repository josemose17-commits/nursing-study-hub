#!/usr/bin/env node
// Integration checks for the syllabus document and fact-only SBAR/note drafting.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const ROOT=path.resolve(__dirname,'..'),W=require(path.join(ROOT,'careplan-words.js'));
const entries=new Map(),c={window:{},document:{querySelector:()=>null,querySelectorAll:()=>[],addEventListener(){}},localStorage:{getItem:k=>entries.get(k)||null,setItem:(k,v)=>entries.set(k,v)},setTimeout:()=>0,clearTimeout(){},TextEncoder,Uint8Array,ArrayBuffer,DataView,Date,console};
vm.createContext(c);
for(const f of ['nanda-index','nanda-guides','form','labs','include','questions','coach','guidance'])vm.runInContext(fs.readFileSync(path.join(ROOT,'data/careplan',f+'.js'),'utf8'),c,{filename:f});
vm.runInContext(fs.readFileSync(path.join(ROOT,'apa-core.js'),'utf8'),c);c.window.APA=c.APA;
vm.runInContext(fs.readFileSync(path.join(ROOT,'careplan.js'),'utf8'),c);
const T=c.window.CP_TEST,D=c.window.CP_COACH,plain=o=>JSON.parse(JSON.stringify(o));

// Every SBAR part teaches a distinct purpose and retains the two old saved fact keys.
for(const s of ['sbar1','sbar2','sbar3'])for(const part of ['S','B','A','R']){
 const p=D.sbProfile(s,part),guide=D.detail(s+'.'+part,s+'.'+part,p);
 assert(p.fields.length>=3,`${s}.${part} needs specific prompts`);
 for(const key of ['content','time'])assert(p.fields.some(f=>f.id===key),'Old draft field must survive '+key);
 assert(guide.formula&&guide.why&&guide.avoid&&guide.example);
 assert.equal(W.assemble(p,{}).text,'','No fictional findings in an empty draft');
 const facts=Object.fromEntries(p.fields.map(f=>[f.id,'VALUE_'+f.id]));
 const result=W.assemble(p,facts);for(const value of Object.values(facts))assert(result.text.includes(value));
}
const receive=D.sbProfile('sbar1','A'),provider=D.sbProfile('sbar2','A');
assert(W.assemble(receive,{content:'RR 22/min at 0700'}).text.startsWith('Reported assessment:'));
assert(W.assemble(provider,{content:'RR 22/min at 1100'}).text.startsWith('Current assessment:'));
const request=W.assemble(D.sbProfile('sbar2','R'),{content:'provider review of the proposed transfer',time:'before transport'}).text;
assert(!/order received|transferred|administered/i.test(request));
assert(W.review('Continue to monitor patient closely.',D.sbProfile('sbar3','R')).some(x=>x.code==='request'));

// Actual care requires the entered time. A plan is not silently promoted to completed care.
const resp=D.systemProfile('resp',false);
let result=W.assemble(resp,{observed:'RR 22/min',context:'1100 on room air',plan:'reassess with the RN at 1130'});
assert(result.text.includes('Assessment at 1100 on room air: RR 22/min.'));
assert(result.text.includes('Planned care: reassess with the RN at 1130.'));
assert(!/Completed care|denies|clear|unlabored|alert/.test(result.text));
result=W.assemble(resp,{performed:'assigned RN repositioned the patient'});
assert.equal(result.text,'');assert(result.unused.includes('performed'));
result=W.assemble(resp,{performed:'assigned RN repositioned the patient',performedTime:'1110',response:'RR 20/min at 1120'});
assert(result.text.includes('Completed care at 1110: assigned RN repositioned the patient.'));

const revised=W.replace('Old answer.','New answer.');assert.equal(W.undo('New answer.',revised),'Old answer.');
assert.equal(W.undo('New answer. Later edit.',revised),null);assert.equal(W.replace('Keep this.','').changed,false);

// Fresh exports keep the actual blank form structure, including every lab and both F&E rows.
let outline=plain(T.outline()),tables=outline.filter(o=>o.table).map(o=>o.table);
const labs=c.window.CP_LABS.flatMap(p=>p.rows),labTables=tables.filter(t=>t.head[1]==='Normal Range');
assert.equal(labTables.length,7);assert.equal(labTables.reduce((n,t)=>n+t.rows.length,0),47);
for(const table of labTables)for(const row of table.rows)assert.deepEqual(row.slice(1),['','','',''],'Do not export an unverified default range or result');
assert.equal(tables.filter(t=>t.head.length===6).length,2,'Both fluid/electrolyte applications');
let plan=tables.find(t=>t.head[0].startsWith('Client Problem'));
assert.equal(plan.head.length,5);assert.equal(plan.head[4],'Outcome (Client centered goals)');
assert(outline.some(o=>o.kv?.some(kv=>kv[0]==='Date of Birth'&&kv[1]==='')),'DOB stays blank, never collected');

// Preserve partial row work, the original answer paths, and independent goals/evaluation.
T.set('info.initials','Q.A.');T.set('cc','Patient reports nausea beginning at 0700.');
T.set('informatics','The clinical site provides a verified medication reference.');
assert.equal(T.get('info.initials'),'Q.A.','Informatics must never overwrite client details');
assert(!T.plainText().includes('[object Object]'),'Client detail objects are not Informatics answers');
T.set('vs1.time','0700');T.set('vs2.time','1120');T.set('vs1.spo2','93% on 2 L/min nasal cannula');
T.set('meds', [['','verified partial order','','','review with RN']]);
T.set('orders',[['','A rationale already written.','Expected response.']]);
T.set('labs.k.c','3.2 mEq/L, specimen 0830');T.set('labs.k.r','Facility range verified in report');
T.set('plan',[{c:'00132',stmt:'Actual nursing statement.',stg:'Short goal.',ltg:'Long goal.',iv:[['A','Assess pain at 1100.','Rationale for assessment.','(Author, 2026)'],['T','','Partial rationale not yet linked.','']],ev:{s:'partly',d:'Actual reassessment evidence.',next:'Reassess at 1200.'}}]);
outline=plain(T.outline());tables=outline.filter(o=>o.table).map(o=>o.table);plan=tables.find(t=>t.head[0].startsWith('Client Problem'));
assert.equal(plan.rows[0][0],'Actual nursing statement.');assert(!plan.rows[0][0].includes('Short goal'));
assert(plan.rows[0][4].includes('Short goal.')&&plan.rows[0][4].includes('Long goal.'));
assert(plan.rows[0][2].includes('Partial rationale not yet linked.'));
assert(plan.rows[0][3].includes('Actual reassessment evidence.'));
assert(tables.find(t=>t.head[0]==='Physician orders').rows[0][1].includes('already written'));
assert(tables.find(t=>t.head[0]==='Medication').rows[0][1].includes('partial order'));
assert(T.plainText().includes('Assessment time: 1120'));

// Notes and examples must not leak through reference auto-selection or the submitted document.
entries.set('apa-refs',JSON.stringify([{cite:{p:'(Private Source, 2026)',n:'Private Source (2026)'},segs:[{t:'PRIVATE CITATION MUST NOT EXPORT'}]}]));
T.reloadReferences();
const normal=T.plainText();
T.set('_coach',{'q1::q1':{facts:{note:'PRIVATE ROUGH FACTS (Private Source, 2026)'},draft:'PRIVATE DRAFT'}});
T.set('_workspace',{active:'q1'});assert.equal(T.plainText(),normal);
const bytes=Buffer.from(T.docx());assert(bytes.length>1000);
function zipFiles(buf){let off=0,out={};while(buf.readUInt32LE(off)===0x04034b50){const method=buf.readUInt16LE(off+8),size=buf.readUInt32LE(off+18),nl=buf.readUInt16LE(off+26),el=buf.readUInt16LE(off+28),name=buf.subarray(off+30,off+30+nl).toString(),start=off+30+nl+el;assert.equal(method,0,'Existing local ZIP packer uses stored entries');out[name]=buf.subarray(start,start+size).toString();off=start+size;}return out;}
const xml=zipFiles(bytes),doc=xml['word/document.xml'];
assert(doc.includes('w:orient="landscape"'));assert(doc.includes('w:w="15840" w:h="12240"'));
assert(doc.includes('w:pStyle w:val="Title"'));assert(!doc.includes('w:cantSplit'),'Long answers can continue over page breaks');
assert(!/PRIVATE|J\.L\.|Fictional example/.test(doc),'Examples and rough facts never become patient answers');
assert(!/<w:trHeight[^>]+exact/.test(doc),'No clipped fixed-height answer rows');
for(const row of labs)assert(doc.includes(row.n.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')),'Missing syllabus lab '+row.n);
const page=fs.readFileSync(path.join(ROOT,'Care Plan Helper.html'),'utf8');
assert(page.indexOf('coach.js?')<page.indexOf('guidance.js?')&&page.indexOf('guidance.js?')<page.indexOf('careplan-workspace.js?'));
assert(page.includes('Save as Google Docs')&&page.includes('File upload'));
const sync=/SYNC\s*=\s*(\/.*\/)/.exec(fs.readFileSync(path.join(ROOT,'nav.js'),'utf8'));assert(!new RegExp(sync[1].slice(1,-1)).test('cp-plans'));
// Optional local rendering fixture; only this explicit flag writes a document.
if(process.argv[2]==='--docx'){const dest=process.argv[3];assert(dest);fs.writeFileSync(dest,bytes);}
entries.set('cp-plans',JSON.stringify({legacy:{f:{info:'Legacy Informatics answer.',cc:'Preserved clinical answer.',_coach:{'info::info':{draft:'Preserved legacy draft.'}},_workspace:{active:'info',targets:{info:'info'}}}}}));entries.set('cp-cur','legacy');
vm.runInContext(fs.readFileSync(path.join(ROOT,'careplan.js'),'utf8'),c);
assert.equal(c.window.CP_TEST.get('informatics'),'Legacy Informatics answer.');assert.equal(c.window.CP_TEST.get('cc'),'Preserved clinical answer.');
assert.equal(typeof c.window.CP_TEST.get('info'),'object');
assert.equal(c.window.CP_TEST.get('_coach.informatics::informatics.draft'),'Preserved legacy draft.');
assert.equal(c.window.CP_TEST.get('_workspace.active'),'informatics');
console.log('✓ care plan syllabus: 12 detailed SBAR parts; 47 lab rows; 5 care-plan columns; factual note drafting; safe revision; private drafts excluded');
