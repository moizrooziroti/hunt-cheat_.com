import { getMerchantUrl, MERCHANT_URLS, type MerchantKey } from './merchant';
import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/**
 * External checkout URLs — server-side redirect targets for /go/* paths.
 */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = MerchantKey;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  huntShowdown: 'hunt-showdown',
  ugc: 'ugc',
  hwidSpoofer: 'hwid-spoofer',
  skinChanger: 'skin-changer',
  cloudDma: 'cloud-dma',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Internal checkout path shown to users (hides external URL on hover in legacy CTAs). */
export function checkoutPath(product: CheckoutProduct = 'huntShowdown'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

export const PRIMARY_CHECKOUT_PATH = checkoutPath('huntShowdown');
export const PRIMARY_BUY_URL = getMerchantUrl('huntShowdown');

/** Map product slug → affiliate checkout URL */
export function buyUrlForSlug(slug: string): string {
  switch (slug) {
    case 'hunt-showdown-cheat':
      return getMerchantUrl('huntShowdown');
    case 'ugc-tools':
      return getMerchantUrl('ugc');
    case 'hwid-spoofer':
      return getMerchantUrl('hwidSpoofer');
    case 'skin-changer':
      return getMerchantUrl('skinChanger');
    case 'cloud-dma':
      return getMerchantUrl('cloudDma');
    default:
      return PRIMARY_BUY_URL;
  }
}

/** Map product slug → internal /go/ redirect (blog and header CTAs). */
export function checkoutForSlug(slug: string): string {
  switch (slug) {
    case 'hunt-showdown-cheat':
      return checkoutPath('huntShowdown');
    case 'ugc-tools':
      return checkoutPath('ugc');
    case 'hwid-spoofer':
      return checkoutPath('hwidSpoofer');
    case 'skin-changer':
      return checkoutPath('skinChanger');
    case 'cloud-dma':
      return checkoutPath('cloudDma');
    default:
      return PRIMARY_CHECKOUT_PATH;
  }
}

/** Resolve blog CTA or legacy href values to checkout paths or merchant URLs. */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(MERCHANT_URLS) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}&`)) {
      return checkoutPath(product);
    }
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return checkoutPath(product);
    }
  }

  if (href.includes('%2Fproducts%2Fhunt-showdown') || href.includes('/products/hunt-showdown')) {
    return checkoutPath('huntShowdown');
  }
  if (href.includes('%2Fproducts%2Fcloud-dma') || href.includes('/products/cloud-dma')) {
    return checkoutPath('cloudDma');
  }
  if (href.includes('%2Fproducts%2Fskin-changer') || href.includes('/products/skin-changer')) {
    return checkoutPath('skinChanger');
  }
  if (href.includes('%2Fproducts%2Fhwid-spoofer') || href.includes('/products/hwid-spoofer')) {
    return checkoutPath('hwidSpoofer');
  }
  if (href.includes('%2Fproducts%2Fugc') || href.includes('/products/ugc')) {
    return checkoutPath('ugc');
  }

  return href;
}
