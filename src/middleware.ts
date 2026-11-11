import { defineMiddleware } from 'astro:middleware';
import { resolveCheckoutPathRedirect } from './config/checkout-redirects.mjs';

const PREVIEW_HOST_SUFFIXES = ['.workers.dev', '.pages.dev'];

function isPreviewHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  return PREVIEW_HOST_SUFFIXES.some((suffix) => host.endsWith(suffix));
}

export const onRequest = defineMiddleware(async (context, next) => {
  const destination = resolveCheckoutPathRedirect(new URL(context.request.url).pathname);
  if (destination) {
    return context.redirect(destination, 302);
  }

  const response = await next();
  const host = context.url.hostname;

  if (!isPreviewHost(host)) {
    return response;
  }

  const headers = new Headers(response.headers);
  headers.set('X-Robots-Tag', 'noindex, nofollow');
  const contentType = headers.get('Content-Type') ?? '';
  if (contentType.includes('text/html')) {
    headers.set('Cache-Control', 'no-store');
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
});
