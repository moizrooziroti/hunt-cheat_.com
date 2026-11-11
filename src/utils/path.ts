import { PRODUCT_BASE } from '../config/site';

/** Normalize internal paths to match trailingSlash: 'always' and canonical URLs. */
export function withTrailingSlash(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const [pathname, hash = ''] = path.split('#');
  const normalized = pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return hash ? `${normalized}#${hash}` : normalized;
}

/** Former /cheats/* URLs → current routes (301 targets match astro.config + scripts/redirects.mjs). */
export const LEGACY_PATH_MAP: Record<string, string> = {
  '/cheats': PRODUCT_BASE,
  '/cheats/': PRODUCT_BASE,
  '/cheats/lite': PRODUCT_BASE,
  '/cheats/lite/': PRODUCT_BASE,
  '/cheats/pro': PRODUCT_BASE,
  '/cheats/pro/': PRODUCT_BASE,
  '/cheats/elite': `${PRODUCT_BASE}elite/`,
  '/cheats/elite/': `${PRODUCT_BASE}elite/`,
  '/cheats/compare': '/blogs/hunt-showdown-cheat-comparison/',
  '/cheats/compare/': '/blogs/hunt-showdown-cheat-comparison/',
  '/blog': '/blogs/',
  '/blog/': '/blogs/',
  '/contact': '/support/',
  '/contact/': '/support/',
};

export function normalizeInternalPath(href: string): string {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('/go/')) {
    return href;
  }

  const hashIndex = href.indexOf('#');
  const rawPath = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';

  let pathname = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  pathname = LEGACY_PATH_MAP[pathname] ?? pathname;

  return withTrailingSlash(pathname) + hash;
}

export const ROUTES = {
  home: '/',
  blog: '/blogs/',
  reviews: '/reviews/',
  forum: '/forum/',
  products: PRODUCT_BASE,
  productsElite: `${PRODUCT_BASE}elite/`,
  productsUtilities: `${PRODUCT_BASE}utilities/`,
  faq: '/faq/',
  terms: '/terms/',
  about: '/about/',
  support: '/support/',
  privacy: '/privacy/',
} as const;

export function blogPostPath(slug: string): string {
  return `/blogs/${slug}/`;
}

/** @deprecated Use productPath — cheat tier pages live under products. */
export function cheatPath(slug: string): string {
  return productPath(slug);
}

export function productPath(slug: string): string {
  return `${PRODUCT_BASE}${slug}/`;
}

/** Normalize URL path for nav “current page” checks (trailing slash stripped; root is `/`). */
export function normalizePathname(pathname: string): string {
  return pathname.replace(/\/index\.html$/i, '').replace(/\/$/, '') || '/';
}

/** True when `pathname` is the nav link target or a child route (e.g. `/blogs/foo/` → Blogs). */
export function navLinkIsActive(pathname: string, href: string): boolean {
  const path = normalizePathname(pathname);
  const linkPath = normalizePathname((href.split('#')[0] ?? href).trim());
  if (linkPath === '/') return path === '/';
  return path === linkPath || path.startsWith(`${linkPath}/`);
}
