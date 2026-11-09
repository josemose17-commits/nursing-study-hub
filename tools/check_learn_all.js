const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.join(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8'),clone=x=>JSON.parse(JSON.stringify(x));
const C=require('../learn-core'),S=require('../study-studio'),H=require('../hypo-lab');
const source=files=>{const c=vm.createContext({window:{}});files.forEach(f=>vm.runInContext(read(f),c));return clone(c.window);};
const old=source(['data/e3/lessons.js','data/e3/info-topics.js']);
const e2=source(['data/info-topics.js']);
const catalog=require('./learn-catalog');
const counts={e1:25,e2:26,e4:27,e5:23,final:83},keys=new Set();
let total=0,questions=0,activities=0;
for(const [exam,count]of Object.entries(counts)){
 const d=source(['data/learn/'+exam+'.js']).LEARN_DATA,{lessons,config,studios}=d;
 assert.equal(lessons.length,count);assert.equal(new Set(lessons.map(l=>l.id)).size,count);
 assert(!keys.has(config.key));keys.add(config.key);
 assert(read(config.page).includes('data/learn/'+exam+'.js'));
 assert(read('index.html').includes('href="'+config.page+'"'));
 const allowed=exam==='final'?new Set(old.INFO_TOPICS.map(t=>t.id)):exam==='e2'?new Set(e2.INFO_TOPICS.map(t=>t.id)):new Set();
 if(config.mhPrefix){
  const dir=exam==='e1'?'e1':exam==='e4'?'mh':'mh5';
  const b=source(['data/'+dir+'/topics.js',...fs.readdirSync(path.join(root,'data',dir)).filter(f=>f.startsWith('cond-')).map(f=>'data/'+dir+'/'+f),'data/'+dir+'/questions.js']);
  const routes=b.MH_TOPICS.map(t=>'t-'+t.id).concat(b.MH_CONDS.map(t=>'c-'+t.id));
  const expected=b.MH_TOPICS.flatMap(t=>catalog.topicLessons?.[exam]?.[t.id]?.map(part=>part.id)||['t-'+t.id]).concat(b.MH_CONDS.map(t=>'c-'+t.id));
  assert.deepEqual(lessons.map(l=>l.id).sort(),expected.sort());routes.forEach(id=>allowed.add(id));
 }
 const allNotes=new Set(lessons.flatMap(l=>l.notes));
 assert.deepEqual([...allNotes].sort(),[...allowed].sort(),exam+' authored source section coverage');
 S.configure(studios,H);
 for(const l of lessons){
  assert(l.why.length>=2&&l.checks.length>=2&&l.source);if(l.recallAnswers)assert(l.recallAnswers.length===l.checks.length&&l.recallAnswers.every(Boolean));
  assert(config.chapters.includes(l.ch));assert((l.chapters||[l.ch]).every(ch=>config.chapters.includes(ch)));
  assert(l.notes.length&&l.notes.every(n=>allowed.has(n)));
  assert(l.questions.length>=2);assert.equal(new Set(l.questions.map(q=>q.id)).size,l.questions.length);
  for(const q of l.questions){
   assert(q.q&&q.o.length>=2&&q.o.length===q.r.length);
   assert(q.r.every(r=>r.trim()));assert(q.a.length&&new Set(q.a).size===q.a.length);
   assert(q.a.every(i=>Number.isInteger(i)&&i>=0&&i<q.o.length));
   assert(C.grade(q,q.a));assert(!C.grade(q,[]));
   const wrong=q.o.findIndex((_,i)=>!q.a.includes(i));if(wrong>=0)assert(!C.grade(q,q.a.concat(wrong)));
   const state=C.blank();state.lessons[l.id]={attempts:l.questions.indexOf(q)};const t=C.start(state,l,1000000,()=>0);t.stage='apply';t.picks=q.a;t.checks=l.checks.map(()=>true);
   assert(C.finish(state,l,1000001));assert(t.correct&&t.recalled);assert.equal(state.lessons[l.id].delayedPasses,undefined);
   assert(!C.finish(state,l,1000002),'duplicate submission');
   assert(C.restore(JSON.stringify(state),lessons).session.correct);
  }
  const lab=S.get(l.id);assert(lab&&lab.visual.cards.length>=3&&lab.sources&&lab.terms);assert(lab.sources.every(s=>/^https:\/\/\S+$/.test(s.url)));
  const list=S.steps(l.id);assert(list.length>=2);let s=S.blank(l.id);
  for(let i=0;i<list.length;i++){
   const st=list[i];
   if(l.id==='hypoglycemia'){const bad=st.options.find(o=>!o[2]),good=st.options.find(o=>o[2]);s=S.choose(l.id,s,bad[0]);assert.equal(S.next(l.id,s).step,i);s=S.choose(l.id,S.retry(l.id,s),good[0]);
   }else if(st.kind==='reflect'){
    assert.equal(S.choose(l.id,s,'covered').feedback,null,'no self-credit before reveal');
    assert(!S.practiceHtml(l.id,s).includes(st.answer));
    s=S.reveal(l.id,s);assert(S.practiceHtml(l.id,s).includes(S.reveal?st.answer.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])):st.answer));
    s=S.choose(l.id,s,'again');assert(S.practiceHtml(l.id,s).includes(st.options.find(o=>o.id==='again').why),'Show the reflection retry explanation');assert.equal(S.next(l.id,s).step,i);s=S.retry(l.id,s);assert(!s.revealed);s=S.reveal(l.id,s);s=S.choose(l.id,s,'covered');assert(S.practiceHtml(l.id,s).includes(st.options.find(o=>o.id==='covered').why),'Show the reflection success explanation');assert(!S.practiceHtml(l.id,s).includes('<p>false</p>'));
   }else if(st.kind==='choice'){
    const wrong=st.options.find(o=>!o.correct),correct=st.options.find(o=>o.correct);assert(correct);
    if(wrong){s=S.choose(l.id,s,wrong.id);assert.equal(S.next(l.id,s).step,i);s=S.retry(l.id,s);}
    s=S.choose(l.id,s,correct.id);
   }else if(st.kind==='order'){
    s.order=st.items.map((_,i)=>i);s=S.checkOrder(l.id,s);
   }else throw Error('Unknown activity '+st.kind);
   s=S.next(l.id,s);assert.equal(s.step,i+1);s=S.restore(l.id,clone(s));
  }
  assert(s.complete);assert(!S.overviewHtml(l.id).includes('undefined'));
  assert(S.overviewHtml(l.id).includes(config.map));
  assert(S.strategyHtml(l.id).length>200);
 }
 if(exam==='final')for(const original of old.EXAM3_LESSONS.lessons){const copied=lessons.find(l=>l.id===original.id);assert.deepEqual(copied.questions,original.questions,'Exam 3 reused graded item changed');assert.deepEqual(copied.requires,original.requires);}
 const state=C.blank(),l=lessons[0],other=lessons[1],q=l.questions[0];
 let t=C.start(state,l,1000,()=>0);t.stage='apply';t.picks=[];t.checks=l.checks.map(()=>false);C.finish(state,l,1001);
 const firstMiss=l.id+':0';assert.equal(C.missEntries(state,lessons).length,1);
 assert.deepEqual(state.misses.items[firstMiss].recall,l.checks.map((_,i)=>i));
 // A later correct attempt at another variant must not hide an older miss.
 state.session=null;t=C.start(state,l,2000,()=>0);assert.equal(t.variant,1);t.stage='apply';t.picks=l.questions[1].a;t.checks=l.checks.map(()=>true);C.finish(state,l,2001);
 assert.equal(C.missEntries(state,lessons).length,1);
 // Preserve a different paused lesson while repairing this exact older variant.
 state.session=null;C.start(state,other,3000);state.session.draft='Keep this explanation';
 t=C.retryMiss(state,l,0,3001,()=>0);assert.equal(t.variant,0);assert.equal(t.stage,'recall');assert(!t.eligible);
 assert.equal(state.drafts[other.id].draft,'Keep this explanation');
 t.stage='apply';t.picks=q.a;t.checks=l.checks.map(()=>true);C.finish(state,l,3002);
 assert.equal(C.missEntries(state,lessons).length,0);assert.equal(C.missEntries(state,lessons,true).length,1);
 const restored=C.restore(JSON.stringify(state),lessons);assert.equal(C.missEntries(restored,lessons,true).length,1);
 assert.equal(C.missEntries(restored,[other],true).length,0,'chapter scope must restrict miss queue');
 assert.equal(C.recommend(C.blank(),[other],d.weights,4000).lesson.id,other.id);
 // Recover retained old misses, distinguish unknown recall details and ignore bad source IDs.
 const historic={version:1,lessons:{[l.id]:{history:[{at:10,variant:0,correct:false,recalled:false},{at:20,variant:1,correct:true,recalled:true}]}},session:null};
 const migrated=C.restore(JSON.stringify(historic),lessons);assert(migrated.misses.items[firstMiss].recallUnknown);assert.deepEqual(migrated.misses.items[firstMiss].recall,[]);
 const round=C.restore(JSON.stringify(migrated),lessons);assert.deepEqual(round.misses,migrated.misses);
 round.selectedChapters=[];assert.deepEqual(C.restore(JSON.stringify(round),lessons).selectedChapters,[]);
 total+=count;questions+=lessons.reduce((n,l)=>n+l.questions.length,0);activities+=studios.labs.reduce((n,l)=>n+l.steps.length,0)+(exam==='final'?6:0);
 console.log(config.label+': source coverage, '+count+' lessons, all checkpoints and coached paths, saved state and cumulative-miss repair passed.');
}
const f=source(['data/learn/final.js']).LEARN_DATA;
assert(f.config.gaps.includes('1, 2, 4, 7, 8, 10, 11 and 12'));
assert(f.lessons.find(l=>l.id==='acute-pancreatitis').clinicalUpdate.includes('72 hours'));
assert(!JSON.stringify(f.studios.labs.find(l=>l.id==='acute-pancreatitis')).includes('NPO → rests pancreas'));
const d=source(['data/word-parts.js']).WORD_PARTS_DATA.terms;
assert(!read('data/learn/e5.js').includes('fever above 103'));
assert.equal(d.psychosis.pieces.map(p=>p.text).join('/'),'psych/osis');assert.equal(d.lorazepam.type,'drug-stem');assert.equal(d.clozapine.type,'medication');
assert(read('nav.js').includes("Learn: 'Final Learn.html'"));
console.log(total+' new lessons / '+questions+' rotating graded checkpoints / '+activities+' coached activities. Exam 3 graded items, exact miss variants, source links, honest scope and vocabulary distinctions retained.');
