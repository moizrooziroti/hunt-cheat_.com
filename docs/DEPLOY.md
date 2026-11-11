# Deploy hunt-cheat.com

**Canonical origin:** `https://hunt-cheat.com` only (no preview/staging hostnames in sitemap, canonical, or robots).

## Build

```bash
npm ci
npm run build
```

**Cloudflare Workers** (connected repo) uses:

```bash
npm ci
npm run build:workers
```

That sets `PUBLIC_CANONICAL_ORIGIN=https://hunt-cheat.com`, runs the normal build, and leaves `dist/` for `wrangler deploy` (`wrangler.toml`).

Optional checks:

```bash
npm run check:leftovers
npm run check:qa
```

## Run locally (production static)

```bash
npm run local
```

Open `http://127.0.0.1:3000/` — `scripts/serve.mjs` serves `dist/`, handles `/go/*` checkout redirects, and legacy path redirects from `scripts/redirects.mjs`.

## Production

Upload the **`dist/`** folder to your host for **hunt-cheat.com**, or run `npm run start` behind your reverse proxy (see `nixpacks.toml`).

Ensure the edge/server also forwards:

- `/go/*` → MOIZ checkout URLs (same map as `src/config/checkout-redirects.mjs`)
- Legacy paths in `scripts/redirects.mjs` (`/blog/` → `/blogs/`, etc.)

All public URLs in HTML, `sitemap.xml`, and `robots.txt` must use `https://hunt-cheat.com`.
