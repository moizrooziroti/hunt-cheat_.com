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
    title: 'Guides – Hunt ESP, aimbot, DMA & safety blogs',
    description:
      'Guides on Hunt: Showdown ESP, aimbot, DMA, HWID, and safety — filter and search the hunt-cheat.com blog archive for buying and setup tips.',
  },
  '/reviews/': {
    title: 'Hunt Showdown Cheat Reviews',
    description:
      'Published buyer notes for Hunt Showdown cheat products when available — no fabricated ratings.',
  },
  '/forum/': {
    title: 'Forum – read-only Hunt Showdown cheat discussions',
    description:
      'Forum: read-only example threads on Hunt Showdown cheat features, setup, EAC, and add-on products — illustrative Q&A linked from our guides.',
  },
  '/faq/': {
    title: 'Cheats FAQ – Hunt products, checkout & setup',
    description:
      'Cheats FAQ: ESP, aimbot, MOIZ checkout, HWID spoofer, Cloud DMA, and blog guides — straight answers before you buy Hunt Showdown software.',
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
    title: 'Hunt Showdown – About hunt-cheat.com & buyers',
    description:
      'What hunt-cheat.com publishes for Hunt Showdown buyers: product pages, guides, forum examples, and status notes — independent, not the game publisher.',
  },
  '/affiliate-disclosure/': {
    title: 'Affiliate Disclosure | hunt-cheat.com',
    description:
      'How sponsored Buy links on hunt-cheat.com work, who handles checkout, and when we may earn an affiliate commission on qualifying purchases.',
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
