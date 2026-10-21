import {showcaseTemplates} from '../src/showcase-templates.mjs';
import {mkdir,readFile,writeFile,cp,rm} from 'node:fs/promises';
import {site,games} from '../src/site.mjs';
import {policyContent} from '../src/policies.mjs';
import {redDocument} from '../src/red-ever-after.mjs';
import {coinDeletion} from '../src/coin-deletion.mjs';
if (site.origin && (!/^https:\/\/[^/]+$/.test(site.origin))) throw Error('SITE_ORIGIN must be an HTTPS origin without a trailing slash');
const out=new URL('../dist/',import.meta.url);
await mkdir(out,{recursive:true});
await cp(new URL('../public/',import.meta.url),out,{recursive:true});
const supportScript = await readFile(new URL('../public/support.js',import.meta.url),'utf8');
await writeFile(new URL('support.js',out), supportScript.replaceAll('tigerywy@gmail.com', site.email));
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rendered=[];
for(const lang of ['en','zh']){
const t=(en,zh)=>lang==='en'?en:zh;
const url=(route='')=>(lang==='zh'?'/zh/':'/')+(route?route+'/':'');
const link=(route,label,cls='')=>`<a href="${url(route)}"${cls?` class="${cls}"`:''}>${label}</a>`;
const email=`<a class="email" href="mailto:${site.email}">${site.email}</a>`;
const names={home:t('Home','首页'),games:t('Games','游戏'),support:t('Support','客服支持'),privacy:t('Privacy','隐私政策'),terms:t('Terms','服务条款'),deletion:t('Data requests','数据请求')};
async function page(route,title,description,body,{noindex=false,script=false}={}){
 const alternate=(lang==='en'?'/zh/':'/')+(route?route+'/':'');
 const canonical=site.origin?`<link rel="canonical" href="${esc(site.origin+url(route))}"><link rel="alternate" hreflang="en" href="${esc(site.origin+'/'+(route?route+'/':''))}"><link rel="alternate" hreflang="zh-Hans" href="${esc(site.origin+'/zh/'+(route?route+'/':''))}">`:'';
 const socialGame=games.find(g=>route==='games/'+g.slug);
 const socialImage='/assets/'+(socialGame?.showcase.cover||'showcase/b20-cover.webp');
 const social=`<meta property="og:type" content="website"><meta property="og:title" content="${esc(title+' · '+site.name)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${esc(site.origin+url(route))}"><meta property="og:image" content="${esc(site.origin+socialImage)}"><meta name="twitter:card" content="summary_large_image">`;
 const html=`<!doctype html><html lang="${lang==='zh'?'zh-Hans':'en'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} · ${site.name}</title><meta name="description" content="${esc(description)}"><meta name="theme-color" content="#0c1014">${noindex?'<meta name="robots" content="noindex">':''}${canonical}${social}<link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="/style.css">${script?'<script src="/support.js" defer></script>':''}</head><body><a class="skip" href="#main">${t('Skip to content','跳至正文')}</a><header class="header wrap"><a class="brand" href="${url()}" aria-label="${site.name} ${names.home}"><span class="mark" aria-hidden="true">VY</span>${site.name}<span class="brand-suffix"> / </span></a><nav class="nav" aria-label="${t('Main navigation','主导航')}"><a href="${url('games')}" ${route==='games'||route.startsWith('games/')?'aria-current="page"':''}>${names.games}</a><a href="${url('support')}" ${route==='support'?'aria-current="page"':''}>${names.support}</a><a class="language" href="${alternate}" lang="${lang==='en'?'zh-Hans':'en'}" aria-label="${t('Switch to Chinese','Switch to English')}">${t('中文','EN')}</a></nav></header><main id="main" class="wrap">${body}</main><footer><div class="wrap"><div class="footer-top"><a class="brand" href="${url()}">${site.name}<span class="mark" aria-hidden="true">VY</span></a><nav aria-label="${t('Footer navigation','页脚导航')}">${link('games',names.games)}${link('privacy',names.privacy)}${link('terms',names.terms)}${link('support',names.support)}${link('support/deletion',names.deletion)}</nav></div><div class="footer-bottom"><p>© 2026 ${site.name}. ${t('Independently made.','独立创作。')}</p><p>${t('Small games. A world of play.','小小的游戏，大大的乐趣。')}</p></div></div></footer></body></html>`;
 const file=(lang==='zh'?'zh/':'')+(route?route+'/':'')+'index.html';
 await mkdir(new URL(file.replace(/[^/]*$/,''),out),{recursive:true});await writeFile(new URL(file,out),html);rendered.push({file,url:url(route),noindex});
}
function help(){return `<section class="help-strip"><div><h3>${t('A direct line to the developer.','直接联系开发者。')}</h3><p>${t('Questions, feedback, or a little help with your game.','游戏疑问、意见反馈，或是需要一点帮助。')}</p></div>${link('support',t('Let’s talk','联系我'),'button secondary')}</section>`}
function doc(body){return `<div class="doc-layout"><aside class="doc-nav"><nav aria-label="${t('Policy navigation','政策导航')}"><p class="eyebrow">${t('PLAYER RESOURCES','玩家服务')}</p>${link('privacy',names.privacy)}${link('terms',names.terms)}${link('support',names.support)}${link('support/deletion',t('Account & data deletion','账号与数据删除'))}<p class="eyebrow">${t('GAME NOTICES','游戏专属说明')}</p>${games.map(g=>link('games/'+g.slug+'/privacy',g.name[lang])).join('')}</nav></aside>${body.includes('<article')?body:`<article class="document">${body}</article>`}</div>`}
const showcase=showcaseTemplates({lang,games,site,url,link,esc,help});
await page('',t('Independent games, unexpected worlds','独立游戏，意想不到的世界'),t('Play B20: Mini Game Mayhem and Coin Pusher: Monster Siege on Google Play. Preview Red Ever After, a dark fairytale RPG preparing for closed testing.','在 Google Play 游玩 B20 与推币机：怪物围城，预览正在准备封闭测试的暗黑童话 RPG Red Ever After。'),showcase.home());
await page('games',names.games,t('Explore three games by independent developer Vic Yang: gameplay, screenshots and official download links.','探索独立开发者 Vic Yang 的三款游戏：玩法介绍、游戏画面与官方下载链接。'),showcase.collection());
for(const g of games){
 const base='games/'+g.slug;
 if(g.policy==='red-ever-after') await page(base+'/delete-data',t('Request data deletion','请求删除数据'),t('Request deletion of Red Ever After: Idle RPG data by email. No login required.','通过邮件请求删除 Red Ever After: Idle RPG 数据，无需登录。'),doc(redDocument('delete-data',{lang,site,g,url})));
 if(g.slug==='coin-pusher-monster-siege') await page(base+'/delete-data',t('Request data deletion','请求删除数据'),t('Request deletion of Coin Pusher: Monster Siege data from Vic Yang. No login required.','向 Vic Yang 请求删除推币机：怪物围城相关数据，无需登录。'),doc(coinDeletion({lang,site,g,url})));
 await page(base,g.name[lang],g.description[lang],showcase.detail(g));
 for(const type of ['privacy','terms','support']){
  let body;
  if(g.policy==='red-ever-after'){
   body=redDocument(type,{lang,site,g,url});
  }else if(g.policy==='b20'){
   const policy=JSON.parse(await readFile(new URL('../src/content/b20/policy-status.json',import.meta.url),'utf8'));
   const replacements={review_notice:policy.reviewNotice,age_privacy:policy.agePrivacy,age_terms:policy.ageTerms};
   body=(await readFile(new URL(`../src/content/b20/${type}.html`,import.meta.url),'utf8')).replace(/\{\{(\w+)\}\}/g,(_,key)=>{if(!(key in replacements))throw Error('Unknown placeholder '+key);return replacements[key]}).replace(/href="\/(privacy|terms|support)\//g,(_,part)=>`href="${url(base+'/'+part)}`).replace(/ <span aria-hidden="true">↗<\/span>/g,'');
   body=body.replace('<article class="document">','<article class="document" lang="en">');
   const n=t('B20 game-specific notice, updated October 7, 2026. Originally effective September 14, 2026. The shared developer-site notice separately covers website hosting and support.','B20 游戏专属英文说明，2026 年 10 月 7 日更新，原生效日期为 2026 年 9 月 14 日。本页正文保留英文；网站托管与客服另适用开发者网站通用说明。');
   body=body.replace(/(<article[^>]*>)/,`$1<aside class="notice" lang="${lang==='zh'?'zh-Hans':'en'}">${n} ${link('privacy',names.privacy)}</aside>`);
  }else{
   body=policyContent(type==='support'?'game-support':'pending-'+type,{lang,g,site,url,email});
  }
  await page(base+'/'+type,`${g.name[lang]} — ${names[type]}`,`${g.name[lang]}: ${names[type]} · ${site.name}`,doc(body),{noindex:g.policy==='pending'&&type!=='support'});
 }
}
for(const type of ['privacy','terms']) await page(type,names[type],t(`Read ${site.name}’s ${type} information for this website and find each game’s documents.`,`查看 ${site.name} 的统一政策与各游戏专属说明。`),doc(policyContent(type,{lang,site,games,url,email})),{noindex:site.websitePolicyStatus !== 'ready'});
await page('support',names.support,t('Contact Vic Yang for game support, feedback and privacy requests.','联系 Vic Yang 获取游戏帮助、反馈问题或提交隐私请求。'),`<div class="page-heading"><p class="eyebrow">${t('PLAYER SUPPORT','玩家支持')}</p><h1>${t('Let’s get you<br>back to playing.','解决小问题，<br>继续享受游戏。')}</h1><p class="intro">${t('You’re talking to the person who makes the games. Choose your game and tell me what’s happening.','直接和游戏开发者沟通。选择你的游戏，告诉我遇到了什么。')}</p></div><div class="support-grid"><section class="panel"><h2>${t('How can I help?','需要什么帮助？')}</h2><label for="game">${t('Your game','你的游戏')}</label><select id="game"><option value="General">${t('General / website','一般咨询 / 网站')}</option>${games.map(g=>`<option value="${esc(g.name.en)}">${g.name[lang]}</option>`).join('')}</select><label for="topic">${t('Topic','问题类型')}</label><select id="topic"><option value="Game support">${t('Game support','游戏问题')}</option><option value="Feedback">${t('Feedback','意见反馈')}</option><option value="Purchase issue">${t('Purchase issue','购买问题')}</option><option value="Privacy request">${t('Privacy request','隐私请求')}</option></select><a class="button" id="support-email" href="mailto:${site.email}?subject=Game%20support">${t('Write an email','撰写邮件')}</a><p class="release-note">${t('Opens your email app. Nothing is sent until you send the email.','打开你的邮件应用，由你确认发送后才会提交。')}</p><p>${email}</p></section><aside class="panel"><p class="eyebrow">${t('A LITTLE CONTEXT HELPS','这些信息有助于排查')}</p><h2>${t('Help me find the problem.','帮助我定位问题。')}</h2><p>${t('Include the game name, app version, device model and what happened before the issue. A screenshot can help.','请附上游戏名称、版本、设备型号以及出现问题前的操作。截图也会有帮助。')}</p><p>${t('Please remove private information from screenshots. Never send passwords, sign-in tokens, payment-card details or verification codes.','请去除截图中的私人信息。不要发送密码、登录令牌、银行卡资料或验证码。')}</p>${link('support/deletion',t('Account & data deletion','账号与数据删除'),'text-link')}<p class="release-note">${t('Support is handled personally by Vic Yang.','由 Vic Yang 本人处理客服与隐私请求。')}</p></aside></div><section class="faq"><p class="eyebrow">${t('COMMON QUESTIONS','常见问题')}</p><h2>${t('A few things to know.','也许这里就有答案。')}</h2>${[[t('Where can I download the games?','在哪里下载游戏？'),t('B20: Mini Game Mayhem and Coin Pusher: Monster Siege are available on Google Play. Each game page links to its official listing. Red Ever After: Idle RPG is preparing for closed testing and has no public download yet.','B20 与推币机：怪物围城已在 Google Play 上线，各游戏页面提供官方商店链接。Red Ever After: Idle RPG 正在准备封闭测试，暂未开放公开下载。')],[t('Does uninstalling delete my online data?','卸载会删除在线数据吗？'),t('Not necessarily. Uninstalling may remove local progress, but online records require a separate request. Read your game’s privacy notice and the account deletion instructions.','不一定。卸载可能会清除本地进度，但在线记录通常需要单独请求删除。请查看对应游戏的隐私说明与账号删除指引。')],[t('I have a purchase problem. What should I send?','购买遇到问题，需要提供什么？'),t('Tell me the game, store, purchase date and order reference if available. Do not send full payment details. Refund eligibility and handling depend on the store and applicable law.','请提供游戏、商店、购买日期及可用的订单编号，不要提供完整支付资料。退款条件与处理取决于商店规则及适用法律。')]].map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</section>`,{script:true});
await page('support/deletion',t('Account & data deletion','账号与数据删除'),t('Request game-account or data deletion from Vic Yang, even if the game is no longer installed.','即使已经卸载游戏，也可以向 Vic Yang 请求删除游戏账号或相关数据。'),doc(policyContent('deletion',{lang,site,games,url,email})));
await page('404',t('Page not found','页面未找到'),t('Return to the games by Vic Yang.','返回 Vic Yang 的游戏主页。'),`<section class="section"><p class="eyebrow">404 / ${t('A WRONG TURN','走错路了')}</p><h1>${t('This world is<br>still undiscovered.','这里还没有<br>游戏世界。')}</h1><p class="intro">${t('The page may have moved, or the address may be incorrect.','页面可能已移动，或者地址有误。')}</p>${link('',t('Back to home','返回首页'),'button')}</section>`,{noindex:true});
}
await cp(new URL('404/index.html',out),new URL('404.html',out));
await writeFile(new URL('_headers',out),`/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: DENY\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n  Content-Security-Policy: default-src 'self'; img-src 'self'; style-src 'self'; script-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'none'\n`);
await writeFile(new URL('robots.txt',out),`User-agent: *\nAllow: /\n${site.origin?`Sitemap: ${site.origin}/sitemap.xml\n`:''}`);
if(site.origin){await writeFile(new URL('sitemap.xml',out),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${rendered.filter(x=>!x.noindex).map(x=>`<url><loc>${esc(site.origin+x.url)}</loc></url>`).join('')}</urlset>`)}else await rm(new URL('sitemap.xml',out),{force:true});
await writeFile(new URL('../docs/routes.json',import.meta.url),JSON.stringify(rendered,null,2)+'\n');
console.log(`Built ${rendered.length} static pages in ${out.pathname}`);
