import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic = 'all' | 'esp' | 'scripts' | 'safety' | 'products' | 'articles' | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const mainCheat = link('Hunt Showdown cheat', productPath('hunt-showdown-cheat'));
const ugc = link('UGC tools', productPath('ugc-tools'));
const spoofer = link('HWID spoofer', productPath('hwid-spoofer'));
const skinChanger = link('Skin changer', productPath('skin-changer'));
const dma = link('Cloud DMA', productPath('cloud-dma'));
const productsHub = link('Products', ROUTES.products);
const blogs = link('Blogs', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'terms-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can using third-party Hunt: Showdown software affect my account?',
    a: a(
      'Yes. Third-party tools may violate Crytek terms and trigger Easy Anti-Cheat enforcement. We do not claim any specific detection status or ban immunity.',
    ),
  },
  {
    id: 'affiliate',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'Why do checkout buttons open another site?',
    a: a(
      'Purchases complete through our MOIZ affiliate partner on zadeyo.com. This site may earn a commission on qualifying purchases.',
    ),
  },
  {
    id: 'where-products',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Which products does hunt-cheat.com list?',
    a: `${productsHub} lists ${mainCheat}, ${ugc}, ${spoofer}, ${skinChanger}, and ${dma} with feature summaries.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What does ESP mean in Hunt: Showdown listings?',
    a: `ESP usually refers to extra on-screen information—hunters, clues, or world objects. Exact modules depend on the checkout listing, not this marketing site.`,
  },
  {
    id: 'eac',
    topic: 'safety',
    icon: 'faqVacUpdate',
    q: 'Does Easy Anti-Cheat change what buyers should expect?',
    a: a(
      'EAC updates can change compatibility overnight. Read the partner listing and our update blogs after patch days—never assume yesterday’s setup still applies.',
    ),
  },
  {
    id: 'hwid-scope',
    topic: 'products',
    icon: 'faqLicenseMove',
    q: 'When is the HWID spoofer relevant?',
    a: `${spoofer} explains hardware identifier tooling at a high level. Confirm supported scenarios on checkout before purchase.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'ugc-scope',
    topic: 'products',
    icon: 'faqBlogGuideTier',
    q: 'What are UGC tools in this catalog?',
    a: `${ugc} covers user-generated content utilities when listed on checkout. It is separate from combat ESP on ${mainCheat}.`,
    scopes: ['ugc-tools'],
  },
  {
    id: 'skin-changer-scope',
    topic: 'products',
    icon: 'faqBlogGuideTier',
    q: 'Does the skin changer add ESP or aimbot?',
    a: a(
      'No. Skin changer listings focus on cosmetic previews. Combat overlays live on the main Hunt Showdown cheat product page.',
    ),
    scopes: ['skin-changer'],
  },
  {
    id: 'dma-vs-soft',
    topic: 'products',
    icon: 'faqEspVsScripts',
    q: 'How is Cloud DMA different from on-PC overlays?',
    a: `${dma} and ${blogs} compare DMA with typical software paths. Hardware requirements differ—confirm on the listing.`,
    scopes: ['cloud-dma'],
  },
  {
    id: 'read-blogs-first',
    topic: 'articles',
    icon: 'faqBlogGuideStart',
    q: 'Should I read the blogs before buying?',
    a: `${blogs} includes buying guides, feature explainers, and safety notes so you can compare products with clearer vocabulary.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['terms-risk', 'affiliate', 'where-products', 'what-is-esp', 'read-blogs-first'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs;
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter by topic: ESP, safety, products, blogs, and setup.',
} as const;

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'esp',
  'scripts',
  'safety',
  'products',
  'articles',
  'setup',
];

export function getProductFaqs(slug: string, _kind: 'tier' | 'utility'): SiteFaqItem[] {
  return siteFaqs.filter((f) => !f.scopes || f.scopes.includes(slug));
}

/** Optional FAQs appended to blog articles by tag/slug. */
export function getBlogFaqs(_tag: string, slug: string): SiteFaqItem[] {
  const hints: SiteFaqItem[] = [];
  if (slug.includes('esp') || slug.includes('wallhack') || slug.includes('radar')) {
    hints.push({
      id: 'blog-esp',
      topic: 'esp',
      icon: 'faqWhatIsEsp',
      q: 'Where is the Hunt Showdown ESP product page?',
      a: `See ${mainCheat} for overlay modules and ${blogs} for tuning guides.`,
    });
  }
  if (slug.includes('safety') || slug.includes('eac')) {
    hints.push({
      id: 'blog-safety',
      topic: 'safety',
      icon: 'faqBanRisk',
      q: 'Does this article promise a safe or undetected status?',
      a: a('No. We describe risks and compatibility — checkout listings are the live scope.'),
    });
  }
  return hints.slice(0, 3);
}
