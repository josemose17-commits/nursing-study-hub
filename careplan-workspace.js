// A focused editor over the original care-plan controls and storage, not a second copy of the answers.
(function(){
 'use strict';
 const D=window.CP_COACH,W=window.CPWords;
 const $=(s,r)=>(r||document).querySelector(s),$$=(s,r)=>Array.from((r||document).querySelectorAll(s));
 const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let api,host,units=[],active=null,marker=null,moved=null,target='',mode='ask',all=false,query='',section='',limit=8,pending='',focusBack='';
 const undoEntries=new Map();let replacement=null;
 const roles={patient:'Ask the patient',assess:'Assess / measure',record:'Verify in the record',nurse:'Ask the nurse / instructor',reason:'Work through the reasoning',reference:'Check a scholarly source'};
 const types={problem:'Problem-focused',risk:'Risk',promo:'Health promotion'};
 const filled=v=>v!=null&&String(v).trim()!=='';
 const read=()=>api.get('_workspace')||{};
 function remember(patch){api.set('_workspace',{...read(),...patch});}
 function restoreUnit(){if(marker&&marker.parentNode&&moved)marker.replaceWith(moved);marker=null;moved=null;}
 function factKey(){return active.id+'::'+target;}
 function record(){return (api.get('_coach')||{})[factKey()]||{facts:{},draft:''};}
 function saveRecord(value){const map=api.get('_coach')||{};map[factKey()]=value;api.set('_coach',map);}
 function labName(key){return api.labs[key]?.n||'the selected lab';}
 const simple=(title,purpose,field,question,from='reason')=>({title,purpose,fields:[{id:'detail',label:field,question,from}],patterns:['{detail}']});
 function profile(u,path){
  const id=u.id;let p=D.profiles[id],m;
  if(p)return {...p};
  if((m=/^sys([12])\.(\w+)$/.exec(id)))return D.systemProfile(m[2],m[1]==='2');
  if((m=/^(sbar[123])\.([SBAR])$/.exec(id)))return D.sbProfile(m[1],m[2]);
  if((m=/^labs\.(\w+)$/.exec(id))){
   if(path.endsWith('.s'))return {...D.templates.lab,title:labName(m[1])+': significance / trend'};
   return {...simple(labName(m[1])+': verified value','Copy the value, units, specimen time and laboratory range accurately into the measurement fields. Use Clinical significance/trends for the explanation.','Verified result','What does the laboratory report show for this value and sampling time?','record'),noWording:true};
  }
  if((m=/^fe\.(\d)\.(\w+)$/.exec(id))){
   const name=labName(api.get('fe.'+m[1]+'.lab'));
   if(m[2]==='values')return {...simple('Lab '+(+m[1]+1)+': '+name,'Choose the actual relevant abnormal lab, record the measured value and units, and verify the laboratory normal range and facility critical-value policy.','Verified values / ranges','Which result, units, sample time, reference range and critical-value policy apply?','record'),noWording:true};
   const base=m[2]==='cause'?D.templates.feCause:m[2]==='tx'?D.templates.treatment:m[2]==='nsg'?D.profiles.q5:D.templates.labRelevance;
   return {...base,title:'Lab '+(+m[1]+1)+' · '+name+': '+({rel:'relevance',cause:'cause',tx:'treatment',nsg:'nursing assessments / interventions'})[m[2]]};
  }
  if(id==='erik.lvl')return {...simple('Expected Erikson stage','Verify the patient’s age, then identify the expected Erikson stage and task. Assess achievement in the next field.','Expected stage and task','For the patient’s verified age, which stage and task are expected?','reference'),noWording:true};
  if(id==='erik.a')return D.templates.assessedDevelopment;
  if(id==='erik.b')return D.templates.developmentalBehavior;
  if((m=/^orders\.(\d+)$/.exec(id))){
   if(path.endsWith('.0'))return simple('Medical order '+(+m[1]+1),'State the verified order and relevant parameters. Put the clinical explanation and outcome in their own fields.','Verified order','What is the current order, including dose/route/rate or other relevant parameters?','record');
   if(path.endsWith('.2'))return {...D.templates.goal,title:'Order '+(+m[1]+1)+': expected patient outcome'};
   return {...D.templates.orderRationale,title:'Order '+(+m[1]+1)+': rationale'};
  }
  if((m=/^meds\.(\d+)$/.exec(id))){
   if(path.endsWith('.4'))return simple('Medication '+(+m[1]+1)+': what I check','Describe drug-specific assessments and prescribed parameters for this patient. Verify the drug reference and order; the helper does not supply a dose or a hold parameter.','Assessments / parameters','For this prescribed medication, what must be assessed before and after administration?','reference');
   return {...simple('Medication '+(+m[1]+1), 'Verify the generic medication, order, class and indication for this patient. Keep the safety assessments in What I check.','Verified medication detail','What do the current medication record and drug reference confirm?','record'),noWording:true};
  }
  if(/^support\./.test(id))return {...simple('Support person and relationship','Use initials in the name field and the relationship in the next field. Confirm the patient’s preference for involving this person.',path.endsWith('.0')?'Support person’s initials':'Relationship to the patient',path.endsWith('.0')?'Who would you like involved in your care? Record initials only.':'How is this person related to you, and would you like them involved?','patient'),noWording:true};
  if((m=/^plan\.(\d+)\.(.+)$/.exec(id))){
   const part=m[2];
   if(part==='dx')return {...simple('Choose a supported diagnosis','Search the verified labels below, then use the actual cues and your NANDA-I book to confirm the fit.','Supported label','Which label matches the patient’s assessed response?','reference'),noWording:true};
   if(part==='rfx')return simple('Related / risk factors','State patient-specific factors supported by the assessment. The statement builder adds the connecting words.','Related / risk factors','Which factors are supported by this patient’s assessment?');
   if(part==='aex')return simple('Supporting patient cues','Use the actual measured or reported evidence. The statement builder adds as evidenced by when appropriate.','Actual supporting cues','Which current findings support the selected nursing diagnosis?','assess');
   if(part==='stmt')return D.profiles.q4;
   if(part==='stg'||part==='ltg')return {...D.templates.goal,title:part==='stg'?'Short-term patient goal':'Long-term patient goal'};
   if(part==='ev')return path.endsWith('.next')?{...D.profiles.e3,title:'Next plan after evaluation'}:D.templates.evaluation;
   if(/^iv\.\d+$/.test(part))return path.endsWith('.2')?{...D.templates.interventionRationale,title:'Scientific rationale for this intervention'}:path.endsWith('.3')?{...simple('Source for this rationale','Insert a real source’s APA in-text citation and include the corresponding reference in the document.','Citation','Which source did you actually use for this rationale?','reference'),noWording:true}:D.profiles.q5;
   return {...simple('Add a nursing intervention','Add an intervention row, then write the planned action and its rationale in separate fields.','Action','Which nursing action addresses the selected priority?'),noWording:true};
  }
  if(/^vs[12]$/.test(id))return {...simple(id==='vs1'?'Initial vital signs':'Reassessment vital signs','Enter the actual measurements, units, time and relevant support such as oxygen device/flow. The next form question asks which measurements are significant and why.','Measurements','What did you actually measure, when, and under which support or activity conditions?','assess'),noWording:true};
  const hint=/^(?:me|info)\.(\w+)$/.exec(id),help=hint&&(window.CP_INC||{})['f.'+hint[1]];
  return {...simple(u.label,help||'Enter the verified detail in the answer field below.','Verified detail',hint?.[1]==='allergies'?'Which medication, food or latex caused a reaction, and what happened?':'What verified information belongs in '+u.label.toLowerCase()+'?','record'),noWording:true};
 }
 function describe(node){
  const id=node.dataset.cpUnit,label=node.dataset.cpLabel||id,sec=node.closest('.cp-sec'),sid=sec?.id.replace(/^s-/,'')||'plan';
  const owner=node.closest('.item[id^="w-"]'),it=owner&&api.fields[owner.id.slice(2)];
  const fields=$$('[data-p]',node).filter(e=>e.type!=='radio').map(e=>{const path=e.dataset.p;const text=e.getAttribute('aria-label')||e.closest('label')?.childNodes[0]?.textContent?.trim();return {path,label:text||label,el:e};});
  const preferred=node.dataset.cpTarget,first=fields.find(f=>f.path===preferred)||fields.find(f=>f.el.tagName==='TEXTAREA')||fields[0];
  const sb=/^(sbar[123])\.([SBAR])$/.exec(id),name=sb?(D.sbarNames?.[sb[1]]||sb[1])+' · '+label:D.names[id]||label,sectionName=window.CP_FORM.find(s=>s.id===sid)?.title||sid;
  const part=/^plan\.\d+\.(.+)$/.exec(id)?.[1],matrix={dx:'Client problem: choose the nursing diagnosis',rfx:'Related to…',aex:'As evidenced by…',stmt:'Client problem (Related to… as evidenced by…)',stg:'Client-centered goals (expected outcomes): short term',ltg:'Client-centered goals (expected outcomes): long term',ev:'Evaluation'};
  const question=matrix[part]||(/^iv\./.test(part||'')?'Nursing interventions · Scientific rationale':it?.q||it?.label||label);
  return {id,label:name,section:sid,sectionName,node,fields,target:first?.path||'',question,owner:it?.k||'',search:(id+' '+name+' '+sectionName+' '+question).toLowerCase()};
 }
 function collect(){units=$$('[data-cp-unit]',$('#form')).map(describe);}
 function activeProfile(){const p=profile(active,target);return active.fields.find(f=>f.path===target)?.el.tagName==='SELECT'?{...p,noWording:true}:p;}
 function factsHtml(p,r){return p.fields.map(f=>'<label class="cw-fact"><span>'+esc(f.label)+'</span><small>'+esc(f.question)+'</small>'+(f.options?'<select data-cw-fact="'+f.id+'"><option value="">Choose…</option>'+f.options.map(v=>'<option value="'+esc(v)+'"'+(r.facts?.[f.id]===v?' selected':'')+'>'+esc(types[v]||v)+'</option>').join('')+'</select>':'<textarea rows="2" data-cw-fact="'+f.id+'" autocomplete="off">'+esc(r.facts?.[f.id]||'')+'</textarea>')+'</label>').join('');}
 function guideHtml(p){
  const d=D.detail?.(active.id,target,p);if(!d)return '';
  return '<div class="cw-guide"><h4>A useful answer follows this shape</h4><p class="cw-formula">'+esc(d.formula)+'</p><details><summary>Why these details matter</summary><p>'+esc(d.why)+'</p><p><strong>Avoid:</strong> '+esc(d.avoid)+'</p></details>'+(d.example?'<details><summary>See a worked example</summary><p class="muted">Fictional example for wording only. Use your own patient’s facts.</p><p>'+esc(d.example)+'</p></details>':'')+'</div>';
 }
 function sbarNav(){
  const m=/^(sbar[123])\.([SBAR])$/.exec(active.id);$('#cw-related').innerHTML=m?'<p>'+esc(D.sbarNames?.[m[1]]||m[1])+'</p><nav aria-label="Sections of this SBAR">'+['S','B','A','R'].map(k=>'<button type="button" class="mini" data-cw-open="'+m[1]+'.'+k+'"'+(k===m[2]?' aria-current="step"':'')+'>'+k+' · '+({S:'Situation',B:'Background',A:'Assessment',R:'Recommendation'})[k]+'</button>').join('')+'</nav>':'';
 }
 function contextHtml(){
  let sb=/^(sbar[123])\./.exec(active.id);
  if(sb){const key=sb[1],actual=['S','B','A','R'].map(k=>'<p><strong>'+k+':</strong> '+esc(api.get(key+'.'+k)||'Not entered')+'</p>').join(''),v=key==='sbar1'?'vs1':'vs2',sys=key==='sbar1'?'sys1':'sys2';
   const findings=[...Object.entries(api.get(v)||{}).map(([k,val])=>k+': '+val),...Object.entries(api.get(sys)||{}).map(([k,val])=>k+': '+val)].filter(x=>x.split(': ').slice(1).join(': ').trim());
   return '<details class="cw-context"><summary>Preview my full SBAR</summary>'+actual+'</details>'+(findings.length?'<details class="cw-context"><summary>Review my recorded findings</summary><p>Check the measurement times and support conditions before using these in this report.</p>'+findings.map(x=>'<p>'+esc(x)+'</p>').join('')+'</details>':'');
  }
  let m;if((m=/^sys2\.(\w+)/.exec(active.id))){const old=api.get('sys1.'+m[1]);return old?'<details class="cw-context"><summary>Compare with my initial assessment</summary><p>'+esc(old)+'</p><p>Reassess before writing the current findings.</p></details>':'';}
  if((m=/^labs\.(\w+)/.exec(active.id))){const b='labs.'+m[1];return '<p class="cw-context">Initial: '+esc(api.get(b+'.i')||'not entered')+' · Current: '+esc(api.get(b+'.c')||'not entered')+'</p>';}
  if((m=/^plan\.(\d+)\.iv\.(\d+)/.exec(active.id))){const action=api.get('plan.'+m[1]+'.iv.'+m[2]+'.1');return action?'<p class="cw-context"><strong>Intervention being explained:</strong> '+esc(action)+'</p>':'';}
  return '';
 }
 function includeKey(){const id=active.id;if(/^sys[12]\./.test(id))return id.replace(/^sys[12]/,'sys');if(/^plan\.\d+\./.test(id)){const part=id.split('.')[2];return 'plan.'+(part==='iv'?'iv':part==='ev'?'ev':part==='stmt'?'stmt':part);}if(/^labs\./.test(id))return 'labs';return id;}
 function renderHelp(){
  if(!active)return;const p=activeProfile(),r=record();
  replacement=null;sbarNav();
  $('#cw-purpose').textContent=p.purpose;$('#cw-coach-title').textContent=p.title;
  $('#cw-ask-mode').setAttribute('aria-pressed',String(mode==='ask'));$('#cw-word-mode').setAttribute('aria-pressed',String(mode==='word'));
  const questions=p.fields.map((f,i)=>'<li><span class="cw-source">'+esc(roles[f.from]||roles.reason)+'</span><p>'+esc(f.question)+'</p>'+(!p.noWording?'<button type="button" class="mini" data-cw-record="'+f.id+'">Record for '+esc(f.label.toLowerCase())+'</button>':'')+'</li>').join('');
  const inc=window.CP_INC[includeKey()],parts=inc&&inc.items?'<details class="cw-context"><summary>What this answer needs</summary><ul>'+inc.items.map(t=>'<li>'+esc(t)+'</li>').join('')+'</ul></details>':'';
  $('#cw-help').innerHTML=guideHtml(p)+contextHtml()+(mode==='ask'?'<h4>Collect the information in this order</h4><ol class="cw-questions">'+questions+'</ol>'+parts+(!p.noWording?'<button type="button" class="btn" id="cw-start-writing">Write my answer from these facts</button>':''):
    p.noWording?'<p>Enter the verified value or make the selection in the answer card. This field uses the structured form controls.</p>'+parts:
    '<p class="muted">Use short facts in your own words. The builder organizes what you enter; it cannot fill missing clinical details. Blank prompts are left out of the draft.</p>'+factsHtml(p,r)+'<button type="button" class="btn btn-primary" id="cw-build">Build nursing wording</button><p id="cw-build-status" role="status"></p><label class="cw-fact">Editable wording draft<textarea id="cw-draft" rows="4" placeholder="Your draft will appear here.">'+esc(r.draft||'')+'</textarea></label><div class="btns"><button type="button" class="btn" id="cw-insert"'+(!r.draft?.trim()?' disabled':'')+'>Add wording to answer</button><button type="button" class="mini" id="cw-replace"'+(!r.draft?.trim()?' disabled':'')+'>Review replacing my answer</button><button type="button" class="mini" id="cw-undo">Undo last wording change</button></div><div id="cw-replace-review" role="status"></div>'+(p.swap?'<details class="cw-context"><summary>Rough wording → nursing wording</summary><p>'+esc(p.swap[0])+'</p><p>'+esc(p.swap[1])+'</p></details>':''));
  $('#cw-check-result').innerHTML='';updateUndo();
 }
 function updateUndo(){const b=$('#cw-undo');if(b)b.disabled=W.undo(String(api.get(target)||''),undoEntries.get(api.patient()+'::'+target))===null;}
 function scrollTitle(){const h=$('#cw-question');h.focus({preventScroll:true});host.scrollIntoView({block:'start'});}
 function selectedTarget(u){const saved=(read().targets||{})[u.id];return u.fields.some(f=>f.path===saved)?saved:u.target;}
 function status(u){const m=/^plan\.(\d+)\.dx$/.exec(u.id);if(m)return api.get('plan.'+m[1]+'.c')?'Diagnosis selected':'Choose a diagnosis';return !u.fields.length?'Open controls':u.fields.some(f=>filled(api.get(f.path)))?'Answer started':'Empty';}
 function nav(){
  if(!units.length)return;
  const matches=units.filter(u=>query?u.search.includes(query.toLowerCase()):u.section===section),shown=matches.slice(0,limit);
  $('#cw-list').innerHTML=shown.map(u=>'<button type="button" class="cw-field" data-cw-open="'+esc(u.id)+'"'+(active?.id===u.id?' aria-current="step"':'')+'><span>'+esc(u.label)+'</span><small>'+esc(query?u.sectionName+' · '+status(u):status(u))+'</small></button>').join('')+(!matches.length?'<p class="muted">No matching fields. Try “respiratory”, “rationale”, “q3” or a lab name.</p>':'')+(matches.length>shown.length?'<button type="button" class="mini" id="cw-more">Show '+Math.min(8,matches.length-shown.length)+' more fields</button>':'');
  $('#cw-result-count').textContent=query?matches.length+' matching fields across the form':matches.length+' fields in this section';
 }
 function actions(){
  let html='',m;
  if((m=/^(support|meds|orders)\./.exec(active.id)))html='<button type="button" class="mini" data-add="'+m[1]+'">Add '+(m[1]==='meds'?'medication':m[1]==='orders'?'order':'support person')+'</button>';
  if((m=/^plan\.(\d+)/.exec(active.id)))html+=(api.get('plan.'+m[1]+'.c')?'<button type="button" class="mini" data-addiv="'+m[1]+'">Add intervention to this problem</button>':'')+'<button type="button" class="mini" data-addprob>Add another problem</button>';
  if(m&&active.id.startsWith('plan.')&&(api.get('plan')||[]).length>1)html+='<button type="button" class="mini" data-delprob="'+m[1]+'">Remove this problem</button>';
  $('#cw-row-actions').innerHTML=html;
 }
 function select(id,options={}){
  restoreUnit();let u=units.find(x=>x.id===id)||units.find(x=>x.section===section)||units.find(x=>x.id==='cc')||units[0];if(!u)return;
  active=u;section=u.section;target=selectedTarget(u);$('#cw-section').value=section;
  if(options.resetSearch){query='';$('#cw-search').value='';limit=8;}
  const index=units.indexOf(u);$('#cw-position').textContent='Field '+(index+1)+' of '+units.length;$('#cw-prev').disabled=index===0;$('#cw-next').disabled=index===units.length-1;
  $('#cw-question').textContent=u.question.length>180?u.label:u.question;$('#cw-subfield').textContent=u.question.length>180?'':u.label;$('#cw-full-question').hidden=u.question.length<=180;$('#cw-paper-question').textContent=u.question;$('#cw-location').textContent=u.sectionName+' · form p. '+(D.pages[u.section]||'34–47');
  $('#cw-target-wrap').hidden=u.fields.length<2;
  $('#cw-target').innerHTML=u.fields.map(f=>'<option value="'+esc(f.path)+'"'+(f.path===target?' selected':'')+'>'+esc(f.label)+'</option>').join('');
  marker=document.createComment('care-plan field '+u.id);u.node.before(marker);moved=u.node;$('#cw-editor').appendChild(moved);
  $$('textarea',moved).forEach((el,i)=>{if(!el.getAttribute('aria-label')&&!el.closest('label'))el.setAttribute('aria-label',u.fields.find(f=>f.path===el.dataset.p)?.label||u.label+(i?' '+(i+1):''));});
  remember({active:u.id,mode,targets:{...(read().targets||{}),[u.id]:target}});
  actions();renderHelp();nav();if(options.focus)scrollTitle();
  const picker=$('#cw-picker');if(picker&&window.matchMedia('(max-width: 840px)').matches)picker.open=false;
 }
 function setTarget(path){if(!active.fields.some(f=>f.path===path))return;target=path;$('#cw-target').value=target;remember({targets:{...(read().targets||{}),[active.id]:target}});renderHelp();}
 function rebuild(){
  if(!host)return;restoreUnit();collect();const state=read();mode=state.mode==='word'?'word':'ask';
  if(all){$('#form').hidden=false;return;}
  select(pending||state.active||'cc',{resetSearch:!!pending,focus:!!pending});pending='';
  if(focusBack){const field=$$('[data-p]',moved).find(e=>e.dataset.p===focusBack);if(field)field.focus({preventScroll:true});focusBack='';}
 }
 function remap(prefix,removed){
  const mapPath=path=>{if(!path.startsWith(prefix))return path;const rest=path.slice(prefix.length),m=/^(\d+)(.*)$/.exec(rest);if(!m)return path;return +m[1]===removed?null:prefix+(+m[1]>removed?+m[1]-1:+m[1])+m[2];};
  const old=api.get('_coach')||{},next={};for(const [key,value]of Object.entries(old)){const bits=key.split('::').map(mapPath);if(bits.every(x=>x!==null))next[bits.join('::')]=value;}api.set('_coach',next);
  const state=read(),targets={};for(const [key,value]of Object.entries(state.targets||{})){const k=mapPath(key),v=mapPath(value);if(k!==null&&v!==null)targets[k]=v;}
  remember({active:mapPath(state.active||'')||'',targets});undoEntries.clear();
 }
 function beforeAction(e){
  const b=e.target.closest('button');if(!b)return;let m;
  if(b.dataset.add){const min=b.dataset.add==='support'?2:3;pending=b.dataset.add+'.'+Math.max(min,(api.get(b.dataset.add)||[]).length);}
  if(b.dataset.del){m=/^(support|meds|orders)\.(\d+)$/.exec(b.dataset.del);if(m){pending=m[1]+'.'+Math.max(0,Math.min(+m[2],(api.get(m[1])||[]).length-2));remap(m[1]+'.',+m[2]);}}
  if(b.dataset.addiv!=null){const i=b.dataset.addiv;pending='plan.'+i+'.iv.'+(api.get('plan.'+i+'.iv')||[]).filter(Boolean).length;}
  if(b.hasAttribute('data-addprob'))pending='plan.'+Math.max(1,(api.get('plan')||[]).length)+'.dx';
  if(b.dataset.deliv){m=b.dataset.deliv.split('.');const n=(api.get('plan.'+m[0]+'.iv')||[]).length;pending='plan.'+m[0]+'.iv.'+(n>1?Math.min(+m[1],n-2):'add');remap('plan.'+m[0]+'.iv.',+m[1]);}
  // Removing a whole problem has its own confirmation; remap only after the actual removal is observed.
 }
 function click(e){
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.cwOpen){select(b.dataset.cwOpen,{focus:true});return;}
  if(b.id==='cw-prev'||b.id==='cw-next'){select(units[units.indexOf(active)+(b.id==='cw-next'?1:-1)]?.id,{focus:true,resetSearch:true});return;}
  if(b.id==='cw-more'){limit+=8;nav();return;}
  if(b.id==='cw-jump-help'){$('#cw-coach-title').focus({preventScroll:true});$('.cw-guidance').scrollIntoView({block:'start'});return;}
  if(b.id==='cw-jump-answer'){$('#cw-answer-title').focus({preventScroll:true});$('.cw-answer').scrollIntoView({block:'start'});return;}
  if(b.id==='cw-ask-mode'||b.id==='cw-word-mode'||b.id==='cw-start-writing'){mode=b.id==='cw-ask-mode'?'ask':'word';remember({mode});renderHelp();return;}
  if(b.dataset.cwRecord){mode='word';remember({mode});renderHelp();$('#cw-help [data-cw-fact="'+b.dataset.cwRecord+'"]').focus();return;}
  if(b.id==='cw-build'){
   const p=activeProfile(),r=record(),result=W.assemble(p,r.facts||{}),status=$('#cw-build-status');
   if(!result.text){status.textContent=result.missing.length?'Add '+result.missing.map(k=>p.fields.find(f=>f.id===k)?.label||k).join(', ')+' to build this wording.':'Enter facts for at least one complete sentence.';return;}
   r.draft=result.text;saveRecord(r);$('#cw-draft').value=r.draft;$('#cw-insert').disabled=false;$('#cw-replace').disabled=false;replacement=null;$('#cw-replace-review').innerHTML='';status.textContent='Draft built from your entered facts. Review it before using it.'+(result.unused.length?' Not included yet: '+result.unused.map(k=>p.fields.find(f=>f.id===k)?.label||k).join(', ')+'. Add the matching detail or edit the draft.':'');return;
  }
  if(b.id==='cw-replace'){
   const entry=W.replace(api.get(target),record().draft);if(!entry.changed)return;replacement={...entry,patient:api.patient(),target};
   $('#cw-replace-review').innerHTML='<p><strong>Current answer</strong></p><p class="cw-compare">'+esc(entry.before||'Empty')+'</p><p><strong>Proposed answer</strong></p><p class="cw-compare">'+esc(entry.after)+'</p><button type="button" class="btn" id="cw-confirm-replace">Use this revised answer</button>';return;
  }
  if(b.id==='cw-confirm-replace'){
   if(!replacement||replacement.patient!==api.patient()||replacement.target!==target||String(api.get(target)||'')!==replacement.before||record().draft.trim()!==replacement.after){$('#cw-replace-review').textContent='The answer or draft changed. Review replacing it again.';replacement=null;return;}
   undoEntries.set(api.patient()+'::'+target,replacement);api.set(target,replacement.after);replacement=null;$('#cw-replace-review').textContent='Revised answer inserted. Undo is available until you edit the answer again.';updateUndo();nav();return;
  }
  if(b.id==='cw-insert'){
   if(!target)return;const r=record(),entry=W.append(api.get(target),r.draft);if(!entry.changed){api.toast('That wording is empty or is already in this answer.');return;}
   undoEntries.set(api.patient()+'::'+target,entry);api.set(target,entry.after);updateUndo();nav();api.toast('Wording added to '+(active.fields.find(f=>f.path===target)?.label||active.label)+'.');return;
  }
  if(b.id==='cw-undo'){const previous=W.undo(String(api.get(target)||''),undoEntries.get(api.patient()+'::'+target));if(previous===null)return;api.set(target,previous);undoEntries.delete(api.patient()+'::'+target);updateUndo();nav();api.toast('Last wording change undone.');return;}
  if(b.id==='cw-check'){
   const checks=W.review(api.get(target),activeProfile());$('#cw-check-result').innerHTML=checks.length?'<ul>'+checks.map(c=>'<li>'+esc(c.hint)+'</li>').join('')+'</ul>':'<p>No listed wording issues were detected. Compare the answer with the question and your actual patient data.</p>';return;
  }
  if(b.id==='cw-all'){restoreUnit();all=!all;host.classList.toggle('cw-all',all);$('#cw-work').hidden=all;$('#cw-browse').hidden=all;$('#form').hidden=!all;$('#toc').hidden=!all;b.textContent=all?'Return to one-field workspace':'View the whole form';if(!all)rebuild();return;}
 }
 function start(){
  api=window.CP_HELPER;if(!api||!D||!W)return;
  host=$('#careplan-workspace');if(!host)return;
  host.innerHTML='<div class="cw-top"><p><strong>One field at a time.</strong> Find the form question, collect the right information, then shape the nursing wording.</p><button type="button" class="mini" id="cw-all">View the whole form</button></div><div class="cw-shell"><aside id="cw-browse" class="cw-browse"><details id="cw-picker" open><summary>Choose a form field</summary><label class="fld">Browse section<select id="cw-section">'+window.CP_FORM.map(s=>'<option value="'+s.id+'">'+esc(s.title)+'</option>').join('')+'</select></label><label class="fld">Find a form field<input id="cw-search" type="search" placeholder="e.g., respiratory, rationale, q3" autocomplete="off"></label><p class="muted" id="cw-result-count"></p><nav id="cw-list" aria-label="Choose a care-plan field"></nav></details></aside><section id="cw-work" class="cw-work"><div class="cw-nav"><button type="button" class="mini" id="cw-prev">Previous field</button><span id="cw-position"></span><button type="button" class="mini" id="cw-next">Next field</button></div><p class="cw-location" id="cw-location"></p><div id="cw-related" class="cw-related"></div><p class="cw-paper">Your syllabus field</p><h2 id="cw-question" tabindex="-1"></h2><h3 id="cw-subfield"></h3><details id="cw-full-question" class="cw-context" hidden><summary>Read the full question from my syllabus</summary><p id="cw-paper-question"></p></details><p id="cw-purpose"></p><div class="cw-columns"><div class="cw-answer"><h3 id="cw-answer-title" tabindex="-1">Your answer</h3><button type="button" class="mini cw-jump" id="cw-jump-help">Go to questions &amp; writing help</button><label class="fld" id="cw-target-wrap">Wording goes into<select id="cw-target"></select></label><div id="cw-editor"></div><div class="btns" id="cw-row-actions"></div><button type="button" class="mini" id="cw-check">Check my wording</button><div id="cw-check-result" role="status"></div></div><aside class="cw-guidance"><button type="button" class="mini cw-jump" id="cw-jump-answer">Back to my answer</button><div class="cw-modes"><button type="button" class="mini" id="cw-ask-mode" aria-pressed="true">Questions &amp; checks</button><button type="button" class="mini" id="cw-word-mode" aria-pressed="false">Nursing wording</button></div><h3 id="cw-coach-title" tabindex="-1"></h3><div id="cw-help"></div></aside></div></section></div><details class="cw-sources"><summary>Form and writing references</summary><p>Matched to your NRS 114 Clinical Reasoning Plan of Care, pp. 34–47, in the updated syllabus reviewed November 9, 2026. Use your own words and add the scholarly sources that support your patient-specific rationales.</p><ul>'+D.sources.map(s=>'<li><a href="'+esc(s.url)+'" target="_blank" rel="noopener">'+esc(s.title)+'</a></li>').join('')+'</ul></details>';
  $('#form').hidden=true;$('#toc').hidden=true;
  $('.incbar').hidden=true;$('.how-ask').hidden=true;
  collect();mode=read().mode==='word'?'word':'ask';select(read().active||'cc');
  const mobile=window.matchMedia('(max-width: 840px)');mobile.addEventListener('change',()=>{$('#cw-picker').open=!mobile.matches;});
  host.addEventListener('click',click);
  host.addEventListener('input',e=>{
   if(e.target.id==='cw-search'){query=e.target.value;limit=8;nav();}
   if(e.target.dataset.cwFact){const r=record();r.facts={...(r.facts||{}),[e.target.dataset.cwFact]:e.target.value};saveRecord(r);}
   if(e.target.id==='cw-draft'){const r=record();r.draft=e.target.value;saveRecord(r);$('#cw-insert').disabled=!r.draft.trim();$('#cw-replace').disabled=!r.draft.trim();}
  });
  host.addEventListener('change',e=>{if(e.target.id==='cw-section'){section=e.target.value;query='';$('#cw-search').value='';limit=8;nav();}if(e.target.id==='cw-target')setTarget(e.target.value);if(e.target.dataset.cwFact){const r=record();r.facts={...(r.facts||{}),[e.target.dataset.cwFact]:e.target.value};saveRecord(r);}});
  host.addEventListener('focusin',e=>{if(e.target.dataset.p&&e.target.dataset.p!==target&&moved?.contains(e.target))setTarget(e.target.dataset.p);});
  $('main').addEventListener('click',beforeAction,true);
  // Run after the original form's bubbling input/change handlers have saved the value.
  ['input','change'].forEach(type=>$('main').addEventListener(type,e=>{if(e.target.dataset.p){updateUndo();nav();}}));
  document.addEventListener('careplan-before-render',()=>{focusBack=document.activeElement?.dataset?.p||'';restoreUnit();});
  document.addEventListener('careplan-render',rebuild);
  window.CPWorkspace={active(){return !all;},removed:remap,open(id){api.showTab('fill');all=false;host.classList.remove('cw-all');$('#cw-all').textContent='View the whole form';$('#cw-work').hidden=false;$('#cw-browse').hidden=false;$('#form').hidden=true;$('#toc').hidden=true;select(id,{focus:true,resetSearch:true});},openSection(id){section=id;this.open(units.find(u=>u.section===id)?.id);}};
 }
 document.addEventListener('DOMContentLoaded',start);
})();
