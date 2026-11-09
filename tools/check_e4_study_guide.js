#!/usr/bin/env node
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),cp=require('node:child_process');
const ROOT=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(ROOT,f),'utf8'),G=require('../data/mh/study-guide'),C=require('../learn-core');
const clone=x=>JSON.parse(JSON.stringify(x));
function bank(){const c=vm.createContext({window:{}});for(const f of ['topics','questions','drills','cond-anxiety','cond-mood','cond-safety','cond-trauma','videos'])vm.runInContext(read('data/mh/'+f+'.js'),c);vm.runInContext(read('data/learn/e4.js'),c);return c.window;}
const B=bank(),all={topics:B.MH_TOPICS,conditions:B.MH_CONDS,drills:B.MH_DRILLS,questions:B.MH_Q},focus=G.select(all,'guide');
assert.deepEqual(G.chapters,['1','2','3','6','9','34']);assert(G.source.includes('Peplau’s Model of the Nurse-Patient Relationship')&&G.source.includes('Communication Skills for Nurses'));
assert.equal(focus.topics.length,9);assert.equal(focus.questions.length,43);assert.equal(focus.drills.length,14);assert.equal(focus.conditions.length,0);
assert.equal(new Set(G.questionIds).size,43);assert.deepEqual(clone(focus.questions.map(q=>q.id)).sort(),G.questionIds.slice().sort());
const fullLinks=['t-intro','t-life','t-theories','t-neuro','t-legal','t-comm','t-groups'];
const expectedQuestions=B.MH_Q.filter(q=>fullLinks.includes(q.link)).map(q=>q.id).concat(['q-e4-dsm-purpose','q-e4-nursing-response','q-rel-1','q-e4-peplau-working']);
assert.deepEqual(clone(focus.questions.map(q=>q.id)).sort(),clone(expectedQuestions).sort(),'All questions for fully assigned authored topics must remain included; mixed topics need explicit section-level mapping');
assert(!focus.questions.some(q=>q.link.startsWith('c-')));for(const id of ['q-dx-1','q-dx-2','q-dx-3','q-rel-2','q-rel-3','q-set-1','q-cult-1','q-stress-1','q-bp-1'])assert(!G.hasQuestionId(id),id+' must not enter the focused test');
const peplau=focus.topics.find(t=>t.id==='relationship');assert.equal(peplau.ch,'Chapter 9 · assigned section');assert.equal(peplau.cards.length,1);assert.equal(peplau.cards[0].h,'Peplau’s phases');assert.equal(peplau.recall.length,2);assert.equal(peplau.terms.length,0);
const dx=focus.topics.find(t=>t.id==='dx');assert(!JSON.stringify(dx).includes('Mental status exam'));assert(!JSON.stringify(dx).includes('TSH'));assert.equal(dx.terms.length,1);
assert.equal(all.topics.find(t=>t.id==='relationship').cards.length,4,'Projection must not edit the broader source topic');
assert.equal(G.select(all,'all'),all);
function storage(seed={}){const m=new Map(Object.entries(seed));return{getItem:k=>m.get(k)||null,setItem:(k,v)=>m.set(k,v),m};}
let s=storage(),store=G.createStore(s);assert.equal(store.mode(),'guide');store.set('all');assert.equal(G.createStore(s).mode(),'all');store.set('guide');assert.equal(G.createStore(s).mode(),'guide');assert.deepEqual(JSON.parse(s.getItem(G.key)).ids,G.topicIds);
store=G.createStore({getItem(){throw Error('blocked');},setItem(){throw Error('blocked');}});store.set('all');assert.equal(store.mode(),'all');assert(store.memoryOnly());

// Run the actual map engine and its event handlers with retained test history.
const history={'q-bp-1':[0],'q-comm-1':[0]},ls=storage({'e4-test':JSON.stringify(history)});
function element(){return{innerHTML:'',handlers:{},addEventListener(k,f){this.handlers[k]=f;},querySelectorAll(){return[];},scrollIntoView(){}};}
const root=element(),tabs=element(),slot=element(),events={};
const mw=bank();mw.Exam4Guide=G;mw.addEventListener=(k,f)=>events[k]=f;
const location={hash:''},ctx=vm.createContext({window:mw,localStorage:ls,location,document:{getElementById:id=>id==='cj'?root:id==='mh-tabs'?tabs:id==='e4-study-guide'?slot:null}});
vm.runInContext(read('mh.js'),ctx);
assert(root.innerHTML.includes('Exam 4 study guide'));assert(root.innerHTML.includes('data-go="t-neuro"'));assert(!root.innerHTML.includes('data-go="t-culture"'));assert(!root.innerHTML.includes('data-go="c-bipolar"'));
function mapMode(mode){slot.handlers.change({target:{matches:()=>true,value:mode}});}
function route(hash){location.hash=hash;events.hashchange();}
function click(attr,value){root.handlers.click({target:{closest(sel){return sel==='['+attr+']'?{dataset:{[attr.slice(5).replace(/-([a-z])/g,(_,x)=>x.toUpperCase())]:value}}:null;}}});}
route('#test');assert(root.innerHTML.includes('43 questions · tried 1'));assert(root.innerHTML.includes('Missed last time · 1'));click('data-set','miss');click('data-start','');assert(root.innerHTML.includes(B.MH_Q.find(q=>q.id==='q-comm-1').stem));
mapMode('all');route('#test');assert(root.innerHTML.includes('89 questions · tried 2'));assert(root.innerHTML.includes('Missed last time · 2'));
mapMode('guide');route('#t-relationship');assert(root.innerHTML.includes('Peplau’s Model of the Nurse-Patient Relationship'));assert(!root.innerHTML.includes('Boundary rules for students'));
route('#c-bipolar');assert(root.innerHTML.includes('outside your Exam 4 study-guide focus'));assert(!root.innerHTML.includes('data-test-link="c-bipolar"'),'An outside note link must not silently broaden the focused test');
assert.deepEqual(JSON.parse(ls.getItem('e4-test')),history,'Changing focus must not erase or regrade old test answers');

// The real Learn UI must scope recommendations, chapter selection and cumulative misses.
const data=clone(B.LEARN_DATA),lessons=data.lessons,guideLessons=lessons.filter(G.hasLesson);assert.equal(guideLessons.length,16);assert(guideLessons.some(l=>l.id==='t-e4-peplau'));assert(!guideLessons.some(l=>l.id==='t-dx'||l.id==='t-relationship'||l.id==='t-settings'||l.id.startsWith('c-')));
const state=C.blank();
for(const id of ['t-comm','c-bipolar']){const l=lessons.find(l=>l.id===id),t=C.start(state,l,1000,()=>0);t.stage='apply';t.picks=[l.questions[t.variant].o.findIndex((_,i)=>!l.questions[t.variant].a.includes(i))];t.checks=l.checks.map(()=>false);C.finish(state,l,1001);state.session=null;}
state.selectedChapters=['34']; // A retained old filter must not hide the newly applied preset.
const saved=JSON.stringify(state),learnLS=storage({'e4-learn-v1':saved}),el=element(),learnEvents={};el.insertAdjacentHTML=function(_,html){this.innerHTML=html+this.innerHTML;};
const lw={LEARN_DATA:data,LEARN_STUDIOS:data.studios,Exam3Learn:C,Exam4Guide:G,addEventListener:(k,f)=>learnEvents[k]=f,scrollTo(){}};
const learnCtx=vm.createContext({window:lw,localStorage:learnLS,document:{getElementById:()=>el},location:{hash:'',pathname:'/Exam 4 Learn.html',search:''},history:{pushState(){}},Date,console});
vm.runInContext(read('learn.js'),learnCtx);
assert(el.innerHTML.includes('16 selected visual lessons'));assert(el.innerHTML.includes('data-lesson="t-e4-peplau"'));assert(!el.innerHTML.includes('data-lesson="c-bipolar"'));assert(el.innerHTML.includes('data-chapter="9"'));assert(!el.innerHTML.includes('data-chapter="8"'));assert(el.innerHTML.includes('Redo recorded misses · 1'));
el.handlers.change({target:{matches:s=>s==='[data-exam-guide]',value:'all'}});assert(el.innerHTML.includes('29 selected visual lessons'));assert(el.innerHTML.includes('data-lesson="c-bipolar"'));assert(el.innerHTML.includes('Redo recorded misses · 2'));
el.handlers.change({target:{matches:s=>s==='[data-exam-guide]',value:'guide'}});assert(el.innerHTML.includes('16 selected visual lessons'));assert(el.innerHTML.includes('Redo recorded misses · 1'));
assert.deepEqual(C.restore(learnLS.getItem('e4-learn-v1'),lessons).lessons,C.restore(saved,lessons).lessons,'The focus must retain completed attempts, exact misses and review schedules');

// Existing graded meanings/positions remain stable. Only the new phase item is added.
const oldQ=vm.createContext({window:{}});vm.runInContext(cp.execFileSync('git',['show','HEAD:data/mh/questions.js'],{cwd:ROOT,encoding:'utf8'}),oldQ);
for(const q of oldQ.window.MH_Q)assert.deepEqual(clone(B.MH_Q.find(n=>n.id===q.id)),clone(q));
const oldL=vm.createContext({window:{}});vm.runInContext(cp.execFileSync('git',['show','HEAD:data/learn/e4.js'],{cwd:ROOT,encoding:'utf8'}),oldL);
for(const l of oldL.window.LEARN_DATA.lessons){const next=lessons.find(x=>x.id===l.id);assert(next);assert.deepEqual(next.questions.slice(0,l.questions.length),clone(l.questions),l.id+' checkpoint positions changed');}
// Exam 5 teaching now has its own approved redesign. Its grading/progress
// preservation is checked in check_mh_active_lessons, independently of this scope.
for(const page of ['Exam 4 Map.html','Exam 4 Learn.html','index.html'])assert(read(page).includes('data/mh/study-guide.js?v='));
const sync=/SYNC\s*=\s*(\/.*\/)/.exec(read('nav.js'));assert(new RegExp(sync[1].slice(1,-1)).test(G.key));assert(!new RegExp(sync[1].slice(1,-1)).test('cp-plans'));
console.log('✓ Exam 4 study guide: exact assigned scope; 9 topic entries / 14 drills / 43 practice questions / 16 lessons; persistent Map/Learn focus; scoped misses and recommendations; existing grading and progress preserved');
