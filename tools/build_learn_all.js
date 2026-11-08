// Build Learn from the site's authored notes and read-only question banks.
// No model-generated text or network requests run in this deterministic build.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.join(__dirname,'..'), read=f=>fs.readFileSync(path.join(root,f),'utf8');
const catalog=require('./learn-catalog'),custom=require('./learn-questions'),learnTerms=require('./learn-terms');
const namedTerms=[...Object.keys(learnTerms.medications),...learnTerms.stems.flatMap(([, ,ns])=>ns.split(' ')),...Object.keys(learnTerms.splits)];
const termsIn=value=>{const text=JSON.stringify(value).toLowerCase();return namedTerms.filter(t=>new RegExp('(^|[^a-z])'+t+'([^a-z]|$)').test(text));};
const plain=s=>String(s||'').replace(/<[^>]*>/g,' ').replace(/\*+/g,'').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
function load(files){const c=vm.createContext({window:{}});files.forEach(f=>vm.runInContext(read(f),c,{filename:f}));return c.window;}
const e2=load(['data/info-topics.js','data/concept-nodes.js',...fs.readdirSync(path.join(root,'data/notes-short')).filter(f=>f.endsWith('.js')).sort().map(f=>'data/notes-short/'+f),'data/extra-questions.js',...['22-23','24-25','27-28','29-30','33-34'].map(f=>'data/recall-'+f+'.js'),...['22-25','27-30','33-34'].map(f=>'data/ngn-'+f+'.js')]);
const fin=load(['data/e3/info-topics.js','data/e3/notes-short.js',...['13','14','15','16','17','45','46','47','48','49','50','51','52','53','55','56'].map(ch=>'data/e3/q/'+ch+'.js'),'data/e3/q/more.js','data/e3/lessons.js','data/e3/studios.js']);
const refs={
 toxicity:{title:'Utah Poison Control: physostigmine precautions and monitoring',url:'https://poisoncontrol.utah.edu/news/2024/02/physostigmine-or-rivastigmine-anticholinergic-toxicity'},
 nms:{title:'DailyMed: haloperidol labeling, NMS recognition and management',url:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b5a6c54c-fb70-4132-90ae-7d75b5e9c9de'},
 fasting:{title:'ASA: fasting guidance for healthy patients having elective procedures',url:'https://doi.org/10.1097/ALN.0000000000004381'},
 mh:{title:'MHAUS: managing a malignant hyperthermia crisis',url:'https://www.mhaus.org/healthcare-professionals/managing-a-crisis/'},
 allergy:{title:'Resuscitation Council UK: emergency treatment of anaphylaxis',url:'https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment'},
 cdiff:{title:'CDC: C. difficile prevention in acute care',url:'https://www.cdc.gov/c-diff/hcp/clinical-guidance/index.html'},
 hands:{title:'CDC: healthcare hand hygiene and C. difficile',url:'https://www.cdc.gov/clean-hands/hcp/clinical-safety/'},
 clozapine:{title:'FDA: clozapine REMS removed; ANC monitoring continues',url:'https://www.fda.gov/drugs/drug-safety-and-availability/fda-removes-risk-evaluation-and-mitigation-strategy-rems-program-antipsychotic-drug-clozapine'},
 schizophrenia:{title:'NIMH: schizophrenia, symptoms and individualized risk',url:'https://www.nimh.nih.gov/health/publications/schizophrenia'},
 naloxone:{title:'FDA: naloxone, emergency help and continued observation',url:'https://www.fda.gov/consumers/consumer-updates/access-naloxone-can-save-life-during-opioid-overdose'},
 asthma:{title:'GINA 2026: asthma management and prevention',url:'https://ginasthma.org/2026-gina-summary-guide/'},
 sickleCare:{title:'NHLBI: sickle cell acute complications',url:'https://www.nhlbi.nih.gov/sites/default/files/publications/56-364NFULL.pdf'},
 sickle:{title:'FDA: Oxbryta (voxelotor) withdrawn because of safety concerns',url:'https://www.fda.gov/drugs/drug-alerts-and-statements/fda-alerting-patients-and-health-care-professionals-about-voluntary-withdrawal-oxbryta-market-due'},
 pancreatitis:{title:'NICE NG104: acute pancreatitis and nutrition',url:'https://www.nice.org.uk/guidance/ng104/chapter/Recommendations'}
};
const updates={
 preop:['Fasting intervals such as clear liquids up to 2 hours before anesthesia apply to selected healthy patients having elective procedures. Confirm the individual anesthesia instructions and aspiration risk; a general interval is not permission to give intake against the patient’s orders.',['fasting']],
 malhyp:['Suspected malignant hyperthermia requires immediate help, discontinuing triggering agents, 100% oxygen and rapid IV dantrolene under the crisis protocol. Do not wait for fever to begin the response.',['mh']],
 anaphylaxis:['Suspected anaphylaxis needs immediate emergency help and prompt IM epinephrine under protocol. Airway and breathing support proceed together; antihistamines do not replace epinephrine. Avoid having the patient stand or walk during the reaction.',['allergy']],
 cdiff:['Use contact precautions, appropriate gown/glove use, dedicated equipment and sporicidal environmental cleaning. Soap and water is important for visibly soiled hands and during C. difficile outbreaks. CDC still prefers alcohol-based hand rub in most routine clinical situations; follow the facility’s infection-prevention policy.',['cdiff','hands']],
 antipsychotics:['FDA removed the clozapine REMS effective June 13, 2025. Severe neutropenia remains a risk: continue ANC monitoring per the current prescribing information and promptly assess signs of infection. REMS removal did not remove the monitoring need.',['clozapine']],
 spectrum:['Assess the individual’s actual symptoms, intent, access to means, substance use and protective factors. Most people with schizophrenia are not violent; a diagnosis alone is not a violence prediction.',['schizophrenia']],
 schizo:['Assess command content, intent, ability to resist, access to means and other actual risk factors. Most people with schizophrenia are not violent; respond to this patient’s findings and needs.',['schizophrenia']],
 opioid:['For suspected opioid overdose, activate emergency help, support breathing and give naloxone under the product directions/protocol. Continue observation and repeat dosing as indicated: respiratory depression can return after naloxone wears off.',['naloxone']],
 postresp:['Opioid-related shallow or slow breathing with reduced alertness needs immediate assessment, emergency escalation, breathing support and naloxone as indicated by protocol. Supplemental oxygen alone does not correct inadequate ventilation.',['naloxone']],
 asthma:['Use the prescribed asthma action plan. Current GINA care includes inhaled corticosteroid-containing treatment; do not interpret a SABA rescue example as a recommendation for SABA-only long-term treatment. ICS-formoterol can be an anti-inflammatory reliever when that regimen is prescribed.',['asthma']],
 'sickle-cell':['Voxelotor (Oxbryta) was withdrawn in 2024 because of safety concerns. Historical book lists are not a current prescribing recommendation; use the hematology team’s current plan. Oxygen is used for low saturation under the treatment plan; tailor fluids to volume status and avoid overhydration.',['sickle','sickleCare']],
 'acute-pancreatitis':['Do not automatically withhold food solely to “rest the pancreas.” NICE recommends oral intake unless a clear reason prevents it; moderately severe/severe cases need enteral nutrition started within 72 hours. Individualize fluids, pain control and nutrition to the clinical course and prescribed plan.',['pancreatitis']]
};
function question(ref,bank){
 if(custom[ref])return {...custom[ref],sourceId:custom[ref].id};
 const [ch,kind,n]=ref.split('|'),q=kind==='trad'?bank.RECALL_EXTRA[ch]?.nclex[+n]:bank.NGN_EXTRA[ch]?.[+n];
 if(!q||!Array.isArray(q.o)||!Array.isArray(q.a)||!Array.isArray(q.r)||(q.f&&!['mcq','sata','exhibit','selectn'].includes(q.f)))throw Error('Unsupported '+ref);
 return {id:ref,sourceId:`${ch}|${kind==='trad'?'c':'n'}|${n}`,q:plain(q.q),o:q.o.map(plain),a:[...q.a],r:q.r.map(plain),ex:q.ex||[],selectCount:q.f==='selectn'?q.a.length:0,phys:plain(q.phys),rule:plain(q.rule)};
}
function mhQuestion(q){const a=Array.isArray(q.a)?[...q.a]:[q.a],why=plain(q.why);return {id:q.id,sourceId:q.id,q:plain(q.stem),o:q.opts.map(plain),a,r:q.opts.map((_,i)=>(a.includes(i)?'Supported. ':'Not supported for this question. ')+why),phys:why,ex:[]};}
function chapters(s){const out=new Set();String(s).replace(/(\d+)\s*[–-]\s*(\d+)/g,(_,a,b)=>{for(let i=+a;i<=+b;i++)out.add(String(i));return '';}).match(/\d+/g)?.forEach(ch=>out.add(ch));return [...out].sort((a,b)=>+a-+b);}
function reflect(id,prompt,answer,scene=''){
 return {id,kind:'reflect',scene:scene||'Explain the idea before revealing the worked response.',task:plain(prompt),answer:plain(answer),hint:'Retrieve the explanation first, then compare it honestly with the worked response.',options:[{id:'covered',text:'I covered the key idea before revealing',correct:true,why:'Self-check recorded for this rehearsal. The independent checkpoint comes later.'},{id:'again',text:'I need another look',correct:false,why:'Read the explanation, hide it, and try to retrieve it again.'}]};
}
function coached(id,q){return {id,kind:'choice',scene:q.ex.length?'Use the patient data below.':q.q,ex:q.ex,task:q.ex.length?q.q:'Which response fits?',hint:q.rule||'Identify the exact task, relevant findings and the safety constraint before comparing the choices.',options:q.o.map((text,i)=>({id:'o'+i,text,correct:q.a.includes(i),why:q.r[i]}))};}
function finishLesson(l,lab,prompts,sources=[]){
 const update=updates[l.id];if(update){l.why.push(update[0]);l.clinicalUpdate=update[0];sources.push(...update[1].map(k=>refs[k]));}
 // All statements stay traceable to authored source notes; a source link is never an exam blueprint.
 const originalQs=l.questions,extra=originalQs.length>2?originalQs.find(q=>q.a.length===1):null;
 if(extra)l.questions=originalQs.filter(q=>q.id!==extra.id);
 const steps=prompts.slice(0,2).map(([q,a],i)=>reflect(l.id+':r'+i,q,a,l.patient||''));
 if(extra)steps.unshift(coached(l.id+':case',extra));
 lab={...lab,id:l.id,ch:l.ch,chapters:l.chapters,title:l.title,notes:l.notes,book:l.source,why:l.why,terms:l.terms,termDefinitions:l.termDefinitions||{},patient:l.patient||'',sourceSections:l.sourceSections||[],clinicalUpdate:l.clinicalUpdate||'',sources,steps,caseId:l.caseId||''};
 l.studio=l.id;return {lesson:l,lab};
}
function blocksFor(bank,notes){return notes.flatMap(n=>Object.entries(bank.NOTES_SHORT[n]||{}).map(([h,lines])=>({note:n,title:plain(h),lines:(Array.isArray(lines)?lines:[lines]).map(plain).filter(Boolean)}))).filter(b=>b.lines.length);}
function coreBlocks(blocks){
 const choose=re=>blocks.find(b=>re.test(b.title));
 const out=[choose(/Why|Definition|Mechanism|The problem|Overview|How it|What it/i)||blocks[0],choose(/finding|sign|symptom|Heart and|Brain and/i)||choose(/assess|recogniz|History/i)||blocks[1],choose(/Priorit|Intervention|treat|caring|safety|care|management/i)||choose(/Prevention/i)||blocks[2]].filter(Boolean);
 return [...new Set(out.concat(blocks.filter(b=>/Why|evaluate/i.test(b.title))))].slice(0,4);
}
const nodeMap={'resp-prevention':'promo','pack-years':'packyr','resp-aging':'resp-age',asthma:'asthma',copd:'copd',pneumonia:'pna','cardiac-aging':'cv-age','ecg-recording':'ecg-r','ecg-analysis':'ecg-a','heart-failure':'hf',hypertension:'htn','arterial-venous':'pad','dvt-anticoagulants':'dvt','hematology-labs':'labs',anemia:'anemia','sickle-cell':'sickle',leukemia:'leuk','upper-airway':'osa'};
function buildGrouped(defs,bank,exam){
 const selected=new Map(defs.map(d=>[d.id,bank.INFO_TOPICS.filter(t=>t.ch===d.ch&&d.match.test(t.title)).map(t=>t.id)]));
 // Keep every authored topic accessible, including tables and ADPIE, in a chapter lesson.
 for(const t of bank.INFO_TOPICS.filter(t=>defs.some(d=>d.ch===t.ch))){if(![...selected.values()].some(ns=>ns.includes(t.id)))selected.get(defs.find(d=>d.ch===t.ch).id).push(t.id);}
 return defs.map(d=>{
  const notes=selected.get(d.id),blocks=blocksFor(bank,notes),core=coreBlocks(blocks),node=exam==='e2'&&bank.CONCEPT_NODES.find(n=>n.id===nodeMap[d.id]);
  if(!notes.length||core.length<2)throw Error('Missing source detail: '+d.id);
  let cards=core.slice(0,3).map(b=>({title:b.title,text:b.lines.slice(0,4).join(' · ')}));
  let why=core.map(b=>b.title+': '+b.lines.join('; '));
  if(node){cards=[{title:'Mechanism',text:plain(node.core)},{title:'Observe',text:(node.see||node.labs||[]).map(plain).slice(0,4).join(' · ')},{title:'Act and reassess',text:(node.do||node.teach||[]).map(plain).slice(0,4).join(' · ')}];why=[plain(node.core),'Findings: '+(node.see||node.labs||[]).map(plain).join('; '),'Nursing actions: '+(node.do||node.teach||[]).map(plain).join('; '),plain(node.flag)].filter(Boolean);}
  const checks=core.slice(0,3).map(b=>'Explain '+b.title.toLowerCase()+' in '+d.title.split(':')[0]+'.');
  const prompts=core.slice(0,3).map(b=>['What do you remember about '+b.title.toLowerCase()+'?',b.lines.join('; ')]);
  const l={id:d.id,ch:d.ch,chapters:[d.ch],title:d.title,notes,source:`${exam==='e2'?'Exam 2':'Final'} · Ignatavicius chapter ${d.ch}; existing authored chapter notes and question bank.`,why,checks,recallAnswers:core.slice(0,3).map(b=>b.lines.join('; ')),requires:[],terms:d.terms,questions:d.refs.map(ref=>question(ref,bank)),sourceSections:notes.map(n=>({id:n,title:bank.INFO_TOPICS.find(t=>t.id===n).title,blocks:blocks.filter(b=>b.note===n)}))};
  const q=l.questions[0];return finishLesson(l,{visual:{type:node?'flow':'compare',title:d.title,cards,caption:'Connect the mechanism with the findings, actions and reassessment. Open the chapter detail below for the full authored notes.'},strategy:{title:q.rule||'Answer the task using the patient’s actual findings',task:q.q,cue:q.phys||cards[1].text,rule:q.rule||'Identify the mechanism, match the cues and choose the response that addresses this situation.',trap:'A related fact can still answer a different task. Check the actual instructions and patient data.'}},prompts);
 });
}
function buildMH(dir,exam){
 const bank=load(['data/'+dir+'/topics.js',...fs.readdirSync(path.join(root,'data/'+dir)).filter(f=>f.startsWith('cond-')&&f.endsWith('.js')).sort().map(f=>'data/'+dir+'/'+f),'data/'+dir+'/questions.js']);
 const out=[];
 for(const t of bank.MH_TOPICS){
  const chs=chapters(t.ch),qs=bank.MH_Q.filter(q=>q.link==='t-'+t.id).map(mhQuestion);
  if(exam==='e4'&&t.id==='trauma')qs.push(custom['trauma-choice']);
  if(exam==='e5'&&t.id==='neurocog')qs.push(custom['neurocog-change']);
  const terms=[...new Set((t.terms||[]).map(x=>x.t).concat(termsIn(t)))],termDefinitions=Object.fromEntries((t.terms||[]).map(x=>[x.t,[x.see,x.why,x.means].map(plain).join(' ')]));
  const why=[plain(t.lead),...t.cards.filter(c=>c.why).slice(0,1).map(c=>plain(c.why)),...t.cards.slice(0,2).map(c=>plain(c.h)+': '+c.b.map(plain).join('; '))];
  const l={id:'t-'+t.id,ch:chs[0],chapters:chs,title:t.title,notes:['t-'+t.id],source:`${exam==='e1'?'Ignatavicius':'Varcarolis 9e'} · ${t.ch}; existing site-authored topic notes and question bank.`,why,checks:t.recall.slice(0,4).map(x=>plain(x[0])),recallAnswers:t.recall.slice(0,4).map(x=>plain(x[1])),requires:[],terms,termDefinitions,questions:qs,sourceSections:[{id:'t-'+t.id,title:t.title,blocks:t.cards.map(c=>({title:plain(c.h),lines:c.b.map(plain).concat(c.why?[plain(c.why)]:[])}))}]};
  // Stable content ID without the topic route prefix for clinical update lookups.
  const u=updates[t.id];if(u){l.why.push(u[0]);l.clinicalUpdate=u[0];}
  const result=finishLesson(l,{visual:{type:'compare',title:t.title,cards:t.cards.slice(0,3).map(c=>({title:plain(c.h),text:c.b.slice(0,3).map(plain).join(' · ')})),caption:plain(t.short)},strategy:{title:'Match the response to the patient and the task',task:plain(t.recall[0][0]),cue:plain(t.short),rule:plain(t.recall[0][1]),trap:'Do not infer intent or a diagnosis from a single label. Use the stated findings and the exact question.'}},t.recall,u?u[1].map(k=>refs[k]):[]);
  out.push(result);
 }
 for(const c of bank.MH_CONDS){
  const ch=catalog.conditionChapters[exam][c.id],qs=bank.MH_Q.filter(q=>q.link==='c-'+c.id&&q.id!=='q5-sz-3').map(mhQuestion);
  if(c.id==='nms')qs.push(custom['nms-response']);
  const ss=c.steps,why=['Mechanism: '+plain(ss.ac.gist),'Priority: '+plain(ss.ph.gist),'Act: '+plain(ss.ta.gist),'Reassess: '+plain(ss.eo.gist)];
  const terms=Object.values(ss).flatMap(s=>(s.terms||[]).map(t=>t.t)),termDefinitions=Object.fromEntries(Object.values(ss).flatMap(s=>(s.terms||[]).map(t=>[t.t,[t.see,t.why,t.means].map(plain).join(' ')])));
  const l={id:'c-'+c.id,ch,chapters:[ch],title:c.name,patient:c.patient,notes:['c-'+c.id],source:`${exam==='e1'?'Ignatavicius':'Varcarolis 9e'} chapter ${ch}; existing site-authored clinical reasoning case and question bank.`,why,checks:['Identify the relevant findings and explain their mechanism.','Explain the priority, immediate actions and important precautions.','State the findings that show improvement or deterioration.'],recallAnswers:[plain(ss.rc.gist)+' '+plain(ss.ac.gist),plain(ss.ph.gist)+' '+plain(ss.ta.gist),plain(ss.eo.gist)],requires:[],terms:[...new Set(terms.concat(termsIn(c)))],termDefinitions,questions:qs,sourceSections:Object.entries(ss).map(([id,s])=>({id:'c-'+c.id,title:({rc:'Recognize cues',ac:'Analyze cues',ph:'Prioritize',gs:'Goals',ta:'Take action',eo:'Evaluate'})[id],blocks:[{title:'Reasoning',lines:[plain(s.gist)]},...(s.cards||[]).map(b=>({title:plain(b.h),lines:b.b.map(plain).concat(b.why?[plain(b.why)]:[])}))]}))};
  const u=updates[c.id];if(u){l.why.push(u[0]);l.clinicalUpdate=u[0];}
  out.push(finishLesson(l,{visual:{type:'decision',title:'From cues to a safer next action',cards:[{title:'Recognize',text:plain(ss.rc.gist)},{title:'Explain the priority',text:plain(ss.ph.gist)},{title:'Act and reassess',text:plain(ss.eo.gist)}],caption:'Use the patient’s actual findings rather than the diagnosis label alone.'},strategy:{title:'Recognize → prioritize → act → reassess',task:'Choose the next response for this patient.',cue:plain(c.short),rule:plain(ss.ph.gist),trap:'Do not delay an urgent protective action while choosing a routine teaching or comfort intervention.'}},[['Which findings change the priority, and why?',ss.ph.gist],['What will you do, and how will you know it worked?',ss.ta.gist+' '+ss.eo.gist]],u?u[1].map(k=>refs[k]):[]));
 }
 return out;
}
// Focused updates replace older phrasing in the generated view; source banks remain unchanged.
function safetyEdits(rows){
 for(const {lesson:l,lab}of rows){
  for(const sec of l.sourceSections||[])for(const b of sec.blocks){
   if(l.id==='acute-pancreatitis'&&/NPO and fluids/i.test(b.title))b.lines=['Do not routinely withhold food without a clinical reason (for example vomiting). Follow the individualized nutrition and fluid plan.','Assess perfusion, respiratory status, urine output and overload during prescribed IV fluid replacement.'];
   if(l.id==='acute-pancreatitis'&&/Feeding|Eating again/i.test(b.title))b.lines=['Offer oral intake when clinically appropriate; do not require prolonged fasting to rest the pancreas.','For moderately severe/severe disease, start enteral nutrition within 72 hours under the treatment plan.'];
   if(l.id==='acute-pancreatitis'&&/Pain drugs/i.test(b.title))b.lines=b.lines.filter(t=>!/^Antibiotics:/i.test(t)).concat('Antimicrobials are for a clinical indication such as infection, not routine prophylaxis in acute pancreatitis.');
   b.lines=b.lines.map(s=>s.replace(/[^.]*voxelotor[^.]*(?:\.|$)/gi,'Historical drug-list update: voxelotor was withdrawn in 2024.').replace(/[^.]*REMS[^.]*(?:\.|$)/gi,'Clozapine REMS was removed in 2025; ANC monitoring continues per labeling.'));
  }
  if(l.id==='t-spectrum')for(const sec of l.sourceSections)for(const b of sec.blocks)b.lines=b.lines.filter(s=>!/^Paranoia.*violence|Symptom most linked to violence/i.test(s));
  if(l.id==='sickle-cell'){
   l.why=l.why.map(t=>t.replace('Crisis: hydrate, O₂, opioids (often PCA)','Crisis: prescribed analgesia; fluids matched to volume status; oxygen for hypoxemia as ordered'));lab.why=l.why;
   lab.visual.cards=lab.visual.cards.map(c=>({...c,text:c.text.replace('Crisis: hydrate, O₂, opioids (often PCA)','Prescribed analgesia · fluids matched to volume status · oxygen for hypoxemia')}));
  }
  if(l.clinicalUpdate){lab.visual.caption+=' See the highlighted clinical update below.';}
 }
 for(const row of rows){
  const text=JSON.stringify(row);
  if(text.includes('physostigmine'))row.lab.sources.push(refs.toxicity);
  if(/NMS|neuroleptic malignant/i.test(text))row.lab.sources.push(refs.nms);
 }
 const qualify=value=>{
  if(typeof value==='string')return value.startsWith('https://')?value:value.replace(/fever above 103 ?°F/gi,'fever').replace(/(?<!specialist-directed )physostigmine(?! \(after contraindication)/gi,'specialist-directed physostigmine (after contraindication review, with cardiac monitoring)');
  if(Array.isArray(value))return value.map(qualify);
  if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,['questions','terms','sources'].includes(k)?v:qualify(v)]));
  return value;
 };
 return rows.map(qualify);
}

const configs={
 e1:{label:'Exam 1',key:'e1-learn-v1',map:'Exam 1 Map.html',test:'Exam 1 Map.html#test',mhPrefix:'e1-',scope:'Perioperative care, immunity, cancer and infection: every currently authored topic and clinical reasoning condition for Exam 1.',weightNote:'No professor question-count blueprint is encoded here; recommendations balance chapter coverage.'},
 e2:{label:'Exam 2',key:'e2-learn-v1',map:'Exam 2 Map.html',test:'Exam 2 Mastery Loop.dc.html',drugs:'Exam 2 Drug Cards.dc.html',masteryKey:'e2-mastery-v3',scope:'All 17 named study-guide groups, with supporting lessons across chapters 22–25, 27–30 and 33–34. Full authored notes, tables and ADPIE stay linked.',weightNote:'Study-guide question counts: 22: 5; 24: 8; 25: 5; 27: 3; 28: 5; 29: 6; 30: 8; 34: 20. Chapters 23 and 33 are supporting review.',blueprint:{22:5,23:0,24:8,25:5,27:3,28:5,29:6,30:8,33:0,34:20}},
 e4:{label:'Exam 4',key:'e4-learn-v1',map:'Exam 4 Map.html',test:'Exam 4 Map.html#test',mhPrefix:'e4-',scope:'Week 11 foundations and week 12 mood, anxiety, trauma and safety content: every currently authored topic and clinical reasoning condition.',weightNote:'No professor question-count blueprint is encoded here; recommendations balance chapter coverage.'},
 e5:{label:'Exam 5',key:'e5-learn-v1',map:'Exam 5 Map.html',test:'Exam 5 Map.html#test',mhPrefix:'e5-',scope:'Weeks 13–15: psychosis, somatic/dissociative disorders, children, eating, substances, neurocognitive and personality disorders. Every currently authored topic and condition is included.',weightNote:'No professor question-count blueprint is encoded here; recommendations balance chapter coverage.'},
 final:{label:'Final',key:'fin-learn-v1',map:'Final Map.html',test:'Final Mastery Loop.dc.html',drugs:'Exam 3 Drug Cards.dc.html',masteryKey:'fin-mastery-v1',scope:'Provisional final-topic path: authored notes for chapters 13–17, 22–25, 45–53, 55–56. This includes the Exam 3 lessons and respiratory review. The syllabus calls the final comprehensive; no detailed final blueprint has been provided. Use the earlier-exam links for the rest of the cumulative review.',gaps:'The Final Map also lists chapters 1, 2, 4, 7, 8, 10, 11 and 12 as planned foundations. Their full chapter notes are not present, so this path does not claim those chapters are covered.',weightNote:'Equal chapter balancing for this provisional path; these are not professor exam-question weights.'}
};
const sets={e1:buildMH('e1','e1'),e2:buildGrouped(catalog.e2,e2,'e2'),e4:buildMH('mh','e4'),e5:buildMH('mh5','e5')};
sets.final=buildGrouped(catalog.final,fin,'final').concat(sets.e2.filter(x=>['22','23','24','25'].includes(x.lesson.ch)).map(x=>JSON.parse(JSON.stringify(x))),fin.EXAM3_LESSONS.lessons.map(l=>({lesson:JSON.parse(JSON.stringify(l)),lab:JSON.parse(JSON.stringify(fin.EXAM3_STUDIOS.labs.find(x=>x.id===l.id)))})));
// Include Final-only detailed respiratory notes and every source section in its chapter.
// Earlier Exam 3 lessons keep their IDs, questions and prerequisites when reused here.
for(const topic of fin.INFO_TOPICS){
 if(sets.final.some(x=>x.lesson.notes.includes(topic.id)))continue;
 const row=sets.final.find(x=>x.lesson.ch===topic.ch);if(!row)throw Error('No Final chapter lesson for '+topic.id);
 row.lesson.notes.push(topic.id);row.lab.notes=row.lesson.notes;
 row.lab.sourceSections=row.lab.sourceSections||[];
 row.lab.sourceSections.push({id:topic.id,title:topic.title,blocks:blocksFor(fin,[topic.id])});
}
fs.mkdirSync(path.join(root,'data/learn'),{recursive:true});
const manifest={source:'Existing authored notes and question banks; see per-lesson references. No raw-book completeness claim.',exams:{}};
for(const [exam,rawRows]of Object.entries(sets)){
 const rows=safetyEdits(rawRows),config=configs[exam],lessons=rows.map(x=>x.lesson),chs=[...new Set(lessons.flatMap(l=>l.chapters||[l.ch]))].sort((a,b)=>+a-+b);
 config.page=config.label+' Learn.html';config.chapters=chs;
 const weights=Object.fromEntries(chs.map(ch=>[ch,Math.max(1,config.blueprint?.[ch]||1)]));
 const outputLessons=lessons.map(({sourceSections,...l})=>l);
 const payload={config,weights,lessons:outputLessons,studios:{version:1,mapPage:config.map,learnPage:config.page,labs:rows.map(x=>x.lab)}};
 if(new Set(lessons.map(l=>l.id)).size!==lessons.length)throw Error('Duplicate lesson ID in '+exam);
 for(const l of lessons)if(l.questions.length<2||l.questions.some(q=>q.r.length!==q.o.length))throw Error('Question coverage '+exam+'/'+l.id);
 fs.writeFileSync(path.join(root,'data/learn/'+exam+'.js'),'// Generated by tools/build_learn_all.js from authored source notes and read-only banks.\nwindow.LEARN_DATA = '+JSON.stringify(payload)+';\nwindow.LEARN_CFG = window.LEARN_DATA.config;\nwindow.LEARN_STUDIOS = window.LEARN_DATA.studios;\n');
 manifest.exams[exam]={label:config.label,chapters:chs,lessons:lessons.length,gradedItems:lessons.reduce((n,l)=>n+l.questions.length,0),coachedActivities:rows.reduce((n,x)=>n+x.lab.steps.length,0)+(exam==='final'?6:0),notes:[...new Set(lessons.flatMap(l=>l.notes))].length,coverage:Object.fromEntries(lessons.map(l=>[l.id,{chapters:l.chapters||[l.ch],notes:l.notes,questions:l.questions.map(q=>q.sourceId||q.id)}]))};
 console.log(config.label+': '+lessons.length+' lessons, '+manifest.exams[exam].gradedItems+' rotating graded checkpoints, '+manifest.exams[exam].coachedActivities+' coached activities');
}
fs.writeFileSync(path.join(root,'data/learn/coverage.json'),JSON.stringify(manifest,null,2)+'\n');
