import React, { useState, useEffect } from 'react';
import { BarChart3, Star, TrendingUp, Users, Calendar } from 'lucide-react';
import StarRating from './StarRating';
import { getRatingsData } from '../utils/algorand';

interface RatingData {
  rating: number;
  eventName: string;
  timestamp: Date;
}

interface RatingStats {
  averageRating: number;
  totalRatings: number;
  recentRatings: RatingData[];
  ratingDistribution: number[];
}

const ViewFeedbackPage: React.FC = () => {
  const [stats, setStats] = useState<RatingStats>({
    averageRating: 4.2,
    totalRatings: 147,
    recentRatings: [
      { rating: 5, eventName: 'Conference Presentation', timestamp: new Date('2025-01-20T10:30:00') },
      { rating: 4, eventName: 'Workshop Session', timestamp: new Date('2025-01-20T09:15:00') },
      { rating: 3, eventName: 'Team Meeting', timestamp: new Date('2025-01-19T16:45:00') },
      { rating: 5, eventName: 'Product Launch', timestamp: new Date('2025-01-19T14:20:00') },
      { rating: 4, eventName: 'Customer Service', timestamp: new Date('2025-01-19T11:30:00') },
    ],
    ratingDistribution: [2, 8, 15, 45, 77]
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadRatingsData();
  }, []);

  const loadRatingsData = async () => {
    setLoading(true);
    try {
      const data = await getRatingsData();
      if (data) {
        setStats(data);
      }
    } catch (error) {
      console.error('Error loading ratings data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4">
            Rating Analytics
          </h1>
          <p className="font-inter text-xl text-gray-300">
            Transparent feedback powered by blockchain technology
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-cyan-500/20 rounded-xl">
                <Star className="w-6 h-6 text-cyan-400" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="font-orbitron font-semibold text-2xl text-white mb-1">
              {stats.averageRating.toFixed(1)}
            </h3>
            <p className="font-inter text-gray-400">Average Rating</p>
            <div className="mt-3">
              <StarRating rating={Math.round(stats.averageRating)} onRatingChange={() => {}} readonly size="sm" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="font-orbitron font-semibold text-2xl text-white mb-1">
              {stats.totalRatings.toLocaleString()}
            </h3>
            <p className="font-inter text-gray-400">Total Ratings</p>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-500/20 rounded-xl">
                <BarChart3 className="w-6 h-6 text-green-400" />
              </div>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="font-orbitron font-semibold text-2xl text-white mb-1">
              {stats.recentRatings.length}
            </h3>
            <p className="font-inter text-gray-400">Recent Reviews</p>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-900/30 rounded-3xl p-8 mb-8">
          <h2 className="font-orbitron font-semibold text-2xl text-white mb-6">Rating Distribution</h2>
          <div className="space-y-4">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = stats.ratingDistribution[stars - 1];
              const percentage = (count / stats.totalRatings) * 100;
              
              return (
                <div key={stars} className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 w-16">
                    <span className="font-inter text-white">{stars}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </div>
                  <div className="flex-1 bg-gray-700/50 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="w-16 text-right">
                    <span className="font-inter text-gray-400">{count}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Ratings */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-900/30 rounded-3xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-orbitron font-semibold text-2xl text-white">Recent Ratings</h2>
            <button
              onClick={loadRatingsData}
              disabled={loading}
              className="px-4 py-2 bg-cyan-600/20 border border-cyan-500/30 rounded-lg text-cyan-400 font-inter hover:bg-cyan-600/30 transition-all duration-300"
            >
              {loading ? 'Loading...' : 'Refresh'}
            </button>
          </div>
          
          <div className="space-y-4">
            {stats.recentRatings.map((rating, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <StarRating rating={rating.rating} onRatingChange={() => {}} readonly size="sm" />
                  <div>
                    <p className="font-inter text-white">{rating.eventName}</p>
                    <p className="font-inter text-gray-400 text-sm">Anonymous User</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-inter text-gray-400 text-sm">
                    {formatTimeAgo(rating.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewFeedbackPage;