const HUNT_STILLS_BASE =
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/hunt/c7f7b806-cb3e-4eea-8fa1-eca85c479073';

/** Official Hunt Showdown product stills (Supabase CDN). */
export const HUNT_SHOWDOWN_VISUALS = `${HUNT_STILLS_BASE}/1793620130029-rgujql-zadeyo-huntshowdown-1-visuals.webp`;
export const HUNT_SHOWDOWN_AIMBOT = `${HUNT_STILLS_BASE}/1793620131251-lxm817-zadeyo-huntshowdown-2-aimbot.webp`;
export const HUNT_SHOWDOWN_MISC = `${HUNT_STILLS_BASE}/1793620132497-87s6ot-zadeyo-huntshowdown-3-misc.webp`;

export const HERO_VIDEO_SRC =
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/hunt/ab1988f6-6996-419f-9473-af87100f8454/1793263927853-srxzm0-huntshown-down-high-quality.mp4';

export const HERO_VIDEO_POSTER = HUNT_SHOWDOWN_VISUALS;

export const BLOG_IMAGES = [
  HUNT_SHOWDOWN_VISUALS,
  HUNT_SHOWDOWN_AIMBOT,
  HUNT_SHOWDOWN_MISC,
] as const;

export function huntMediaImage(index: number): string {
  return BLOG_IMAGES[Math.abs(index) % BLOG_IMAGES.length] ?? HUNT_SHOWDOWN_VISUALS;
}

/** Homepage feature bento + shared stills. */
export const SITE_WEBP = {
  zadeyoVisuals: HUNT_SHOWDOWN_VISUALS,
  zadeyoAimbot: HUNT_SHOWDOWN_AIMBOT,
  levoVisuals: HUNT_SHOWDOWN_VISUALS,
  levoMisc: HUNT_SHOWDOWN_MISC,
  zadeyoMisc: HUNT_SHOWDOWN_MISC,
} as const;

export const EXTRA_WEBP = {
  r7: HUNT_SHOWDOWN_AIMBOT,
} as const;

export const HERO_LCP_IMAGE = HUNT_SHOWDOWN_VISUALS;
