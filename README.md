# Vic Yang Games Website

Vic Yang 个人独立游戏品牌官网。**本仓库是网站源码、游戏介绍、隐私与条款、客服页面及部署配置的统一维护入口。** 后续网站变更均在这里开发、验证和提交，再发布到现有 Cloudflare 站点。

- **英文官网：** [vic-games.tigerywy.workers.dev](https://vic-games.tigerywy.workers.dev/)
- **中文官网：** [vic-games.tigerywy.workers.dev/zh/](https://vic-games.tigerywy.workers.dev/zh/)
- **源码仓库：** [BlastVic/vic-games-website](https://github.com/BlastVic/vic-games-website)
- **部署目标：** Cloudflare Workers 静态站 `vic-games`

网站包含品牌首页、作品列表、B20 与《推币机：怪物围城》的介绍，以及统一的隐私、服务条款、客服和数据请求入口。英文为默认语言，中文使用 `/zh/` 路径。无需登录，无网站统计、追踪 Cookie 或第三方字体。

## 快速开始

环境：Node.js 20 或以上；制作发布 ZIP 还需 Python 3。构建和预览没有 npm 依赖，无需执行 `npm install`。

```sh
git clone git@github.com:BlastVic/vic-games-website.git
cd vic-games-website
npm run dev
```

打开 [http://127.0.0.1:4173/](http://127.0.0.1:4173/)。端口占用时使用 `PORT=4174 npm run dev`。

预览服务没有热更新。修改源码后，另开终端执行 `npm run build`，然后刷新浏览器。项目自带全部网站素材，**不依赖同级 Unity 工程，也不要求特定本地目录名称**。

## 仓库结构

| 路径 | 用途 |
| --- | --- |
| `src/site.mjs` | 品牌、联系方式、正式域名、游戏列表、双语介绍与商店链接 |
| `src/policies.mjs` | 统一政策、客服及数据删除说明 |
| `src/coin-notice.mjs` | 推币机开发版本的数据处理说明 |
| `src/content/b20/` | B20 已有游戏专属政策原文与状态 |
| `scripts/build.mjs` | 页面、导航、多语言路径、元数据和安全头生成 |
| `public/` | 样式、客服邮件脚本、图标与游戏美术 |
| `scripts/check.mjs` | 页面、内部链接、资源、锚点与元数据检查 |
| `scripts/package-release.py` | 仅打包公开文件，生成 ZIP 和逐文件 SHA256 |
| `scripts/verify-live.mjs` | 上线后的页面、资源、canonical、404 与安全头验证 |
| `wrangler.jsonc` | 站点名称、静态输出、404 和日志设置 |
| `docs/` | 发布记录、验证结果与游戏政策待办 |
| `AGENTS.md` | 网站维护约定与操作边界 |

`dist/`、`release/`、`docs/routes.json` 为生成产物，均不提交。不要直接修改生成的 HTML；应修改对应源码后重新构建。本地运行缓存、登录凭据和控制台截图也不提交。

## 日常开发流程

```sh
git switch main
git pull --ff-only
git switch -c codex/describe-the-change
# 修改 src/、public/ 或配置文件
npm run build
npm run check
```

如果变更涉及布局或交互，启动预览并检查桌面、手机及中英文对应页面。确认结果后提交并推送分支，再合并到 `main`。

```sh
git add <修改的文件>
git commit -m "Describe the website change"
git push -u origin HEAD
```

`main` 保存可发布的网站源码。**推送 GitHub 不会自动更新线上网站**；当前未配置自动部署，需要执行下方发布步骤。修改部署配置时，以本仓库的 `wrangler.jsonc` 为准，不长期保留仅存在于控制台的配置差异。

## 更新游戏内容

在 `src/site.mjs` 的 `games` 数组维护游戏名称、双语简介、特点、状态、图片与下载地址。素材放入 `public/assets/`，使用仓库内路径。

- 每款游戏使用稳定的 `slug`，生成 `/games/{slug}/` 及其 `privacy/`、`terms/`、`support/` 页面。
- 新增游戏必须提供对应的英文、中文字段和真实素材；不要随意更换已对外使用的路径。
- `storeUrl` / `downloadUrl` 未开放时保持 `null`，不填写猜测的商店链接。
- `policy: 'pending'` 仅用于未定稿状态。新增游戏还需要在政策生成逻辑中提供该游戏自己的说明，不能复用推币机或 B20 的数据声明。
- 首页推荐区当前专门展示 B20，在 `scripts/build.mjs` 中维护；它不是仅修改数组顺序即可自动切换的推荐位。
- 游戏已发布时，应根据实际 SDK、账号、购买和数据处理行为定稿专属政策。

修改邮箱或正式域名统一从 `src/site.mjs` 入手。构建会同步客服脚本收件人和页面元数据。语言切换通过页面路径实现，不保存浏览器偏好。

## 验证与发布

### 1. 生成发布包

```sh
npm run release
```

这会构建页面、检查链接，并生成：

- `dist/`：唯一可部署的网站目录。
- `release/vic-games-website.zip`：Dashboard 上传包，ZIP 根目录直接包含 `index.html`。
- `release/manifest.json`：公开文件的大小与 SHA256。

### 2. 更新现有 Cloudflare 站点

**Dashboard 方式：** 打开已有的 `vic-games`，选择 **New deployment**，上传本次生成的 ZIP。保持静态资源模式、无服务绑定、404-page，以及请求日志和追踪关闭。不要创建重复站点或覆盖旧 `b20-stress-test`。

**Wrangler 方式：** 先通过正常用户登录建立 CLI 授权，再运行：

```sh
npx wrangler@4.86.0 login
npm run deploy
```

`npm run deploy` 会先执行 `npm run release`，然后使用固定版本的 Wrangler 发布。浏览器登录与 CLI 登录是独立的；不要将密码、令牌、Cookie 或本地授权文件写入仓库。

### 3. 验证线上结果

```sh
node scripts/verify-live.mjs https://vic-games.tigerywy.workers.dev
```

确认脚本通过，再用浏览器检查首页、游戏页、中文切换、客服和隐私页面。更新 [发布记录](docs/RELEASE.md)，记录实际版本和验证结果。

**只向托管平台上传 `dist/` 内容或对应 ZIP**，不要上传整个 Git 仓库、游戏工程或签名资料。更换域名时，更新 `src/site.mjs` 与 Cloudflare 域名配置；临时构建可用 `SITE_ORIGIN=https://实际域名 npm run release` 覆盖。

## 政策和发布状态

网站已于 2026-09-29 首次上线；该次 42 项线上检查全部通过，详见 [验证记录](docs/validation/REPORT.md)。

- 网站通用政策适用于网站与客服，不代表每款游戏的数据行为相同。
- B20 保留原英文政策及原生效日期，中文导航下也明确展示英文原文。
- 推币机仍为开发版本说明，标记 `noindex`；最终安装包、后台保留设置、年龄范围和购买行为尚需核对，不能当作已完成的正式游戏政策提交。
- Google Play 的页面地址及发布待办见 [发布说明](docs/RELEASE.md) 和 [推币机数据核对](docs/COIN-RELEASE-AUDIT.md)。

## 素材与使用范围

仓库包含本站使用的游戏美术，来源记录在发布说明中。仓库没有授予通用开源许可证；代码、游戏美术、品牌及第三方素材的权利归各自权利人所有。
