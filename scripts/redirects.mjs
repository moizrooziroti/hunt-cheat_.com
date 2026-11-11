/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blogs/'],
  ['/blog/', '/blogs/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/cheats', '/products/'],
  ['/cheats/', '/products/'],
  ['/cheats/lite', '/products/'],
  ['/cheats/lite/', '/products/'],
  ['/cheats/pro', '/products/'],
  ['/cheats/pro/', '/products/'],
  ['/cheats/elite', '/products/hunt-showdown-cheat/'],
  ['/cheats/elite/', '/products/hunt-showdown-cheat/'],
  ['/cheats/compare', '/blogs/hunt-showdown-cheat-comparison/'],
  ['/cheats/compare/', '/blogs/hunt-showdown-cheat-comparison/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
