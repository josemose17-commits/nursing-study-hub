const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm');
const root=path.join(__dirname,'..'), read=p=>fs.readFileSync(path.join(root,p),'utf8');
const src=require('./word-parts-src.js'), ctx=vm.createContext({window:{}});
for(const file of ['data/words.js','data/e3/info-topics.js','data/e3/lessons.js','data/e3/drugs-gi.js','data/e3/drugs-endo.js'])vm.runInContext(read(file),ctx);
const words=ctx.window.E2_WORDS.def, pron=read('say.js'), generic=pron.slice(pron.indexOf('// ---- Exam 3 drugs'),pron.indexOf('// ---- Brand names')), brands=pron.slice(pron.indexOf('// ---- Brand names'),pron.indexOf('// ---- Body, cells'));
const spokenFull={};
const knownAbbr={dka:'diabetic ketoacidosis',hhs:'hyperosmolar hyperglycemic state',egd:'esophagogastroduodenoscopy',ercp:'endoscopic retrograde cholangiopancreatography',cgm:'continuous glucose monitoring',ogtt:'oral glucose tolerance test',tsh:'thyroid-stimulating hormone',pth:'parathyroid hormone',ptu:'propylthiouracil',sski:'saturated solution of potassium iodide',rai:'radioactive iodine',d50w:'50% dextrose in water',csii:'continuous subcutaneous insulin infusion',gerd:'gastroesophageal reflux disease',les:'lower esophageal sphincter',ppi:'proton pump inhibitor',nph:'neutral protamine Hagedorn',mody:'maturity-onset diabetes of the young',fna:'fine-needle aspiration',cea:'carcinoembryonic antigen',fit:'fecal immunochemical test',gfobt:'guaiac fecal occult blood test',ibd:'inflammatory bowel disease',ibs:'irritable bowel syndrome',mrcp:'magnetic resonance cholangiopancreatography',eus:'endoscopic ultrasound'};
Object.assign(knownAbbr,{ages:'advanced glycation end products',ast:'aspartate aminotransferase',fap:'familial adenomatous polyposis',prep:'pre-exposure prophylaxis',tips:'transjugular intrahepatic portosystemic shunt',p:'P wave (ECG label)',t:'T wave (ECG label)'});
for(const row of require('./words-src.js').ABBR){const [name,full]=row.split('|');knownAbbr[name.toLowerCase()]=full;}
const pronList=pron.slice(pron.indexOf('var WORDS = ['),pron.indexOf('];',pron.indexOf('var WORDS = [')));
for(const m of pronList.matchAll(/'([^'|]+)\|([^'|]+)(?:\|([^']+))?'/g))if(m[3]&&m[3].includes(', '))spokenFull[m[1].toLowerCase()]=m[3].split(', ').slice(1).join(', ');
const names=text=>[...text.matchAll(/'([^'|]+)\|/g)].map(m=>m[1].toLowerCase());
const genericNames=new Set(names(generic)), brandNames=new Set(names(brands));
for(const d of ctx.window.DRUG_DATA.drugs){ genericNames.add(d.n.toLowerCase()); genericNames.add(d.g.toLowerCase()); for(const b of d.b.split(/[,;]/)){const clean=b.replace(/\([^)]*\)/g,'').trim().toLowerCase();if(clean&&!genericNames.has(clean))brandNames.add(clean);} }
const stemByName={};for(const [stem,meaning,list]of src.stems)for(const name of list.split(' ')){if(!name.endsWith(stem))throw Error('Incorrect drug stem '+name);genericNames.add(name);stemByName[name]={stem,meaning};}
const splits={};
for(const [term,list]of Object.entries(src.splits)){
  const segments=list.map(id=>{const p=src.parts[id];if(!p)throw Error('Missing part '+id+' in '+term);return {text:p.surface||id,role:p.role,meaning:p.meaning};});
  if(segments.map(p=>p.text).join('')!==term)throw Error('Spelling mismatch: '+term+' = '+segments.map(p=>p.text).join('/'));
  splits[term]=segments;
}
const eponym=new RegExp('\\b('+src.eponyms+')\\b','i');
const text=ctx.window.INFO_TOPICS.filter(t=>['45','46','47','53','55','56'].includes(t.ch)).map(t=>t.title+' '+t.html.replace(/<[^>]*>/g,' ')).join(' ')+' '+JSON.stringify(ctx.window.EXAM3_LESSONS);
const terms={};
const all=new Set([...Object.keys(words),...Object.keys(src.extra),...Object.keys(splits),...Object.keys(stemByName)]);
for(const term of [...all].sort()){
  const w=words[term]||{}, full=knownAbbr[term]||w.full||spokenFull[term]||'', stem=stemByName[term], medication=genericNames.has(term), brand=brandNames.has(term)&&!medication&&!knownAbbr[term];
  let type='unsegmented', note='No verified split has been added here. This does not mean the term has no word parts.';
  let pieces=splits[term]||null;
  if(!pieces&&term.endsWith('s')&&splits[term.slice(0,-1)])pieces=splits[term.slice(0,-1)].concat({text:'s',role:'inflection',meaning:'plural ending'});
  if(brand){type='brand';note='Brand/trade name. Learn the generic name; brand lettering is not a reliable prefix/root/suffix system.';pieces=null;}
  else if(stem){type='drug-stem';note='Drug naming stem, not an anatomical root. The remaining letters distinguish the drug; they are not assigned invented meanings.';pieces=[...(term.length>stem.stem.length?[{text:term.slice(0,-stem.stem.length),role:'distinctive name',meaning:'identifies this member; no separate clinical meaning assigned'}]:[]),{text:stem.stem,role:'drug stem',meaning:stem.meaning}];}
  else if(medication){type='medication';note='Learn the complete generic/chemical name. No verified class-stem split is provided here; a name alone does not establish use, safety or dose.';pieces=null;}
  else if(full){type='abbreviation';note='Abbreviation or short label: expand the full term rather than splitting its letters into roots.';pieces=null;}
  else if(eponym.test(term)){type='eponym';note='Includes a person’s name. That name is not a prefix, root or suffix.';pieces=null;}
  else if(pieces){type='word-parts';note='A teaching breakdown. A literal word-part clue does not replace the clinical definition.';}
  else if(src.whole.split(' ').includes(term)){type='whole';note='Study this word as a whole term here. Historical or English word origins are not the same as a useful clinical prefix/root/suffix split.';}
  if(term==='nystatin')note='Nystatin is an antifungal. Do not interpret its ending as the lipid-lowering drug stem -vastatin.';
  const related=[];if(!pieces&&/[ -]/.test(term)&&!brand&&!medication)for(const token of term.match(/[a-z]+/g)||[])if(splits[token]&&!related.some(x=>x.term===token))related.push({term:token,pieces:splits[token]});
  const safe=term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const exam3=term.length>=4?new RegExp('(^|[^a-z])'+safe+'([^a-z]|$)','i').test(text):new RegExp('(^|[^A-Za-z])'+safe.toUpperCase()+'([^A-Za-z]|$)').test(text);
  terms[term]={type,note,pieces:pieces||[],related,exam3,full,definition:w.def||src.extra[term]||'',drug:w.drug||'',drug3:w.drug3||''};
}
const data={terms,sources:{medical:'https://medlineplus.gov/appendixa.html',grammar:'https://wtcs.pressbooks.pub/medterm/chapter/1-2-components-and-categories-of-medical-terms/',stems:'https://cdn.who.int/media/docs/default-source/international-nonproprietary-names-(inn)/stembook-2018.pdf',current:'https://www.who.int/teams/health-product-and-policy-standards/inn/stembook'}};
fs.writeFileSync(path.join(root,'data/word-parts.js'),'// Generated by tools/build_word_parts.js; edit tools/word-parts-src.js.\nwindow.WORD_PARTS_DATA = '+JSON.stringify(data)+';\n');
const counts={};Object.values(terms).forEach(t=>counts[t.type]=(counts[t.type]||0)+1);console.log(Object.keys(terms).length+' entries: '+JSON.stringify(counts));
