// Local wording tools. Only entered facts are assembled; no patient findings are inferred.
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.CPWords=api;})(typeof window==='object'?window:globalThis,function(){
  'use strict';
  const clean=v=>v==null?'':String(v).trim();
  function assemble(profile,facts){
    facts=facts||{};const required=(profile.required||[]).filter(k=>!clean(facts[k]));
    if(required.length)return {text:'',missing:required,unused:[]};
    if(profile.kind==='diagnosis'){
      const label=clean(facts.label),kind=clean(facts.kind),cause=clean(facts.cause),cues=clean(facts.cues);
      if(!label||!['problem','risk','promo'].includes(kind))return {text:'',missing:['label','kind'],unused:[]};
      const needs=kind==='risk'?['cause']:kind==='promo'?['cues']:['cause','cues'];
      const missing=needs.filter(k=>!clean(facts[k]));if(missing.length)return {text:'',missing,unused:[]};
      return {text:label+(kind==='promo'?'':' related to '+cause)+(kind==='risk'?'':' as evidenced by '+cues)+'.',missing:[],unused:kind==='risk'&&cues?['cues']:[]};
    }
    const used=new Set(),lines=[];
    for(const pattern of profile.patterns||[]){
      const keys=[...pattern.matchAll(/\{([a-zA-Z0-9_]+)\}/g)].map(m=>m[1]);
      if(!keys.length||keys.some(k=>!clean(facts[k])))continue;
      const text=pattern.replace(/\{([a-zA-Z0-9_]+)\}/g,(_,k)=>{used.add(k);return clean(facts[k]).replace(/\s+/g,' ').replace(/[.;]+$/,'');});
      lines.push(text.trim());
    }
    return {text:lines.join(' '),missing:[],unused:Object.keys(facts).filter(k=>clean(facts[k])&&!used.has(k))};
  }
  function append(answer,draft){
    const before=String(answer||''),text=clean(draft);
    if(!text||before.includes(text))return {before,after:before,changed:false};
    return {before,after:before+(before.trim()?'\n':'')+text,changed:true};
  }
  function undo(current,entry){return entry&&current===entry.after?entry.before:null;}
  function review(text,profile){
    const t=clean(text),out=[];if(!t)return [{code:'empty',hint:'Start with your actual findings or reasoning. The wording builder can help structure them.'}];
    if(/\b(normal|wnl|stable|fine|good|bad|better|worse|confused)\b/i.test(t))out.push({code:'specific',hint:'Replace broad words with what you actually measured, observed or heard, including the comparison when relevant.'});
    if(/\b(noncompliant|uncooperative|difficult patient|drug[- ]seeking|lazy)\b/i.test(t))out.push({code:'neutral',hint:'Describe the action or decision and the patient’s stated reason. Use neutral, observable wording.'});
    if(/\b(denies|no complaints|no pain|no distress|alert and oriented|perrla)\b/i.test(t))out.push({code:'assessed',hint:'Keep negative or normal findings only if you actually asked or assessed those specific items.'});
    if(/\b(reports|states|said)\b/i.test(t)&&/[“”"]/.test(t))out.push({code:'quote',hint:'Quotation marks are for the speaker’s exact words. Use reports or describes without quotes for a paraphrase.'});
    if(/\b(done|given|administered|notified|taught|educated)\b/i.test(t))out.push({code:'action',hint:'For completed care, include the actual time/action and observed response. For planned care, use future wording.'});
    if(profile&&profile.cite&&!/\([^)]*\d{4}[^)]*\)|\b[A-Z][A-Za-z -]+\s*\(\d{4}\)/.test(t))out.push({code:'citation',hint:'This rationale needs your scholarly source and in-text citation. Add the matching reference to the final document.'});
    return out;
  }
  return {assemble,append,undo,review};
});
