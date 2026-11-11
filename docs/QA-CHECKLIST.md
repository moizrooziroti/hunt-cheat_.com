# Release QA checklist

Run before every production deploy:

```bash
npm run check:release
```

That runs `npm run build`, `npm run check:qa`, and `npm run check:leftovers`.

## Manual checklist (matches build audit)

| # | Check | Automated | Notes |
|---|--------|-----------|--------|
| 1 | Build — no errors | `npm run build` | Astro static output in `dist/` |
| 2 | Console errors on key pages | Partial | Static HTML; smoke with `npm run local` and browser devtools on `/`, `/products/`, `/blogs/`, `/reviews/` |
| 3 | Desktop + mobile layout | Viewport in audit | `qa-audit.mjs` requires `viewport` meta on every page |
| 4 | `sitemap.xml` + `robots.txt` live | `check:qa` | 50 URLs in sitemap; every HTML page indexed; `Sitemap: https://hunt-cheat.com/sitemap.xml` |
| 5 | Title, meta description, one H1 | `check:qa` | Title ≤70 chars; description ≤165; exactly one `<h1>` |
| 6 | Canonical `https://hunt-cheat.com` | `check:qa` | No workers.dev in canonical |
| 7 | Store / affiliate links | `check:qa` | All `/go/*` and zadeyo MOIZ URLs match `checkout-redirects.mjs` |
| 8 | Images — WebP + alt | `check:qa` | `optimize-images.mjs`; empty alt only when decorative |
| 9 | Original Hunt copy | `check:leftovers` | No Dota/other-game domains; no repo-root `index.html`; no placeholder lorem |
| 10 | Cloudflare CI | `npm run build:workers` | Same as build with `PUBLIC_CANONICAL_ORIGIN` set |

## Expected counts (current)

- **HTML pages:** 51 files (`404.html` excluded from sitemap)
- **Sitemap URLs:** 50
- **Products:** 5
- **Blogs:** 16
- **Forum threads:** 18
- **Reviews:** 15 published notes in `data/reviews.json`
