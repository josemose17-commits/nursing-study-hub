// Shared read-only renderer for the reference, pronunciation bubbles and Map glossary.
(function () {
  'use strict';
  const labels={'word-parts':'Medical word parts','drug-stem':'Medication naming stem',medication:'Whole medication name',brand:'Brand name',abbreviation:'Abbreviation / short label',eponym:'Named after a person',whole:'Learn as a whole term',unsegmented:'Split not yet verified'};
  const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function lookup(term) {
    const all=(window.WORD_PARTS_DATA||{}).terms||{},key=String(term).toLowerCase().trim();
    return all[key]||null;
  }
  function piecesTable(pieces,compact) {
    if(compact)return '<dl class="wp-pieces">'+pieces.map(p=>'<dt>'+esc(p.text)+' <small>('+esc(p.role)+')</small></dt><dd>'+esc(p.meaning)+'</dd>').join('')+'</dl>';
    return '<div class="wp-table"><table><thead><tr><th>Part</th><th>Role</th><th>Meaning</th></tr></thead><tbody>'+pieces.map(p=>'<tr><td><strong>'+esc(p.text)+'</strong></td><td>'+esc(p.role)+'</td><td>'+esc(p.meaning)+'</td></tr>').join('')+'</tbody></table></div>';
  }
  function html(term,compact) {
    const t=lookup(term);if(!t){
      const names=String(term).replace(/\([^)]*\)/g,'').split(/\s*\/\s*|\s+vs\s+/).map(x=>x.trim()).filter(x=>lookup(x));
      return names.length?names.map(n=>'<h4>'+esc(n)+'</h4>'+html(n,compact)).join(''):'<p>No verified split is available for this glossary heading. Search the reference for its individual terms.</p>';
    }
    let out='<section class="wp-analysis"><h4>'+esc(labels[t.type])+'</h4>';
    if(t.pieces.length){
      out+='<p class="wp-split">'+t.pieces.map(p=>esc(p.text)).join(' / ')+'</p>'+piecesTable(t.pieces,compact);
      if(t.type==='word-parts')out+='<p class="wp-absent">'+['prefix','root','suffix'].filter(role=>!t.pieces.some(p=>p.role===role)).map(role=>'No separate '+role+' used in this split.').join(' ')+'</p>';
    }
    if(t.full)out+='<p><strong>Expanded:</strong> '+esc(t.full)+'</p>';
    out+='<p class="wp-note">'+esc(t.note)+'</p>';
    for(const r of t.related)out+='<details><summary>Word parts in '+esc(r.term)+'</summary>'+piecesTable(r.pieces,compact)+'</details>';
    if(!compact&&t.definition)out+='<p><strong>Clinical meaning:</strong> '+esc(t.definition)+'</p>';
    const s=window.WORD_PARTS_DATA.sources;
    if(t.type==='word-parts'||t.related.length)out+='<p class="wp-source"><a target="_blank" rel="noopener" href="'+esc(s.medical)+'">NLM word parts</a> · <a target="_blank" rel="noopener" href="'+esc(s.grammar)+'">How parts combine</a></p>';
    if(t.type==='drug-stem')out+='<p class="wp-source"><a target="_blank" rel="noopener" href="'+esc(s.stems)+'">WHO stem reference</a> · <a target="_blank" rel="noopener" href="'+esc(s.current)+'">Current stem-book index</a></p>';
    return out+'</section>';
  }
  window.WordParts={lookup,html,labels,esc};
})();
