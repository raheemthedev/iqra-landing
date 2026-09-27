# Iqra Companion — landing page

Marketing site for Iqra Companion. React + TypeScript + Vite. Isolated from the desktop app.

```bash
npm install
npm run dev     # local dev
npm run build   # type-check + production build to dist/
```

## Release configuration
`src/content/config.ts` controls the CTA. Default `releaseMode: 'none'` → "Explore Iqra" (scrolls to demo). Set `'public'` + `downloadUrl` for "Download for macOS", or `'preview'` + `contactUrl` for "Request access". No placeholder links.

## Content
Copy: `src/content/landing-copy.ts`. Demo fixtures (Al-Fātiḥah 1:1–7, one Bukhari excerpt, Qur’an 2:201): `src/content/demo-fixtures.ts` — hand-typed for illustration, **verify against Quran Foundation / Saheeh International / Sunnah.com before relying on them.**

## Before this is called final
- **Mascot:** the companion is a provisional original illustration. Hoots (OpenAI/Codex asset) is deliberately NOT included; rights are unresolved.
- Fonts (Instrument Serif, Inter, Amiri; all OFL) load from Google Fonts.
- No download URL, contact, privacy page, pricing, domain, or social image yet; no canonical URL is set.
- Windows/other platforms are not claimed.
