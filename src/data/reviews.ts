import reviewsJson from '../../data/reviews.json';

export interface SiteReviewReply {
  author: string;
  body: string;
  date?: string;
}

export interface SiteReview {
  name: string;
  quote: string;
  date: string;
  rating: number;
  product?: string;
  reply?: SiteReviewReply;
}

export const reviews: SiteReview[] = reviewsJson as SiteReview[];
