const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),cp=require('node:child_process');
const root=path.join(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),D=require('../data/e3/studios-src'),H=require('../hypo-lab'),S=require('../study-studio'),C=require('../learn-core');
const ctx=vm.createContext({window:{}});vm.runInContext(read('data/e3/studios.js'),ctx);vm.runInContext(read('data/e3/lessons.js'),ctx);
const data=JSON.parse(JSON.stringify(ctx.window.EXAM3_STUDIOS)),lessons=JSON.parse(JSON.stringify(ctx.window.EXAM3_LESSONS.lessons));S.configure(data,H);
assert.equal(data.labs.length,29);assert.equal(new Set(data.labs.map(l=>l.id)).size,29);
assert.deepEqual(data.labs.map(l=>l.id).sort(),lessons.map(l=>l.id).sort());assert.equal(new Set(data.labs.map(l=>l.guide)).size,17);
let decisions=0;
for(const l of data.labs){
 const lesson=lessons.find(x=>x.id===l.id);assert.equal(lesson.studio,l.id);assert.deepEqual(l.notes,lesson.notes);assert.equal(l.ch,lesson.ch);
 assert(l.visual.cards.length>=3);assert(l.visual.cards.every(c=>c.title&&c.text.length>5));assert(l.terms.length>=2);
 for(const key of ['title','task','cue','rule','trap'])assert(l.strategy[key].length>15,l.id+' '+key);
 assert(l.sources.length);assert(l.sources.every(s=>new URL(s.url).protocol==='https:'));assert(l.book);
 let s=S.blank(l.id);const list=S.steps(l.id);assert.equal(list.length,l.id==='hypoglycemia'?6:3);decisions+=list.length;
 for(let i=0;i<list.length;i++){
  const st=list[i];assert(st.hint||l.id==='hypoglycemia');
  if(l.id==='hypoglycemia'){
   const bad=st.options.find(o=>!o[2]),good=st.options.find(o=>o[2]);s=S.choose(l.id,s,bad[0]);assert.equal(S.next(l.id,s).step,i);s=S.choose(l.id,S.retry(l.id,s),good[0]);
  }else if(st.kind==='order'){
   s=S.checkOrder(l.id,s);assert.equal(S.next(l.id,s).step,i);s=S.retry(l.id,s);
   for(let target=0;target<st.items.length;target++){let at=s.order.indexOf(target);while(at>target){s=S.move(l.id,s,at,-1);at--;}}
   assert.deepEqual(s.order,st.items.map((_,i)=>i));s=S.checkOrder(l.id,s);
  }else{
   assert.equal(st.options.filter(o=>o.correct).length,1);assert(st.options.every(o=>o.text&&o.why.length>20));
   const bad=st.options.find(o=>!o.correct),good=st.options.find(o=>o.correct);s=S.choose(l.id,s,bad.id);assert.equal(S.next(l.id,s).step,i,'Wrong answer advanced '+st.id);
   s=S.restore(l.id,JSON.parse(JSON.stringify(s)));assert.equal(s.feedback,bad.id);s=S.choose(l.id,S.retry(l.id,s),good.id);
  }
  const n=s.attempts.length;assert.equal(S.choose(l.id,s,'c').attempts.length,n,'Duplicate submission counted');
  s=S.next(l.id,s);assert.equal(s.step,i+1);s=S.restore(l.id,JSON.parse(JSON.stringify(s)));
 }
 assert(s.complete);assert.equal(S.next(l.id,s).step,list.length);
 assert(S.overviewHtml(l.id).length>500);assert(S.strategyHtml(l.id).includes(l.strategy.title));assert(/rehears|Coached case/i.test(S.practiceHtml(l.id,s)));
 // Coached activity state persists but cannot score an independent checkpoint.
 const state=C.blank();C.start(state,lesson,1000);state.session[l.id==='hypoglycemia'?'hypoPractice':'studioPractice']=s;assert(!C.finish(state,lesson,1001));assert.deepEqual(state.lessons,{});
 const saved=C.restore(JSON.stringify(state),lessons);assert(saved.session[l.id==='hypoglycemia'?'hypoPractice':'studioPractice'].complete);
 for(let variant=0;variant<2;variant++){
  const t=C.blank();t.lessons[l.id]={attempts:variant};C.start(t,lesson,2000);t.session.stage='apply';t.session.checks=lesson.checks.map(()=>true);t.session.picks=lesson.questions[variant].a;
  assert(C.finish(t,lesson,2001));assert(t.session.correct);assert(!t.lessons[l.id].delayedPasses);
 }
 assert(S.matching(l.notes).some(x=>x.id===l.id));if(l.caseId)assert(S.matching([],l.caseId).some(x=>x.id===l.id));
}
assert.equal(decisions,90);
assert.equal(S.restore('urine',{step:0,order:[99,99],feedback:'order-correct'}).feedback,'order-retry');
assert.deepEqual(S.restore('dka',{step:-1}),S.blank('dka'));
assert(!S.matching(['50-unassigned-topic']).length);assert(!S.matching(['53-aging-and-covid-19-what-changes-in-the-g']).some(l=>/covid/i.test(l.title)));
for(const kind of ['single','sata','selectn','matrix','mmatrix','hl','cloze','bow','group','order','calc','recall'])assert(S.formatHtml(kind).length>200);
// Read the committed prior lesson bank: visual rollout must preserve all 58 graded items exactly.
const prior=cp.execFileSync('git',['show','HEAD:data/e3/lessons.js'],{cwd:root,encoding:'utf8'}),old=vm.createContext({window:{}});vm.runInContext(prior,old);
const before=JSON.parse(JSON.stringify(old.window.EXAM3_LESSONS.lessons));for(const l of lessons)assert.deepEqual(l.questions,before.find(x=>x.id===l.id).questions,'Graded bank changed: '+l.id);
assert(read('learn.js').includes("t.stage = 'understand'; t.eligible = false"));
assert(!/speechSynthesis|autoplay/.test(read('study-studio.js')));
for(const page of ['Exam 2 Mastery Loop.dc.html','Exam 3 Mastery Loop.dc.html','Final Mastery Loop.dc.html']){const x=read(page);assert(x.includes('data-study-review'));assert(x.includes('study-review-reason'));assert(x.includes('studyReason: (T.studyReview'));}
assert(!read('NCLEX Strategies.html').includes('No penalty for guessing'));
console.log('29 lessons / 17 assigned groups / 90 coached decisions / 58 unchanged graded items; all paths, retries, ordering, draft persistence, scoring separation, matching, formats and strategy checks passed.');
