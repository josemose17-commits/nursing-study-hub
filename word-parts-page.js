(function(){
  'use strict';
  const W=window.WordParts,D=window.WORD_PARTS_DATA,query=document.getElementById('word-query'),scope=document.getElementById('word-scope'),type=document.getElementById('word-type'),results=document.getElementById('word-results'),count=document.getElementById('word-count');
  if(!W||!D){count.textContent='The reference did not load. Refresh to try again.';return;}
  let page=0;const size=40,all=Object.entries(D.terms),totalParts=all.filter(([,v])=>v.type==='word-parts'||v.type==='drug-stem').length;
  function render(){
    const q=query.value.toLowerCase().trim().replace(/^-|-$/g,''),list=all.filter(([key,t])=>(scope.value==='all'||t.exam3)&&(type.value==='all'||t.type===type.value)&&(!q||(key+' '+t.full+' '+t.pieces.map(p=>p.text+' '+p.meaning).join(' ')).toLowerCase().includes(q)));
    page=Math.min(page,Math.max(0,Math.ceil(list.length/size)-1));
    const visible=list.slice(page*size,(page+1)*size);
    count.textContent=list.length+' matches · '+all.length+' total entries · '+totalParts+' medical breakdowns or drug-stem entries. Showing '+(list.length?page*size+1:0)+'–'+Math.min(list.length,(page+1)*size)+'.';
    results.innerHTML=visible.length?visible.map(([key,t])=>'<details class="entry"'+(key===q?' open':'')+'><summary>'+W.esc(t.type==='abbreviation'?key.toUpperCase():key)+'<span class="kind">'+W.esc(W.labels[t.type])+'</span></summary>'+W.html(key,false)+(t.drug3?'<p><a href="Exam 3 Drug Cards.dc.html#drug-'+encodeURIComponent(t.drug3)+'">Related drug card →</a></p>':'')+'</details>').join(''):'<p>No matching terms. Try all shared vocabulary or a shorter spelling.</p>';
    document.getElementById('word-prev').disabled=page===0;document.getElementById('word-next').disabled=(page+1)*size>=list.length;
  }
  function hash(){let text;try{text=decodeURIComponent(location.hash.slice(1))}catch(_){text=''}if(text){query.value=text;scope.value='all';type.value='all';page=0;}render();}
  query.addEventListener('input',()=>{page=0;render()});scope.addEventListener('change',()=>{page=0;render()});type.addEventListener('change',()=>{page=0;render()});
  for(const [id,delta]of [['word-prev',-1],['word-next',1]])document.getElementById(id).addEventListener('click',()=>{page+=delta;render();query.focus();window.scrollTo(0,0)});
  window.addEventListener('hashchange',hash);hash();
})();
