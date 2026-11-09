#!/usr/bin/env node
// Behavior checks: current-patient payload, real native MIME, authorization, stale
// review protection, duplicate clicks, uncertain writes and read-only recovery.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto');
const ROOT=path.resolve(__dirname,'..'),G=require(path.join(ROOT,'careplan-google.js'));
const CLIENT='123456789-fixture.apps.googleusercontent.com',FILE={id:'fixture_native_doc_123456',mimeType:'application/vnd.google-apps.document',name:'NRS 114 Care plan'};
const hash=b=>Promise.resolve(crypto.createHash('sha256').update(b).digest('hex'));
function storage(){const m=new Map();return{getItem:k=>m.get(k)||null,setItem:(k,v)=>m.set(k,v),m};}
const response=(data,status=200)=>({ok:status>=200&&status<300,status,json:async()=>data});
function harness(extra={}){
 let snapshot={patient:'patient-one',title:'NRS 114 Care plan',bytes:new Uint8Array([80,75,3,4,90]),text:'CURRENT ANSWERS'},seq=0,auth=0;
 const calls=[],states=[],s=extra.storage||storage();
 const c=G.controller({clientId:CLIENT,snapshot:()=>snapshot,storage:s,digest:hash,randomId:()=>`fixture_export_attempt_${++seq}`,onState:x=>states.push(x),authorize:()=>{auth++;return Promise.resolve('FIXTURE_TOKEN_ONLY');},fetch:async(url,opts)=>{calls.push({url,opts});return response(FILE);},...extra});
 return{c,calls,states,s,auth:()=>auth,change:x=>{snapshot={...snapshot,...x};}};
}
async function main(){
 assert(G.configured(CLIENT));assert(!G.configured(''));assert(!G.configured('client-secret'));
 assert.throws(()=>G.docLink({...FILE,mimeType:'application/msword'}));
 assert.throws(()=>G.docLink({...FILE,id:'javascript:alert(1)'}));
 let h=harness({clientId:'',digest:()=>{throw Error('Must not require hashing before setup');}});await h.c.prepare();assert.equal(h.c.state().phase,'setup');assert.equal(h.c.state().preview,'CURRENT ANSWERS');await h.c.commit();assert.equal(h.auth(),0);assert.equal(h.calls.length,0);
 h=harness({digest:()=>{throw Error('Secure hashing unavailable');}});await h.c.prepare();assert.equal(h.c.state().phase,'error');assert.equal(h.c.state().reviewReady,false);await h.c.commit();assert.equal(h.auth(),0);assert.equal(h.calls.length,0);
 h=harness();h.change({hasAnswers:false});await h.c.prepare();assert.equal(h.c.state().phase,'empty');await h.c.commit();assert.equal(h.auth(),0);assert.equal(h.calls.length,0,'Do not turn an empty form into another unwanted blank Google Doc');
 h=harness();await h.c.prepare();assert.equal(h.calls.length,0,'Review never writes or requests Google access');
 await h.c.commit();assert.equal(h.c.state().phase,'done');assert.equal(h.calls.filter(c=>c.opts.method==='POST').length,1);assert.equal(h.calls.length,2,'Creation followed by native-file readback');
 assert.equal(h.c.state().url,'https://docs.google.com/document/d/'+FILE.id+'/edit');
 let upload=h.calls[0],body=Buffer.from(await upload.opts.body.arrayBuffer());
 assert(upload.url.startsWith('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart'));
 assert(body.includes(Buffer.from('"mimeType":"application/vnd.google-apps.document"')));assert(body.includes(Buffer.from([80,75,3,4,90])));
 assert.equal(upload.opts.headers.Authorization,'Bearer FIXTURE_TOKEN_ONLY');assert.equal(upload.opts.credentials,'omit');assert.equal(upload.opts.referrerPolicy,'no-referrer');
 assert(!JSON.stringify([...h.s.m]).includes('FIXTURE_TOKEN_ONLY'),'Tokens must never persist');assert(!JSON.stringify([...h.s.m]).includes('CURRENT ANSWERS'),'No duplicate answer store');
 await h.c.prepare();assert.equal(h.c.state().phase,'exists');await h.c.commit();assert.equal(h.calls.length,2,'Same form opens existing copy instead of silently duplicating it');
 await h.c.commit(true);assert.equal(h.calls.filter(c=>c.opts.method==='POST').length,2,'Another copy requires its explicit action');

 let grant,authorizations=0;
 h=harness({authorize:()=>{authorizations++;return new Promise(r=>grant=r);}});await h.c.prepare();const first=h.c.commit();await h.c.commit();assert.equal(authorizations,1);grant('FIXTURE_TOKEN_ONLY');await first;assert.equal(h.calls.filter(c=>c.opts.method==='POST').length,1);
 h=harness();await h.c.prepare();h.change({patient:'patient-two'});await h.c.commit();assert.equal(h.c.state().phase,'changed');assert.equal(h.auth(),0);assert.equal(h.calls.length,0);
 h=harness({authorize:()=>new Promise(r=>grant=r)});await h.c.prepare();const signing=h.c.commit();h.change({bytes:new Uint8Array([80,75,3,4,91])});grant('FIXTURE_TOKEN_ONLY');await signing;assert.equal(h.calls.length,0,'Edits during authorization require a new review');
 h=harness({authorize:()=>Promise.reject(new Error('Permission declined'))});await h.c.prepare();await h.c.commit();assert.equal(h.calls.length,0);assert.equal(h.c.state().phase,'error');

 let writes=0,reads=0,found=false;
 h=harness({fetch:async(url,opts)=>{if(opts.method==='POST'){writes++;throw new TypeError('Disconnected');}reads++;return response({files:found?[FILE]:[]});}});
 await h.c.prepare();await h.c.commit();assert.equal(h.c.state().phase,'pending');assert.equal(writes,1);
 await h.c.prepare();await h.c.commit();assert.equal(h.c.state().phase,'pending');assert.equal(writes,1,'Checking an uncertain write is read-only');
 found=true;await h.c.commit();assert.equal(h.c.state().phase,'done');assert.equal(writes,1);assert.equal(reads,2);
 h=harness({fetch:async()=>response({error:{message:'denied'}},403)});await h.c.prepare();await h.c.commit();assert.equal(h.c.state().phase,'error');await h.c.prepare();assert.equal(h.c.state().phase,'review','A definitive rejection can be retried by a new click');
 let verifyFail=true,posts=0;
 h=harness({fetch:async(url,opts)=>{if(opts.method==='POST'){posts++;return response(FILE);}return verifyFail?response({error:{}},503):response(FILE);}});
 await h.c.prepare();await h.c.commit();assert.equal(h.c.state().phase,'pending');verifyFail=false;await h.c.commit();assert.equal(h.c.state().phase,'done');assert.equal(posts,1,'A failed readback never replays the POST');
 h=harness({fetch:async()=>response({...FILE,mimeType:'application/msword'})});await h.c.prepare();await h.c.commit();assert.equal(h.c.state().phase,'pending');assert(!h.c.state().url,'Wrong MIME is not a successful native Doc');
 const blocked={getItem(){throw Error('blocked');},setItem(){throw Error('blocked');}};
 h=harness({storage:blocked});await h.c.prepare();await h.c.commit();await h.c.prepare();assert.equal(h.c.state().phase,'exists','In-memory receipt still prevents duplicate creation when storage is blocked');

 // A populated real-helper snapshot: every form type, Unicode, tables and references.
 const entries=storage();
 entries.setItem('cp-plans',JSON.stringify({active:{id:'active',f:{}},other:{id:'other',f:{cc:'OTHER_PATIENT_DO_NOT_SEND',sbar2:{R:'OTHER_PATIENT_RECOMMENDATION'}}}}));entries.setItem('cp-cur','active');
 const ctx={window:{},document:{querySelector:()=>null,querySelectorAll:()=>[],addEventListener(){}},localStorage:entries,setTimeout:()=>0,clearTimeout(){},TextEncoder,Uint8Array,ArrayBuffer,DataView,Date,console};
 vm.createContext(ctx);
 for(const file of ['nanda-index','nanda-guides','form','labs','include','questions','coach','guidance'])vm.runInContext(fs.readFileSync(path.join(ROOT,'data/careplan',file+'.js'),'utf8'),ctx);
 vm.runInContext(fs.readFileSync(path.join(ROOT,'apa-core.js'),'utf8'),ctx);ctx.window.APA=ctx.APA;
 vm.runInContext(fs.readFileSync(path.join(ROOT,'careplan.js'),'utf8'),ctx);const T=ctx.window.CP_TEST;
 assert.equal(ctx.window.CP_HELPER.exportSnapshot().hasAnswers,false,'Blank labels and empty tables are not entered answers');
 T.set('sbar2.R','FICTIONAL single entered answer');let one=ctx.window.CP_HELPER.exportSnapshot();assert(one.hasAnswers);assert(one.text.includes('FICTIONAL single entered answer'));assert(!one.text.includes('Arterial Blood Gases'),'Review skips empty lab rows; the document still keeps them');
 for(const sec of ctx.window.CP_FORM)for(const it of sec.items){
  if(['text','line','pmhmeds'].includes(it.type))T.set(it.k,'FICTIONAL '+it.k+' — café “quote” < & >');
  if(it.type==='grid')for(const f of it.fields)T.set((it.fields[0][0]==='student'?'me.':'info.')+f[0],'FICTIONAL '+f[0]);
  if(it.type==='sbar')for(const part of ['S','B','A','R'])T.set(it.k+'.'+part,'FICTIONAL '+it.k+' '+part);
  if(it.type==='vitals')for(const part of ['time','t','p','r','bp','spo2','pain'])T.set(it.k+'.'+part,'FICTIONAL '+it.k+' '+part);
  if(it.type==='systems')for(const sy of ctx.window.CP_SYSTEMS)T.set(it.k+'.'+sy[0],'FICTIONAL '+it.k+' '+sy[0]);
 }
 T.set('erik',{lvl:'FICTIONAL developmental level',a:'FICTIONAL development assessment',b:'FICTIONAL developmental evidence'});
 T.set('support',[['FICTIONAL support person','FICTIONAL relationship']]);T.set('meds',[['FICTIONAL medication','FICTIONAL verified order','FICTIONAL class','FICTIONAL indication','FICTIONAL checks']]);
 T.set('orders',[['FICTIONAL order','FICTIONAL rationale','FICTIONAL expected outcome']]);
 for(const pn of ctx.window.CP_LABS)for(const row of pn.rows)for(const col of ['r','i','c','s'])T.set('labs.'+row.k+'.'+col,'FICTIONAL '+row.k+' '+col);
 for(const i of [0,1])for(const col of ['val','hl','rel','norm','crit','cause','tx','nsg'])T.set('fe.'+i+'.'+col,'FICTIONAL FE '+i+' '+col);
 T.set('plan',[{stmt:'FICTIONAL problem',stg:'FICTIONAL short goal',ltg:'FICTIONAL long goal',iv:[['A','FICTIONAL intervention','FICTIONAL scientific rationale','(Fixture Author, 2026)']],ev:{s:'partly',d:'FICTIONAL response data',next:'FICTIONAL next action'}}]);
 entries.setItem('apa-refs',JSON.stringify([{cite:{p:'(Fixture Author, 2026)',n:'Fixture Author (2026)'},segs:[{t:'Fixture Author. (2026). '},{t:'FICTIONAL scholarly title',i:true}]}]));
 T.set('_coach',{private:{draft:'PRIVATE ROUGH DRAFT DO NOT SEND'}});T.set('_workspace',{active:'PRIVATE NAVIGATION'});
 const snap=ctx.window.CP_HELPER.exportSnapshot(),expected=Buffer.from(T.docx());assert.deepEqual(Buffer.from(snap.bytes),expected);
 assert(snap.text.includes('FICTIONAL sbar3 R'));assert(snap.text.includes('FICTIONAL Informatics')||snap.text.includes('FICTIONAL informatics'));
 assert(snap.text.includes('FICTIONAL short goal')&&snap.text.includes('FICTIONAL long goal'));
 assert(!snap.text.includes('PRIVATE'));assert(!expected.includes(Buffer.from('PRIVATE')));
 assert(!snap.text.includes('OTHER_PATIENT'));assert(!expected.includes(Buffer.from('OTHER_PATIENT')),'A second saved patient must never enter the current export');
 const payload=Buffer.from(await G.multipart(snap,'fixture_request_12345','fixture_boundary_12345').arrayBuffer());
 const start=payload.indexOf(Buffer.from('\r\nContent-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document\r\n\r\n'));
 assert(start>0);const mediaStart=payload.indexOf(Buffer.from('\r\n\r\n'),start)+4;assert.deepEqual(payload.subarray(mediaStart,mediaStart+expected.length),expected,'Google receives exactly the populated syllabus document, not a blank template');
 assert(!payload.includes(Buffer.from('PRIVATE')));assert(payload.includes(Buffer.from('"mimeType":"application/vnd.google-apps.document"')));
 const html=fs.readFileSync(path.join(ROOT,'Care Plan Helper.html'),'utf8');assert(html.includes('id="google-create"')&&html.includes('id="google-review"'));assert(!html.includes('are never synced or uploaded'));
 const sync=/SYNC\s*=\s*(\/.*\/)/.exec(fs.readFileSync(path.join(ROOT,'nav.js'),'utf8'));assert(!new RegExp(sync[1].slice(1,-1)).test(G.storageKey));
 if(process.argv[2]==='--docx'){assert(process.argv[3]);fs.writeFileSync(process.argv[3],expected);}
 console.log('✓ care plan Google: filled current-patient syllabus bytes; explicit authorization; native MIME/readback; duplicate protection; stale-review refusal; uncertain-write recovery; tokens/drafts stay out of storage and upload');
}
main().catch(e=>{console.error(e);process.exitCode=1;});
