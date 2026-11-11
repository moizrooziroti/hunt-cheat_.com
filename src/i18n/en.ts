import type { Translations } from './types';
import { PRIMARY_BUY_URL } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';
import { blogPosts } from '../data/blog/posts';
import { EXTRA_WEBP, SITE_WEBP } from '../config/siteMedia';

const productBase = PRODUCT_BASE;

const blogItems = blogPosts.map((p) => ({
  tag: p.tag,
  title: p.title,
  slug: p.slug,
  image: p.image,
  desc: p.desc,
  date: p.date,
  readTime: p.readTime,
}));

export const en: Translations = {
  site: {
    name: 'Hunt Showdown Cheat',
    domain: 'hunt-cheat.com',
    title: 'Hunt Showdown Cheat for PC | ESP & Aimbot Features',
    description:
      'Explore Hunt Showdown cheats for PC, compare ESP and aimbot features, check compatibility information, and see what to consider before you buy.',
    discord: PRIMARY_BUY_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blogs/', label: 'Blogs' },
    { href: '/reviews/', label: 'Reviews' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'PC · Hunt: Showdown 1896',
    eyebrow: 'ESP, Aimbot & PC Software Features',
    titleLine1: 'Hunt Showdown',
    titleLine2: 'Hunt Showdown Cheat for PC',
    subtitle:
      'Explore Hunt Showdown cheats for PC: compare ESP and aimbot layers, check compatibility notes on each product page, and open sponsored checkout when you are ready. Add-ons include UGC tools, HWID spoofer, skin changer, and Cloud DMA. Third-party tools can conflict with game rules and Easy Anti-Cheat — account risk stays with you.',
    ctaPrimary: 'View products',
    ctaDiscord: 'Proceed to checkout',
    modesLabel: 'Product line',
    modes: ['ESP', 'Aimbot', 'Radar', 'UGC · HWID · Skin · DMA'],
    metrics: [
      { label: 'Products', strong: '5' },
      { label: 'Blog guides', strong: '16' },
      { label: 'Forum threads', strong: '18' },
      { label: 'Support', strong: 'FAQ' },
    ],
  },
  features: {
    eyebrow: 'What we cover',
    title: 'What you get with Hunt: Showdown hacks',
    subtitle:
      'ESP, aim assistance, and wallhack-style visuals are the core buy. Spoofer, skin changer, and Cloud DMA sit beside them if you need that extra piece.',
    items: [
      {
        title: 'ESP & intel',
        subtitle: 'Read the round faster.',
        desc:
          'Extra labels for hunters, clues, and traps, and distances—so you spend less time guessing rotations.',
        bullets: [
          'Tune color, distance, and opacity instead of turning on “everything.”',
          'Pair labels with sound so the overlay stays readable in a firefight.',
        ],
        tags: ['Hunt Showdown ESP', 'Hunt Showdown overlay', 'gadget intel'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
        image: SITE_WEBP.zadeyoVisuals,
        imageAlt: 'Illustrative ESP / intel overlay — exact UI depends on your checkout listing.',
      },
      {
        title: 'Aim assistance',
        subtitle: 'Travel and acquisition.',
        desc:
          'Smoothing, FOV, bone priority—settings that change how your crosshair moves under stress.',
        bullets: [
          'Change one slider per session so you know what actually helped.',
          'Expect missed shots when ping or crosshair height is wrong.',
        ],
        tags: ['Hunt Showdown aimbot', 'smoothing', 'FOV'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
        image: SITE_WEBP.zadeyoAimbot,
        imageAlt: 'Illustrative aim-assist style menu — keys and ranges vary by seller.',
      },
      {
        title: 'Wallhack-style',
        subtitle: 'Geometry emphasis.',
        desc:
          'Outlines through cover trade GPU work for spatial certainty—thicken on dark sites, thin on bright ones.',
        bullets: ['Keep lines thin enough that you can still read the site.'],
        tags: ['Hunt Showdown wallhack', 'cover reads', 'verticality'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
        image: SITE_WEBP.levoVisuals,
        imageAlt: 'Illustrative visibility / geometry read — tune for your map pool.',
      },
      {
        title: 'HWID spoofer',
        subtitle: 'Hardware identity tooling.',
        desc:
          'For buyers researching identifier changes—scope only what the listing supports.',
        bullets: ['Different buy from the skin changer — read the HWID listing only for identifier tooling.'],
        tags: ['HWID', 'hardware', 'identifiers'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-1 lg:row-start-3',
        image: SITE_WEBP.levoMisc,
        imageAlt: 'Hardware / system context for HWID tools — follow the product documentation.',
      },
      {
        title: 'Skin changer',
        subtitle: 'Loadout cosmetics.',
        desc:
          'Swap camos, operators, and blueprint looks when the listing supports Hunt: Showdown — cosmetic-only, separate from ESP or aim modules.',
        bullets: ['Confirm the Hunt Showdown camo list on checkout before you buy.'],
        tags: ['camos', 'blueprints', 'cosmetic'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-5 lg:row-start-3',
        image: SITE_WEBP.zadeyoMisc,
        imageAlt: 'Weapon camo and loadout customization — illustrative Hunt Showdown cosmetic preview.',
      },
      {
        title: 'Cloud DMA',
        subtitle: 'Separate hardware path.',
        desc:
          'Memory read at a distance—different cost and cabling than overlays.',
        bullets: ['Buy this when you want a hardware path, not the on-PC hacks loader.'],
        tags: ['Cloud DMA', 'memory read', 'hardware'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-3',
        image: EXTRA_WEBP.r7,
        imageAlt: 'Separate machine / bridge path concept — confirm gear on the listing.',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why read here first',
    title: 'Why hunt-cheat.com is the page to read first',
    subtitle:
      'Four Hunt Showdown products, each with a Buy button that opens the matching checkout. Read the page, then buy the hacks, the spoofer, skin changer, or Cloud DMA without hunting a random shop.',
    usLabel: 'This site',
    otherLabel: 'Typical hype',
    rows: [
      {
        title: 'No detection promises',
        desc: 'We don’t use “undetected,” “safe,” or anti-cheat bypass language.',
      },
      {
        title: 'Affiliate clarity',
        desc: 'Buy buttons are sponsored links to a partner checkout.',
      },
      {
        title: 'Four fixed destinations',
        desc: 'Hacks, spoofer, skin changer, Cloud DMA — mapped one-to-one.',
      },
      {
        title: 'Blogs + forums',
        desc: 'Fifteen Hunt Showdown guides plus forum threads that point back to one of the four products.',
      },
      {
        title: 'Honest limitations',
        desc: 'Compatibility and availability change — we say so repeatedly.',
      },
      {
        title: 'Settings discipline',
        desc: 'Slow changes beat “max everything” profiles that feel good for ten minutes.',
      },
    ],
    metrics: [
      { value: '15', title: 'Blogs', desc: 'Guides, glossaries, and checklists.' },
      { value: '36', title: 'Forum threads', desc: 'Reader questions and team answers.' },
      { value: '5', title: 'Products', desc: 'Hacks, spoofer, Skin changer, Cloud DMA.' },
    ],
  },
  setup: {
    eyebrow: 'Flow',
    titleLead: 'Pick the hack, open checkout in',
    titleHighlight: 'three steps',
    intro:
      'Choose ESP, aim assist, or wallhack-style hacks — or the spoofer, skin changer, or Cloud DMA — then hit Buy. The partner page is the live price and feature list.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Read FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Skim blogs',
        desc: 'Read what ESP, aim assist, and wallhack-style tools actually do, then pick the card that matches.',
      },
      {
        step: 'Step 2',
        title: 'Pick one offer',
        desc: 'Open a product detail page — each has FAQs and related blogs.',
      },
      {
        step: 'Step 3',
        title: 'Buy on checkout',
        desc: 'Use Buy (sponsored, same tab). Save confirmation email and docs.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform',
    title: 'Built for PC readers',
    subtitle:
      'Confirm OS and hardware on each listing — we keep site copy generic on purpose.',
    items: [
      'Windows 10/11 64-bit (verify on listing)',
      "The game's publisher / Hunt Showdown client updates",
      'Checkout documentation',
      'Affiliate support channels',
      'Optional DMA gear',
      'Forum search',
      'Blogs index',
      'Risk disclosure in footer',
    ],
  },
  cheats: {
    eyebrow: 'Single bundle',
    title: 'Hunt: Showdown hacks (ESP · aim assist · wallhack-style)',
    subtitle:
      'One card with the same price as the other three — details stay on the affiliate listing.',
    viewAll: 'View product',
    explore: 'Details',
    items: [],
  },
  products: {
    eyebrow: 'Products',
    title: 'Four Hunt: Showdown offers',
    subtitle:
      'Hacks, HWID spoofer, Skin changer, and Cloud DMA — each card on hunt-cheat.com opens its own page, then Buy goes to checkout.',
    viewAll: 'View catalog',
    get: 'Get',
    explore: 'Explore',
    items: [],
  },
  blog: {
    eyebrow: 'Blogs',
    title: 'Hunt Showdown hack guides',
    subtitle:
      'Hunt: Showdown aimbot, ESP, wallhack, HWID spoofer, skin changer, and Cloud DMA — written for shoppers, not hype.',
    heroEyebrow: '2026 · Hunt: Showdown',
    heroTitle: 'Hunt Showdown hack guides &',
    heroHighlight: 'buying topics',
    heroCopy:
      'Jump straight into what people search before checkout — aimbot tuning, ESP setup, wallhack readability, HWID spoofer basics, skin changer scope, DMA tradeoffs, and a buy checklist.',
    hooks: [
      {
        keyword: 'Hunt: Showdown hacks',
        hook: 'How ESP, aim assist, and wallhack-style tools differ on PC.',
        href: '/blogs/hunt-showdown-cheat-features/',
        icon: 'crosshair',
      },
      {
        keyword: 'Hunt Showdown aimbot settings',
        hook: 'Fix missed shots, over-aim, and smoothing without guessing.',
        href: '/blogs/hunt-showdown-aimbot-guide/',
        icon: 'softAim',
      },
      {
        keyword: 'Hunt Showdown ESP setup',
        hook: 'Cut overlay clutter and keep callouts readable in Hunt Showdown multiplayer lobbies.',
        href: '/blogs/hunt-showdown-esp-guide/',
        icon: 'featureEsp',
      },
      {
        keyword: 'Hunt Showdown wallhack config',
        hook: 'Line thickness and contrast when the map is bright or dark.',
        href: '/blogs/hunt-showdown-wallhack-radar/',
        icon: 'mapHack',
      },
      {
        keyword: 'Buy Hunt Showdown hacks',
        hook: 'Payment safety, affiliate checkout, and terms risk in one list.',
        href: '/blogs/best-hunt-showdown-cheat/',
        icon: 'acqCheck',
      },
      {
        keyword: 'Hunt Showdown HWID spoofer',
        hook: 'When identifier tooling comes up — and what it is not.',
        href: '/blogs/hunt-showdown-hwid-spoofer/',
        icon: 'shieldCheck',
      },
      {
        keyword: 'Hunt Showdown skin changer',
        hook: 'Camos and cosmetics only — separate from combat modules.',
        href: '/blogs/hunt-showdown-skin-changer/',
        icon: 'cosmetic',
      },
      {
        keyword: 'Cloud DMA Hunt Showdown',
        hook: 'Memory-read path vs local overlays — latency and cost.',
        href: '/blogs/hunt-showdown-cloud-dma/',
        icon: 'layers',
      },
    ],
    latestTitle: 'All Hunt Showdown guides',
    latestSubtitle: 'Filter by topic or sort by date and reading length.',
    filterAll: 'All topics',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No blogs match this filter.',
    viewAll: 'View all blogs',
    read: 'Read',
    items: blogItems,
  },
  toolkit: {
    eyebrow: 'Reading paths',
    title: 'Pick your lane',
    subtitle:
      'Match the article series to what you are buying — software overlays, skin changer cosmetics, or DMA hardware.',
    items: [
      {
        num: '01',
        label: 'Start',
        title: 'How hacks work',
        desc: '[Technical primer](/blogs/hunt-showdown-cheat-features/) without vendor jargon.',
      },
      {
        num: '02',
        label: 'Terms',
        title: 'ESP vs aim vs wallhack',
        desc: '[Disambiguation](/blogs/hunt-showdown-cheat-comparison/) before comparing listings.',
      },
      {
        num: '03',
        label: 'Buy',
        title: 'Checklist',
        desc: '[Questions to ask](/blogs/best-hunt-showdown-cheat/) before paying.',
      },
      {
        num: '04',
        label: 'Tune',
        title: 'Settings',
        desc: '[Slider vocabulary](/blogs/hunt-showdown-cheat-features/) to avoid thrash.',
      },
      {
        num: '05',
        label: 'Hardware',
        title: 'HWID spoofer',
        desc: '[Definition](/blogs/hunt-showdown-hwid-spoofer/) plus spoofer product page.',
      },
      {
        num: '06',
        label: 'DMA',
        title: 'Cloud path',
        desc: '[DMA intro](/blogs/hunt-showdown-cloud-dma/) and tradeoff article.',
      },
    ],
  },
  workflow: {
    eyebrow: 'Workflow',
    badge: '4 steps',
    titleBefore: 'From reading to',
    titleHighlight: 'checkout',
    subtitle: 'Pause on each step—rushing configuration wastes money and time.',
    ctaLabel: 'Open products',
    ctaHref: productBase,
    ctaSecondary: 'Community Q&A',
    ctaSecondaryHref: '/forum/',
    items: [
      {
        num: '01',
        phase: 'Read',
        title: 'Blogs first',
        desc: 'Especially risk and vocabulary pieces linked from the home page.',
      },
      {
        num: '02',
        phase: 'Compare',
        title: 'Pick one product',
        desc: 'Hacks vs spoofer vs skin changer vs Cloud DMA — different jobs.',
      },
      {
        num: '03',
        phase: 'Purchase',
        title: 'Affiliate checkout',
        desc: 'We may earn a commission — disclosure in footer.',
      },
      {
        num: '04',
        phase: 'After',
        title: 'Organize docs',
        desc: 'Save emails, versions, and uninstall notes in one folder.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Things players overlook',
    items: [
      {
        num: '01',
        title: 'Patch cadence',
        desc: 'Expect friction after seasons — vanilla night is valid.',
      },
      {
        num: '02',
        title: 'Account risk',
        desc: 'Terms of service still apply — no outcome guarantees.',
      },
      {
        num: '03',
        title: 'Forum tone',
        desc: "Forum posts on this domain discuss our four Hunt Showdown offers. They are not live publisher support tickets.",
      },
    ],
  },
  support: {
    eyebrow: 'Help',
    title: 'Support & resources',
    subtitle:
      'Orders are finished on the partner checkout. hunt-cheat.com support only covers this website: the four product pages, blogs, and forums.',
    channels: [
      {
        icon: 'navProducts',
        title: 'Browse products',
        desc: 'Product cards use Buy now — each opens the MOIZ checkout redirect for that listing.',
        linkLabel: 'Open catalog',
        href: productBase,
      },
      {
        icon: 'navFaq',
        title: 'FAQ',
        desc: 'Risk, affiliate disclosure, and definitions.',
        linkLabel: 'Read FAQ',
        href: '/faq/',
      },
      {
        icon: 'navBlog',
        title: 'Blogs',
        desc: 'Long-form explainers — start with the featured article.',
        linkLabel: 'Browse setup guides',
        href: '/blogs/',
      },
      {
        icon: 'messageCircle',
        title: 'Forum',
        desc: 'Search threads before asking in email.',
        linkLabel: 'Open community threads',
        href: '/forum/',
      },
    ],
    ticketTitle: 'If you email support',
    ticketItems: [
      { title: 'Offer name', desc: 'Which of the four products (hacks, spoofer, skin changer, DMA).' },
      { title: 'What you already tried', desc: 'Article or forum links you followed.' },
      { title: 'No payment disputes here', desc: 'We do not process cards — use checkout support for billing.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Risk, affiliates, and definitions',
    subtitle:
      'Third-party tools may violate Hunt: Showdown terms and cause account restrictions. No detection or safety guarantees.',
    items: [
      { num: '01', q: 'Are Buy links affiliate?', a: 'Yes — sponsored outbound links; see Affiliate Disclosure.' },
      { num: '02', q: 'Do you claim tools are undetected?', a: 'No. We avoid stealth and bypass language entirely.' },
      { num: '03', q: 'Where are the four products?', a: '/products/ lists hacks, spoofer, Skin changer, and Cloud DMA.' },
    ],
  },
  reviews: {
    eyebrow: 'Reader notes',
    title: 'Checkout experiences',
    subtitle:
      'Short buyer notes shared with permission—lightly edited for spelling only. Star ratings reflect their checkout and setup experience, not guaranteed in-game outcomes.',
    emptyTitle: 'No published reviews yet',
    emptyBody:
      'hunt-cheat.com does not invent star ratings. Open a product and use Buy when you are ready to check out.',
    permissionNote:
      'Responses from hunt-cheat.com are informational—always follow the product page and vendor instructions.',
  },
  footer: {
    tagline: 'Hunt: Showdown hacks — ESP, aim assist, wallhack-style, HWID, skin changer, DMA. Affiliate links.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Home overview', ariaLabel: 'Home', scrollTarget: 'features' },
      { href: productBase, label: 'Products', ariaLabel: 'Products' },
      { href: '/blogs/', label: 'Blogs', ariaLabel: 'Blogs' },
      { href: '/forum/', label: 'Forum', ariaLabel: 'Forum' },
      { href: '/faq/', label: 'FAQ', ariaLabel: 'FAQ' },
      { href: '/affiliate-disclosure/', label: 'Affiliate Disclosure', ariaLabel: 'Affiliate Disclosure' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
    affiliateNote:
      'Buy buttons are sponsored affiliate links: we may earn a commission when you complete checkout on the partner site.',
    riskNote:
      'Third-party tools can breach game terms — account restrictions are possible. Content here is informational, not a product warranty.',
  },
  legalPages: {
    affiliateDisclosure: {
      title: 'Affiliate Disclosure',
      description:
        'How sponsored Buy links on hunt-cheat.com work and how we are compensated.',
      sections: [
        {
          heading: 'Sponsored outbound links',
          paragraphs: [
            'This site lists four Hunt: Showdown related offers. Buy buttons on product cards and in the header open a third-party checkout in a new browser tab.',
            'Those links are affiliate or sponsored links: if you complete a qualifying purchase, we may receive a commission at no extra cost to you.',
          ],
        },
        {
          heading: 'Who handles orders',
          paragraphs: [
            'Checkout, payment, delivery, refunds, and support are handled entirely by the partner site. hunt-cheat.com does not process your payment or access your order details.',
          ],
        },
        {
          heading: 'Editorial independence',
          paragraphs: [
            'Blogs and forum threads are written for general education. They are not personalized advice and can change when the game or listings change.',
          ],
        },
        {
          heading: 'Price and availability',
          paragraphs: [
            'Commissions do not change the checkout price shown on the partner site. Listings, features, and refund rules can change without notice on hunt-cheat.com.',
            'If a Buy link fails, use the product page path from the nav catalog and try again later — we do not host the cart.',
          ],
        },
        {
          heading: 'Questions about this affiliate disclosure',
          paragraphs: [
            'This page summarizes how sponsored links work on hunt-cheat.com. It is not tax or legal advice; ask your advisor if you need formal disclosures for your own site.',
          ],
        },
        {
          heading: 'Tracking and cookies on checkout',
          paragraphs: [
            'Partner checkout sites may set their own cookies or analytics when you leave hunt-cheat.com. We do not control those tools — read the vendor privacy policy on the page where you pay.',
            'Bookmark the product URL on hunt-cheat.com if you need to return after a failed payment; we cannot recover carts from affiliate dashboards.',
          ],
        },
      ],
    },
    about: {
      title: 'About this site',
      description: 'Editorial Hunt: Showdown hacks resource with affiliate purchases.',
      sections: [
        {
          heading: 'What we publish',
          paragraphs: [
            "hunt-cheat.com is an independent Hunt: Showdown catalog: one hacks offer, one HWID spoofer, one Skin changer tool, and one Cloud DMA offer, plus original guides and forums written for those four pages. We are not affiliated with the game's publisher.",
            'Game names are used descriptively; trademarks belong to their owners.',
          ],
        },
        {
          heading: 'How purchases work',
          paragraphs: [
            'Buy buttons open partner checkout in the same browser tab. We may receive a commission — see Affiliate Disclosure.',
          ],
        },
        {
          heading: 'What we do not host',
          paragraphs: [
            'hunt-cheat.com does not run game servers, key databases, or card processing. If checkout fails, email us about the website; billing disputes stay with the partner.',
          ],
        },
        {
          heading: 'Other pages on this catalog',
          paragraphs: [
            'Read the [pre-checkout hacks checklist](/blogs/best-hunt-showdown-cheat/), [site support routing](/support/), [terms of use](/terms/), and [privacy policy](/privacy/) before you pay.',
          ],
        },
        {
          heading: 'Updates and accuracy',
          paragraphs: [
            'Product blurbs on hunt-cheat.com are edited notes, not live menus. When a Hunt: Showdown patch ships, listings can change before we update an article — confirm features on checkout the day you buy.',
            'Forum threads are opinions from readers; they are not endorsements of any build or detection claim.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description: 'How hunt-cheat.com handles browsing data and contact messages.',
      sections: [
        {
          heading: 'Analytics',
          paragraphs: [
            'We may use privacy-respecting analytics to see which pages are read. You can block cookies in your browser.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            'If you email support, we retain messages only as long as needed to respond.',
          ],
        },
        {
          heading: 'What we do not collect',
          paragraphs: [
            'We do not ask for your game login, payment card number, or order details on hunt-cheat.com. Checkout happens on the partner site under that vendor’s privacy terms.',
            'Support email is used only to reply about this website — product pages, guides, forums, or your privacy questions.',
          ],
        },
        {
          heading: 'Your choices',
          paragraphs: [
            'You can block or clear cookies in your browser, use a private window, or skip analytics-heavy networks when reading Hunt Showdown hack guides.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description: 'Using hunt-cheat.com and affiliate checkout links.',
      sections: [
        {
          heading: 'Risk',
          paragraphs: [
            'Third-party software may violate game terms and lead to account restrictions. You accept that risk.',
          ],
        },
        {
          heading: 'Content',
          paragraphs: [
            'Blogs and forums are informational. Vendor listings may change without our knowledge — rely on checkout text for features.',
          ],
        },
      ],
    },
    support: {
      title: 'Support',
      description: 'Help using this site — not order fulfillment.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Open checkout',
    browseCheatsMobile: 'Buy',
    homeAria: 'Hunt Showdown Cheat home',
    checkoutAria: 'Open affiliate checkout',
    discordAria: 'Purchase Hunt: Showdown hacks',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
