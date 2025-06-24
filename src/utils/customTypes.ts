
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

export type RatingStats = {
  averageRating: number;
  totalRatings: number;
  recentRatings: RatingData[];
  ratingDistribution: number[];
}