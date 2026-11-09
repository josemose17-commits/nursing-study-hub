#!/usr/bin/env node
// Chapter coverage, focused lesson integrity and optional pre-release preservation checks.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),cp=require('node:child_process');
const root=path.join(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8'),clone=x=>JSON.parse(JSON.stringify(x));
const load=files=>{const ctx=vm.createContext({window:{}});for(const f of files)vm.runInContext(read(f),ctx,{filename:f});return clone(ctx.window);};
const files=['data/mh/topics.js','data/mh/drills.js','data/mh/questions.js','data/mh/cond-mood.js','data/mh/cond-safety.js','data/mh/cond-anxiety.js','data/mh/cond-trauma.js'];
const b=load(files),t=b.MH_TOPICS.find(t=>t.id==='groups'),parts=require('./learn-groups34'),custom=require('./learn-questions');
const d=load(['data/learn/e4.js']).LEARN_DATA,lessons=d.lessons.filter(l=>l.ch==='34');
assert(t&&t.week===11&&t.ch==='Chapter 34');assert.equal(parts.length,8);assert.equal(lessons.length,8);
assert(!b.MH_CONDS.some(c=>c.id==='groups'),'Therapeutic groups are not a disorder condition');
const keyTerms=['feedback','group content','group','group norms','group phases','group process','group psychotherapy','group work','individual roles','maintenance roles','task roles','therapeutic factors','therapeutic group'];
for(const term of keyTerms)assert(t.terms.some(x=>x.t.toLowerCase()===term),'Missing chapter key term '+term);
const text=JSON.stringify(t).toLowerCase();
for(const term of ['universality','hope','altruism','imparting information','primary family group','socializing techniques','imitative behavior','interpersonal learning','cohesiveness','catharsis','existential factors','homogeneous','heterogeneous','subgroup','storming','norming','performing','information seeker','harmonizer','elaborator','energizer','information giver','opinion giver','orienter','compromiser','encourager','follower','gatekeeper','standard setter','aggressor','blocker','help seeker','recognition seeker','self-confessor','humanism','socratic','psychodynamic','educational','systems','adlerian','choice/reality','feminist','gestalt','community meetings','mindfulness','dual-diagnosis','nami','al-anon','acoa','recovery international','clearinghouse','autocratic','democratic','laissez-faire','active listening','clarification','confrontation','empathy','reflection','summarizing','countertransference','coleader','lgbtq','informed','confidentiality','hipaa','protocol','seeking safety','reminiscence','dialectical','interpersonal therapy','parent','drug–drug','drug–food'])assert(text.includes(term),'Missing named chapter concept '+term);
assert.equal(t.recall.length,10);assert(t.cards.some(c=>c.tag==='If it worsens'));
const assigned=parts.flatMap(p=>p.cards);assert.equal(assigned.length,t.cards.length);assert.equal(new Set(assigned).size,t.cards.length);
assert.deepEqual([...assigned].sort(),t.cards.map(c=>c.h).sort(),'Every teaching card belongs to exactly one focused lesson');
const qs=b.MH_Q.filter(q=>q.link==='t-groups'),drills=b.MH_DRILLS.filter(x=>x.topic==='groups');
assert.equal(qs.length,12);assert.equal(qs.filter(q=>Array.isArray(q.a)).length,3);assert.equal(drills.length,6);assert.equal(drills.reduce((n,x)=>n+x.items.length,0),50);
assert.deepEqual(qs.find(q=>q.id==='q-g34-11').a,[0,1,3],'Safety distinctions must not exclude people solely for poverty or thoughtful silence');
assert.equal(d.config.key,'e4-learn-v1');assert(d.config.chapters.includes('34'));assert(d.config.scope.includes('Chapter 34'));
const C=require('../learn-core'),S=require('../study-studio');S.configure(d.studios,require('../hypo-lab'));
for(const p of parts){
 const l=lessons.find(l=>l.id===p.id),lab=d.studios.labs.find(l=>l.id===p.id);assert(l&&lab);
 assert.deepEqual(l.notes,['t-groups']);assert.equal(l.questions.length,2);assert.equal(l.checks.length,3);assert.equal(l.recallAnswers.length,3);
 assert.deepEqual(lab.sourceSections[0].blocks.map(x=>x.title),p.cards);
 if(lab.active)assert(lab.visual.cards.length>=3&&lab.visual.cards.length<=4,'Curated overview stays concise; all section cards remain in chapter detail above');
 else assert.deepEqual(lab.visual.cards.map(x=>x.title),p.cards,'All focused teaching sections are available in the shared visual');
 for(const [i,c]of p.cards.entries())assert.equal(lab.sourceSections[0].blocks[i].lines.length,t.cards.find(x=>x.h===c).b.length);
 const coached=lab.steps.filter(s=>s.kind==='choice');if(lab.active){assert(coached.length>=2);assert.equal(lab.steps.filter(s=>s.kind==='reflect').length,0);}else{assert.equal(coached.length,1);assert.equal(lab.steps.filter(s=>s.kind==='reflect').length,2);}
 assert(!l.questions.some(q=>q.q===coached[0].scene),'Independent checkpoint must differ from the coached question');
 for(const q of l.questions){assert(C.grade(q,q.a));const wrong=q.o.findIndex((_,i)=>!q.a.includes(i));assert(!C.grade(q,[wrong]));}
 // Check a saved Chapter 34 draft, wrong decision and exact retry.
 const state=C.blank();let session=C.start(state,l,100000,()=>0);session.draft='Keep my own recall explanation';
 assert.equal(C.restore(JSON.stringify(state),d.lessons).session.draft,session.draft);
 session.stage='apply';session.checks=l.checks.map(()=>true);session.picks=[];assert(C.finish(state,l,100001));
 const entries=C.missEntries(state,lessons);assert.equal(entries.length,1);assert.equal(entries[0].lesson,l.id);
 session=C.retryMiss(state,l,0,100002,()=>0);session.stage='apply';session.checks=l.checks.map(()=>true);session.picks=l.questions[0].a;assert(C.finish(state,l,100003));assert.equal(C.missEntries(state,lessons).length,0);
 const practice=S.steps(l.id);for(const st of practice)assert(st.kind==='order'?st.items.length>=3:st.options.some(o=>st.kind==='reflect'?o.id==='covered':o.correct));
}
const cov=JSON.parse(read('audit/exam4-ch34-coverage.json'));assert.equal(cov.objectives.length,8);assert.equal(cov.review_concepts.length,10);
const ids=new Set([...parts.map(x=>x.id),...qs.map(x=>x.id),...drills.map(x=>x.id),...Object.keys(custom)]),cardSet=new Set(t.cards.map(c=>c.h));
for(const row of cov.objectives.concat(cov.additional_sections)){
 for(const id of (row.lessons||[]).concat(row.practice||[]))assert(ids.has(id),'Broken coverage reference '+id);
 for(const h of row.cards||[])assert(cardSet.has(h),'Broken coverage card '+h);
}
for(const row of cov.review_concepts)for(const id of row.target)assert(ids.has(id));
const nav=read('nav.js'),sync=nav.match(/var SYNC\s*=\s*(\/.*\/);/);if(sync)assert(!new RegExp(sync[1].slice(1,-1)).test('cp-plans'));
const baseIndex=process.argv.indexOf('--baseline');
if(baseIndex>=0){
 const ref=process.argv[baseIndex+1];assert(ref);const oldFile=f=>cp.execFileSync('git',['show',ref+':'+f],{cwd:root,encoding:'utf8',maxBuffer:20e6});
 const oldCtx=vm.createContext({window:{}});for(const f of files)vm.runInContext(oldFile(f),oldCtx);const old=clone(oldCtx.window);
 for(const key of ['MH_TOPICS','MH_DRILLS','MH_Q','MH_CONDS'])for(const item of old[key])assert.deepEqual(b[key].find(x=>x.id===item.id),item,'Existing map content changed: '+key+'/'+item.id);
 const ctx=vm.createContext({window:{}});vm.runInContext(oldFile('data/learn/e4.js'),ctx);const before=clone(ctx.window.LEARN_DATA);
 for(const l of before.lessons){const n=d.lessons.find(x=>x.id===l.id);assert(n);for(const field of ['questions','checks','requires','notes'])assert.deepEqual(n[field],l[field],'Existing checkpoint/progress contract changed: '+l.id+'/'+field);}
 for(const f of ['learn-core.js','data/learn/e1.js'])assert.equal(read(f),oldFile(f),'Protected scoring/output changed: '+f);
 console.log('Preservation check: existing Exam 4 map items and lesson grading/recall positions retained; approved teaching can be revised independently.');
}
console.log('Chapter 34: 13 required terms, all 27 cards assigned, 50 drill items, 12 map questions / 3 SATA, 8 focused lessons / 16 independent checkpoints; draft, grading and cumulative retry checks passed.');
