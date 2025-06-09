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
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4">
            Submit Your Rating
          </h1>
          <p className="font-inter text-xl text-gray-300">
            Rate your experience on the Algorand blockchain
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-900/30 rounded-3xl p-8 shadow-2xl shadow-cyan-500/5">
          {/* Rating Section */}
          <div className="mb-8">
            <label className="font-orbitron font-semibold text-lg text-white mb-4 block">
              Your Rating
            </label>
            <StarRating rating={rating} onRatingChange={setRating} />
            <p className="font-inter text-gray-400 mt-2 text-center">
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
            <label className="font-orbitron font-semibold text-lg text-white mb-4 block">
              Event Name
            </label>
            <div className="space-y-4">
              <select 
                className="w-full bg-gray-700/50 border border-cyan-900/30 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
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
                  className="w-full bg-gray-700/50 border border-cyan-900/30 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
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
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-orbitron font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 flex items-center justify-center space-x-2"
              >
                <Wallet className="w-5 h-5" />
                <span>Connect Wallet</span>
              </button>
            ) : (
              <div className="flex items-center justify-center space-x-2 text-green-400 font-inter">
                <Wallet className="w-5 h-5" />
                <span>Wallet Connected</span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmitRating}
            disabled={isSubmitting || !walletConnected || rating === 0}
            className={`w-full py-4 px-6 rounded-xl font-orbitron font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
              isSubmitting || !walletConnected || rating === 0
                ? 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-[1.02]'
            }`}
          >
            <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
            <span>
              {isSubmitting ? 'Submitting to Blockchain...' : 'Submit Rating'}
            </span>
          </button>

          {/* Message Display */}
          {message && (
            <div className={`mt-6 p-4 rounded-xl flex items-center space-x-2 ${
              message.type === 'success' ? 'bg-green-900/30 border border-green-500/30 text-green-400' :
              message.type === 'error' ? 'bg-red-900/30 border border-red-500/30 text-red-400' :
              'bg-blue-900/30 border border-blue-500/30 text-blue-400'
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