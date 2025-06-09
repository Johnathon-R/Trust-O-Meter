// Local storage utilities for persisting ratings data
export interface RatingData {
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

const STORAGE_KEY = 'trust-o-meter-ratings';

/**
 * Save a new rating to local storage
 */
export const saveRating = (rating: number, eventName: string): RatingData => {
  const newRating: RatingData = {
    id: generateId(),
    rating,
    eventName,
    timestamp: new Date()
  };

  const existingRatings = getRatings();
  const updatedRatings = [newRating, ...existingRatings];
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRatings));
  return newRating;
};

/**
 * Get all ratings from local storage
 */
export const getRatings = (): RatingData[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    
    const ratings = JSON.parse(stored);
    // Convert timestamp strings back to Date objects
    return ratings.map((rating: any) => ({
      ...rating,
      timestamp: new Date(rating.timestamp)
    }));
  } catch (error) {
    console.error('Error loading ratings from storage:', error);
    return [];
  }
};

/**
 * Calculate statistics from stored ratings
 */
export const calculateStats = (): RatingStats => {
  const ratings = getRatings();
  
  if (ratings.length === 0) {
    return {
      averageRating: 0,
      totalRatings: 0,
      recentRatings: [],
      ratingDistribution: [0, 0, 0, 0, 0]
    };
  }

  // Calculate average rating
  const totalScore = ratings.reduce((sum, rating) => sum + rating.rating, 0);
  const averageRating = totalScore / ratings.length;

  // Calculate rating distribution
  const distribution = [0, 0, 0, 0, 0];
  ratings.forEach(rating => {
    distribution[rating.rating - 1]++;
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
 * Clear all ratings from storage
 */
export const clearAllRatings = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

/**
 * Generate a unique ID for ratings
 */
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

/**
 * Export ratings data as JSON
 */
export const exportRatings = (): string => {
  const ratings = getRatings();
  return JSON.stringify(ratings, null, 2);
};