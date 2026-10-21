# Red Ever After: Idle RPG website pages

Prepared 2026-10-21 in vic-games. Local source update only; not deployed.

## Routes

English uses `/games/red-ever-after/`; Chinese uses `/zh/games/red-ever-after/`.
Both have `privacy/`, `terms/`, `support/` and `delete-data/` children.
The homepage, games index, policy navigation, support game selector and shared deletion page include the game.

## Policy scope

References: existing Coin notice/deletion process and MiniMix's current B20 policy, not B20's account/cloud implementation.
Firebase Analytics, Crashlytics and AdMob/UMP are explicitly planned rather than currently integrated. Separate initially-off reporting choices describe the intended future implementation. Actual events, retention and consent behavior must be confirmed before SDK activation; no other game's retention settings or advertising permissions are asserted for this game.
Purchases are conditional on availability. No cloud save or player account is promised. Privacy and terms apply to the stated current scope; release dates, store links, audience eligibility and unverified SDK behavior are not invented.
Deletion uses tigerywy@gmail.com, a prefilled mailto draft, optional identifiers, manual verification, a one-month response target and the existing support retention rules. No email was sent during verification. Draft-link destination/subject/body were inspected, not an external mail client submission.

Official references checked 2026-10-21:
- https://firebase.google.com/support/privacy
- https://developers.google.com/admob/android/privacy/play-data-disclosure

## Artwork

public/assets/red-ever-after.png is a self-contained copy of the existing game illustration Assets/DarkFairytale/UI/StorybookIntro/Prologue/Page06.png. It is not a gameplay screenshot. Builds do not depend on the sibling Unity project.

## Validation

- npm run build: 42 pages.
- npm run check: 948 internal links/assets/fragments passed, with heading, metadata and placeholder checks.
- Browser: game landing page renders its illustration; privacy and deletion links navigate; English-to-Chinese deletion language switch works.
- Desktop privacy and mobile Chinese deletion screenshots saved locally under ignored docs/validation/red-ever-after-*.png.
- Mobile deletion viewport reported clientWidth = scrollWidth = 375; no horizontal overflow.
- Generated English/Chinese request links contain the correct email, game-specific subject and localized body.
- Existing uncommitted docs/validation/live-check.json was not included in this change.

Deployment is separate. The public origin remains https://vic-games.tigerywy.workers.dev; the new URLs are not live until dist is deployed. No Google Play fields, SDKs, Firebase/AdMob settings or Unity files were modified.
