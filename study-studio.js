// Shared Exam 3 visuals, coached activities and post-answer strategy reviews.
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else{root.Exam3Studio=api;api.mount(root)}})(typeof window==='object'?window:globalThis,function(){
'use strict';
let data={labs:[]},pilot=null;
const esc=x=>String(x==null?'':x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const reasons={content:'Content knowledge',stem:'Reading the task',priority:'Prioritization',format:'Question format'};
const formats={
 single:['Answer the exact task','Find whether the query asks for a finding, explanation, next action or outcome. Compare all options against the given patient.','A true statement may answer a different task. Do not invent missing findings.'],
 sata:['Evaluate each option independently','Check every option against the scenario. Select all supported responses rather than aiming for a familiar count.','A related statement is not automatically correct for this patient. Incorrect selections can lose points under plus/minus scoring.'],
 selectn:['Follow the requested number','Identify the number of responses requested, then rank the supported choices and select exactly that many.','Do not use a SATA habit when the item asks for a fixed number.'],
 matrix:['Read both axes','Check the row finding and the column/category before selecting. Follow whether the item allows one or multiple selections per row/column.','An answer in the right category but the wrong row still does not address that finding.'],
 mmatrix:['Check every column and row','Use the item’s instructions to determine how many selections belong in each part of the matrix.','Do not assume all grids use the same selection rule.'],
 hl:['Highlight only what answers the query','Separate relevant abnormal or supporting cues from background facts, using the actual question.','A fact can be abnormal without answering the specific task being asked.'],
 cloze:['Complete the clinical relationship','Read the whole completed sentence or table. Check that the cause, effect and action fit together.','A plausible word can form an incorrect relationship with the rest of the sentence.'],
 bow:['Link condition, actions and monitoring','Use a condition supported by the cues, actions that address it, and outcomes that evaluate the actions. Follow the number requested in each group.','Do not choose monitoring findings that are unrelated to the selected problem.'],
 group:['Read each group’s instructions','Sort each choice using its own category and the patient’s data.','A correct fact in the wrong group is still misplaced.'],
 order:['Identify prerequisites and the endpoint','Place steps in the sequence required by the scenario. Check which actions depend on an earlier step.','A collection’s start and end can have different instructions.'],
 calc:['Units, calculation, reasonableness','Convert to compatible units, calculate, then round only as the item directs and check the result.','A mathematically correct number with the wrong unit is not the requested dose.'],
 recall:['Retrieve before revealing','Explain the mechanism and action without looking, then compare with the checkpoints honestly.','Recognizing the revealed explanation is different from recalling it first.']
};
function configure(d,p){data=d&&Array.isArray(d.labs)?d:{labs:[]};if(p)pilot=p;return data;}
function get(id){return data.labs.find(l=>l.id===id);}
function H(){return pilot||(typeof window==='object'&&window.HypoLab);}
function isPilot(id){return id==='hypoglycemia'&&!!H();}
function steps(id){const l=get(id);return isPilot(id)?H().steps:l?l.steps:[];}
function initialOrder(st){return st&&st.kind==='order'?st.items.map((_,i)=>(i+1)%st.items.length):[];}
function blank(id){return isPilot(id)?H().blank():{step:0,feedback:null,attempts:[],order:initialOrder(steps(id)[0]),complete:false};}
function restore(id,raw){
 if(isPilot(id))return H().restore(raw);
 const list=steps(id);if(!raw||!Number.isInteger(raw.step)||raw.step<0||raw.step>list.length)return blank(id);
 const s={step:raw.step,feedback:null,attempts:Array.isArray(raw.attempts)?raw.attempts.slice(-60):[],order:[],complete:raw.step===list.length};
 if(s.complete)return s;const st=list[s.step];
 if(st.kind==='order'){
  s.order=Array.isArray(raw.order)&&raw.order.length===st.items.length&&new Set(raw.order).size===st.items.length&&raw.order.every(i=>Number.isInteger(i)&&i>=0&&i<st.items.length)?raw.order.slice():initialOrder(st);
  if(['order-correct','order-retry'].includes(raw.feedback))s.feedback=s.order.every((v,i)=>v===i)&&raw.feedback==='order-correct'?'order-correct':'order-retry';
 }else if(st.options.some(o=>o.id===raw.feedback))s.feedback=raw.feedback;
 return s;
}
function correct(id,s){const st=steps(id)[s.step];return st&&(st.kind==='order'?s.feedback==='order-correct':!!st.options.find(o=>o.id===s.feedback&&o.correct));}
function choose(id,raw,choice){
 if(isPilot(id))return H().choose(raw,choice);
 const s=restore(id,raw);if(s.complete||s.feedback)return s;const st=steps(id)[s.step];if(st.kind!=='choice')return s;const o=st.options.find(o=>o.id===choice);if(!o)return s;
 s.feedback=choice;s.attempts=s.attempts.concat({step:st.id,choice,correct:o.correct}).slice(-60);return s;
}
function move(id,raw,at,delta){const s=restore(id,raw),st=steps(id)[s.step];if(s.complete||s.feedback||!st||st.kind!=='order'||!Number.isInteger(at)||![-1,1].includes(delta)||at<0||at>=s.order.length||at+delta<0||at+delta>=s.order.length)return s;[s.order[at],s.order[at+delta]]=[s.order[at+delta],s.order[at]];return s;}
function checkOrder(id,raw){const s=restore(id,raw),st=steps(id)[s.step];if(s.complete||s.feedback||!st||st.kind!=='order')return s;const ok=s.order.every((v,i)=>v===i);s.feedback=ok?'order-correct':'order-retry';s.attempts=s.attempts.concat({step:st.id,order:s.order.slice(),correct:ok}).slice(-60);return s;}
function next(id,raw){if(isPilot(id))return H().next(raw);const s=restore(id,raw);if(!s.complete&&correct(id,s)){s.step++;s.feedback=null;s.complete=s.step===steps(id).length;s.order=initialOrder(steps(id)[s.step]);}return s;}
function retry(id,raw){if(isPilot(id))return H().retry(raw);const s=restore(id,raw);if(!s.complete&&!correct(id,s))s.feedback=null;return s;}
function termsHtml(l){return '<div class="ss-terms">'+l.terms.map(t=>'<details><summary>'+esc(t)+' · meaning / word parts</summary>'+(typeof window==='object'&&window.WordParts&&window.WordParts.lookup(t)?window.WordParts.html(t,false):'<p><a href="Word Parts.html#'+encodeURIComponent(t)+'">Search the word reference</a>. Use the linked notes for the term in context; a spelling split is not guessed here.</p>')+'</details>').join('')+'</div>';}
function sourcesHtml(l){return '<details class="ss-sources"><summary>Source notes and clinical references</summary><p>'+esc(l.book)+'</p><ul>'+l.notes.map(n=>'<li><a href="Exam 3 Map.html#'+esc(n)+'">Full source notes</a></li>').join('')+l.sources.map(s=>'<li><a target="_blank" rel="noopener" href="'+esc(s.url)+'">'+esc(s.title)+'</a></li>').join('')+'</ul></details>';}
function overviewHtml(id){
 const l=get(id);if(!l)return '';if(isPilot(id))return H().overviewHtml();const v=l.visual;
 const cards=v.cards.map((c,i)=>v.type==='quadrants'?'<button type="button" class="ss-region" data-studio-region="'+i+'" data-studio-id="'+id+'"><b>'+esc(c.title)+'</b><span>'+esc(c.text)+'</span></button>':'<section class="ss-node"><span class="ss-number">'+(i+1)+'</span><h3>'+esc(c.title)+'</h3><p>'+esc(c.text)+'</p></section>').join('');
 return '<section class="study-studio ss-overview" data-studio-overview="'+id+'"><span class="ss-kicker">See the connections · Ch '+l.ch+'</span><h2>'+esc(v.title)+'</h2><figure class="ss-figure ss-'+esc(v.type)+'" aria-label="'+esc(v.title)+'"><div class="ss-nodes">'+cards+'</div><figcaption>'+esc(v.caption)+'</figcaption>'+(v.type==='quadrants'?'<p class="ss-region-info" role="status">Tap a quadrant to focus on its structures.</p>':'')+'</figure><details><summary>Short notes · explain the why</summary>'+l.why.map(p=>'<p>'+esc(p)+'</p>').join('')+'</details>'+termsHtml(l)+sourcesHtml(l)+'</section>';
}
function strategyHtml(id){const l=get(id);if(!l)return '';const s=l.strategy;return '<section class="study-studio ss-strategy"><span class="ss-kicker">Worked question approach</span><h3>'+esc(s.title)+'</h3><dl>'+[['Task',s.task],['Relevant cue',s.cue],['Reasoning',s.rule],['Avoid this trap',s.trap]].map(([h,t])=>'<div><dt>'+h+'</dt><dd>'+esc(t)+'</dd></div>').join('')+'</dl><p class="ss-small">Use the findings given. An absolute word is not automatically wrong; judge the clinical claim and the question’s instructions.</p></section>';}
function practiceHtml(id,raw){
 const l=get(id);if(!l)return '';if(isPilot(id))return H().practiceHtml(raw);const s=restore(id,raw),list=steps(id);
 if(s.complete)return '<section class="study-studio ss-practice"><span class="ss-kicker">Coached rehearsal complete</span><h2>Now retrieve it without looking.</h2><p>You worked through '+list.length+' decisions on '+esc(l.title)+'. Close the explanation for recall, then take the separate graded checkpoint.</p><button type="button" class="btn btn-secondary" data-studio-action="restart">Rehearse again</button></section>';
 const st=list[s.step],ok=correct(id,s),o=st.kind==='choice'&&st.options.find(o=>o.id===s.feedback);
 let activity=st.kind==='order'?'<ol class="ss-order">'+s.order.map((item,i)=>'<li><span>'+esc(st.items[item])+'</span><div><button type="button" data-studio-move="'+i+'" data-delta="-1" aria-label="Move step '+(i+1)+' up"'+(s.feedback||i===0?' disabled':'')+'>↑</button><button type="button" data-studio-move="'+i+'" data-delta="1" aria-label="Move step '+(i+1)+' down"'+(s.feedback||i===s.order.length-1?' disabled':'')+'>↓</button></div></li>').join('')+'</ol><button type="button" class="btn btn-secondary" data-studio-action="check-order"'+(s.feedback?' disabled':'')+'>Check this sequence</button>':'<div class="ss-options">'+st.options.map(o=>'<button type="button" class="ss-choice" data-studio-choice="'+o.id+'"'+(s.feedback?' disabled':'')+'>'+esc(o.text)+'</button>').join('')+'</div>';
 const why=st.kind==='order'?(ok?st.why:'The interval starts with a discarded void and ends with an included void. Recheck the prerequisites and move the steps before trying again.'):o&&o.why;
 return '<section class="study-studio ss-practice"><span class="ss-kicker">Do the decision · '+(s.step+1)+' of '+list.length+'</span><h2>Use the idea in a situation.</h2><p class="ss-small">Coached practice. This rehearsal does not change your scored checkpoint or earn review credit.</p><div class="ss-scene"><h3>Patient / task update</h3><p>'+esc(st.scene)+'</p></div><h3>'+esc(st.task)+'</h3><details class="ss-hint"><summary>Optional strategy hint</summary><p>'+esc(st.hint)+'</p></details>'+activity+(s.feedback?'<div class="ss-result'+(ok?'':' ss-retry')+'" role="status" tabindex="-1"><h3>'+(ok?'This reasoning fits.':'Reconsider this choice.')+'</h3><p>'+esc(why)+'</p></div><button type="button" class="btn btn-'+(ok?'primary':'secondary')+'" data-studio-action="'+(ok?'next':'retry')+'">'+(ok?s.step===list.length-1?'Finish the rehearsal':'Next situation':'Try again')+'</button>':'')+'</section>';
}
function reviewHtml(reason,mode){return '<section class="study-studio ss-miss-review"><h3>Review your approach</h3><p class="ss-small">Choose what you want to work on. This is your self-assessment, not an automatic diagnosis of why you missed.</p><div class="ss-reasons">'+Object.entries(reasons).map(([key,label])=>'<button type="button" data-'+(mode==='mastery'?'study-reason':'lesson-reason')+'="'+key+'" aria-pressed="'+(reason===key?'true':'false')+'">'+label+'</button>').join('')+'</div></section>';}
function matching(topics,caseId){const t=new Set(topics||[]);return data.labs.filter(l=>(caseId&&l.caseId===caseId)||l.notes.some(n=>t.has(n)));}
function formatHtml(kind){const f=formats[kind]||formats.single;return '<section class="study-studio ss-format"><span class="ss-kicker">Question format</span><h3>'+esc(f[0])+'</h3><p>'+esc(f[1])+'</p><p class="ss-small">'+esc(f[2])+'</p><a href="NCLEX Strategies.html#types">Format and scoring reference</a></section>';}
function indexHtml(){return [...new Set(data.labs.map(l=>l.ch))].map(ch=>'<details class="ss-index"><summary>Chapter '+ch+' · '+data.labs.filter(l=>l.ch===ch).length+' visual lessons</summary><ul>'+data.labs.filter(l=>l.ch===ch).map(l=>'<li><a href="Exam 3 Learn.html#'+l.id+'">'+esc(l.title)+'</a><span>'+esc(l.strategy.title)+'</span></li>').join('')+'</ul></details>').join('');}
function mount(win){
 const doc=win.document,script=doc.currentScript,base=script?script.src:doc.baseURI,query=script?new URL(base).search:'';
 if(win.EXAM3_STUDIOS)configure(win.EXAM3_STUDIOS,win.HypoLab);
 if(!doc.querySelector('link[data-study-css]')){const css=doc.createElement('link');css.rel='stylesheet';css.dataset.studyCss='1';css.href=new URL('study-studio.css'+query,base).href;doc.head.appendChild(css);}
 function load(file,ready){if(ready())return Promise.resolve();return new Promise((resolve,reject)=>{const s=doc.createElement('script');s.src=new URL(file+query,base).href;s.onload=resolve;s.onerror=reject;doc.head.appendChild(s);});}
 const ready=Promise.all([load('data/e3/studios.js',()=>!!win.EXAM3_STUDIOS),load('hypo-lab.js',()=>!!win.HypoLab)]).then(()=>{configure(win.EXAM3_STUDIOS,win.HypoLab);hydrate();return true;}).catch(()=>{doc.querySelectorAll('[data-study-note],[data-study-review],[data-study-index]').forEach(h=>{h.dataset.studyFailed='1';h.innerHTML='<p>Visual review could not load. <a href="Exam 3 Learn.html">Open the guided lessons</a> or <a href="NCLEX Strategies.html">strategy reference</a>.</p>';});return false;});
 function hydrate(){if(!data.labs.length)return;
  doc.querySelectorAll('[data-study-note]:not([data-study-mounted])').forEach(h=>{h.dataset.studyMounted='1';const labs=matching([h.dataset.studyNote]);h.innerHTML=labs.map(l=>'<details class="ss-inline"><summary>Visual review and strategy: '+esc(l.title)+'</summary>'+overviewHtml(l.id)+strategyHtml(l.id)+'<p><a href="Exam 3 Learn.html#'+l.id+'">Practise the patient / task decisions →</a></p></details>').join('');});
  doc.querySelectorAll('[data-study-review]:not([data-study-mounted])').forEach(h=>{h.dataset.studyMounted='1';const labs=matching((h.dataset.topics||'').split(','),h.dataset.case);h.innerHTML=formatHtml(h.dataset.kind)+labs.slice(0,3).map(l=>'<details class="ss-inline"><summary>Visual review and topic strategy: '+esc(l.title)+'</summary>'+overviewHtml(l.id)+strategyHtml(l.id)+'<a href="Exam 3 Learn.html#'+l.id+'">Practise this topic →</a></details>').join('')+reviewHtml(h.dataset.reason,'mastery');});
  doc.querySelectorAll('[data-study-index]:not([data-study-mounted])').forEach(h=>{h.dataset.studyMounted='1';h.innerHTML=indexHtml();});
 }
 new win.MutationObserver(hydrate).observe(doc.documentElement,{childList:true,subtree:true});
 win.addEventListener('wordparts-ready',()=>doc.querySelectorAll('.study-studio .ss-terms').forEach(h=>{const host=h.closest('[data-studio-overview]');if(host&&get(host.dataset.studioOverview))h.outerHTML=termsHtml(get(host.dataset.studioOverview));}));
 doc.addEventListener('click',e=>{
  const region=e.target.closest('[data-studio-region]');if(region){const l=get(region.dataset.studioId),card=l&&l.visual.cards[+region.dataset.studioRegion],host=region.closest('.ss-figure');if(card&&host){host.querySelectorAll('[data-studio-region]').forEach(b=>b.setAttribute('aria-pressed',b===region?'true':'false'));host.querySelector('.ss-region-info').textContent=card.title+': '+card.text;}return;}
  const b=e.target.closest('[data-study-reason]'),host=b&&b.closest('[data-study-review]');if(host){const reason=host.dataset.reason===b.dataset.studyReason?'':b.dataset.studyReason;host.dataset.reason=reason;host.querySelectorAll('[data-study-reason]').forEach(x=>x.setAttribute('aria-pressed',x.dataset.studyReason===reason?'true':'false'));doc.dispatchEvent(new win.CustomEvent('study-review-reason',{detail:{id:host.dataset.qid,reason}}));}
 });
 api.ready=ready;
}
const api={configure,get,steps,blank,restore,choose,move,checkOrder,next,retry,overviewHtml,strategyHtml,practiceHtml,reviewHtml,matching,formatHtml,indexHtml,mount,reasons,formats};return api;
});
