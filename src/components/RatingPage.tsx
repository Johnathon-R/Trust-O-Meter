import React, { useState } from 'react';
import { Star, Send, Wallet, AlertCircle } from 'lucide-react';
import StarRating from './StarRating';
import { connectWallet, submitRating } from '../utils/algorand';

const RatingPage: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [eventName, setEventName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [walletConnected, setWalletConnected] = useState<boolean>(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);

  const eventOptions = [
    'Conference Presentation',
    'Workshop Session',
    'Product Launch',
    'Team Meeting',
    'Customer Service',
    'Event Organization',
    'Custom Event'
  ];

  const handleConnectWallet = async () => {
    try {
      setMessage({ type: 'info', text: 'Connecting to wallet...' });
      const success = await connectWallet();
      setWalletConnected(success);
      if (success) {
        setMessage({ type: 'success', text: 'Wallet connected successfully!' });
      } else {
        setMessage({ type: 'error', text: 'Failed to connect wallet. Please try again.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error connecting wallet. Please make sure Pera Wallet or AlgoSigner is installed.' });
    }
  };

  const handleSubmitRating = async () => {
    if (rating === 0) {
      setMessage({ type: 'error', text: 'Please select a rating before submitting.' });
      return;
    }

    if (!eventName.trim()) {
      setMessage({ type: 'error', text: 'Please enter an event name.' });
      return;
    }

    if (!walletConnected) {
      setMessage({ type: 'error', text: 'Please connect your wallet first.' });
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: 'info', text: 'Submitting rating to Algorand blockchain...' });

    try {
      const success = await submitRating(rating, eventName);
      if (success) {
        setMessage({ type: 'success', text: 'Rating submitted successfully to the blockchain!' });
        setRating(0);
        setEventName('');
      } else {
        setMessage({ type: 'error', text: 'Failed to submit rating. Please try again.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error submitting rating. Please check your wallet and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-inter font-bold text-3xl text-gray-900 mb-2">
            Submit Your Rating
          </h1>
          <p className="font-inter text-lg text-gray-600">
            Rate your experience on the Algorand blockchain
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {/* Rating Section */}
          <div className="mb-8">
            <label className="font-inter font-semibold text-lg text-gray-900 mb-4 block">
              Your Rating
            </label>
            <StarRating rating={rating} onRatingChange={setRating} />
            <p className="font-inter text-gray-500 mt-2 text-center">
              {rating === 0 && 'Select a rating'}
              {rating === 1 && 'Poor experience'}
              {rating === 2 && 'Below average'}
              {rating === 3 && 'Average experience'}
              {rating === 4 && 'Good experience'}
              {rating === 5 && 'Excellent experience'}
            </p>
          </div>

          {/* Event Name Section */}
          <div className="mb-8">
            <label className="font-inter font-semibold text-lg text-gray-900 mb-4 block">
              Event Name
            </label>
            <div className="space-y-4">
              <select 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              >
                <option value="">Select an event type...</option>
                {eventOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              
              {eventName === 'Custom Event' && (
                <input
                  type="text"
                  placeholder="Enter custom event name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => setEventName(e.target.value)}
                />
              )}
            </div>
          </div>

          {/* Wallet Connection */}
          <div className="mb-8">
            {!walletConnected ? (
              <button
                onClick={handleConnectWallet}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-inter font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Wallet className="w-5 h-5" />
                <span>Connect Wallet</span>
              </button>
            ) : (
              <div className="flex items-center justify-center space-x-2 text-green-600 font-inter">
                <Wallet className="w-5 h-5" />
                <span>Wallet Connected</span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmitRating}
            disabled={isSubmitting || !walletConnected || rating === 0}
            className={`w-full py-3 px-6 rounded-lg font-inter font-medium transition-colors duration-200 flex items-center justify-center space-x-2 ${
              isSubmitting || !walletConnected || rating === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            <Send className="w-5 h-5" />
            <span>
              {isSubmitting ? 'Submitting...' : 'Submit Rating'}
            </span>
          </button>

          {/* Message Display */}
          {message && (
            <div className={`mt-6 p-4 rounded-lg flex items-center space-x-2 ${
              message.type === 'success' ? 'bg-green-50 border border-green-200 text-green-700' :
              message.type === 'error' ? 'bg-red-50 border border-red-200 text-red-700' :
              'bg-blue-50 border border-blue-200 text-blue-700'
            }`}>
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="font-inter">{message.text}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RatingPage;