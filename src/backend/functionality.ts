import { RatingData, RatingStats } from "../utils/customTypes";
import { searchRatings } from "./algorand";

/**
 * @brief Calculate the statistics for the ratings.
 * @returns 
 */
export const calculateStats = async (): Promise<RatingStats> => {
  const ratings: RatingData[] = await searchRatings();
  
  if (ratings.length === 0) {
    return {
      averageRating: 0,
      totalRatings: 0,
      recentRatings: [],
      ratingDistribution: [0, 0, 0, 0, 0]
    };
  }

  // Calculate average rating - fixed calculation
  const totalScore = ratings.reduce((sum, rating) => sum + rating.rating, 0);
  const averageRating = totalScore / ratings.length;

  // Calculate rating distribution
  const distribution = [0, 0, 0, 0, 0];
  ratings.forEach(rating => {
    const ratingIndex = Math.min(Math.max(Math.floor(rating.rating) - 1, 0), 4);
    distribution[ratingIndex]++;
  });

  // Get recent ratings (sorted by timestamp, most recent first)
  const recentRatings = ratings
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, 10);

  return {
    averageRating,
    totalRatings: ratings.length,
    recentRatings,
    ratingDistribution: distribution
  };
};

/**
 * @brief Get ratings data from local storage
 * @returns 
 */
export const getRatingsData = async (): Promise<RatingStats> => {
  try {
    // Return actual stored ratings data
    return calculateStats();
    
  } catch (error) {
    console.error('Error fetching ratings data:', error);
    return {
      averageRating: 0,
      totalRatings: 0,
      recentRatings: [],
      ratingDistribution: [],
    };
  }
};

/**
 * Export ratings data as JSON
 */
export const exportRatings = (): string => {
  const ratings = getRatingsData();
  return JSON.stringify(ratings, null, 2);
};