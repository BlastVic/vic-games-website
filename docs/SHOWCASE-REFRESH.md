# Game showcase refresh — October 21, 2026

## Content and presentation

- Shared English and Chinese home, collection and game templates now include distinct game palettes, world introductions, gameplay steps, four-frame galleries, FAQs, player resources and related games.
- MiniMix remains at `/games/b20/`, using its public name B20: Mini Game Mayhem. Coin and Red Ever After retain their existing routes and policy scopes.
- B20 and Coin are marked released. Both Google Play listings were opened and verified in the browser on October 21, 2026:
  - https://play.google.com/store/apps/details?id=com.vicyang.minimix
  - https://play.google.com/store/apps/details?id=com.vicyang.coinblast
- B20's public release notes confirm 40 mini-games, two themes, five difficulty levels, Endless mode after unlocking two themes, daily tasks, achievements and 12 interface languages.
- Coin's gameplay copy uses its publishing package's English store description and screenshots. No download counts, ratings or testimonials were added.
- Red Ever After is preparing for closed testing, per the owner's confirmation. It has no public download or signup button. English development screenshots are explicitly labeled on both routes. Story copy avoids unimplemented chapters and plot spoilers.
- All new images are self-contained WebP assets under `public/assets/showcase/`. Source provenance, dimensions and checksums are in `SHOWCASE-ASSETS.json`. Total new image payload across both languages is approximately 3.3 MB; each page loads only its selected images, with galleries lazy-loaded.
- Galleries use ordinary links to full images, FAQs use native `details`, and support uses explicit email links. No trackers, remote fonts, embeds, new runtime JavaScript or storage were added.
- Static Open Graph metadata now uses the page title, description, canonical URL and local artwork.

## Existing disclosures

B20's game-specific English legal documents and effective dates were preserved. Stale website/support claims that B20 had no ads or purchases were removed in favor of the existing game-specific notices. Coin's document introduction now distinguishes its live store availability from its still-unverified release documents; `noindex` remains in place. This change does not finalize Coin's release-policy audit or change its SDK disclosures.

## Validation

- `npm run build`: 42 pages.
- `npm run check`: 42 pages, 1,126 internal links/assets/fragments; headings, metadata and placeholders pass.
- Browser layout checks: home, collection and all three game pages, English and Chinese, at 320, 768 and 1280 CSS pixels (30 route/viewport combinations); no horizontal overflow or broken completed images observed.
- Visual review: desktop homepage and game hero/gallery sections; 390-pixel mobile Coin hero/gallery and mobile home; Red Ever After preview and desktop gallery.
- Interaction checks: language switch keeps the game route; section anchors reach their sections; native FAQs expand; full-size screenshot opens in a new tab; store links point to the verified official package IDs. Red Ever After's own content has no store link. Support email remains a draft link, with no message sent.
- Existing user changes in `docs/validation/live-check.json` were left out of this source change.

Local source change only. No deployment was performed.
