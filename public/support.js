const game=document.getElementById('game');
const topic=document.getElementById('topic');
const email=document.getElementById('support-email');
function update(){const subject=`${game.value} — ${topic.value}`;const zh=document.documentElement.lang.startsWith('zh');const body=zh?'游戏版本：\n设备型号：\n问题描述：\n\n（请勿填写密码、令牌或验证码。）':'App version:\nDevice model:\nWhat happened:\n\n(Please do not include passwords, tokens or verification codes.)';email.href=`mailto:tigerywy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;}
if(game&&topic&&email){game.addEventListener('change',update);topic.addEventListener('change',update);update();}
