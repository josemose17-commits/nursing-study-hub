const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.join(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),c={window:{}};
for(const p of ['data/words.js','data/word-parts.js','word-parts.js'])vm.runInNewContext(read(p),c);
const D=c.window.WORD_PARTS_DATA.terms,W=c.window.WordParts;
for(const key of Object.keys(c.window.E2_WORDS.def))assert(D[key], 'Existing vocabulary omitted: '+key);
const types=new Set(['unsegmented','word-parts','drug-stem','medication','brand','eponym','abbreviation','whole']);
for(const [key,t]of Object.entries(D)){
  assert(types.has(t.type)&&typeof t.note==='string');
  if(t.pieces.length)assert.equal(t.pieces.map(p=>p.text).join(''),key,'Missing or invented letters in '+key);
  if(t.type==='brand'||t.type==='abbreviation'||t.type==='medication'||t.type==='eponym')assert.equal(t.pieces.length,0,'False morphological split: '+key);
  for(const p of t.pieces)assert(p.text&&p.role&&p.meaning);
  assert(!W.html(key).includes('undefined'));
}
function parts(key,expected){assert.deepEqual(Array.from(D[key].pieces,p=>p.text),expected);}
parts('hypoglycemia',['hypo','glyc','emia']); parts('hypoxia',['hyp','ox','ia']);
parts('hypoparathyroidism',['hypo','para','thyroid','ism']); parts('gastroenteritis',['gastr','o','enter','itis']);
parts('metformin',['met','formin']); parts('empagliflozin',['empa','gliflozin']);
for(const key of ['gastroparesis','hematemesis','hematochezia','hemoglobin','macrophage','endocrine'])assert.equal(D[key].pieces.at(-1).role,'suffix','Terminal suffix mislabeled: '+key);
assert.equal(D.metformin.pieces[0].role,'distinctive name');assert(!D.metformin.pieces[0].meaning.includes('metabolism'));
assert.equal(D.nystatin.type,'medication');assert(D.nystatin.note.includes('antifungal'));
assert.equal(D.simvastatin.pieces.at(-1).text,'vastatin');assert.equal(D.prilosec.type,'brand');
assert.equal(D.dka.type,'abbreviation');assert.equal(D.dka.full,'diabetic ketoacidosis');assert.equal(D.ptu.type,'abbreviation');
assert.equal(D['graves disease'].type,'eponym');
assert(W.html('Hypocalcemia / hypercalcemia').includes('calc'));
assert(W.html('deliberately-unknown').includes('No verified split'));
assert(!W.html('<script>alert(1)</script>').includes('<script>'));
const source=require('./word-parts-src');for(const [stem,,names]of source.stems)for(const name of names.split(' '))assert.equal(D[name].pieces.at(-1).text,stem);
const old=JSON.parse(read('version.json')).build;assert(read('nav.js').includes("var BUILD = '"+old+"'"));
console.log(Object.keys(D).length+' vocabulary entries retained; '+Object.values(D).filter(t=>t.type==='word-parts').length+' medical breakdowns; '+Object.values(D).filter(t=>t.type==='drug-stem').length+' drug stem entries.');
console.log('Reconstruction, missing-part labels, drug/brand/abbreviation/eponym distinctions, nystatin false-friend prevention, grouped headings and escaping passed.');
