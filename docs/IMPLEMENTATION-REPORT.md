# Hunt Showdown Cheat — implementation report

**Branch:** `hunt-cheat-build`  
**Canonical:** `https://hunt-cheat.com`  
**Deploy:** local build only (per project request)

## A. Repository cleanup

- **Source:** fresh clone of [Stellarhamza/NOT-OPTIMISED](https://github.com/Stellarhamza/NOT-OPTIMISED) into `hunt-cheat_.com`.
- **Converted:** Hunt: Showdown site (products, i18n, FAQ, forum, blogs, SEO).
- **Validator:** `npm run check:leftovers` — **PASS** (src + dist after final build).
- **Other-game traces:** removed from `public/images/`, redirects, and legacy docs baseline.

## B. Website functionality

| Area | Status |
|------|--------|
| Homepage hero H1 | **Hunt Showdown Cheat for PC** |
| 5 products | `hunt-showdown-cheat`, `ugc-tools`, `hwid-spoofer`, `skin-changer`, `cloud-dma` |
| Feature checkout cards | **Proceed to Checkout →** (no subscription UI) |
| `/blogs/` | 16 articles, search `?q=`, filters, sort |
| `/forum/` | 18 illustrative read-only threads |
| `/reviews/` | Empty state (`data/reviews.json` = `[]`) |
| Navigation | Products, Blogs, Reviews, Forum, FAQ, Support |

## C. SEO

- Central config: `src/config/site.ts`, `pageSeo.ts`, `seo.ts`, `astro.config.mjs` (`site: hunt-cheat.com`).
- **Sitemap:** 49 URLs → `dist/sitemap.xml` (post `finalize-sitemap.mjs`).
- **robots.txt:** `Sitemap: https://hunt-cheat.com/sitemap.xml`
- **Structured data:** Organization, WebSite (+ SearchAction on `/blogs/?q=`), Product, Article, FAQ where applicable.
- **Docs:** `docs/keyword-map.md`, `docs/blog-research.md`.

## D. Hosting

- **Canonical host only:** `https://hunt-cheat.com` (see `docs/DEPLOY.md`, `scripts/serve.mjs`).
- **Live production:** deploy `dist/` to your hunt-cheat.com origin (not verified from this repo).

## E. QA checklist (release)

| Check | Result | Command / evidence |
|--------|--------|-------------------|
| Build — no errors | **PASS** | `npm run build` → 50 HTML + `404.html`; redirect stubs pruned |
| Console / broken pages | **PASS** (static) | `npm run check:qa` on `dist/`; local smoke `/`, `/products/`, `/blogs/`, `/forum/` → 200 |
| Desktop + mobile layout | **PASS** (code) | Tailwind responsive utilities; hero poster on mobile |
| `sitemap.xml` + `robots.txt` | **PASS** | 49 indexed URLs ↔ 49 sitemap entries; `dist/robots.txt` + Sitemap line |
| Title, meta description, one H1 | **PASS** | `scripts/qa-audit.mjs` — `SectionHeader` uses `h2` except page heroes |
| Store / affiliate links | **PASS** | CTAs → `/go/*` → MOIZ map in `checkout-redirects.mjs`; audit validates hrefs |
| Images (WebP + alt) | **PASS** | `optimize-images.mjs` + Supabase WebP; product/blog alts in components |
| Original Hunt copy | **PASS** | `npm run check:leftovers` (no Dota / other-game strings) |

## F. Tests run

- `npm run build`
- `npm run check:leftovers`
- `npm run check:qa`
- `npm run local` (optional preview on port 3000)

## G. Remaining blockers

- Live DNS / origin attach for hunt-cheat.com
- Genuine customer reviews (optional future data)
