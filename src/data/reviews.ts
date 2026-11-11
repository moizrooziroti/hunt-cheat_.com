import reviewsJson from '../../data/reviews.json';

export interface SiteReview {
  name: string;
  quote: string;
  date?: string;
  rating?: number;
}

export const reviews: SiteReview[] = reviewsJson as SiteReview[];
