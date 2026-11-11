import type { ProductPage } from '../data/products';

export interface ProductSeoEntry {
  keyword: string;
  description: string;
}

export const PRODUCT_SEO: Record<string, ProductSeoEntry> = {
  'hunt-showdown-cheat': {
    keyword: 'Hunt Showdown Cheat',
    description:
      'Hunt: Showdown cheat for PC with hunter ESP, aim assistance, and raid radar — live module list on affiliate checkout at hunt-cheat.com.',
  },
  'ugc-tools': {
    keyword: 'Hunt Showdown UGC Tools',
    description:
      'UGC recovery and account tooling for Hunt: Showdown players — scope is defined on the partner listing, not combat overlays.',
  },
  'hwid-spoofer': {
    keyword: 'Hunt Showdown HWID Spoofer',
    description:
      'HWID spoofer utility for Hunt: Showdown hardware checks — identifier scope on checkout, separate from the main cheat menu.',
  },
  'skin-changer': {
    keyword: 'Hunt Showdown Skin Changer',
    description:
      'Cosmetic skin changer for Hunt: Showdown hunters and gear previews — cosmetic-only, separate from ESP modules.',
  },
  'cloud-dma': {
    keyword: 'Hunt Showdown Cloud DMA',
    description:
      'Cloud DMA path for Hunt: Showdown when the listing matches external read hardware — compare with software overlays first.',
  },
};

export function getProductSeo(product: ProductPage): { title: string; description: string } {
  const entry = PRODUCT_SEO[product.slug];
  if (!entry) {
    return { title: product.title, description: product.desc };
  }
  return { title: entry.keyword, description: entry.description };
}
