// Simplified rating system without wallet requirement
// Note: This maintains the blockchain concept while removing unnecessary complexity

import { saveRating, calculateStats } from './storage';

/**
 * Submit rating (simplified without wallet requirement)
 */
export const submitRating = async (rating: number, eventName: string): Promise<boolean> => {
  try {
    // Simulate processing time for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real blockchain implementation, this would:
    // 1. Create a transaction with the rating data
    // 2. Submit to the Algorand network
    // 3. Wait for confirmation
    
    // For now, we'll simulate a high success rate
    const success = Math.random() > 0.05; // 95% success rate
    
    if (success) {
      // Save rating to local storage when submission succeeds
      saveRating(rating, eventName);
      console.log('Rating submitted:', { rating, eventName, timestamp: new Date() });
    }
    
    return success;
    
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