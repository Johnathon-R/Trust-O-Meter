import React, { useState, useEffect } from 'react';
import { BarChart3, Star, TrendingUp, Users, Calendar, RefreshCw, Sparkles } from 'lucide-react';
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-4">
            <BarChart3 className="w-8 h-8 text-blue-400 mr-2" />
            <h1 className="font-inter font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Rating Analytics
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-400 ml-2" />
          </div>
          <p className="font-inter text-lg text-gray-300">
            Transparent feedback powered by blockchain technology
          </p>
        </div>

        {/* Stats Overview */}
        <div className={`grid md:grid-cols-3 gap-6 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-inter font-bold text-3xl text-white mb-1">
                {stats.averageRating.toFixed(1)}
              </h3>
              <p className="font-inter text-gray-300 mb-3">Average Rating</p>
              <StarRating rating={Math.round(stats.averageRating)} onRatingChange={() => {}} readonly size="sm" />
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-inter font-bold text-3xl text-white mb-1">
                {stats.totalRatings.toLocaleString()}
              </h3>
              <p className="font-inter text-gray-300">Total Ratings</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="font-inter font-bold text-3xl text-white mb-1">
                {stats.recentRatings.length}
              </h3>
              <p className="font-inter text-gray-300">Recent Reviews</p>
            </div>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className={`group relative mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <h2 className="font-inter font-bold text-2xl text-white mb-6 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-blue-400" />
              Rating Distribution
            </h2>
            <div className="space-y-4">
              {[5, 4, 3, 2, 1].map((stars) => {
                const count = stats.ratingDistribution[stars - 1];
                const percentage = (count / stats.totalRatings) * 100;
                
                return (
                  <div key={stars} className="flex items-center space-x-4 group/bar hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-2 w-16">
                      <span className="font-inter text-white font-semibold">{stars}</span>
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="flex-1 bg-white/10 rounded-full h-4 overflow-hidden backdrop-blur-lg">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 group-hover/bar:from-blue-400 group-hover/bar:to-purple-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="w-16 text-right">
                      <span className="font-inter text-gray-300 font-semibold">{count}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Recent Ratings */}
        <div className={`group relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-inter font-bold text-2xl text-white flex items-center gap-2">
                <Calendar className="w-6 h-6 text-purple-400" />
                Recent Ratings
              </h2>
              <button
                onClick={loadRatingsData}
                disabled={loading}
                className="group/btn flex items-center space-x-2 px-4 py-2 bg-white/10 text-blue-400 rounded-xl hover:bg-white/20 transition-all duration-300 disabled:opacity-50 hover:scale-105"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : 'group-hover/btn:rotate-180'} transition-transform duration-300`} />
                <span className="font-inter font-medium">Refresh</span>
              </button>
            </div>
            
            <div className="space-y-4">
              {stats.recentRatings.map((rating, index) => (
                <div 
                  key={index}
                  className="group/item flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="group-hover/item:scale-110 transition-transform duration-300">
                      <StarRating rating={rating.rating} onRatingChange={() => {}} readonly size="sm" />
                    </div>
                    <div>
                      <p className="font-inter font-semibold text-white">{rating.eventName}</p>
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
    </div>
  );
};

export default ViewFeedbackPage;