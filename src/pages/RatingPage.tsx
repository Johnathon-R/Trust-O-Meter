import React, { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import StarRating from '../components/Stars';
import { submitRating } from '../utils/algorand';
import algosdk from 'algosdk';

const RatingPage: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [eventName, setEventName] = useState<string>('');
  const [customEventName, setCustomEventName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
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

  const handleSubmitRating = async () => {
    if (rating === 0) {
      setMessage({ type: 'error', text: 'Please select a rating before submitting.' });
      return;
    }

    // Determine the final event name
    let finalEventName = eventName;
    if (eventName === 'Custom Event') {
      if (!customEventName.trim()) {
        setMessage({ type: 'error', text: 'Please enter a custom event name.' });
        return;
      }
      finalEventName = customEventName.trim();
    } else if (!eventName.trim()) {
      setMessage({ type: 'error', text: 'Please select or enter an event name.' });
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: 'info', text: 'Submitting your rating...' });

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
        setMessage({ type: 'success', text: 'Rating submitted successfully!' });
        setRating(rating);
        setEventName(eventName);
        setCustomEventName(customEventName);
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
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-inter font-bold text-3xl text-gray-900 mb-2">
            Submit Your Rating
          </h1>
          <p className="font-inter text-lg text-gray-600">
            Share your experience and help others make informed decisions
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {/* Rating Section */}
          <div className="mb-8">
            <label className="font-inter font-semibold text-lg text-gray-900 mb-4 block">
              Your Rating
            </label>
            <StarRating value={rating} onChange={setRating} />
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
                onChange={(e) => {
                  setEventName(e.target.value);
                  if (e.target.value !== 'Custom Event') {
                    setCustomEventName('');
                  }
                }}
              >
                <option value="">Select an event type...</option>
                {eventOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              
              {eventName === 'Custom Event' && (
                <input
                  type="text"
                  placeholder="Enter your custom event name"
                  value={customEventName}
                  onChange={(e) => setCustomEventName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  autoFocus
                />
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmitRating}
            disabled={isSubmitting || rating === 0}
            className={`w-full py-3 px-6 rounded-lg font-inter font-medium transition-colors duration-200 flex items-center justify-center space-x-2 ${
              isSubmitting || rating === 0
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

          {/* Info Section */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-inter font-medium text-blue-900 mb-2">How it works</h3>
            <ul className="space-y-1 text-sm text-blue-700">
              <li>• Your rating is stored securely in your browser</li>
              <li>• All submissions are completely anonymous</li>
              <li>• Data persists between sessions</li>
              <li>• View analytics on the Analytics page</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingPage;