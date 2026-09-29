# Coin 发布数据核对 — 2026-09-29

范围：读取现有工作区代码与文档，用于网站政策准备。不修改游戏工程，不运行 Unity，不制作或上传 APK/AAB，不改变服务端设置。用户工作区有其他进行中的游戏修改，本记录不是固定发布包的审计结论。

## 证据与结论

| 项目 | 当前证据 | 网站措辞 |
| --- | --- | --- |
| 应用身份 | ProjectSettings 与 Resources/CoinFirebaseRuntime.json：com.vicyang.coinblast；Firebase 项目 coin-pusher-monster-siege | 使用实际游戏名；不填写猜测商店链接 |
| 广告 | SDK/Core/Ad/MelCatSDKAdManager.cs 只返回 unavailable；CoinFirebaseAndroidBuild.cs 移除广告 ID/ad-services 权限 | 当前开发源无广告 SDK，不沿用旧 README 的 MAX 结论；正式包仍需核验 |
| 统计同意 | Script/Telemetry/CoinTelemetry.cs 与 CoinTelemetryPage.cs：两项 PlayerPrefs 默认为 0，首轮关闭记为拒绝 | 游戏设置 → 数据分享；Analytics 和 Crashlytics 独立默认关闭 |
| 原生启动 | Editor/CoinFirebaseAndroidBuild.cs：移除 FirebaseInitProvider、默认关闭原生采集；运行时验证配置/平台/开发开关 | 需用最终安装包确认启动前后实际网络行为 |
| Analytics 内容 | CoinTelemetryEvent.cs 固定数值 schema；CoinTelemetry.cs 带版本、渠道、等级 | 数值玩法事件、设备/应用与实例标识，不上传完整存档、自由文本或收据作为自定义事件 |
| Crashlytics | 独立开关；自定义版本/渠道；与统计同时开启时有玩法轨迹 | 崩溃与诊断、SDK 安装标识；不能把清空 custom user ID 说成完全匿名 |
| 身份/存档 | UserModel.cs 有本地 uid、进度、设备型号；UnityFactory.cs 本机 user.json；Firebase 文档确认无 UGS | 无开发者在线登录或云存档账号；本地 uid 不等于可查的在线玩家 ID |
| IAP | SDK/Core/IAP/MelCatIAPManager.cs：启动初始化商店商品，ProcessPurchase 发放客户端回调 | 当前保留 Unity IAP；不能声称无内购或完成服务端验单 |
| 设置入口 | UISettingView.cs 可管理数据分享；未找到玩家可用隐私/条款/客服网址入口 | 需在真实可编辑 Settings Prefab 添加并接线，网站上线后再使用真实 URL |
| 数据删除 | 当前无认证游戏账号；未发现玩家可用的 Firebase 标识展示/删除工具 | 使用邮件请求；清本机数据≠删除上传报告；不能复制 B20 账号删除步骤 |

## 游戏正式发布前仍需推进

1. 确认首发商业功能、目标玩家年龄和发行地区。无年龄验证不能写成已实现年龄门槛。
2. 登录 Firebase/GA4 只读核对真实属性的事件/用户保留周期、重置选项；不能套用 B20 设置。
3. 制定实际数据请求流程：能否定位 Analytics app-instance/Firebase installation，怎样核查与删除，无法定位时如何说明，供应商备份与法定保留。
4. 制作固定版本的候选包并核验合并 manifest、无广告 SDK、同意前无采集、拒绝/撤回/重启及真实上传。现有日志有部分编译和离线验证，但不代表新版配置的真机通过。
5. 审核 IAP 商品归属、成功/失败/取消、重复回调、发货与存档一致性。当前有旧商品 ID 和旧调试代码。
6. SDK/Core/IAP/MelCatIAPManager.cs 的历史 DebugOnlineData 包含外部表格调试路径与硬编码访问凭据。此网站包不包含它。游戏发布前应移除该调试路径，并由凭据所有者核查、撤销/轮换历史凭据；本记录不复制凭据值、不尝试使用它。
7. 接入游戏内隐私/条款/客服入口，并按项目 AGENTS.md 用真实 UGUI/TMP Prefab 编辑。
8. 据最终包和实际后台填写 Play Data safety、内容分级与应用内购信息，再定稿推币机专属政策。随机奖励/转盘等玩法需在分级问卷如实描述，不从画面猜测评级。

## 当前可以完成的官网发布

公开介绍、开发中状态、网站通用政策、原 B20 文件、真实邮箱支持与数据请求入口。推币机专属页面明确标为开发版本说明，保留 noindex，不伪造完成状态。
