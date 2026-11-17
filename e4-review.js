// Saved, objective Review queue. Uses the existing diagnostic report format.
(function(root,factory){
  if(typeof module==='object'&&module.exports)module.exports=factory(require('./e4-diagnostic-core'));
  else root.E4Review=factory(root.E4DiagnosticCore);
})(typeof window!=='undefined'?window:globalThis,function(C){
  'use strict';
  var activities={};
  function shuffle(a,rng){a=a.slice();rng=rng||Math.random;for(var i=a.length-1;i>0;i--){var j=Math.floor(rng()*(i+1)),v=a[i];a[i]=a[j];a[j]=v;}return a;}
  function base(concept,chapter,title,why){return {id:'e4r-'+concept,concept:concept,facet:concept,chapter:chapter,link:'t-'+(chapter==='34'?'groups':chapter==='6'?'legal':chapter==='9'?'peplau':'neuro'),stem:title,why:why,reviewActivity:true};}
  function order(concept,chapter,title,steps,why){var q=base(concept,chapter,title,why);q.reviewType='order';q.opts=steps.map(function(s){return s[0];});q.a=steps.map(function(_,i){return i;});q.optionWhy=steps.map(function(s){return s[1];});activities[concept]=q;}
  function match(concept,chapter,title,pairs,why){var q=base(concept,chapter,title,why),n=pairs.length;q.reviewType='match';q.matchPrompts=pairs.map(function(p){return p[0];});q.matchChoices=pairs.map(function(p){return p[1];});q.opts=[];q.a=[];q.optionWhy=[];
    pairs.forEach(function(p,i){pairs.forEach(function(other,j){q.opts.push(p[0]+' → '+other[1]);q.optionWhy.push(i===j?p[2]:'That connection belongs with '+other[0]+'. '+p[2]);if(i===j)q.a.push(i*n+j);});});activities[concept]=q;
  }
  // These connections use the already-authored assigned-scope explanations.
  match('receptors','3','Match the blocked receptor with its effect.',[
    ['H1 (histamine)','Sedation and increased appetite/weight','Blocking alertness-related histamine signaling can cause sedation and appetite/weight effects.'],
    ['Muscarinic','Dry mouth, constipation and urinary difficulty','Reduced parasympathetic signaling helps explain this anticholinergic pattern.'],
    ['Alpha-1','Orthostatic dizziness','Reduced vascular tone can impair blood-pressure compensation on standing.']
  ],'One medicine can affect several receptors. Link each finding to its mechanism before choosing what to assess.');
  match('signals','3','Match the transmitter with its main role in this comparison.',[
    ['GABA','Inhibitory signaling','GABA generally reduces neuronal excitation; this helps explain benzodiazepine effects.'],
    ['Glutamate','Excitatory signaling','Glutamate generally promotes excitation and participates in learning and memory.'],
    ['Acetylcholine','Memory and parasympathetic functions','Acetylcholine affects both cognition and functions outside the brain.']
  ],'These are functional connections, not a diagnostic test for a simple chemical imbalance.');
  match('ethics','6','Match the nurse’s action with the principle it most directly illustrates.',[
    ['Keeping a promised visit','Fidelity','Fidelity concerns keeping commitments.'],
    ['Explaining adverse effects honestly','Veracity','Veracity concerns truthful information.'],
    ['Respecting an informed choice','Autonomy','Autonomy concerns the patient’s right to make an informed decision.']
  ],'Several principles can matter in one case. Identify the behavior the question specifically describes.');
  match('roles','9','Match Peplau’s nursing role with the task.',[
    ['Resource person','Provide relevant, understandable information','This role addresses a need for information or resources.'],
    ['Teacher','Help the patient learn and practise a skill','Teaching connects explanation and practice with the patient’s learning needs.'],
    ['Counselor','Explore experiences, feelings and meaning','Counseling helps the patient examine experience while preserving a professional relationship.']
  ],'Choose the role for the patient’s present need. The nurse may use several roles during a visit.');
  match('factors','34','Match the member’s experience with the group factor.',[
    ['“Others experience this too.”','Universality','The defining change is recognizing a shared experience.'],
    ['“Their progress makes improvement seem possible.”','Instillation of hope','The focus is the possibility of improvement.'],
    ['“Helping a new member made me feel useful.”','Altruism','Giving help can contribute to meaning and self-worth.']
  ],'Related factors can coexist; the statement’s main change identifies the most direct connection.');
  order('kinetics','3','Put the ADME terms in their conventional learning order.',[
    ['Absorption','Entry into circulation is the absorption concept.'],['Distribution','Distribution describes movement between blood and tissues.'],['Metabolism','Metabolism describes chemical processing of a drug.'],['Excretion','Excretion describes removal from the body.']
  ],'ADME organizes pharmacokinetics. These processes can overlap, and a route such as IV bypasses an absorption step; this is a learning sequence, not a universal bedside timeline.');
  order('phases','9','Put Peplau’s original four phases in order.',[
    ['Orientation','Establish the relationship, needs and shared frame.'],['Identification','The patient identifies needs and people/resources that can help.'],['Exploitation','The patient uses the available help and works toward goals.'],['Resolution','Consolidate learning, support independence and end the relationship.']
  ],'The original labels are orientation, identification, exploitation and resolution. Other nursing frameworks group the middle work and use termination for closure.');
  order('group-phases','34','Put the group-development tasks in order.',[
    ['Plan purpose, membership and structure','Planning happens before inviting members into the working group.'],['Orient members to purpose, expectations and limits','Orientation establishes a safe, understandable frame.'],['Facilitate working, feedback and problem solving','Working develops learning and participation within that frame.'],['Review learning, acknowledge endings and plan transfer','Termination makes the ending and future use of learning explicit.']
  ],'The leader’s task changes with development. Disagreement during work can be useful when handled safely.');
  order('lithium','3','Build this lithium cause-and-effect explanation.',[
    ['Diarrhea causes fluid loss','Fluid loss is the initiating change in this example.'],['Lithium clearance may decrease','Fluid/sodium changes can alter renal lithium handling.'],['Exposure can rise, with new tremor or unsteadiness','New neurologic symptoms raise concern for toxicity.'],['Assess urgently and follow the hold/escalation protocol','Clinical assessment and prescribed testing are needed; an unchanged dose does not guarantee safety.']
  ],'Arrange the reasoning chain, not a rigid bedside protocol. Actual urgent assessment and support follow the patient’s condition.');

  function plan(bank,stats,progress,includeRepaired,now){
    var tasks=[],seen={};now=now==null?Date.now():now;
    Object.keys(stats).forEach(function(concept){
      var e=stats[concept],bad={},pending=C.pending(e.events);e.events.forEach(function(x){if(!x.ok||x.confidence==='unsure')bad[x.facet||concept]=x;});
      var due=progress[concept]&&progress[concept].due<=now;
      var facets=pending.length?pending:includeRepaired||due?Object.keys(bad):[];
      facets.forEach(function(facet){
        var pool=bank.filter(function(q){return !q.aliasOf&&q.concept===concept&&(q.facet||q.concept)===facet&&['3','6','9','34'].indexOf(q.chapter)>=0;});
        if(!pool.length)return;
        var activity=activities[facet];if(activity&&!seen[activity.id]){tasks.push(C.clone(activity));seen[activity.id]=true;}
        pool=pool.slice().sort(function(a,b){return (e.seen.indexOf(a.id)>=0?1:0)-(e.seen.indexOf(b.id)>=0?1:0)+(a.id===bad[facet].id?2:0)-(b.id===bad[facet].id?2:0);});
        var q=pool.find(function(q){return !seen[q.id];});if(q){tasks.push(C.clone(q));seen[q.id]=true;}
      });
    });
    return tasks;
  }
  function create(tasks,now){return {v:1,id:'review-'+(now||Date.now()).toString(36)+'-'+Math.random().toString(36).slice(2,9),startedAt:now||Date.now(),tasks:C.clone(tasks),work:{},results:[],reported:[],batch:0,active:null,pendingReport:null,lastReport:null};}
  function validTask(q){return C.validQuestion(q)&&(!q.reviewType||q.reviewType==='order'||q.reviewType==='match'&&Array.isArray(q.matchPrompts)&&Array.isArray(q.matchChoices)&&q.matchPrompts.length===q.matchChoices.length&&q.opts.length===q.matchPrompts.length*q.matchChoices.length);}
  function restore(raw){
    if(!raw||raw.v!==1||typeof raw.id!=='string'||!Array.isArray(raw.tasks)||!raw.tasks.every(validTask)||new Set(raw.tasks.map(function(q){return q.id;})).size!==raw.tasks.length||!raw.work||typeof raw.work!=='object'||!Array.isArray(raw.results)||!Array.isArray(raw.reported)||!Number.isInteger(raw.batch)||raw.batch<0)return null;
    if(!raw.results.every(function(it){return it&&validTask(it.q)&&typeof it.ok==='boolean'&&Array.isArray(it.selected);}))return null;
    var s=C.clone(raw);for(var key of Object.keys(s.work)){var q=s.tasks.find(function(q){return q.id===key;}),w=s.work[key];if(!q||!w||!Array.isArray(w.selected)||w.selected.some(function(i){return !Number.isInteger(i)||i<0||i>=q.opts.length;})||new Set(w.selected).size!==w.selected.length)return null;
      var n=q.reviewType==='match'?q.matchChoices.length:q.opts.length;
      if(!Array.isArray(w.order)||w.order.length!==n||new Set(w.order).size!==n||w.order.some(function(i){return !Number.isInteger(i)||i<0||i>=n;}))return null;
      if(q.reviewType==='match'&&(w.selected.length>n||w.selected.some(function(k,i){return Math.floor(k/n)!==i;})))return null;
    }
    return s;
  }
  function work(s,q,rng){if(!s.work[q.id]){var n=q.reviewType==='match'?q.matchChoices.length:q.opts.length,order=shuffle(Array.from({length:n},function(_,i){return i;}),rng);if(q.reviewType==='order'&&order.every(function(k,i){return k===i;}))order.push(order.shift());s.work[q.id]={selected:[],order:order};}return s.work[q.id];}
  function result(s,id){return s.results.find(function(it){return it.q.id===id;});}
  function current(s,chapters){var active=s.tasks.find(function(q){return q.id===s.active&&chapters.indexOf(q.chapter)>=0;});if(active)return active;active=s.tasks.find(function(q){return chapters.indexOf(q.chapter)>=0&&!result(s,q.id);});s.active=active?active.id:null;return active||null;}
  function remaining(s,chapters){return s.tasks.filter(function(q){return chapters.indexOf(q.chapter)>=0&&!result(s,q.id);}).length;}
  function grade(s,q,now){var w=work(s,q);if(result(s,q.id))return null;var ok=q.reviewType==='order'?w.selected.length===q.opts.length&&w.selected.every(function(k,i){return k===i;}):C.correct(q,w.selected);
    var item={q:C.clone(q),selected:w.selected.slice(),ok:ok,confidence:null,reason:'',at:now||Date.now()};s.results.push(item);return item;
  }
  function pick(s,q,k,now){if(result(s,q.id))return null;var w=work(s,q),n=q.reviewType==='match'?q.matchChoices.length:q.opts.length;if(!Number.isInteger(k)||k<0||k>=n)return null;
    if(q.reviewType==='order'){if(w.selected.indexOf(k)>=0)return null;w.selected.push(k);if(w.selected.length===q.opts.length)return grade(s,q,now);}
    else if(q.reviewType==='match'){w.selected.push(w.selected.length*n+k);if(w.selected.length===q.matchPrompts.length)return grade(s,q,now);}
    else if(Array.isArray(q.a)){w.selected=w.selected.indexOf(k)>=0?w.selected.filter(function(i){return i!==k;}):w.selected.concat([k]);}
    else {w.selected=[k];return grade(s,q,now);}return null;
  }
  function check(s,q,now){var w=work(s,q);return !q.reviewType&&Array.isArray(q.a)&&w.selected.length?grade(s,q,now):null;}
  function undo(s,q){if(result(s,q.id))return false;work(s,q).selected.pop();return true;}
  function next(s,chapters){if(s.active&&!result(s,s.active))return false;s.active=null;return current(s,chapters);}
  function focus(s,question){if(!s.tasks.some(function(q){return q.id===question.id;}))s.tasks.push(C.clone(question));s.active=question.id;return question;}
  function report(s,now){if(s.pendingReport)return s.pendingReport;var items=s.results.filter(function(it){return s.reported.indexOf(it.q.id)<0;});if(!items.length)return null;s.pendingReport={v:1,id:s.id+'-'+s.batch,kind:'repair',review:true,startedAt:s.startedAt,finishedAt:now||Date.now(),score:items.filter(function(it){return it.ok;}).length,total:items.length,questions:items.map(function(it){return it.q.id;}),misses:items.filter(function(it){return !it.ok;}).map(function(it){return it.q.id;}),items:C.clone(items)};return s.pendingReport;}
  function acknowledge(s){if(!s.pendingReport)return; s.pendingReport.questions.forEach(function(id){if(s.reported.indexOf(id)<0)s.reported.push(id);});s.lastReport=s.pendingReport.id;s.pendingReport=null;s.batch++;}
  return {activities:activities,plan:plan,create:create,restore:restore,work:work,result:result,current:current,remaining:remaining,pick:pick,check:check,undo:undo,next:next,focus:focus,report:report,acknowledge:acknowledge};
});
