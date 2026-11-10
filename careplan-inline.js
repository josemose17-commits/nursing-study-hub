// Optional wording help attached to the syllabus answers. No second form or field browser.
(function(){
 'use strict';
 const D=window.CP_COACH,W=window.CPWords;
 const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let api,dialog,current,started=false;const undo=new Map();
 const $=s=>dialog.querySelector(s);
 const types={problem:'Problem-focused',risk:'Risk',promo:'Health promotion'};
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

 function record(){return (api.get('_coach')||{})[current.id+'::'+current.path]||{facts:{},draft:''};}
 function saveRecord(r){if(api.patient()!==current.patient)return;const map={...(api.get('_coach')||{})};map[current.id+'::'+current.path]=r;api.set('_coach',map);}
 function valid(){return current&&api.patient()===current.patient&&current.el.isConnected&&current.el.dataset.p===current.path&&String(api.get(current.path)||'')===current.saved&&current.el.value===current.before;}
 function status(text){$('#cpw-status').textContent=text;}
 function refreshButtons(){const r=record(),has=!!String(r.draft||'').trim();$('#cpw-add').disabled=!has;$('#cpw-replace').disabled=!has;}
 function open(el){
  const unit=el.closest('[data-cp-unit]');if(!unit)return;
  const path=el.dataset.p,p=profile({id:unit.dataset.cpUnit,label:unit.dataset.cpLabel},path);if(p.noWording)return;
  current={el,path,id:unit.dataset.cpUnit,p,patient:api.patient(),before:el.value,saved:String(api.get(path)||'')};
  const r=record();$('#cpw-title').textContent='Nursing wording · '+p.title;
  $('#cpw-original').textContent=current.before||'No answer entered yet.';
  $('#cpw-purpose').textContent=p.purpose;
  $('#cpw-facts').innerHTML=p.fields.map(f=>'<label class="fld"><span>'+esc(f.label)+'</span><small>'+esc(f.question)+'</small>'+(f.options?'<select data-word-fact="'+esc(f.id)+'"><option value="">Choose…</option>'+f.options.map(v=>'<option value="'+esc(v)+'"'+(r.facts?.[f.id]===v?' selected':'')+'>'+esc(types[v]||v)+'</option>').join('')+'</select>':'<textarea rows="2" data-word-fact="'+esc(f.id)+'">'+esc(r.facts?.[f.id]||'')+'</textarea>')+'</label>').join('');
  $('#cpw-draft').value=r.draft||'';status('');refreshButtons();dialog.showModal();
 }
 function enhance(){
  document.querySelectorAll('#form [data-p]').forEach(el=>{
   if(el.tagName!=='TEXTAREA'&&!/\.(rfx|aex)$/.test(el.dataset.p))return;
   if(el.nextElementSibling?.hasAttribute('data-phrase'))return;
   const u=el.closest('[data-cp-unit]');if(!u)return;
   if(profile({id:u.dataset.cpUnit,label:u.dataset.cpLabel},el.dataset.p).noWording)return;
   const b=document.createElement('button');b.type='button';b.className='mini cp-phrase';b.dataset.phrase=el.dataset.p;b.textContent='Help me phrase this';
   b.setAttribute('aria-label','Help me phrase this: '+profile({id:u.dataset.cpUnit,label:u.dataset.cpLabel},el.dataset.p).title);
   b.addEventListener('click',()=>open(el));el.after(b);
  });
 }
 function start(){
  if(started||!D||!W||!window.CP_HELPER)return;started=true;api=window.CP_HELPER;
  dialog=document.createElement('dialog');dialog.id='cp-wording';dialog.className='cp-wording';dialog.setAttribute('aria-labelledby','cpw-title');
  dialog.innerHTML='<h2 id="cpw-title">Nursing wording</h2><p id="cpw-purpose"></p><details><summary>My current answer</summary><p id="cpw-original" class="cpw-original"></p></details><p class="muted">Enter only the facts you want included. This local helper puts those facts into sentence patterns; review and edit the draft before using it.</p><div id="cpw-facts"></div><button type="button" class="btn" id="cpw-build">Build nursing wording</button><p id="cpw-status" role="status" aria-live="polite"></p><label class="fld">Editable wording draft<textarea id="cpw-draft" rows="5"></textarea></label><div class="btns"><button type="button" class="btn" id="cpw-add">Add to my answer</button><button type="button" class="mini" id="cpw-replace">Replace my answer with this draft</button><button type="button" class="mini" id="cpw-close">Back to my form</button></div>';
  document.querySelector('main').appendChild(dialog);
  dialog.addEventListener('input',e=>{if(!current)return;const r=record();if(e.target.dataset.wordFact){r.facts={...r.facts,[e.target.dataset.wordFact]:e.target.value};}if(e.target.id==='cpw-draft')r.draft=e.target.value;saveRecord(r);refreshButtons();});
  dialog.addEventListener('change',e=>{if(e.target.dataset.wordFact){const r=record();r.facts={...r.facts,[e.target.dataset.wordFact]:e.target.value};saveRecord(r);}});
  $('#cpw-build').addEventListener('click',()=>{
   if(!valid())return status('This answer or patient changed. Close and reopen wording help for the current answer.');
   const r=record(),result=W.assemble(current.p,r.facts);r.draft=result.text;saveRecord(r);$('#cpw-draft').value=r.draft;
   const missing=result.missing.map(id=>current.p.fields.find(f=>f.id===id)?.label||id);
   const unused=result.unused.map(id=>current.p.fields.find(f=>f.id===id)?.label||id);
   status(missing.length?'Add these facts first: '+missing.join(', '):unused.length?'Some facts need more context before they can form a sentence: '+unused.join(', '):result.text?'Review the draft, including times, sources and patient-specific details.':'Add the facts needed to build a sentence.');refreshButtons();
  });
  function apply(replace){
   if(!valid())return status('Your answer changed while this draft was open. Close and reopen the help to review the latest answer.');
   const draft=$('#cpw-draft').value;if(!draft.trim())return;
   if(replace&&current.before.trim()&&!window.confirm('Replace the current answer shown above with your reviewed draft?'))return;
   if(!valid())return status('The answer changed. Reopen wording help before inserting.');
   const entry=replace?W.replace(current.before,draft):W.append(current.before,draft);
   if(!entry.changed)return status('That wording is already in your answer.');
   const path=current.path,key=current.patient+'::'+path;
   api.set(path,entry.after);undo.set(key,entry);dialog.close();
   const b=current.el.nextElementSibling;if(b?.hasAttribute('data-phrase')){
    b.textContent='Help me phrase this';
    let ub=b.nextElementSibling;if(!ub?.hasAttribute('data-phrase-undo')){ub=document.createElement('button');ub.type='button';ub.className='mini';ub.dataset.phraseUndo=path;ub.textContent='Undo wording change';b.after(ub);}
    ub.onclick=()=>{const value=W.undo(String(api.get(path)||''),undo.get(key));if(api.patient()!==key.slice(0,key.indexOf('::'))||value===null)return api.toast('Your answer has newer edits. Undo will not overwrite them.');api.set(path,value);undo.delete(key);ub.remove();};
   }
  }
  $('#cpw-add').addEventListener('click',()=>apply(false));$('#cpw-replace').addEventListener('click',()=>apply(true));$('#cpw-close').addEventListener('click',()=>dialog.close());
  // Remap saved drafts only after a row was actually removed (including confirmation).
  document.querySelector('main').addEventListener('click',e=>{
   const b=e.target.closest('button');if(!b)return;let prefix,index,countPath,m;
   if(b.dataset.del&&(m=/^(support|meds|orders)\.(\d+)$/.exec(b.dataset.del))){prefix=m[1]+'.';index=+m[2];countPath=m[1];}
   else if(b.dataset.deliv&&(m=/^(\d+)\.(\d+)$/.exec(b.dataset.deliv))){prefix='plan.'+m[1]+'.iv.';index=+m[2];countPath='plan.'+m[1]+'.iv';}
   else if(b.dataset.delprob!=null){prefix='plan.';index=+b.dataset.delprob;countPath='plan';}
   else return;
   const patient=api.patient(),before=(api.get(countPath)||[]).length;
   queueMicrotask(()=>{
    if(api.patient()!==patient||(api.get(countPath)||[]).length>=before)return;
    const remap=path=>{if(!path.startsWith(prefix))return path;const match=/^(\d+)(.*)$/.exec(path.slice(prefix.length));if(!match)return path;return +match[1]===index?null:prefix+(+match[1]>index?+match[1]-1:+match[1])+match[2];};
    const next={};for(const [key,value]of Object.entries(api.get('_coach')||{})){const parts=key.split('::').map(remap);if(parts.every(p=>p!==null))next[parts.join('::')]=value;}
    api.set('_coach',next);undo.clear();
   });
  },true);
  document.addEventListener('careplan-render',enhance);
  // Intervention rows can rerender without the whole-form event.
  new MutationObserver(enhance).observe(document.querySelector('#form'),{childList:true,subtree:true});
  enhance();
 }
 document.addEventListener('DOMContentLoaded',start);
})();
