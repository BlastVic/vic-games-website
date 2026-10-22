# 2026-10-21 首页与游戏展示改版上线

- 改版源码 `d45991b` 已合并并推送 `main`，部署到现有 Cloudflare `vic-games`；版本 `ce728127`，Ready，100% 流量。
- 首页与三款游戏中英文介绍新增独立主题、玩法、四图画廊、FAQ 和相关游戏入口。B20、Coin 提供已核实的 Google Play 链接；Red Ever After 标为封闭测试准备中。
- 仅上传 `dist/` 对应的 81 文件 ZIP，SHA256 `55582882b61a147a73c43d3c62f5168b3a4963c12f4e58abd95434774d95bf0f`。
- 构建及检查通过：42 页面、1,126 内部链接/素材/锚点。线上检查 54/54 通过；80/80 可公开获取的文件 SHA256 与本地发布包一致（`_headers` 由托管平台消费，通过响应头另行验证）。
- 浏览器验证中文首页、英文切换、Coin 游戏页及四张截图。保持纯静态资源、0 bindings、Workers Logs / Traces Disabled。
- 验证记录：`docs/validation/live-check-showcase-20261021.json`、`docs/validation/showcase-live-integrity-20261021.json`。原有未提交的 `live-check.json` 未覆盖。
- Coin 的未核对政策仍保留 `noindex` 和待核对标记；B20 专属政策原文及生效日期未改变。

# 2026-10-21 Red Ever After 上线

- 已部署中英文游戏介绍、隐私政策、条款、客服与邮件数据删除页面。版本 `bbf8bf3e`，Ready，100% 流量。
- 源码 `a7c38bc` 已合并并推送 main；55 文件发布包 SHA256 `18b5afc120be1ad37bc2dc1703791896c64830f4148ca8f842f5c8c69b2165da`。
- 54/54 线上检查通过，新增 10 页面及美术/app-ads.txt 共 12 项与本地文件完全一致。
- 隐私： https://vic-games.tigerywy.workers.dev/games/red-ever-after/privacy/
- 删除： https://vic-games.tigerywy.workers.dev/games/red-ever-after/delete-data/
- 纯静态资源、0 bindings、Logs/Traces Disabled。详情见 RED-EVER-AFTER.md。未修改 Google Play 表单。

# 2026-10-07 B20 政策与后台同步

- B20 隐私政策和条款已更新至 2026-10-07，保留原 2026-09-14 生效日期。覆盖 AdMob/UMP、预加载、广告数据共享、Unity IAP/Google Play、当前在线启动行为及独立 Firebase 选择。
- 退款规则：撤销有效购买权益，保留存档中已解锁游戏；退款后新增游戏不再由旧订单自动解锁，恢复进度与恢复有效购买分别处理。
- 源码提交 `420f7c3`；Cloudflare `vic-games` 部署 `14383813`，静态资源、无绑定、Logs/Traces Disabled。发布 ZIP 共 44 文件，SHA256 `2219260e7615eb95221775022abea6ecc5ca4f8b892129a3fb19cd7751926aea`。
- 构建与内部检查通过：32 页面、674 链接/资源/片段。上线 HTTP 检查 44/44 通过，见 `docs/validation/live-check-b20-20261007.json`。Chrome 核对政策日期、中英文切换、退款条款及删除说明。
- Google Play：隐私政策 URL 已为新站，开发者网站已为新站根域名；删除账号和部分数据删除 URL 从旧站改为 `/games/b20/support/#deletion`。包含广告为“是”。
- Google Play 数据安全表补齐账号、购买、AdMob/Firebase/Unity SDK 相关数据类别；12 种语言商店完整说明删除“无广告”及旧青少年仅限本地模式说明，改为可选激励广告与一次性主题购买。这 13 项元数据更改已提交审核；未上传或发布游戏包。
- 广告 ID 已补充分析与防欺诈用途，保留广告用途，并并入本次审核。审核通过前不视为商店公开页面已更新。
- Unity Player Accounts 的隐私政策、服务条款 URL 均已是新站 B20 专属地址，本轮核对，无需重复修改。
- B20 欧洲和美国州 UMP 消息已发布。欧洲覆盖 EEA/英国/瑞士，英语及 8 种其他语言，同意/不同意/管理选项；美国覆盖当前和未来支持的所有州，英语（美国）及两种西班牙语选项。仅关联 B20，未修改 Coin Pusher 或账号级合作伙伴配置。平台提示生效最多需 1 小时；设备端弹窗、撤回选择及广告加载仍需单独验收。
- 内容分级仍需重新核对新增内购；进入问卷发现必须重新接受 IARC 使用条款，已停在该确认步骤，未替用户接受协议或提交新分级。
- 官方数据披露参考：Google Mobile Ads Android Play data disclosure、Unity IAP 5.4+ Google Play Data safety、Google Play Data safety definitions、Firebase Privacy。表单按当前源码与 SDK 文档核对，未宣称完成网络流量审计。

# 2026-10-01 广告隐私说明更新

- 已部署到现有 vic-games 静态站，版本 `f0402537`，100% 流量；无绑定，Workers Logs / Traces 保持 Disabled。
- 网站源码提交 `ee77c22`：推币机中英文 AdMob / UMP、广告预加载、数据类别、独立隐私选择、购买与广告数据请求说明。保留尚未完成发布核验的提示。
- 43 个公开文件，ZIP SHA256 `914dae493e4c94ea6623601828de098863b22ff48da16ce992d6817ba648c25e`。
- `npm run build` / `npm run check` 通过：32 页面、674 内部链接/资源/片段。Chrome 验证线上中英文隐私内容及语言切换。命令行 HTTP 检查被 403 拒绝，未将其记为通过。
- AdMob 欧洲法规消息已发布：英语默认，加中文简体、日语、德语、俄语、法语、葡萄牙语（葡萄牙）、西班牙语、意大利语；同意 / 不同意 / 管理选项。其他语言由 Google 工具的可用语言和回退规则决定。
- AdMob 美国州级消息已发布：所有当前及未来受支持州，英语（美国）及两种西班牙语选项，提供拒绝出售或分享选择。仅关联 Coin Pusher Monster Siege。
- AdMob 隐私链接为游戏专属英文政策地址。消息发布后最多需要 1 小时生效；尚未验证区域模拟设备上的实际弹窗。
- 未修改广告合作伙伴名单、开启跨应用同意同步或开启额外 Consent Mode。Firebase 开关保持独立。
- 账号仍显示审核中、应用尚待关联商店；正式广告投放准备未完成。Google Play Data safety 还需与加入广告后的实际数据处理同步，本轮未提交该表单。
- 内容依据：当前游戏 AdMob manager、设置页广告隐私入口、Android 权限移除构建器；Google SDK 文档 https://developers.google.com/admob/unity/privacy 和 https://developers.google.com/admob/unity/privacy/play-data-disclosure 。

# 发布进度 — 2026-09-29

## 当前结果：已上线

正式网址：https://vic-games.tigerywy.workers.dev/ （中文 `/zh/`）。

2026-09-29 通过现有 Cloudflare 账号 Dashboard 新建独立 `vic-games` 静态站。部署版本前缀 `9ba6ae9f`，流量 100%。旧 `b20-stress-test` 未修改。

- 平台确认：仅静态资源、无绑定、Workers Logs Disabled / Workers Traces Disabled。
- 上传包：41 个公开文件，ZIP SHA256 `62e89a8cd81d1dedb6318fd11b78eba2fc117d820bb6231c67af77d13da22d42`。
- 42/42 线上检查通过：30 页面、8 资源/站点地图、真实 404、3 项安全头。结果见 `docs/validation/live-check.json`。
- Chrome 实际验证：英文→中文切换、中文客服、游戏/问题选择与生成邮件地址，无邮件发送。主页可公开访问，无需登录。
- `src/site.mjs` 已保存正式 origin，默认构建保留 canonical、alternate、sitemap；环境变量仍可覆盖。
- 部署截图：`docs/validation/cloudflare-deployment.png`；公开首页：`docs/validation/live-home.png`。
- 此次没有更改 Google Play 字段或提交游戏审核；推币机政策仍是已标记的开发版本说明。

## 已授权的登录方式

用户授权后续 Cloudflare 登录使用 Google 的 **Vic Yang** 身份。遇到验证码/MFA/额外授权需用户处理。不创建 API token、不保存密码。浏览器 Dashboard 已登录；这不意味着 Wrangler CLI 获得授权。

Chrome 扩展未开放 file-URL 权限，直接工具上传失败；已通过原生 macOS 文件选择器成功上传 ZIP，没有扩大扩展权限。

## 后续更新步骤（首次部署已完成）

统一源码入口：[BlastVic/vic-games-website](https://github.com/BlastVic/vic-games-website)。所有内容和配置在该仓库修改，合并 main 后从对应源码构建发布。当前未启用 Git 自动部署，GitHub push 不会改变线上版本。

部署截图保留在操作者本地，不纳入 Git；文本记录和公开 HTTP 验证结果纳入版本控制。

1. 在 Cloudflare 控制台登录原账号，找到 Workers & Pages。
2. 打开已有 `vic-games`，使用 New deployment；不要创建重复站点或覆盖旧 `b20-stress-test`。
3. 确认平台实际分配的公开 HTTPS 域名。无需购买域名或升级付费计划。
4. 用实际域名重新生成：

   ```sh
   SITE_ORIGIN=https://实际分配域名 npm run release
   ```

5. 仅上传重新生成的 `release/vic-games-website.zip`。检查静态资源模式、无绑定、请求日志/追踪关闭。若使用 Wrangler，需常规用户登录后执行 `SITE_ORIGIN=https://实际分配域名 npm run deploy`；不要把登录凭据放入项目。
6. 发布完成后运行：

   ```sh
   node scripts/verify-live.mjs https://实际分配域名
   ```

   验证 30 个页面、canonical、素材、真实 404 与安全响应头；浏览器复核首页、游戏页、客服、隐私、中文切换。记录版本及公开地址，再更新本文件与 README。
7. 保留旧 B20 站点地址。新站验证完成后再安排应用内/商店链接迁移；不要先删除旧站。

## Google Play 预留路径

| 内容 | B20 | 推币机：怪物围城 |
| --- | --- | --- |
| 游戏介绍 | /games/b20/ | /games/coin-pusher-monster-siege/ |
| 隐私说明 | /games/b20/privacy/ | /games/coin-pusher-monster-siege/privacy/ |
| 服务条款 | /games/b20/terms/ | /games/coin-pusher-monster-siege/terms/ |
| 客服支持 | /games/b20/support/ | /games/coin-pusher-monster-siege/support/ |
| 外部数据请求 | /support/deletion/ | /support/deletion/ |

将以上路径加到正式域名 `https://vic-games.tigerywy.workers.dev` 后即可公开访问。Google Play 仍使用已有配置；本轮未修改任何商店字段或提交审核。推币机隐私仍是准备说明，不得当作已完成的最终政策提交。

## 政策边界

网站与游戏分别验收。新官网可以展示开发中的推币机，但不得将尚未核对的发布准备说明当作最终游戏隐私政策。

- 网站通用政策：准备按 2026-09-29 生效，适用于网站和客服。Cloudflare 配置必须与说明一致，上线前核对。
- B20：保留原游戏文件的 2026-09-14 生效日期和 2026-09-24 展示版本，中文导航下显示英文原文；新增迁移说明指向统一网站政策。未重新审计 B20 后台或认证已有服务行为。
- 推币机：2026-10-01 已重新集成 AdMob 奖励广告与 UMP；广告隐私选择独立于 Firebase，保留 IAP，Firebase 两项可选分享默认关闭，没有在线游戏账号或云存档。后台保留设置、目标年龄、真实安装包、购买流程和数据请求操作仍须完成。

## 官方来源（2026-09-29 查阅）

- [Google Play User Data](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en)
- [App account deletion](https://support.google.com/googleplay/android-developer/answer/13327111?hl=en)
- [Cloudflare Static Assets](https://developers.cloudflare.com/workers/static-assets/get-started/)
- [Cloudflare Privacy](https://www.cloudflare.com/privacypolicy/)
- [Firebase Privacy](https://firebase.google.com/support/privacy)
- [Analytics retention](https://support.google.com/analytics/answer/7667196?hl=en)

## 素材来源

仅复制网站美术，不包含游戏工程或签名配置：B20 图片来自 `minigames/Website/b20-stress-test/dist/`，推币机背景与 Logo 来自 `coin-bloast/Assets/Resources/UI/Loading/`。素材为现有游戏美术，不宣称为实际游玩截图。原 B20 文件来自其 Website/content 和 policy-status.json。

## app-ads.txt 发布 — 2026-10-01

- 根目录新增 `public/app-ads.txt`，内容为 AdMob 后台提供的 `google.com, pub-4589227210093067, DIRECT, f08c47fec0942fa0`。
- 构建与检查通过：32 页面、674 内部链接/素材/锚点；发布包 44 文件，SHA256 `4b8edc26ce7ff031a9bbc7708583b86bb95e3ca3a8e8a7ef2ec3220eb5112e3b`。
- Cloudflare 部署 `41e66442` 已承接 100% 流量，仍为静态资源、无绑定、Logs/Traces Disabled。
- 公开地址 `https://vic-games.tigerywy.workers.dev/app-ads.txt` 经 HTTP 检查返回 200、`text/plain`，响应字节与源码完全一致。Chrome 当前打开该路径报告 ERR_BLOCKED_BY_CLIENT，未变更浏览器防护设置；HTTP 访问验证成功。
- 文件发布不等同于 AdMob 验证通过；仍需完成 Google Play 商店关联、确保商店开发者网站使用此域名，并等待 Google 抓取验证。本轮未修改商店字段或审核状态。

## B20 宣传视频发布 — 2026-10-22

- B20 中英文游戏页新增原生竖屏宣传片、首屏视频入口、YouTube 外链与音乐署名；35.5 秒英文片源来自 MiniMix「推广与获客」会话最终批准的 v2，详见 `B20-TRAILER.json`。
- 视频与 WebP 封面都在 `public/assets/video/`，构建不依赖 Unity 工程。原片保留 H.264/AAC、1080×1728、60 fps，验证 moov 位于 mdat 之前；无自动播放，`preload="none"`，无第三方嵌入。
- 源码提交 `5119767` 已合入并推送 main。`npm run release` 通过：42 页面、1,132 内部链接/素材/锚点、83 发布文件。
- 仅上传 dist 内容生成的 ZIP，SHA256：`dbc5d7a4c74e2bde251ef82eee816bd2205dcb886b0b4f49abeda455a9327336`。
- Cloudflare 版本 `d7f16eb6`，Ready / 100%，静态资源、Bindings 0、Logs/Traces Disabled。
- 本地浏览器检查中英文及手机布局，并实际播放。线上浏览器验证时长 35.5 秒、readyState 4、播放、暂停与键盘进度跳转；全站 54/54 HTTP 检查通过，记录于 `validation/live-check-b20-video-20261022.json`。
- 额外逐字节资源校验未完成：本机独立 HTTP 请求遇到间歇 TLS/连接重置；未关闭证书校验。线上视频播放验证已通过。
- 中文入口：https://vic-games.tigerywy.workers.dev/zh/games/b20/#trailer
- 英文入口：https://vic-games.tigerywy.workers.dev/games/b20/#trailer
