# Local verification — 2026-09-29

- `npm run build`: 30 localized routes plus root 404 fallback generated.
- `npm run check`: 630 internal links, assets and anchors resolved; one h1 per route, metadata present, no unresolved placeholders or duplicate IDs.
- `node --check`: browser support script and preview server passed.
- In-app browser visual review: desktop home at 1440×1000; mobile home and support at 390×844; Chinese game detail at 320×740.
- 390px viewport DOM overflow checks: English/Chinese home, coin detail, Chinese B20 detail, English/Chinese shared privacy, original B20 privacy, deletion page and support all fit.
- 320px Chinese coin detail fits without horizontal overflow; header wraps into two lines.
- Support selection: Coin Pusher: Monster Siege + Privacy request produces matching encoded mailto subject, correct developer address and non-sensitive template. No email sent.
- Language link on English support reaches /zh/support/ and shows Chinese heading.
- Desktop hero image loaded successfully; responsive images use local assets. Lazy images are checked by local asset resolution; not all were forced to load in browser.
- No deployment, store submission, game runtime validation or audit of live SDK data flows performed.

`home-desktop.png` is the full-page 1440px desktop capture.

## Production deployment

2026-09-29: Cloudflare Dashboard deployment `9ba6ae9f` at https://vic-games.tigerywy.workers.dev . 42/42 HTTP/header/canonical checks passed (live-check.json). Chrome navigation and Chinese support mailto generation verified. No store changes, no email sent. IAB automation did not activate the language link during this check; Chrome verified the link works.
