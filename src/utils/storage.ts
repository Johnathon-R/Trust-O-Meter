// Local storage utilities for persisting ratings data
export type RatingData = {
  id: string;
  rating: number;
  eventName: string;
  timestamp: Date;
  includeInAnalytics?: boolean; // Add this field to track analytics preference
}

export interface RatingStats {
  averageRating: number;
  totalRatings: number;
  recentRatings: RatingData[];
  ratingDistribution: number[];
}

const STORAGE_KEY = 'trust-o-meter-ratings';
const SETTINGS_KEY = 'trust-o-meter-settings';

/**
 * Get current settings from localStorage
 */
export const getSettings = () => {
  try {
    const settings = localStorage.getItem(SETTINGS_KEY);
    return settings ? JSON.parse(settings) : { showAnalytics: true };
  } catch (error) {
    console.error('Error loading settings:', error);
    return { showAnalytics: true };
  }
};

/**
 * Save a new rating to local storage
 */
export const saveRating = (rating: number, eventName: string): RatingData => {
  const settings = getSettings();
  
  const newRating: RatingData = {
    id: generateId(),
    rating,
    eventName,
    timestamp: new Date(),
    includeInAnalytics: settings.showAnalytics ?? true
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
    // Convert timestamp strings back to Date objects and ensure includeInAnalytics exists
    return ratings.map((rating: any) => ({
      ...rating,
      timestamp: new Date(rating.timestamp),
      includeInAnalytics: rating.includeInAnalytics ?? true // Default to true for existing ratings
    }));
  } catch (error) {
    console.error('Error loading ratings from storage:', error);
    return [];
  }
};

/**
 * Get ratings that should be included in analytics
 */
export const getAnalyticsRatings = (): RatingData[] => {
  const allRatings = getRatings();
  return allRatings.filter(rating => rating.includeInAnalytics !== false);
};

/**
 * Update all existing ratings' analytics preference
 */
export const updateAnalyticsPreference = (includeInAnalytics: boolean): void => {
  const ratings = getRatings();
  const updatedRatings = ratings.map(rating => ({
    ...rating,
    includeInAnalytics
  }));
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRatings));
};

/**
 * Calculate statistics from stored ratings (respecting analytics preference)
 */
export const calculateStats = (): RatingStats => {
  const ratings = getAnalyticsRatings(); // Only use ratings that should be included in analytics
  
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