// Execute the actual combined-page source tags, stopping before UI setup.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
module.exports=function(){const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8'),window={},context=vm.createContext({window,globalThis:window,console});
 for(const m of read('Exam 4 Class Review.html').matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)){
  const src=/src="([^"]+)"/.exec(m[1]);if(src){const f=src[1].split('?')[0];if(f==='mh.js')break;vm.runInContext(read(f),context,{filename:f});}else vm.runInContext(m[2],context);
 }
 return window;
};
