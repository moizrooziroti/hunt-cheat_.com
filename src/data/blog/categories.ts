/** Blog index filter labels — must match `BlogPostFull.tag` values. */
export const BLOG_FILTER_CATEGORIES = [
  'Buying Guides',
  'Features',
  'Comparisons',
  'Tutorials',
  'PC Optimization',
  'Updates',
  'Safety & Compatibility',
] as const;

export type BlogFilterCategory = (typeof BLOG_FILTER_CATEGORIES)[number];
