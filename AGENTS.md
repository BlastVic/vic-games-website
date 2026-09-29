# Website conventions

- This is Vic Yang's independent developer site, not a registered company. Do not invent team members, audience counts, store ratings or live releases.
- Use shared static templates and `src/site.mjs` game records. New games must receive stable `/games/{slug}/` paths and individual policy scope.
- Keep English and Chinese routes paired. Existing B20 legal text intentionally remains English with a visible notice on Chinese pages.
- Do not claim that one game's SDKs, purchases, advertising or account behavior apply to all games. Keep unverified release documents clearly marked and noindex.
- Keep support as explicit mailto links unless a real backend is requested. Never report that an email or deletion request has been sent merely because a button was clicked.
- Preserve existing game policy effective dates. New hosting and data-processing statements must reflect the actual deployment.
- Keep runtime free of trackers, remote fonts, third-party embeds and browser storage unless deliberately requested and disclosed.
- Assets must be self-contained under public; do not make production builds depend on sibling Unity projects.
- After edits: `npm run build` and `npm run check`; browser-check any affected layout or interaction. Deploy only dist contents when deployment is requested.

# Deployment access

- User authorized Cloudflare sign-in through Google using the Vic Yang identity (2026-09-29). Reuse that identity for future Cloudflare deployments; do not select another Google account. Request user action for MFA/CAPTCHA or unexpected expanded permissions. Do not store credentials in this project.
- Chrome extension file upload can lack file-URL permission. The native macOS file chooser successfully uploads the prepared ZIP without changing that extension permission.

# Repository ownership

- Canonical repository: git@github.com:BlastVic/vic-games-website.git. All future website source, content and deployment configuration changes belong here. Do not resume editing the original sibling game Website directory for this site.
- Main is the release-source branch. Use codex/ feature branches, validate and commit source changes; pushing GitHub alone does not deploy the site.
- Never commit dist/, release/, generated docs/routes.json, local credentials, tool caches or dashboard screenshots. Keep all required build inputs in the repository.
