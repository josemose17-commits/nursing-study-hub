// Curated teaching replaces generic extraction only in the approved MH paths.
// Independent questions, recall indices, source detail and scheduling stay put.
const assert=require('node:assert/strict');
const {refs}=require('./mh-lesson-tools');
const content={e4:require('../data/mh/lessons-src'),e5:require('../data/mh5/lessons-src')};
module.exports=function apply(exam,rows){
 const authored=content[exam];if(!authored)return rows;
 const expected=exam==='e4'?require('../data/mh/study-guide').lessonIds:rows.map(r=>r.lesson.id);
 assert.deepEqual(Object.keys(authored).sort(),expected.slice().sort(),exam+' curated scope');
 for(const {lesson:l,lab}of rows){
  const a=authored[l.id];if(!a)continue;
  assert(a.why.length===3&&a.why.every(Boolean));assert(a.visual.cards.length>=3&&a.visual.cards.length<=4);
  assert(a.steps.length>=2&&a.steps.every(s=>s.kind==='order'||s.options.filter(o=>o.correct).length===1));
  l.active=true;l.why=a.why.slice();l.patient=a.patient;if(a.title)l.title=a.title;
  if(a.recall){assert.equal(a.recall.length,l.checks.length,'Recall positions stay stable');l.checks=a.recall.map(x=>x[0]);l.recallAnswers=a.recall.map(x=>x[1]);l.recallDomains=['cues and mechanism','priority and actions','evaluation'];}
  lab.active=true;lab.revision='mh-active-20261109';lab.title=l.title;lab.patient=l.patient;lab.why=l.why;
  lab.visual=a.visual;lab.steps=a.steps.map((s,i)=>({...s,id:l.id+':active:'+i}));
  const first=lab.steps[0];
  lab.strategy={title:a.visual.title,task:first.task,cue:first.scene,rule:first.kind==='order'?first.why:first.options.find(o=>o.correct).why,trap:first.hint};
  lab.clinicalUpdate=[lab.clinicalUpdate,a.caution].filter(Boolean).join(' ');l.clinicalUpdate=lab.clinicalUpdate;
  const extra=(a.sources||[]).concat(l.id==='t-legal'?['restraint']:[]).map(k=>{assert(refs[k],'Unknown clinical reference '+k);return refs[k];});
  lab.sources=[...new Map(lab.sources.concat(extra).map(s=>[s.url,s])).values()];
 }
 return rows;
};
