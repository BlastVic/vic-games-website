import {readFile,stat} from 'node:fs/promises';
import {resolve,dirname,join} from 'node:path';
const root=resolve('dist');
const pages=JSON.parse(await readFile('docs/routes.json','utf8'));
let checked=0;const failures=[];const cache=new Map();
async function html(file){if(!cache.has(file))cache.set(file,await readFile(file,'utf8'));return cache.get(file)}
for(const page of pages){
 const file=join(root,page.file),body=await html(file);
 if((body.match(/<h1[ >]/g)||[]).length!==1)failures.push(page.file+': expected one h1');
 if(/\{\{\w+\}\}|undefined|localhost:|example\.com/.test(body))failures.push(page.file+': unresolved content');
 if(!body.includes('name="description"'))failures.push(page.file+': missing description');
 const ids=[...body.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 if(new Set(ids).size!==ids.length)failures.push(page.file+': duplicate IDs');
 for(const match of body.matchAll(/\b(?:href|src)="([^"]+)"/g)){
  const ref=match[1];if(/^(https?:|mailto:)/.test(ref))continue;
  const target=new URL(ref,'http://local'+page.url),pathname=decodeURIComponent(target.pathname);
  let dest=join(root,pathname);try{if((await stat(dest)).isDirectory())dest=join(dest,'index.html');await stat(dest);if(target.hash){const content=await html(dest);if(!content.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`))throw Error('missing fragment')}}catch(e){failures.push(page.file+': '+ref+' ('+e.message+')')};checked++;
 }
}
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log(`PASS: ${pages.length} pages; ${checked} internal links, assets and fragments; page headings, metadata and placeholders.`);
