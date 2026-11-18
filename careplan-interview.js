// Interview drafts use the current patient's existing local record. Only reviewed text enters the form.
(function () {
  const groups = [
    ['story','What has been happening that brought you in today?', ['cc'], 'When did you first notice a change?'],
    ['life','Walk me through a usual day at home. What has changed for you?', ['social','info.housing','erik.b'], 'Who or what helps you do the things that matter to you?'],
    ['history','What parts of your health history or treatment would you like us to know about?', ['pmh','psh','info.allergies','cc'], 'What was that experience like for you?'],
    ['priority','What matters most to you as we plan your care today?', ['pcc2','pcc3','social','cc'], 'What would a good day look like for you?']
  ];
  const names = {pcc2:'Patient preferences and values',pcc3:'Partnership and self-care',cc:'Chief complaint / present illness',social:'Personal and social history','info.housing':'Housing',pmh:'Medical history',psh:'Surgical history','info.allergies':'Reported allergies and reactions','erik.b':'Supporting behavior or patient statement'};
  const cues = [
    [/\b(fall|fell|falling|unsteady)\b/i,'Tell me about the last time you felt unsure on your feet.'],
    [/\b(afraid|fear|scared|anxious|worried)\b/i,'What feels most concerning about that right now?'],
    [/\b(pain|hurts?|aching)\b/i,'Can you describe what it feels like in your own words?'],
    [/\b(alone|lonely|isolated)\b/i,'What kind of support would feel helpful to you?'],
    [/\b(medicine|medication|pills?)\b/i,'How does taking it fit into your usual day?']
  ];
  const terms = {'blood pressure':'BP','heart rate':'HR','respiratory rate':'RR','body mass index':'BMI','activities of daily living':'ADLs'};
  const $ = id => document.getElementById(id);
  const api = window.CP_HELPER;
  function el(tag,text) { const node=document.createElement(tag); if(text)node.textContent=text; return node; }
  function button(label,fn) {const b=el('button',label); b.type='button'; b.className='mini'; b.onclick=fn; return b;}
  function labeled(host,label,input) {const l=el('label',label);l.className='fld';l.append(input);host.append(l);}
  function gaps() {
    const host=$('guided-gap-list'); host.replaceChildren();
    const sections=new Map();
    for(const item of api.unfinished()) {
      const root=item.target.split('.')[0];
      const section=window.CP_FORM.find(s=>s.items.some(i=>i.k===root || (root==='erik' && i.type==='erikson'))) || window.CP_FORM[0];
      if(!sections.has(section)) {
        const box=el('details'),list=el('ul');
        box.append(el('summary',section.title),list);host.append(box);sections.set(section,list);
      }
      sections.get(section).append(el('li',[item.label,(item.d.them||[]).join(' '),item.d.tip].filter(Boolean).join(' — ')));
    }
    if(!sections.size)host.append(el('p','No unfinished questions found.'));
  }
  function render() {
    const host=$('guided-questions');host.replaceChildren();
    const patient=api.patient();
    for(const [id,q,paths,fallback] of groups) {
      const box=el('details'), note=el('textarea'), follow=el('p'),path='_interview.'+id;
      box.className='help';box.append(el('summary',q));host.append(box);
      labeled(box,'Their response / your interview notes',note);note.value=api.get(path)||'';
      function suggest(){
        const match=cues.find(([re])=>re.test(note.value));
        follow.textContent=note.value.trim()?'Possible follow-up: '+(match?match[1]:fallback):'';
      }
      note.oninput=()=>{if(api.patient()===patient){api.saveInterview(path,note.value);suggest();}};
      suggest();box.append(follow);
      const target=el('select'),review=el('textarea'),current=el('p'),status=el('p');
      status.setAttribute('role','status');
      paths.forEach(k=>{const o=el('option',names[k]);o.value=k;target.append(o);});
      labeled(box,'Use a detail in this field',target);
      function showCurrent(){current.textContent='Already on form: '+(api.get(target.value)||'No entry yet');review.value=api.get(path+'Draft.'+target.value)||'';}
      target.onchange=showCurrent; box.append(current);
      labeled(box,'Review the detail to append. Attribute it to the patient in your own words.',review);
      review.oninput=()=>api.saveInterview(path+'Draft.'+target.value,review.value);
      box.append(button('Use selected response text',()=>{const excerpt=note.value.slice(note.selectionStart,note.selectionEnd)||note.value;if(excerpt.trim()){review.value='Patient reports: '+excerpt.trim();review.oninput();}}));
      box.append(button('Append reviewed detail',()=>{
        if(api.patient()!==patient||!review.value.trim())return;
        const prior=api.get(target.value)||'';
        api.set(target.value,[prior,review.value.trim()].filter(Boolean).join('\n'));
        review.value='';review.oninput();showCurrent();status.textContent='Added to '+names[target.value]+'.';gaps();
      }),status);showCurrent();
    }
    if($('guided-gaps').open)gaps();
  }
  let bar;
  function abbreviations(e) {
    const input=e.target;
    if(!input.matches('textarea[data-p]'))return;
    if(bar)bar.remove();
    if(api.fields[input.dataset.p]?.type!=='text' && !/^(sys[12]\.|sbar[12]\.|(?:vsrel|asrel|rel)[12]$)/.test(input.dataset.p))return;
    const value=input.value;
    // Leave attributed speech and quoted passages intact, including unmatched quotes.
    if(/["“”‘’']|\b(?:reports?|states?|says|said|stated|reported)\b/i.test(value))return;
    bar=el('div');bar.className='btns';
    for(const [phrase,abbr] of Object.entries(terms)){
      const re=new RegExp('\\b'+phrase+'\\b','i');if(!re.test(value))continue;
      bar.append(button(phrase+' → '+abbr,()=>{
        if(!input.isConnected||input.value!==value)return;
        input.value=value.replace(re,abbr);input.dispatchEvent(new Event('input',{bubbles:true}));input.focus();
      }));
    }
    if(bar.children.length){bar.prepend(el('small','Optional abbreviations · use only if allowed by your instructor or facility. '));input.after(bar);}
  }
  document.addEventListener('DOMContentLoaded',render);
  document.addEventListener('careplan-render',()=>{if(bar)bar.remove();render();});
  $('guided-interview').addEventListener('toggle',()=>{if($('guided-interview').open)render();});
  $('guided-gaps').addEventListener('toggle',gaps);
  document.addEventListener('focusin',abbreviations);
  document.addEventListener('input',abbreviations);
})();
