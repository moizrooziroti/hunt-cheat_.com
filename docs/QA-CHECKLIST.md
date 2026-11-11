# Release QA checklist

Run after every production build:

```powershell
cd "d:\Roozi roti website Repos\hunt-cheat_.com"
npm run build
npm run check:leftovers
npm run check:qa
npm run local
```

Open **http://127.0.0.1:3000/** and spot-check:

- Homepage hero (video desktop / poster mobile)
- `/blogs/` search (e.g. `esp`), filters, sort
- Product **Buy now** → `/go/.../` → MOIZ destination
- `/sitemap.xml` and `/robots.txt` in browser

Automated checks in `scripts/qa-audit.mjs`:

- Every built page (except `404.html`): unique `<title>`, meta description, exactly one `<h1>`
- All `<img>` have meaningful `alt` (or `aria-hidden`)
- Sitemap URLs match built HTML files
- `/go/` links match `checkout-redirects.mjs`
- No stray `zadeyo.com` URLs outside the MOIZ product map
