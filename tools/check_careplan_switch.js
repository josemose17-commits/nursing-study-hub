// Exercise the actual patient buttons, including a switch before debounced saving.
const assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),storage=new Map();
function boot(){
  const nodes=new Map(),handlers={},ready=[];
  function node(id){if(!nodes.has(id))nodes.set(id,{style:{},classList:{toggle(){}},setAttribute(){},addEventListener(event,fn){handlers[id+event]=fn;}});return nodes.get(id);}
  const c={window:{addEventListener(){},location:{reload(){}}},location:{hash:''},document:{querySelector:node,querySelectorAll:()=>[],addEventListener(k,fn){if(k==='DOMContentLoaded')ready.push(fn);}},localStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)},cancelAnimationFrame(){},requestAnimationFrame(){},setTimeout(){},clearTimeout(){},TextEncoder,console};
  vm.createContext(c);
  for(const f of ['nanda-index','nanda-guides','form','labs','simple','include','questions','coach','guidance'])vm.runInContext(fs.readFileSync(path.join(root,'data/careplan',f+'.js'),'utf8'),c);
  vm.runInContext(fs.readFileSync(path.join(root,'careplan.js'),'utf8'),c);ready.forEach(fn=>fn());
  return {api:c.window.CP_TEST,id:c.window.CP_HELPER.patient(),handlers};
}
let a=boot();a.api.set('cc','First record');a.api.set('_interview.story','Private story');a.api.set('me.student','Student A');
a.handlers['#pt-newclick']();
let b=boot();assert.notEqual(b.id,a.id);assert.equal(b.api.get('cc'),undefined);assert.equal(b.api.get('_interview.story'),undefined);assert.equal(b.api.get('me.student'),'Student A');assert(!b.api.plainText().includes('First record'));
b.api.set('cc','Second record');b.handlers['#ptchange'].call({value:a.id});
let restored=boot();assert.equal(restored.api.get('cc'),'First record');assert.equal(restored.api.get('_interview.story'),'Private story');assert(!restored.api.plainText().includes('Second record'));
console.log('Patient creation, switching, reload and export isolation passed.');
