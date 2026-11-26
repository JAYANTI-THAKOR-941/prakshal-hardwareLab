import {mkdir,readFile,writeFile,rename,rm} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {resolve} from 'node:path';
const manifest=JSON.parse(await readFile(new URL('../public/model-catalog.json',import.meta.url),'utf8'));
const dir=resolve('public/real-models');await mkdir(dir,{recursive:true});
function valid(b,m){return b.length===m.size&&b.subarray(0,4).toString()==='glTF'&&b.readUInt32LE(4)===2&&b.readUInt32LE(8)===b.length&&createHash('sha1').update('blob '+b.length+'\0').update(b).digest('hex')===m.sha;}
const results=await Promise.all(manifest.map(async m=>{const path=resolve(dir,m.file);try{if(valid(await readFile(path),m))return {file:m.file,available:true};}catch{}
for(let attempt=0;attempt<3;attempt++){try{const response=await fetch(m.url,{signal:AbortSignal.timeout(45000)});if(!response.ok)throw Error('HTTP '+response.status);const bytes=Buffer.from(await response.arrayBuffer());if(!valid(bytes,m))throw Error('GLB integrity mismatch');await writeFile(path+'.tmp',bytes);await rename(path+'.tmp',path);console.log('Verified '+m.file);return {file:m.file,available:true};}catch(e){console.warn(m.file,attempt+1,e.message);}}
await rm(path,{force:true});await rm(path+'.tmp',{force:true});return {file:m.file,available:false};}));
await writeFile(resolve(dir,'availability.json'),JSON.stringify(results));console.log('Verified assets:',results.filter(r=>r.available).length,'/',results.length);