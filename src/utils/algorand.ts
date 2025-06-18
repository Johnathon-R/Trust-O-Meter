// Simplified rating system without wallet requirement
// Note: This maintains the blockchain concept while removing unnecessary complexity

import { saveRating, calculateStats } from './storage';

/**
 * Submit rating (simplified without wallet requirement)
 */
export const submitRating = async (rating: number, eventName: string): Promise<boolean> => {
  try {
    // Simulate blockchain submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Save locally for UI use
    saveRating(rating, eventName);
    return true;
  } catch (error) {
    console.error('Rating submission error:', error);
    return false;
  }
};

/**
 * Get ratings data from local storage
 */
export const getRatingsData = async (): Promise<any> => {
  try {
    // Simulate network delay for realistic feel
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return actual stored ratings data
    return calculateStats();
    
  } catch (error) {
    console.error('Error fetching ratings data:', error);
    return null;
  }
};