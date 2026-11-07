// Presentation content only. Release status and policy scope remain separate game fields.
const bi = (en, zh) => ({en, zh});
const shot = (file, title, caption, localized = true) => ({file, title, caption, localized});
export const showcases = {
 b20: {
  theme:'robot', cover:'showcase/b20-cover.webp', icon:'showcase/b20-icon.webp',
  trailer:{
   file:'video/b20-trailer.mp4', poster:'video/b20-trailer-poster.webp',
   youtube:'https://www.youtube.com/watch?v=3LqQ_7UM3d0',
   title:bi('Small games.\nBig surprises.','小小的游戏，\n大大的意外。'),
   description:bi('Meet B20 in motion. A quick trip through 12 different mini-games, from mischievous laboratory experiments to the little surprises of everyday life.','让 B20 动起来。在 12 款不同小游戏之间快速穿梭，从实验室里的奇妙实验，到日常生活中的小小意外。'),
   label:bi('Official gameplay trailer','官方实机宣传片'),
   format:bi('35.5 seconds · English video','35.5 秒 · 英文视频'),
   credit:{title:'Electrodoodle',author:'Kevin MacLeod (incompetech.com)',source:'https://incompetech.com/music/royalty-free/index.html?Search=Search&isrc=USUAN1200079',license:'https://creativecommons.org/licenses/by/4.0/'}
  },
  hook:bi('For your “one more round.”','献给每一次「再来一局」。'),
  summary:bi('40 quick challenges. One very busy robot.','40 个短回合挑战，一个忙不停的小机器人。'),
  introTitle:bi('Welcome to B20’s stress test.','欢迎加入 B20 的压力测试。'),
  intro:bi('An experiment goes sideways. A subway is about to leave. The last fry is still on the plate. B20 turns curious situations into tiny tests of reflexes, memory and timing. Read the cue, make your move, and get ready for something completely different.','实验出了小意外，地铁就要关门，盘子里还剩最后一根薯条。B20 将这些奇妙又熟悉的情景，变成考验反应、记忆与时机的短小挑战。看清提示，迅速行动，然后迎接下一种新花样。'),
  highlights:bi([['40','mini-games'],['2','themed worlds'],['5','difficulty levels per game']],[['40','个迷你游戏'],['2','个主题世界'],['5','档单游戏难度']]),
  steps:bi([
   ['Read the cue','Tap, swipe or hold to solve the challenge in front of you. Each game introduces its own little rule.'],
   ['Explore both worlds','Experiment in Mad Experiments, then take on the everyday surprises of Urban Daydream. Playing earns theme XP and opens more games.'],
   ['Chase the next star','Clear challenges for stars, revisit tougher difficulties, or unlock two themes to open Endless mode. Daily tasks and achievements give you more to aim for.']
  ],[
   ['先看提示，再出手','点击、滑动或长按，完成眼前的挑战。每个小游戏都有自己的小规则。'],
   ['在两个世界间切换','在疯狂实验室里探索，再走进都市白日梦。游玩获得主题经验，逐步解锁更多小游戏。'],
   ['向下一颗星出发','完成挑战收集星星，尝试更高难度。解锁两个主题后开启无尽模式，还有每日任务和成就等你挑战。']
  ]),
  gallery:[
   shot('b20-lab',bi('Meet your test subject','认识你的实验伙伴'),bi('B20 at home in the Mad Experiments laboratory.','在疯狂实验室里，和 B20 一起开始挑战。')),
   shot('b20-shrink',bi('Small toys. Big decisions.','小小玩具，大大考验'),bi('The shrink-ray challenge puts timing to the test.','把握缩小射线的时机，完成实验。')),
   shot('b20-subway',bi('Beat the rush','赶上这班地铁'),bi('Swipe around commuters and make it to the train.','在通勤人群中找准路线，滑动登上地铁。')),
   shot('b20-fry',bi('The last fry is yours… maybe.','最后一根薯条，谁先出手？'),bi('Watch the hands and choose your moment.','留意伸向餐盘的手，把握出手时机。'))
  ],
  faq:bi([
   ['What is MiniMix?','MiniMix is the project name. The game is published on Google Play as B20: Mini Game Mayhem.'],
   ['What can I work toward?','Theme experience unlocks more games, cleared challenges award stars, and five difficulty levels let you return for a tougher test.'],
   ['Which languages are supported?','The game offers interface text and instructions in 12 languages, including English and Simplified Chinese.']
  ],[
   ['MiniMix 和 B20 是同一款游戏吗？','是的，MiniMix 是项目名称，Google Play 上的正式游戏名为 B20: Mini Game Mayhem。'],
   ['游戏里有哪些成长目标？','通过主题经验解锁更多游戏，完成挑战收集星星，再尝试五档难度中更高一级的考验。'],
   ['支持哪些语言？','游戏界面和玩法提示支持包括简体中文、英文在内的 12 种语言。']
  ])
 },
 'coin-pusher-monster-siege': {
  theme:'coin', cover:'showcase/coin-cover.webp', icon:'showcase/coin-icon.webp',
  hook:bi('A little timing. A pile of possibilities.','把握一点时机，推动一堆惊喜。'),
  summary:bi('A classic coin pusher with monsters in the mix.','经典推币台，遇上奇幻怪物围城。'),
  introTitle:bi('The castle has a playful side.','这座城堡，有点不一样。'),
  intro:bi('Under a moonlit castle, the coins never quite sit still. Choose your drop, follow the moving table, and watch the pile tumble toward the edge. Quirky monsters, useful power-ups and themed treasures turn a familiar arcade rhythm into a fantasy adventure.','月光下的城堡，金币正沿着推台缓缓向前。选择落点、配合推板的节奏，看层叠的金币滑向边缘。古灵精怪的怪物、各具用途的技能与主题收藏，让熟悉的街机玩法多了一份奇幻冒险。'),
  highlights:bi([['PUSH','time your drops'],['BATTLE','meet the monsters'],['COLLECT','discover castle treasures']],[['推币','把握投币节奏'],['战斗','迎战奇幻怪物'],['收藏','发现城堡宝藏']]),
  steps:bi([
   ['Find the right drop','Watch the table move and choose where to send your next coin. Build up the pile and push treasure over the edge.'],
   ['Bring your power-ups','Explore skills and choose your quick-skill loadout to help with the monster siege.'],
   ['Get to know the castle','Discover themed collections and visit the monster codex. Peeper and the other inhabitants have stories of their own.']
  ],[
   ['找到合适的落点','观察推板的移动，决定下一枚金币落在哪里。让金币逐渐堆叠，把宝藏推过边缘。'],
   ['带上趁手的技能','探索不同技能，搭配快捷技能栏，在怪物围城时为自己助力。'],
   ['认识城堡里的住客','发现主题收藏，翻阅怪物图鉴。皮皮和其他城堡住客，都有自己的故事。']
  ]),
  gallery:[
   shot('coin-table',bi('Right in the action','推台上的战斗'),bi('The coin table and monster siege share the stage.','金币推台与怪物战斗同屏展开。')),
   shot('coin-skills',bi('Make room for a power-up','为下一局搭配技能'),bi('Browse power-ups and choose your quick skills.','浏览道具能力，选择你的快捷技能。')),
   shot('coin-collection',bi('A shelf full of stories','收藏里的小故事'),bi('Discover treasures themed around the castle’s inhabitants.','收集围绕城堡住客设计的主题宝藏。')),
   shot('coin-peeper',bi('Say hello to Peeper','和皮皮打个招呼'),bi('Meet the curious characters in the monster codex.','在怪物图鉴里认识这些好奇的家伙。'))
  ],
  faq:bi([
   ['Is this a real-money coin pusher?','No. Coins, crystals and rewards are virtual game items. They cannot be cashed out or exchanged for real-world prizes.'],
   ['Which languages can I play in?','The interface supports 12 languages, including English, Simplified Chinese and Traditional Chinese.'],
   ['Where can I get help?','Use this game’s support link below to email Vic Yang. Include your app version and device model so the issue is easier to investigate.']
  ],[
   ['金币可以兑换现金吗？','不可以。金币、水晶和奖励都是虚拟游戏物品，不能提现，也不能兑换现实奖品。'],
   ['支持哪些语言？','游戏界面支持包括简体中文、繁体中文和英文在内的 12 种语言。'],
   ['遇到问题如何联系？','通过下方本游戏的客服入口向 Vic Yang 发送邮件，附上游戏版本和设备型号，便于排查。']
  ])
 },
 'red-ever-after': {
  theme:'red', cover:'showcase/red-cover.webp', icon:'showcase/red-icon.webp',
  trailer:{
   file:'video/red-trailer.mp4', poster:'video/red-trailer-poster.webp',
   youtube:'https://www.youtube.com/watch?v=JhgSa37fEQw', landscape:true,
   eyebrow:bi('A FAIRYTALE AFTER DARK','童话入夜之后'),
   title:bi('She escaped the village.\nThe forest was waiting.','她逃离了村庄。\n森林，早已在等她。'),
   description:bi('Turn the storybook pages, meet the creatures beyond the treeline, and glimpse the battles ahead. The official trailer brings illustrated storytelling and real gameplay together.','翻开故事书，遇见林间的异形，窥见前路的战斗。通过官方宣传片，走进插画叙事与实机战斗交织的暗黑童话。'),
   tags:bi(['Illustrated story','Real gameplay'],['插画叙事','实机战斗']),
   instruction:bi('Press play. Follow the red cloak into the unknown.','点击播放，跟随红斗篷走向未知。'),
   label:bi('Official trailer','官方宣传片'),format:bi('22.6 seconds · English titles · Music only','22.6 秒 · 英文字幕 · 背景音乐'),
   credit:{title:'Darkest Child var A',author:'Kevin MacLeod (incompetech.com)',source:'https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100784',license:'https://creativecommons.org/licenses/by/4.0/'},
   creditNote:bi('Music excerpted, volume-adjusted and faded.','音乐经过节选、音量调整与淡入淡出。')
  },
  hook:bi('Some stories refuse to end.','有些童话，不肯落幕。'),
  summary:bi('A red cloak, a scythe, and a forest full of secrets. A dark fairytale idle RPG.','红斗篷、镰刀与藏满秘密的森林。一段以放置 RPG 展开的暗黑童话。'),
  introTitle:bi('Follow the lantern into the dark.','循着灯火，走进童话的暗处。'),
  intro:bi('The girl escaped the village. The forest was waiting. Journey through haunted woods and ruined villages with a girl in a red cloak. Illustrated storybook scenes, narration and sound carry the mystery forward; automatic attacks leave you to shape her strength through equipment, attributes and skills. When the path grows dangerous, return to shelter, prepare, and try again.','少女逃离了村庄，森林早已在等她。跟随红斗篷走过幽暗林地与荒废村庄，在插画书页、旁白与声音中追寻谜团。角色自动攻击，而你通过装备、属性与技能决定她的成长。前路难行时，回到庇护所，做好准备，再次出发。'),
  highlights:bi([['5','equipment slots'],['ALLIES','unlock supernatural companions'],['REBIRTH','return with lasting progression']],[['5','类装备栏位'],['伙伴','解锁超自然战友'],['转生','带着永久成长再次出发']]),
  steps:bi([
   ['Choose your next encounter','Follow the illustrated chapter map through creatures and bosses. Attacks happen automatically; revisit stages to prepare for tougher fights.'],
   ['Make the build your own','Equip weapons, shields, hoods, armor and accessories. Fuse spare equipment, spend attribute points and explore the skill tree. Unlock allies such as a shadow wolf and a small dragon.'],
   ['Return with new strength','Rest at the shelter and use Rebirth for lasting progression. Turn another storybook page as you follow the mystery through the first four chapters.']
  ],[
   ['选择下一场遭遇','沿手绘章节地图前行，迎战怪物与首领。角色自动攻击；遇到强敌时，可以重访关卡，积蓄力量。'],
   ['搭配自己的成长路线','装备武器、盾牌、兜帽、护甲与饰品，融合多余装备，分配属性点、探索技能树，还能解锁暗影狼与小龙等伙伴。'],
   ['带着新的力量归来','在庇护所休整，通过转生获得永久成长。翻开故事书的新一页，在前四章旅途中继续追寻谜团。']
  ]),
  galleryNote:bi('Official promotional screenshots with English captions and interface. Screens may differ by version, language and device.','官方宣传截图，使用英文文案与界面。画面可能因版本、语言和设备而不同。'),
  gallery:[
   shot('red-launch-01-dark-fairytale',bi('A fairytale gone dark','童话的暗面'),bi('Fight alongside supernatural allies in a forest full of strange creatures.','与超自然伙伴并肩，迎战森林中的奇异生物。'),false),
   shot('red-launch-02-forest-boss',bi('Beyond the treeline','林间的强敌'),bi('Face the creatures that guard the path ahead.','迎战盘踞前路的强敌。'),false),
   shot('red-launch-03-story',bi('Turn another page','翻开故事的新一页'),bi('Illustrated storybook scenes draw you deeper into the mystery.','在插画书页中走入更深的谜团。'),false),
   shot('red-launch-04-chapel-boss',bi('Something waits within','深处，有什么在等待'),bi('The journey leads beyond the forest to new encounters.','旅程越过森林，迎来新的遭遇。'),false),
   shot('red-launch-05-allies',bi('You are not alone','你并非独行'),bi('Unlock companions to fight beside the girl in the red cloak.','解锁伙伴，与红斗篷少女并肩战斗。'),false),
   shot('red-launch-06-map',bi('Follow the trail','循着线索前进'),bi('Choose encounters across an illustrated chapter map.','沿手绘章节地图选择下一场遭遇。'),false),
   shot('red-launch-07-equipment',bi('Prepare for the next fight','为下一战准备'),bi('Compare gear and shape your character’s attributes.','比较装备，培养角色属性。'),false),
   shot('red-launch-08-skills',bi('Choose how you grow','决定如何成长'),bi('Spend skill points to develop your own path through the dark.','分配技能点，走出自己的成长路线。'),false)
  ],
  faq:bi([
   ['Where can I play?','Red Ever After: Idle RPG is available on Google Play for Android. Use the official store link on this page to check availability for your region and device.'],
   ['Which languages are supported?','Interface text and story subtitles support 12 languages. Narration can be selected separately in English, Chinese or Japanese. The trailer and promotional screenshots shown here use English.'],
   ['How much of the story is available?','The current story runs through Chapter 4 and ends with “To be continued.”'],
   ['What do I control in an idle RPG?','Attacks happen automatically. You choose equipment, attributes and skills, unlock allies, revisit stages and use Rebirth to build lasting strength.']
  ],[
   ['在哪里可以下载？','Red Ever After: Idle RPG 已在 Google Play 上线，面向 Android 设备。通过本页官方商店链接，查看所在地区与设备的可用性。'],
   ['支持哪些语言？','界面与剧情字幕支持 12 种语言。旁白可独立选择中文、英文或日文。本页宣传片与宣传截图使用英文。'],
   ['目前可以体验多少剧情？','当前故事开放至第四章，并以「未完待续」收尾。'],
   ['放置 RPG 中需要我做什么？','角色自动攻击。你负责搭配装备、属性与技能，解锁伙伴、重访关卡，并通过转生积累永久成长。']
  ])
 }
};
