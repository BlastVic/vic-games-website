# Meteorite Crisis privacy notice — 2026-10-31

Requested through the human user's reply in the “数据和广告” chat, task `01a191b7-c488-77b3-8cf0-0f97aebadf2e`: make a dedicated website privacy policy, commit, publish and return the URL for the AdMob consent message.

## Scope and routes

- Game: Meteorite Crisis / 石不可挡; Android package `com.vicyang.meteorite`.
- Primary policy: `/games/meteorite-crisis/privacy/`; paired Chinese policy: `/zh/games/meteorite-crisis/privacy/`.
- Paired player-information hub, support and `delete-data` pages. Explicit mailto drafts only; no submission backend.
- Record lives in `src/site.mjs` via `src/meteorite-crisis.mjs`. The shared page/document shell is reused. Policy-only records are excluded from marketing cards and terms lists when no game-specific terms exist.
- Effective date: 2026-10-31, for current Android development/test integrations. No public release, store listing, age rating or fixed Analytics/Crashlytics retention claim. These new routes are noindex and excluded from the sitemap while release verification remains incomplete. They are directly public and not blocked in robots.txt.
- Existing games' dates and text are preserved. Main portfolio still showcases the existing three games.

## Evidence checked

Read-only source inspection in `/Users/vic/Workshop/rea/projects/justarock`:

- `Assets/Scripts/Telemetry/MeteoriteTelemetry.cs`: two independent local opt-in choices, default false; Firebase package/project matching; collection gating; advertising consent denied within Firebase; no custom player ID; local Analytics reset on disable; optional identifier lookup only on an existing opted-in instance.
- `Assets/Scripts/Telemetry/MeteoriteTelemetryEvent.cs`: bounded gameplay, commerce and rewarded-ad event schemas, no raw receipts/tokens or arbitrary free text.
- `Assets/Scripts/Telemetry/MeteoriteSharingPanel.cs`: both controls and an all-off continuation action; settings can reopen the choices.
- `Assets/Resources/MeteoriteFirebaseRuntime.json`: project `meteorite-79b32`, correct package; development-build collection disabled in this configuration.
- `Assets/Scripts/Advertising/MeteoriteAdMob.cs`: UMP Update / required form / CanRequestAds gating; preloading after requests are allowed; required privacy options; rewarded format only.
- `Assets/Scripts/Gameplay/LocalCommerce.cs`: shop reward 1 diamond, eligible ordinary-result coin doubling; no blanket claim of no ad processing before watching.
- `Assets/Scripts/Gameplay/UnityIapCommerceProvider.cs`, `GooglePlayOrderValidation.cs`, `CommerceCatalog.cs`, `CityProfileStore.cs`: Google Play via Unity IAP, local receipt validation and durable fulfilment, billing independent of telemetry choices.
- Existing website privacy policy supplies verified individual-developer identity, contact, email handling, support retention and website hosting description.

The source chat confirmed Analytics/Crashlytics retention and audience/age settings are not yet verified; European UMP message publication was waiting for this URL. The policy discloses the development/test scope and configuration uncertainty. It is not certification of a final production binary or Play Data safety form. No sibling source file is required at build time or included in deployment.

## Official references reviewed

- https://developers.google.com/admob/android/privacy/play-data-disclosure — data categories and purposes; current guidance is not an audit of the game's installed SDK binary.
- https://developers.google.com/admob/unity/privacy — UMP request, message and privacy options flow.
- https://firebase.google.com/support/privacy — identifiers, provider roles, processing and retention framework.
- https://firebase.google.com/docs/crashlytics/customize-crash-reports?platform=unity — optional collection and stored reports.
- https://support.google.com/analytics/answer/7667196 — retention depends on property settings; no unverified value copied from another game.

## Validation

- Build/check: 50 pages; 1,382 internal links, assets and fragments.
- Browser: English policy layout, Chinese switch, 390 px mobile reading and anchor navigation, deletion-page navigation and explicit mailto draft target.
- No new JavaScript, third-party embeds, tracking, fonts, storage, images or game binaries.
