// Keep optional wording questions within the syllabus answer being edited.
(function(root,factory){
 if(typeof module==='object'&&module.exports)module.exports=factory();
 else root.CPFocus=factory();
})(typeof window==='object'?window:globalThis,function(){
 'use strict';
 const text=v=>v==null?'':Array.isArray(v)?v.filter(Boolean).join('; '):String(v).trim();
 function profile(original,ctx){
  const p={...original,fields:original.fields.map(f=>({...f})),patterns:(original.patterns||[]).slice()},id=ctx.id,path=ctx.path;let m;
  function only(ids){p.fields=p.fields.filter(f=>ids.includes(f.id));p.patterns=p.patterns.filter(s=>[...s.matchAll(/\{(\w+)\}/g)].every(m=>ids.includes(m[1])));if(p.required)p.required=p.required.filter(k=>ids.includes(k));}
  function edit(key,values){const f=p.fields.find(f=>f.id===key);if(f)Object.assign(f,values);}
  function bind(key,paths){edit(key,{answers:paths.map(v=>typeof v==='string'?{path:v}:v)});}
  // Selection and explanation have separate boxes on the paper form.
  if(id==='rel1'){only(['cues']);p.purpose='List only the report/history cues that matter for this patient. Explain why in the separate Rationale box.';}
  if(['vsrel1','asrel1','vsrel2'].includes(id)){only(['finding','comparison']);p.purpose='Identify the actual significant findings and comparison. Put the explanation in the separate Rationale box.';}
  if(id==='pmhmeds'){only(['drug','condition']);p.purpose='Match the verified medication to its documented indication. Monitoring belongs with the medication checks.';}
  if(id==='q3'){only(['priority','cues']);edit('cues',{question:'Which current findings and immediate risk make this the priority?'});p.purpose='Name and justify the priority. The next questions hold the problem statement and interventions.';}
  if(id==='e1'){only(['status','time']);p.patterns=['At {time}, the patient’s response was {status}.'];p.purpose='State the overall response at reassessment. Put the supporting findings in the next answer.';}
  if(/^sys[12]\./.test(id)){only(['reported','observed','context']);p.purpose='Record only the symptoms and findings actually assessed for this body system, with time and relevant conditions.';}
  if(id==='psh')edit('effects',{when:{key:'procedure',notNone:true}});
  if(id==='pmh')for(const key of ['control','relevance'])edit(key,{when:{key:'conditions',notNone:true}});
  if(id==='q4'||/^plan\.\d+\.stmt$/.test(id)){
   edit('cause',{when:{key:'kind',values:['problem','risk']}});
   edit('cues',{when:{key:'kind',values:['problem','promo']}});
  }
  if(/^sbar[123]\./.test(id)){
   const part=id.slice(-1);
   if(part==='B'){only(['content','safety','care']);edit('care',{question:'Which relevant treatment, support or completed care belongs in this background? Include its actual time when known.'});}
   if(part==='A')only(id==='sbar1.A'?['content','trend','concern']:id==='sbar2.A'?['content','trend','response','concern']:['content','trend','reported','response']);
   if(part==='R')only(id==='sbar2.R'?['content','time','clarify']:['content','time','escalation']);
   if(id==='sbar2.S')only(['identity','content','urgency']);
  }
  if((m=/^orders\.(\d+)$/.exec(id))&&path.endsWith('.1'))bind('order',['orders.'+m[1]+'.0']);
  if((m=/^labs\.(\w+)$/.exec(id))){
   const b='labs.'+m[1];bind('trend',[{path:b+'.i',prefix:'Initial'},{path:b+'.c',prefix:'Current'}]);
   if(!text(ctx.get(b+'.i'))&&!text(ctx.get(b+'.c'))&&!text(ctx.get(b+'.s')))p.noWording=true;
  }
  if((m=/^fe\.(\d)\.(\w+)$/.exec(id))){
   const b='fe.'+m[1];
   if(m[2]==='rel'){only(['lab','function','connection','citation']);p.purpose='Explain what this selected lab measures and why it matters. Cause, treatment and nursing actions have their own boxes.';}
   if(m[2]==='cause')edit('verify',{when:{key:'cause',entered:true}});
  }
  if((m=/^plan\.(\d+)\.(.+)$/.exec(id))){
   const b='plan.'+m[1],part=m[2],code=ctx.get(b+'.c'),d=(ctx.diagnoses||{})[code];
   if(part==='stmt'&&d){
    bind('kind',[{path:b+'.c',map:{[code]:d.t}}]);bind('label',[{path:b+'.c',map:{[code]:d.l}}]);
    bind('cause',[b+'.rf',b+'.rfx']);bind('cues',[b+'.ae',b+'.aex']);
   }
   if(/^iv\.\d+$/.test(part)&&path.endsWith('.2')){
    only(['action','mechanism','patient']);bind('action',[path.replace(/\.2$/,'.1')]);
    p.purpose='Explain why this intervention helps this patient. Enter its citation in the separate Source field on the form.';
   }
   if(part==='ev'&&!path.endsWith('.next')){
    only(['time','result','data']);bind('result',[{path:b+'.ev.s',map:{met:'met',partly:'partly met',not:'not met'}}]);
    p.patterns=['At {time}, the goal was {result}, supported by {data}.'];
    p.purpose='Compare the reassessment findings with the goal. The selected goal status is reused; put further actions in Next plan.';
   }
  }
  return p;
 }
 function context(p,get){
  const result={};for(const f of p.fields){if(!f.answers)continue;const parts=f.answers.map(a=>{let v=get(a.path);if(a.map)v=a.map[v];v=text(v);return v?(a.prefix?a.prefix+': ':'')+v:'';}).filter(Boolean);if(parts.length)result[f.id]=parts.join('; ');}
  for(const f of p.fields)if(!relevant(f,result))delete result[f.id];
  return result;
 }
 function relevant(f,facts){
  const w=f.when;if(!w)return true;const v=text(facts[w.key]);
  if(w.values)return w.values.includes(v);
  if(w.notNone)return !!v&&!/^(none|none reported|no prior surgery|no previous surgery|no surgeries|no past medical history|no medical conditions)[.!]?$/i.test(v);
  return !w.entered||!!v;
 }
 function facts(p,entered,get){
  const all={...entered,...context(p,get)},result={};
  for(const f of p.fields)if(relevant(f,all)&&text(all[f.id]))result[f.id]=all[f.id];
  return result;
 }
 function visible(p,entered,get){const reused=context(p,get),all={...entered,...reused};return p.fields.filter(f=>relevant(f,all)&&!Object.hasOwn(reused,f.id));}
 function signature(p,get){return JSON.stringify(p.fields.flatMap(f=>(f.answers||[]).map(a=>[a.path,get(a.path)])));}
 return {profile,context,facts,visible,signature};
});
