# Iqra Companion — landing page

Marketing site for Iqra Companion. React + TypeScript + Vite. Isolated from the desktop app.

Local path: `/Users/watashiwaningen/Desktop/Iqra/iqra-landing`. This remains an independent Git repository, ignored by its parent app repository. Run website commands from this directory, not from the app root.

Deployment: https://iqra-landing-two.vercel.app/

```bash
npm install
npm run dev     # local dev
npm run build   # type-check + production build to dist/
```

## Release configuration
`src/content/config.ts` controls the "Download for Mac" button everywhere (header, hero, download section).

- **Default (`releaseMode: 'none'`)**: the button scrolls to the download section, which states honestly that the public build is being finalized.
- **To make it a real download**: host the `.dmg` publicly (for example a GitHub Release), then set `releaseMode: 'public'` and `downloadUrl: '<direct .dmg link>'`. Optionally set `version` and `minimumMacOS`. Nothing else needs to change.
- The current local build is Apple Silicon (`chip: 'Apple Silicon'`). Change `chip` if you publish another architecture.

## Content
Copy: `src/content/landing-copy.ts`. Demo fixtures (Al-Fātiḥah 1:1–7, one Bukhari excerpt, Qur’an 2:201): `src/content/demo-fixtures.ts` — hand-typed for illustration, **verify against Quran Foundation / Saheeh International / Sunnah.com before relying on them.**

## Before this is called final
- **Mascot:** the companion is a provisional original illustration. Hoots (OpenAI/Codex asset) is deliberately NOT included; rights are unresolved.
- Fonts (Instrument Serif, Inter, Amiri; all OFL) load from Google Fonts.
- No download URL, contact, privacy page, pricing, domain, or social image yet; no canonical URL is set.
- Windows/other platforms are not claimed.
