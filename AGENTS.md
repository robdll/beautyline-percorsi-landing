# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single **Astro 6** marketing landing site (`percorsi-landing`) for Beauty Line Academy's "Percorsi Master" programs. It is not a monorepo — there is one web service and one SSR API route. Package manager is **npm** (`package-lock.json`); Node 22 works.

Standard commands live in `package.json` (`dev`, `build`, `preview`) and are documented in `README.md`'s command table. Type/lint checking is `npm run astro -- check`.

Service:

| Task | Command | Notes |
| --- | --- | --- |
| Run (dev) | `npm run dev` | Serves everything at `http://localhost:4321`, including the SSR route `/api/lead`. |
| Lint/type check | `npm run astro -- check` | Reports 0 errors; a couple of `is:inline` hints are pre-existing and harmless. |
| Build | `npm run build` | Static output + one Vercel serverless function via `@astrojs/vercel`. |

Non-obvious caveats:

- **Lead form requires `RESEND_API_KEY`.** The `POST /api/lead` route ([`src/pages/api/lead.ts`](src/pages/api/lead.ts)) returns HTTP 500 with `"RESEND_API_KEY non configurata sul server."` when the key is missing — this is expected without the secret. Copy `.env.example` to `.env` and set `RESEND_API_KEY` to actually send emails (via Resend to `info@beautylineprofessional.com`). The key check happens before field validation, so with no key you always get the 500 regardless of payload. After adding or changing the key, **fully restart** `npm run dev` (Vite's `.env` hot-reload alone may not refresh `import.meta.env.RESEND_API_KEY`). Success response is HTTP 200 with `"Richiesta inviata con successo."`; the UI shows `"Grazie! Ti contatteremo al più presto."`
- **Some referenced images are not committed.** Pages reference `/images/...` assets that don't exist in `public/` (only `favicon.svg` and `robots.txt` are committed), so those images 404. Pages still render and are fully interactive; this is not a setup failure.
- The `README.md` is still the generic Astro minimal-template README. Actual product content lives in `src/data/percorsi.ts` and the page components under `src/pages/`.
