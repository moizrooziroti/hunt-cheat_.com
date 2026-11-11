/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Hunt Showdown Cheat for PC | ESP & Aimbot Features',
    description:
      'Explore Hunt Showdown cheats for PC, compare ESP and aimbot features, check compatibility information, and see what to consider before you buy.',
  },
  '/products/': {
    title: 'Hunt Showdown Cheat Products | PC Software & Add-ons',
    description:
      'Hunt Showdown cheat software plus UGC tools, HWID spoofer, skin changer, and Cloud DMA — feature lists and checkout links at hunt-cheat.com.',
  },
  '/blogs/': {
    title: 'Hunt Showdown Cheat Blogs & Buying Guides',
    description:
      'Hunt: Showdown ESP, aimbot, DMA, HWID, and safety guides with filters and search — hunt-cheat.com blogs.',
  },
  '/reviews/': {
    title: 'Hunt Showdown Cheat Reviews',
    description:
      'Published buyer notes for Hunt Showdown cheat products when available — no fabricated ratings.',
  },
  '/forum/': {
    title: 'Hunt Showdown Forum | Illustrative Discussions',
    description:
      'Read-only example threads about Hunt Showdown cheat features, setup, EAC, and add-on products.',
  },
  '/faq/': {
    title: 'FAQ | Hunt Showdown Cheat Products & Setup',
    description:
      'Answers on ESP, aimbot, checkout, HWID spoofer, Cloud DMA, and blog guides at hunt-cheat.com.',
  },
  '/terms/': {
    title: 'Terms & Conditions | Hunt Showdown Cheat',
    description: 'Purchase terms, license use, and refund policy for hunt-cheat.com affiliate offers.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Hunt Showdown Cheat',
    description:
      'How hunt-cheat.com uses analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'About Hunt Showdown Cheat',
    description:
      'What hunt-cheat.com publishes: product pages, guides, forum examples, and status notes for Hunt: Showdown buyers.',
  },
  '/support/': {
    title: 'Support | Hunt Showdown Cheat',
    description: 'Get help with checkout, compatibility questions, and links to product documentation.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
