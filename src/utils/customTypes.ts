
export type Location = {
  city: string;
  region?: string;
  country?: string;
};

export type RatingData = {
  id: string;
  rating: number;
  eventName: string;
  timestamp: Date;
}

export interface RatingStats {
  averageRating: number;
  totalRatings: number;
  recentRatings: RatingData[];
  ratingDistribution: number[];
}