import React, { useState, useEffect } from 'react';
import { Star, Send, AlertCircle, Sparkles } from 'lucide-react';
import StarRating from '../components/Stars';
import { submitRating } from '../utils/algorand';
import algosdk from 'algosdk';

// Create a separate component for the floating dots
const FloatingDotsBackground = React.memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        >
          <div className="w-2 h-2 bg-white rounded-full opacity-30"></div>
        </div>
      ))}
    </div>
  );
});

const RatingPage: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [eventType, setEventType] = useState<string>('');
  const [customEventName, setCustomEventName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const eventOptions = [
    'Conference Presentation',
    'Workshop Session',
    'Product Launch',
    'Team Meeting',
    'Customer Service',
    'Event Organization',
    'Custom Event'
  ];

  const handleSubmitRating = async () => {
    if (rating === 0) {
      setMessage({ type: 'error', text: 'Please select a rating before submitting.' });
      return;
    }

    // Determine the final event name
    let finalEventName = '';
    if (eventType === 'Custom Event') {
      if (!customEventName.trim()) {
        setMessage({ type: 'error', text: 'Please enter a custom event name.' });
        return;
      }
      finalEventName = customEventName.trim();
    } else if (eventType) {
      finalEventName = eventType;
    } else {
      setMessage({ type: 'error', text: 'Please select an event type or enter a custom event name.' });
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: 'info', text: 'Submitting rating to blockchain...' });

    try {
      /**
       * 
       * @brief Fake signing to simulate submission with fake account address
       *         below
       */
      const fakeAccount = algosdk.generateAccount();

      const mockSignTxn = async (txn: algosdk.Transaction): Promise<Uint8Array> => {
        return txn.signTxn(fakeAccount.sk); // Fake signing
      }

      const success = await submitRating(rating, finalEventName, fakeAccount.addr, mockSignTxn);
      if (success) {
        setMessage({ type: 'success', text: 'Rating submitted successfully to the blockchain!' });
        setRating(0);
        setEventType('');
        setCustomEventName('');
      } else {
        setMessage({ type: 'error', text: 'Failed to submit rating. Please try again.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error submitting rating. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-black py-12 px-4 relative overflow-hidden transition-all duration-500">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Floating particles - now using the memoized component */}
      <FloatingDotsBackground />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-2" />
            <h1 className="font-inter font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Submit Your Rating
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-400 ml-2" />
          </div>
          <p className="font-inter text-lg text-gray-300 dark:text-gray-400">
            Rate your experience on the Algorand blockchain
          </p>
        </div>
        <div className={`group relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 hover:bg-white/15 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            
          {/* Rating Section */}
          <div className="mb-8">
            <label className="font-inter font-semibold text-xl text-white dark:text-gray-100 mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              Your Rating
            </label>
            <div className="bg-white/5 dark:bg-gray-700/30 rounded-xl p-6 hover:bg-white/10 dark:hover:bg-gray-700/50 transition-all duration-300">
              <div className="flex justify-center scale-150">
                <StarRating value={rating} onChange={setRating} />
              </div>
              <p className="font-inter text-gray-300 dark:text-gray-400 mt-4 text-center text-lg">
                {rating === 0 && 'Select a rating'}
                {rating > 0 && rating <= 1 && '⭐ Poor experience'}
                {rating > 1 && rating <= 2 && '⭐⭐ Below average'}
                {rating > 2 && rating <= 3 && '⭐⭐⭐ Average experience'}
                {rating > 3 && rating <= 4 && '⭐⭐⭐⭐ Good experience'}
                {rating > 4 && '⭐⭐⭐⭐⭐ Excellent experience'}
              </p>
            </div>
          </div>

            {/* Event Type Section */}
            <div className="mb-8">
              <label className="font-inter font-semibold text-xl text-white dark:text-gray-100 mb-6 block">
                Event Type
              </label>
              <div className="space-y-4">
                <select 
                  className="w-full bg-white/10 dark:bg-gray-700/50 backdrop-blur-lg border border-white/30 dark:border-gray-600/50 rounded-xl px-6 py-4 text-white dark:text-gray-200 font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:bg-white/15 dark:hover:bg-gray-700/70 transition-all duration-300 hover:scale-[1.02]"
                  value={eventType}
                  onChange={(e) => {
                    setEventType(e.target.value);
                    if (e.target.value !== 'Custom Event') {
                      setCustomEventName('');
                    }
                  }}
                >
                  <option value="" className="bg-gray-800 dark:bg-gray-900 text-white">Select an event type...</option>
                  {eventOptions.map((option) => (
                    <option key={option} value={option} className="bg-gray-800 dark:bg-gray-900 text-white">{option}</option>
                  ))}
                </select>
                
                {eventType === 'Custom Event' && (
                  <input
                    type="text"
                    placeholder="Enter your custom event name"
                    value={customEventName}
                    onChange={(e) => setCustomEventName(e.target.value)}
                    className="w-full bg-white/10 dark:bg-gray-700/50 backdrop-blur-lg border border-white/30 dark:border-gray-600/50 rounded-xl px-6 py-4 text-white dark:text-gray-200 font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:bg-white/15 dark:hover:bg-gray-700/70 transition-all duration-300 hover:scale-[1.02] placeholder-gray-400 dark:placeholder-gray-500"
                    autoFocus
                  />
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmitRating}
              disabled={isSubmitting || rating === 0}
              className={`group relative w-full py-4 px-6 rounded-xl font-inter font-semibold transition-all duration-300 flex items-center justify-center space-x-2 overflow-hidden ${
                isSubmitting || rating === 0
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-[1.02] hover:shadow-lg'
              }`}
            >
              {!(isSubmitting || rating === 0) && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
              <div className="relative flex items-center gap-2">
                <Send className={`w-6 h-6 ${!(isSubmitting || rating === 0) ? 'group-hover:rotate-12' : ''} transition-transform duration-300`} />
                <span>
                  {isSubmitting ? 'Submitting...' : 'Submit Rating'}
                </span>
              </div>
            </button>

            {/* Message Display */}
            {message && (
              <div className={`mt-6 p-4 rounded-xl flex items-center space-x-3 backdrop-blur-lg border transition-all duration-300 hover:scale-[1.02] ${
                message.type === 'success' ? 'bg-green-500/10 border-green-500/30 text-green-400' :
                message.type === 'error' ? 'bg-red-500/10 border-red-500/30 text-red-400' :
                'bg-blue-500/10 border-blue-500/30 text-blue-400'
              }`}>
                <AlertCircle className="w-6 h-6 flex-shrink-0" />
                <span className="font-inter font-medium">{message.text}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingPage;