import { t } from '../i18n';
import { checkoutForSlug } from '../config/checkout';
import {
  HUNT_SHOWDOWN_AIMBOT,
  HUNT_SHOWDOWN_MISC,
  HUNT_SHOWDOWN_VISUALS,
} from '../config/siteMedia';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page (future /blogs/ slugs). */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  'hunt-showdown-cheat': [
    'hunt-showdown-esp-guide',
    'hunt-showdown-aimbot-settings',
    'hunt-showdown-radar-setup',
    'hunt-showdown-cheat-features',
    'buying-hunt-showdown-cheats',
  ],
  'ugc-tools': [
    'hunt-showdown-ugc-recovery',
    'hunt-account-restriction-basics',
    'buying-hunt-showdown-cheats',
  ],
  'hwid-spoofer': [
    'hunt-hwid-spoofer-after-ban',
    'hunt-showdown-hardware-id-basics',
    'hunt-patch-day-checklist',
  ],
  'skin-changer': [
    'hunt-showdown-skin-changer-guide',
    'hunt-showdown-cosmetic-preview',
    'hunt-showdown-cheat-features',
  ],
  'cloud-dma': [
    'hunt-cloud-dma-overview',
    'hunt-software-vs-dma-tradeoffs',
    'hunt-showdown-performance-tips',
  ],
};

const productBase = '/products/';

const SITE_WEBP = {
  esp: HUNT_SHOWDOWN_VISUALS,
  map: HUNT_SHOWDOWN_AIMBOT,
  utility: HUNT_SHOWDOWN_MISC,
  misc: HUNT_SHOWDOWN_MISC,
} as const;

const EXTRA_WEBP = {
  r1: HUNT_SHOWDOWN_AIMBOT,
  r2: HUNT_SHOWDOWN_VISUALS,
  r3: HUNT_SHOWDOWN_MISC,
} as const;

const huntSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: '64-bit Windows 10 or 11 (confirm minimum build on the checkout listing).' },
  { icon: 'reqSteam', text: 'Hunt: Showdown on Steam with current patches applied.' },
  { icon: 'reqSettings', text: 'Administrator or elevated install when the product documentation requires it.' },
  { icon: 'reqWifi', text: 'Stable connection for downloads, updates, and portal access.' },
  { icon: 'reqCpu', text: 'Hardware that meets Hunt: Showdown performance expectations for smooth play.' },
];

function slides(
  items: { src: string; alt: string; caption: string; captionDesc: string }[],
): ProductSlide[] {
  return items;
}

const acquisitionDefault = (productLabel: string): ProductAcquisition => ({
  title: `How access works — ${productLabel}`,
  steps: [
    {
      num: '01',
      title: 'Confirm scope on the checkout page',
      desc: 'Review what the listing includes, supported modes, and the risk disclosure before paying.',
    },
    {
      num: '02',
      title: 'Complete purchase',
      desc: 'Use Proceed to Checkout on this page. It opens the official partner checkout in a new tab.',
    },
    {
      num: '03',
      title: 'Follow delivery instructions',
      desc: 'Use the access steps provided after purchase. Keep installers and docs in one folder for support.',
    },
    {
      num: '04',
      title: 'Validate in a safe session first',
      desc: 'Test overlays in a low-stakes lobby or tutorial hunt before relying on them in competitive raids.',
    },
  ],
});

export const productPages: ProductPage[] = [
  {
    slug: 'hunt-showdown-cheat',
    kind: 'utility',
    badge: 'Core offer',
    category: 'Main product',
    name: 'Hunt Showdown',
    title: 'Hunt Showdown Cheat',
    subtitle:
      'ESP for hunters and threats, aim assistance, and raid radar for Hunt: Showdown PC — module names and limits come from the live checkout listing.',
    desc: 'Hunt: Showdown cheat for PC: hunter ESP, aim assistance, and tactical radar. Features and price on affiliate checkout.',
    features: [
      'Hunter and boss ESP with distance and name tags',
      'Smooth aim assistance with FOV and bone options',
      '2D raid radar with zoom and range filters',
      'Loot and clue highlights when listed at checkout',
    ],
    more: 0,
    variant: 'popular',
    buyUrl: checkoutForSlug('hunt-showdown-cheat'),
    images: slides([
      {
        src: SITE_WEBP.esp,
        alt: 'Hunt: Showdown overlay example — hunter ESP emphasis (illustrative)',
        caption: 'Hunter ESP',
        captionDesc: 'Illustrative only; exact modules are on the checkout listing.',
      },
      {
        src: EXTRA_WEBP.r1,
        alt: 'Tactical overlay / intel layer for Hunt: Showdown (illustrative)',
        caption: 'Raid awareness',
        captionDesc: 'Compare with listing screenshots before purchase.',
      },
    ]),
    overview: {
      title: 'What this bundle is for',
      paragraphs: [
        'Buy here when you want Hunt: Showdown overlays and aim tools in one menu. Proceed to Checkout opens the partner page with the live module list, pricing, and delivery steps.',
        'Using third-party tools can conflict with Crytek and Steam rules and may affect your account. We do not claim a detection status — this page explains scope and links to checkout.',
      ],
    },
    acquisition: acquisitionDefault('Hunt Showdown cheat'),
    goodToKnow:
      'Start with one saved profile. Confirm ESP, aim, and radar module names on checkout before you trust a forum screenshot as the menu.',
    limitations:
      'Modules can change after a Hunt patch. The checkout listing is the current feature source. Account penalties are possible when platform rules apply.',
    fullFeatures: [
      'Player ESP: boxes, skeleton, health, distance, team filters',
      'Boss and world threat markers when listed',
      'Aim assistance: smoothing, FOV cap, visibility checks',
      '2D radar with hunter icons and range control',
      'Loot or clue ESP layers per checkout documentation',
      'Misc: crosshair, config profiles, stream-capture toggle if included',
    ],
    systemRequirements: huntSystemRequirements,
    about: [
      {
        type: 'p',
        text: 'New to these categories? Read future guides under [/blogs/](/blog/) for ESP tuning and radar setup before checkout.',
      },
    ],
    body: [
      { type: 'h2', text: 'How the pieces fit together' },
      {
        type: 'p',
        text: 'ESP answers where hunters, clues, and threats sit on the map. Aim assistance speeds target acquisition when the listing includes it. Radar gives a top-down picture without opening the full map.',
      },
      {
        type: 'h2',
        text: 'Utilities on hunt-cheat.com',
      },
      {
        type: 'p',
        text: 'Hardware issues use the [HWID spoofer](/products/hwid-spoofer/). Account paperwork may need [UGC tools](/products/ugc-tools/). Cosmetics-only workflows use the [skin changer](/products/skin-changer/).',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['hunt-showdown-cheat'] ?? [],
  },
  {
    slug: 'ugc-tools',
    kind: 'utility',
    badge: 'Account',
    category: 'UGC',
    name: 'UGC',
    title: 'UGC Tools',
    subtitle:
      'User-generated content and account recovery utilities for Hunt: Showdown when the listing covers appeals or identity workflows — not combat overlays.',
    desc: 'UGC tools for Hunt: Showdown account and identity workflows. Scope is defined on the partner checkout page.',
    features: [
      'Account or identity workflows as described at checkout',
      'Documentation templates when the listing includes them',
      'Separate from ESP, aim, and radar combat modules',
    ],
    more: 0,
    variant: 'essential',
    buyUrl: checkoutForSlug('ugc-tools'),
    images: slides([
      {
        src: SITE_WEBP.misc,
        alt: 'Account utility context for Hunt: Showdown players (illustrative)',
        caption: 'Account tooling',
        captionDesc: 'Illustrative — UGC scope is defined at checkout.',
      },
      {
        src: EXTRA_WEBP.r2,
        alt: 'Support and recovery workflow concept (illustrative)',
        caption: 'Recovery scope',
        captionDesc: 'Read the live listing before purchase.',
      },
    ]),
    overview: {
      title: 'When UGC tooling applies',
      paragraphs: [
        'UGC products address account restrictions, appeals, or identity paperwork when the partner listing says they apply to your situation.',
        'This is not the Hunt Showdown cheat menu and not a hardware spoofer. Match the product card to the problem before checkout.',
      ],
    },
    acquisition: acquisitionDefault('UGC tools'),
    goodToKnow:
      'Gather order email, Steam details, and any ticket IDs before opening partner support. UGC does not add in-game ESP.',
    limitations:
      'Outcomes depend on platform policy and the facts of your case. We do not guarantee reinstatement. Features are whatever the checkout page lists today.',
    fullFeatures: [
      'Workflow steps listed at checkout',
      'Identity or appeal templates when included',
      'Windows compatibility notes from documentation',
      'Separate billing from the main cheat license',
    ],
    systemRequirements: huntSystemRequirements,
    body: [
      { type: 'h2', text: 'Related reading' },
      {
        type: 'p',
        text: 'Pair with [/blogs/hunt-showdown-ugc-recovery/](/blog/) when published. For hardware bans, see [HWID spoofer](/products/hwid-spoofer/) instead.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['ugc-tools'] ?? [],
  },
  {
    slug: 'hwid-spoofer',
    kind: 'utility',
    badge: 'System',
    category: 'System utility',
    name: 'Spoofer',
    title: 'HWID Spoofer',
    subtitle:
      'Hardware identifier tooling for Hunt: Showdown players replacing machines or following strict hardware checks — coverage depends on the listing.',
    desc: 'HWID spoofer for Hunt: Showdown. Identifier scope is on checkout, not the cheat overlay menu.',
    features: [
      'HWID or component identifier handling (as described at checkout)',
      'Driver or cleanup steps if the listing includes them',
      'Post-change verification workflow when provided',
    ],
    more: 0,
    variant: 'essential',
    buyUrl: checkoutForSlug('hwid-spoofer'),
    images: slides([
      {
        src: SITE_WEBP.utility,
        alt: 'PC hardware context for HWID tooling (illustrative)',
        caption: 'System identifiers',
        captionDesc: 'Illustrative — spoofer scope is defined at checkout.',
      },
      {
        src: EXTRA_WEBP.r3,
        alt: 'Windows driver stack context for identifier tools (illustrative)',
        caption: 'Drivers and reboot',
        captionDesc: 'Follow vendor steps from the listing.',
      },
    ]),
    overview: {
      title: 'When people look for a spoofer',
      paragraphs: [
        'Hardware bans and device ties are common search topics. A spoofer attempts to present different hardware identifiers when the product supports that workflow.',
        'This is not the same as an account appeal. Read the checkout scope before you buy.',
      ],
    },
    acquisition: acquisitionDefault('HWID spoofer'),
    goodToKnow:
      'The spoofer card is only for hardware-identifier scope on its listing. It is not the Hunt Showdown cheat menu.',
    limitations:
      'A spoofer does not restore an account and does not add ESP. Platform rules still apply. Coverage is whatever the checkout page lists.',
    fullFeatures: [
      'Configurable identifier targets as listed',
      'Reboot or verification steps from documentation',
      'Compatibility notes for Windows builds on checkout',
      'Separate license from combat overlay products',
    ],
    systemRequirements: huntSystemRequirements,
    body: [
      { type: 'h2', text: 'Understand the limit' },
      {
        type: 'p',
        text: 'Exact chipset and storage coverage lives on the partner listing — we do not invent device lists on hunt-cheat.com.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['hwid-spoofer'] ?? [],
  },
  {
    slug: 'skin-changer',
    kind: 'utility',
    badge: 'Cosmetic',
    category: 'Cosmetic',
    name: 'Skin changer',
    title: 'Skin Changer',
    subtitle:
      'Hunt: Showdown cosmetic tooling for hunter looks and gear previews — scope and limits come from the live checkout listing.',
    desc: 'Skin changer for Hunt: Showdown PC — cosmetic previews when the listing supports your client.',
    features: [
      'Hunter outfit and gear previews (per checkout list)',
      'Cosmetic-only — separate from ESP or aim modules',
      'Saved loadout profiles when the product includes them',
    ],
    more: 0,
    variant: 'essential',
    buyUrl: checkoutForSlug('skin-changer'),
    images: slides([
      {
        src: SITE_WEBP.utility,
        alt: 'Hunt: Showdown cosmetic menu — illustrative preview',
        caption: 'Cosmetic menu',
        captionDesc: 'Illustrative — exact cosmetics are on checkout.',
      },
      {
        src: EXTRA_WEBP.r1,
        alt: 'Loadout customization context (illustrative)',
        caption: 'Loadout view',
        captionDesc: 'Compare listing screenshots before you buy.',
      },
    ]),
    overview: {
      title: 'Cosmetics without combat modules',
      paragraphs: [
        'Skin changer tooling is for players who want hunter looks without opening the full cheat menu. What you can preview is defined on the partner listing.',
        'This is not the HWID spoofer and not Cloud DMA. Pair with the [main cheat product](/products/hunt-showdown-cheat/) only when you want both scopes.',
      ],
    },
    acquisition: acquisitionDefault('skin changer'),
    goodToKnow:
      'Cosmetic changes can still violate platform rules — read the risk disclosure on checkout.',
    limitations:
      'The skin changer does not add ESP or aim assistance. Compatible Hunt modes are whatever the listing names today.',
    fullFeatures: [
      'Hunter gear categories listed at checkout',
      'Client-side preview behavior as documented',
      'Profile save or reset when included',
      'Windows build notes from the listing',
    ],
    systemRequirements: huntSystemRequirements,
    body: [
      { type: 'h2', text: 'Related reading' },
      {
        type: 'p',
        text: 'See future [/blogs/hunt-showdown-skin-changer-guide/](/blog/) for how cosmetics differ from combat overlays.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['skin-changer'] ?? [],
  },
  {
    slug: 'cloud-dma',
    kind: 'utility',
    badge: 'Hardware path',
    category: 'DMA',
    name: 'Cloud DMA',
    title: 'Cloud DMA',
    subtitle:
      'Cloud DMA for Hunt: Showdown — memory read at distance with separate host gear when the listing matches that architecture.',
    desc: 'Cloud DMA for Hunt: Showdown: a hardware read path, separate from the on-PC cheat loader.',
    features: [
      'DMA-style read path when listed',
      'Cloud-hosted or off-box processing if included',
      'Setup expectations separate from standard loaders',
    ],
    more: 0,
    variant: 'limited',
    buyUrl: checkoutForSlug('cloud-dma'),
    images: slides([
      {
        src: SITE_WEBP.map,
        alt: 'Cloud DMA or external read path context (illustrative)',
        caption: 'Hardware path',
        captionDesc: 'Illustrative — bridge and cabling details are on the listing.',
      },
      {
        src: EXTRA_WEBP.r2,
        alt: 'Separate machine routing concept (illustrative)',
        caption: 'Off-PC read path',
        captionDesc: 'Confirm gear list and firmware on checkout.',
      },
    ]),
    overview: {
      title: 'Why DMA is a different conversation',
      paragraphs: [
        'Software overlays run on your game PC. DMA setups read memory through separate hardware — the tradeoff is cost, cabling, and learning curve.',
        'Read future [/blogs/hunt-cloud-dma-overview/](/blog/) and compare software versus DMA tradeoffs before buying.',
      ],
    },
    acquisition: acquisitionDefault('Cloud DMA'),
    goodToKnow:
      'Cloud DMA is the hardware-path offer. Read bridge and second-PC notes on its listing before comparing to the software cheat card.',
    limitations:
      'Requires the gear the listing names. Different buy from the on-PC loader. Account risk and patch breakage still exist; we do not claim a detection status.',
    fullFeatures: [
      'Hardware bridge requirements as listed',
      'Cloud or remote processing notes from documentation',
      'Installation sequence for firmware or devices if applicable',
      'Separate support path from software-only licenses',
    ],
    systemRequirements: huntSystemRequirements,
    body: [
      { type: 'h2', text: 'Cross-check' },
      {
        type: 'p',
        text: 'If you only need overlays, the [Hunt Showdown cheat](/products/hunt-showdown-cheat/) may fit better. DMA is for buyers who already understand the hardware story.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['cloud-dma'] ?? [],
  },
];

/** Illustrative stills (legacy export for scripts). */
export const heroSlides: ProductSlide[] = [
  {
    src: HUNT_SHOWDOWN_VISUALS,
    alt: 'Hunt: Showdown ESP / visuals overlay (illustrative)',
    caption: 'Hunter ESP',
    captionDesc: 'Illustrative still from product media.',
  },
  {
    src: HUNT_SHOWDOWN_AIMBOT,
    alt: 'Hunt: Showdown aim assist menu (illustrative)',
    caption: 'Aim assistance',
    captionDesc: 'Illustrative still from product media.',
  },
  {
    src: HUNT_SHOWDOWN_MISC,
    alt: 'Hunt: Showdown cheat menu misc modules (illustrative)',
    caption: 'Menu modules',
    captionDesc: 'Illustrative still from product media.',
  },
];

/** Home “cheats” section cards — main Hunt product (legacy tier layout). */
export const cheatPages = productPages.filter((p) => p.slug === 'hunt-showdown-cheat');

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: t.products.subtitle,
  buyUrl: checkoutForSlug('hunt-showdown-cheat'),
};

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}
