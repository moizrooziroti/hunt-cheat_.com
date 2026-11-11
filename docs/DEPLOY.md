# Deploy hunt-cheat.com (Cloudflare Workers)

**Canonical origin:** `https://hunt-cheat.com`

## Build

```bash
npm run build:workers
```

Sets `PUBLIC_CANONICAL_ORIGIN=https://hunt-cheat.com` for sitemap and Vite.

## Deploy (when authorized)

```bash
npx wrangler deploy
```

Attach custom domain **hunt-cheat.com** in Cloudflare Dashboard → Workers → `hunt-cheat-com` → Domains & Routes.

## Preview hosts

`*.workers.dev` and `*.pages.dev` should return `X-Robots-Tag: noindex, nofollow` via:

- `src/middleware.ts` (dev/preview with Astro)
- `scripts/serve.mjs` when serving `dist/` locally with a preview hostname

Production **hunt-cheat.com** remains indexable.

## DNS note

If the apex returns HTTP 500 but a Worker preview works, the domain may still point at an old host — update DNS to the Cloudflare Worker route.
