const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),C=require('../e4-diagnostic-core');
const ROOT=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(ROOT,f),'utf8');
function storage(seed={}){const m=new Map(Object.entries(seed));return {m,getItem:k=>m.has(k)?m.get(k):null,setItem:(k,v)=>m.set(k,v),key:i=>[...m.keys()][i],get length(){return m.size;}};}
function element(){return {innerHTML:'',events:{},addEventListener(n,f){this.events[n]=f;},querySelector(){return null;},querySelectorAll(){return [];},scrollIntoView(){}};}
function app(ls=storage(),hash='#test'){
 let hashValue=hash;const location={get hash(){return hashValue;},set hash(v){hashValue=v?(v.startsWith('#')?v:'#'+v):'';}};const W=require('./e4-page-data')(),el=element(),tabs=element(),events={},document={getElementById:id=>id==='cj'?el:id==='mh-tabs'?tabs:null};W.addEventListener=(n,f)=>events[n]=f;
 // The combined page already loaded this UMD controller and source. Bind its
 // core to the same tested instance for deterministic state assertions.
 W.E4DiagnosticCore=C;
 vm.runInNewContext(read('e4-diagnostic.js'),{window:W,document,console,Date,URL,Blob});
 vm.runInNewContext(read('mh.js'),{window:W,document,location,localStorage:ls,console,Date,Math,Set});
 return {W,el,events,location,ls,route(h){location.hash='#'+h;events.hashchange();},click(action,id){el.events.click({target:{closest:s=>s==='[data-d]'?{dataset:{d:action,id}}:null}});if(location.hash)events.hashchange();}};
}
module.exports={storage,element,app};
