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
