import {readFile,mkdir,writeFile} from 'node:fs/promises';
const origin=process.argv[2];
if(!origin||!/^https:\/\/[^/]+$/.test(origin))throw Error('Usage: node scripts/verify-live.mjs https://your-public-domain');
const routes=JSON.parse(await readFile('docs/routes.json','utf8'));
const findings=[];
for(const route of routes){
 const response=await fetch(origin+route.url,{redirect:'follow'}),html=await response.text();
 const expected=await readFile('dist/'+route.file,'utf8');
 const title=expected.match(/<title>(.*?)<\/title>/)?.[1];
 const sameOrigin=new URL(response.url).origin===origin;
 const canonical=html.includes(`rel="canonical" href="${origin+route.url}"`);
 findings.push({path:route.url,status:response.status,titleMatches:html.includes(`<title>${title}</title>`),sameOrigin,canonical,pass:response.status===200&&sameOrigin&&canonical&&html.includes(`<title>${title}</title>`)});
}
for(const path of ['/style.css','/support.js','/favicon.svg','/assets/b20-laboratory.png','/assets/coin-background.png','/assets/coin-logo.png','/robots.txt','/sitemap.xml']){
 const res=await fetch(origin+path);findings.push({path,status:res.status,pass:res.status===200});
}
const missing=await fetch(origin+'/release-check-page-that-does-not-exist');
findings.push({path:'unknown-route',status:missing.status,pass:missing.status===404});
const home=await fetch(origin+'/');
const expectedHeaders={'x-content-type-options':'nosniff','x-frame-options':'DENY'};
for(const [name,value] of Object.entries(expectedHeaders))findings.push({header:name,value:home.headers.get(name),pass:home.headers.get(name)===value});
findings.push({header:'content-security-policy',value:home.headers.get('content-security-policy'),pass:Boolean(home.headers.get('content-security-policy')?.includes("frame-ancestors 'none'"))});
await mkdir('docs/validation',{recursive:true});
await writeFile('docs/validation/live-check.json',JSON.stringify({origin,time:new Date().toISOString(),pass:findings.every(x=>x.pass),findings},null,2)+'\n');
console.log(`${findings.filter(x=>x.pass).length}/${findings.length} live checks passed.`);
if(findings.some(x=>!x.pass)){console.error(findings.filter(x=>!x.pass));process.exitCode=1;}
