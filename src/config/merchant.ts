/**
 * Affiliate purchase destinations — single source of truth for MOIZ /go links.
 */
export const MERCHANT_URLS = {
  huntShowdown: 'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fhunt-showdown',
  ugc: 'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fugc',
  hwidSpoofer: 'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fhwid-spoofer',
  skinChanger: 'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fskin-changer',
  cloudDma: 'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fcloud-dma',
} as const;

export type MerchantKey = keyof typeof MERCHANT_URLS;

export const affiliateLinkAttrs = {
  target: '_blank',
  rel: 'noopener noreferrer nofollow sponsored',
} as const;

export function getMerchantUrl(key: MerchantKey): string {
  return MERCHANT_URLS[key];
}
