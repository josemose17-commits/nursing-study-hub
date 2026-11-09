const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),cp=require('node:child_process'),path=require('node:path');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8'),clone=x=>JSON.parse(JSON.stringify(x));
const ledger=JSON.parse(read('audit/mh-question-clarifications.json')),BASE=ledger.baseline;
const old=f=>cp.execFileSync('git',['show',BASE+':'+f],{cwd:root,encoding:'utf8',maxBuffer:20e6});
function load(text,key){const c=vm.createContext({window:{}});vm.runInContext(text,c);return clone(c.window[key]);}
const C=require('../learn-core'),S=require('../study-studio'),G=require('../data/mh/study-guide');
const changed=new Map(ledger.items.map(x=>[x.id,x.fields]));
const fieldChanged=(id,field)=>(changed.get(id)||[]).includes(field);
let count=0,choices=0,orders=0;
for(const exam of ['e4','e5']){
 const d=load(read('data/learn/'+exam+'.js'),'LEARN_DATA'),before=load(old('data/learn/'+exam+'.js'),'LEARN_DATA');
 const active=d.lessons.filter(l=>l.active),expected=exam==='e4'?G.lessonIds:before.lessons.map(l=>l.id);
 assert.deepEqual(active.map(l=>l.id).sort(),expected.slice().sort());
 assert.equal(d.config.key,before.config.key);assert.deepEqual(d.config.chapters,before.config.chapters);
 assert.deepEqual(d.lessons.map(l=>l.id),before.lessons.map(l=>l.id),'Lesson identities and order remain stable');
 S.configure(d.studios);
 for(const prior of before.lessons){
  const l=d.lessons.find(x=>x.id===prior.id),lab=S.get(l.id),oldLab=before.studios.labs.find(x=>x.id===prior.id);
  for(const f of ['requires','notes','chapters'])assert.deepEqual(l[f],prior[f],l.id+'/'+f);
  assert.equal(l.checks.length,prior.checks.length,'Recall positions stay stable');
  if(l.recallDomains)assert.deepEqual(l.recallDomains,['cues and mechanism','priority and actions','evaluation']);else assert.deepEqual(l.checks,prior.checks);
  assert.equal(l.questions.length,prior.questions.length);
  for(let i=0;i<prior.questions.length;i++){
   const q=l.questions[i],p=prior.questions[i];
   for(const f of ['id','sourceId','a','selectCount','ex'])assert.deepEqual(q[f],p[f],l.id+'/'+f+' at '+i);
   assert.equal(q.o.length,p.o.length);
   q.o.forEach((o,j)=>{if(!fieldChanged(q.id,'opts['+j+']'))assert.equal(o,p.o[j]);});
   if(!fieldChanged(q.id,'stem'))assert.equal(q.q,p.q);
   if(!changed.has(q.id)){assert.deepEqual(q.r,p.r);assert.equal(q.phys,p.phys);}
  }
  // Restore a real old attempt, due review, miss, selected chapter and paused draft.
  const state=C.blank();let t=C.start(state,prior,1000,()=>0);t.stage='apply';t.picks=[];t.checks=prior.checks.map(()=>false);C.finish(state,prior,1001);
  state.session=null;t=C.start(state,prior,2000,()=>0);t.stage='recall';t.draft='Keep my own clinical reasoning';state.selectedChapters=[prior.ch];
  const saved=JSON.stringify(state),restored=C.restore(saved,d.lessons);
  assert.deepEqual(restored,C.restore(saved,before.lessons),'Saved state changed on content load: '+l.id);
  assert.equal(restored.session.draft,'Keep my own clinical reasoning');
  const m=C.missEntries(restored,d.lessons)[0];assert(m&&m.lesson===l.id&&m.variant===0);
  if(!l.active){assert.deepEqual(l,prior);assert.deepEqual(lab,oldLab);continue;}
  count++;
  assert.equal(l.why.length,3);assert(l.why.join(' ').split(/\s+/).length<240,'Concise explanation: '+l.id);
  assert(l.patient.length>35);assert(lab.visual.cards.length>=3&&lab.visual.cards.length<=4);
  assert(lab.visual.cards.every(x=>x.title&&x.text.length>8));assert(lab.steps.length>=2);
  assert(lab.sources.every(x=>x.title&&/^https:\/\//.test(x.url)));
  // Concise overviews must not discard detailed chapter sections.
  assert.deepEqual(lab.sourceSections.map(s=>({id:s.id,titles:s.blocks.map(b=>b.title)})),oldLab.sourceSections.map(s=>({id:s.id,titles:s.blocks.map(b=>b.title)})));
  const overview=S.overviewHtml(l.id);assert(overview.includes('The nursing reasoning'));assert(overview.includes('Words, full chapter detail &amp; sources'));assert(!overview.includes('undefined'));
  const legacy={step:oldLab.steps.length,feedback:null,attempts:[{step:'old-step',choice:'covered',correct:true}],complete:true,order:[],revealed:true};
  const migrated=S.restore(l.id,legacy);assert.equal(migrated.step,0);assert.equal(migrated.complete,false);assert.equal(migrated.feedback,null);assert.deepEqual(migrated.previous.attempts,legacy.attempts);
  let s=S.blank(l.id);
  for(let i=0;i<lab.steps.length;i++){
   const st=lab.steps[i];assert(st.scene&&st.task&&st.hint);
   assert(!l.questions.some(q=>q.q===st.scene||q.q===st.task),'Coaching must differ from independent question');
   if(st.kind==='choice'){
    choices++;assert.equal(st.options.length,3);assert.equal(st.options.filter(o=>o.correct).length,1);
    assert(st.options.every(o=>o.text&&o.why&&o.why.length>25));
    assert.equal(new Set(st.options.map(o=>o.why)).size,3,'Option-specific feedback: '+st.id);
    for(const bad of st.options.filter(o=>!o.correct)){
     const attempt=S.choose(l.id,clone(s),bad.id);assert.equal(S.next(l.id,attempt).step,i);assert(S.practiceHtml(l.id,attempt).includes(bad.why.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')));
     assert.equal(S.restore(l.id,clone(attempt)).feedback,bad.id);assert.equal(S.retry(l.id,attempt).feedback,null);
    }
    s=S.choose(l.id,s,st.options.find(o=>o.correct).id);assert(S.practiceHtml(l.id,s).includes('Why the other choices do not fit'));
   }else if(st.kind==='order'){
    orders++;assert(st.items.length>=3);s=S.checkOrder(l.id,s);assert.equal(S.next(l.id,s).step,i);s=S.retry(l.id,s);s.order=st.items.map((_,j)=>j);s=S.checkOrder(l.id,s);
   }else throw Error('Active practice needs an objective decision or sequence: '+st.id);
   s=S.next(l.id,s);assert.equal(s.step,i+1);assert.deepEqual(S.restore(l.id,clone(s)),s,'New activity resumes at its own revision');
  }
  assert(s.complete);
 }
}
// Every map question keeps its identity/key; only the audited fields may change.
const oldQ=load(old('data/mh5/questions.js'),'MH_Q'),newQ=load(read('data/mh5/questions.js'),'MH_Q');
assert.deepEqual(newQ.map(q=>q.id),oldQ.map(q=>q.id));
for(const p of oldQ){const q=newQ.find(x=>x.id===p.id);assert.deepEqual(q.a,p.a);assert.equal(q.opts.length,p.opts.length);assert.equal(q.link,p.link);assert.equal(q.wk,p.wk);if(!changed.has(q.id))assert.deepEqual(q,p);}
assert.equal(new Set(ledger.items.map(x=>x.id)).size,14);
assert.equal(count,39);assert.equal(choices,78);assert.equal(orders,2);
// Use the actual Learn renderer: a shared MH rationale appears once, followed
// by this item's format rather than an unrelated coached example.
const uiData=load(read('data/learn/e5.js'),'LEARN_DATA'),uiLesson=uiData.lessons.find(l=>l.id==='c-alcohol');S.configure(uiData.studios);
const uiState=C.blank(),attempt=C.start(uiState,uiLesson,1000,()=>0);attempt.stage='apply';attempt.picks=[uiLesson.questions[0].a[0]];attempt.checks=uiLesson.checks.map(()=>false);C.finish(uiState,uiLesson,1001);
const el={innerHTML:'',addEventListener(){},insertAdjacentHTML(_,html){this.innerHTML=html+this.innerHTML;}};
const saved=JSON.stringify(uiState),store={getItem:k=>k===uiData.config.key?saved:null,setItem(){}};
vm.runInContext(read('learn.js'),vm.createContext({window:{LEARN_DATA:uiData,Exam3Learn:C,Exam3Studio:S,addEventListener(){}},document:{getElementById:()=>el},localStorage:store,location:{hash:'#c-alcohol',pathname:'/Exam 5 Learn.html',search:''},Date,console}));
assert(el.innerHTML.includes('Evaluate each option independently'));assert(!el.innerHTML.includes('What should guide monitoring?'));
const escape=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
assert.equal(el.innerHTML.split(escape(uiLesson.questions[0].phys)).length-1,1,'Show the common rationale once');
for(const f of ['learn-core.js','data/e3/lessons.js','data/e3/studios.js','data/learn/e1.js','data/learn/e2.js','data/learn/final.js'])assert.equal(read(f),old(f),'Outside-path/scoring preservation: '+f);
assert(!read('data/mh5/cond-substance.js').includes('thiamine before glucose'));
assert(!read('data/mh5/cond-substance.js').includes('outlasted the opioid'));
assert(!read('data/mh5/topics.js').includes('All antipsychotics block'));
console.log('✓ 39 curated lessons; 78 choices + 2 sequences; all wrong/correct paths, revision-safe rehearsal, full section headings, prior progress/misses/drafts/reviews and stable answer indices verified; 14 audited question clarifications.');
