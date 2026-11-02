const assert = require('node:assert/strict'), fs = require('node:fs'), vm = require('node:vm'), path = require('node:path');
const root = path.join(__dirname,'..'), clone = x => JSON.parse(JSON.stringify(x));
const base = require('../data/nrs114-skills'), D = require('../data/nrs114-checkoff-details').apply(clone(base));
const core = require('../lab-practice-core').create(D,()=>0.37);
const expected = { 'iv.prep':2,'iv.bed':14,'iv.objective':4,'blood.row':26,'blood.objective':4,'reaction.row':11,'gt.assess':12,'gt.med':16,'gt.header':2,'suction.row':23,'trach.header':4,'care.row':19 };
assert.equal(D.coverage.numberedRows,123); assert.equal(D.coverage.headerNotes,14); assert.equal(D.coverage.steps,154);
const sourceIds=Object.entries(expected).flatMap(([prefix,n])=>Array.from({length:n},(_,i)=>prefix+'.'+(i+1))).sort();
assert.deepEqual(D.sourceRows.map(r=>r.id).sort(),sourceIds,'PDF row manifest incomplete/duplicated');
assert(D.sourceRows.every(r=>/^\d+(–\d+)?$/.test(r.page) && r.label && r.location));
const covered = new Set(D.stations.flatMap(s=>s.steps.flatMap(x=>x.covers)));
assert.deepEqual(Array.from(covered).sort(),sourceIds,'A source row/header is absent from rehearsal');
assert.equal(new Set(D.stations.flatMap(s=>s.steps.map(x=>x.id))).size,154);
for (const st of D.stations) {
  assert.deepEqual(st.questions,base.stations.find(x=>x.id===st.id).questions,'Existing graded questions changed');
  assert(st.scene);
  for (const step of st.steps) { assert(step.phase && step.title && step.action && step.why); for(const id of step.covers) assert(sourceIds.includes(id)); }
  if(st.id==='ivpb') assert.equal(st.requirements.length,0,'Supplement was presented as printed checklist rows');
}
// Compound rows previously lost in condensed summaries must retain their subactions.
function actions(id) {return D.stations.flatMap(s=>s.steps).filter(s=>s.covers.includes(id)).map(s=>s.action+' '+(s.note||'')).join(' ');}
for (const term of ['bowel sounds','distention','constipation','diarrhea','dehydration']) assert(actions('gt.assess.4').includes(term),term);
for (const term of ['shake','asepsis','palm','label','drip','lip']) assert(actions('gt.med.11').toLowerCase().includes(term),term);
for (const term of ['form','package','label','date/time']) assert(actions('blood.row.16').includes(term),term);
for (const term of ['applicator','4×4','dressing','ties']) assert(actions('care.row.8').includes(term),term);
assert(/15 seconds/.test(actions('suction.row.16')) && /30-second/.test(actions('suction.row.16')));
assert(/1 mL\/min/.test(actions('iv.bed.11')) && /30 seconds/.test(actions('iv.bed.12')));
// Old summary recall, decision misses, and pending graded choices remain independent.
const old = core.fresh(), legacyId=base.stations[0].steps[0].id;
old.rehearsal[legacyId]={note:'Old summary note',rating:'missed',at:'2026-10-31'};
core.start(old,['ivpush'],'mixed',3);const oldQuiz=clone(old.session);
const s=core.restore(clone(old));assert.equal(s.rehearsal[legacyId].note,'Old summary note');
assert.equal(core.stepBank(s,['ivpush'],true).length,0,'Broad old rating automatically awarded/failed new detailed steps');
const st=D.stations.find(x=>x.id==='gtube');assert(core.startFlow(s,[st.id],false));
assert.equal(s.flow.items.length,st.steps.length);assert(!core.flowNext(s));assert(!core.flowRate(s,'independent'));
core.flowNote(s,'I recalled the actual action');core.flowReveal(s,true);core.flowReveal(s,false);core.flowRate(s,'independent','one');
const first=core.flowCurrent(s).sid;assert.equal(core.flowCurrent(s).rating,'prompted','A shown hint counted as independent');
assert.equal(s.stepMisses[first].count,1);core.flowRate(s,'missed','two');assert.equal(s.stepMisses[first].count,1,'One attempt double-counted');
const resumed=core.restore(clone(s));assert.deepEqual(resumed.flow,s.flow);assert.deepEqual(resumed.session,oldQuiz);assert.equal(resumed.rehearsal[legacyId].note,'Old summary note');
core.flowNext(resumed);assert.equal(resumed.flow.index,1);assert(!core.flowNext(resumed));core.flowPrevious(resumed);assert.equal(resumed.flow.index,0);
// New attempt, no hint: corrected step retained; later miss reopens; filters include all attempts.
core.startFlow(s,[st.id],false);core.flowReveal(s,false);core.flowRate(s,'independent');
assert.equal(core.stepBank(s,[st.id],false).length,0);assert.equal(core.stepBank(s,[st.id],true).length,1);
assert(core.startFlow(s,[st.id],true,true));core.flowReveal(s,false);core.flowRate(s,'sequence');assert.equal(s.stepMisses[first].count,2);
const other=D.stations.find(x=>x.id==='blood');core.startFlow(s,[other.id],false);core.flowReveal(s,false);core.flowRate(s,'missed');
assert.equal(core.stepBank(s,[st.id,other.id],false).length,2);assert.equal(core.stepBank(s,[st.id],false).length,1);
assert(core.startFlow(s,[st.id,other.id],true));assert.equal(s.flow.items.length,2);
const bad=clone(s);bad.flow.items[0].sid='removed';assert.equal(core.restore(bad).flow,null);assert.equal(core.stepBank(core.restore(bad),[st.id,other.id],true).length,2);
// Complete-procedure review requires every checkpoint and never auto-grades typed recall.
core.startRun(s,st.id,'start');core.runNote(s,'A free recall outline.');assert(!core.runFinish(s));assert(!core.runRate(s,st.steps[0].id,'independent'));
const beforeReview=core.restore(clone(s));assert.equal(beforeReview.run.note,'A free recall outline.');assert.equal(beforeReview.run.stage,'perform');
core.runReview(s);assert(!core.runFinish(s));assert(!core.runRate(s,other.steps[0].id,'independent'));
const conditional=st.steps.find(x=>x.conditional);assert(conditional);assert(core.runRate(s,conditional.id,'not-applicable'));
assert(!core.runRate(s,st.steps.find(x=>!x.conditional).id,'not-applicable'));
for(const step of st.steps) if(step.id!==conditional.id) core.runRate(s,step.id,'independent');
assert(core.runFinish(s,'end'));assert(!core.runFinish(s));assert.equal(s.runHistory.length,1);assert.equal(s.runHistory[0].counts['not-applicable'],1);
assert.deepEqual(core.restore(clone(s)).run,s.run);assert.equal(core.restore(clone(s)).runHistory.length,1);
// An inapplicable branch does not erase a previous weak item.
core.startFlow(s,[st.id],false);s.flow.index=st.steps.indexOf(conditional);core.flowReveal(s,false);core.flowRate(s,'missed');
const weakBefore=s.stepMisses[conditional.id].count;
core.startRun(s,st.id);core.runReview(s);core.runRate(s,conditional.id,'not-applicable');assert.equal(s.stepMisses[conditional.id].state,'open');assert.equal(s.stepMisses[conditional.id].count,weakBefore);
// Render the actual UI module in a minimal DOM host: answers absent before reveal/comparison.
const ctx={window:{},location:{hash:'#practice'},document:{},console};vm.runInNewContext(fs.readFileSync(path.join(root,'lab-performance.js'),'utf8'),ctx);
const uiState=core.fresh();let html='',title='';const esc=x=>String(x||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const ui=ctx.window.LabPerformance.create({data:D,core,state:uiState,save(){},esc,app:{addEventListener(){}},wrap(t,h){title=t;html=h;},link:(t,h)=>'<a href="'+h+'">'+esc(t)+'</a>',render(){}});
for(const station of D.stations){
  core.startRun(uiState,station.id);assert(ui.route('practice-full-'+station.id));
  for(const step of station.steps) assert(!html.includes(esc(step.action)),'Full run exposed '+step.id);
  core.runReview(uiState);ui.route('practice-full-'+station.id);for(const step of station.steps) assert(html.includes(esc(step.action)),'Review omitted '+step.id);
  const sourceHTML=ui.coverageHTML(station);for(const row of station.requirements) assert(sourceHTML.includes(esc(row.label)));
}
core.startFlow(uiState,[st.id],false);ui.route('practice-rehearse-'+st.id);const firstStep=st.steps[0];assert(!html.includes(esc(firstStep.title)));assert(!html.includes(esc(firstStep.action)));
core.flowReveal(uiState,true);ui.route('practice-rehearse-'+st.id);assert(html.includes(esc(firstStep.title)));assert(!html.includes(esc(firstStep.action)));
core.flowReveal(uiState,false);ui.route('practice-rehearse-'+st.id);assert(html.includes(esc(firstStep.action)));
// An unstarted weak route must not silently open a normal flow.
ui.route('practice-weak');assert.equal(title,'No procedure-step review is active');
const page=fs.readFileSync(path.join(root,'Lab Check-offs.html'),'utf8');assert(page.indexOf('nrs114-checkoff-details.js')>page.indexOf('data/nrs114-skills.js'));assert(page.indexOf('lab-performance.js')<page.indexOf('src="lab-practice.js'));
console.log('PASS: all 123 numbered rows + 14 header/goal notes mapped; 154 detailed checkpoints; compound actions; unchanged 42 questions; legacy progress; recall/hints/resume; whole-procedure review; cumulative weak steps; hidden-answer UI in all seven stations.');
