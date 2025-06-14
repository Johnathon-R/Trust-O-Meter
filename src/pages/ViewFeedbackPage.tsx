import React, { useState, useEffect } from 'react';
import { BarChart3, Star, TrendingUp, Users, Calendar, RefreshCw, Trash2 } from 'lucide-react';
import StarRating from '../components/Stars';
import { getRatingsData } from '../utils/algorand';
import { clearAllRatings, exportRatings } from '../utils/storage';

interface RatingData {
  id: string;
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
    averageRating: 0,
    totalRatings: 0,
    recentRatings: [],
    ratingDistribution: [0, 0, 0, 0, 0]
  });
  const [loading, setLoading] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

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

  const handleClearAllRatings = () => {
    clearAllRatings();
    setStats({
      averageRating: 0,
      totalRatings: 0,
      recentRatings: [],
      ratingDistribution: [0, 0, 0, 0, 0]
    });
    setShowClearConfirm(false);
  };

  const handleExportData = () => {
    const data = exportRatings();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `trust-o-meter-ratings-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    return date.toLocaleDateString();
  };

  const EmptyState = () => (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <BarChart3 className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="font-inter font-semibold text-lg text-gray-900 mb-2">
        No Ratings Yet
      </h3>
      <p className="font-inter text-gray-600 mb-6 max-w-md mx-auto">
        Start by submitting your first rating on the Rate page. Your ratings will be stored securely and displayed here.
      </p>
      <a
        href="/rate"
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-inter font-medium hover:bg-blue-700 transition-colors duration-200"
      >
        <Star className="w-5 h-5 mr-2" />
        Submit First Rating
      </a>
    </div>
  );

  if (stats.totalRatings === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-inter font-bold text-3xl text-gray-900 mb-2">
              Rating Analytics
            </h1>
            <p className="font-inter text-lg text-gray-600">
              Transparent feedback powered by blockchain technology
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <EmptyState />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-inter font-bold text-3xl text-gray-900 mb-2">
            Rating Analytics
          </h1>
          <p className="font-inter text-lg text-gray-600">
            Transparent feedback powered by blockchain technology
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="font-inter font-bold text-2xl text-gray-900 mb-1">
              {stats.averageRating.toFixed(1)}
            </h3>
            <p className="font-inter text-gray-600 mb-3">Average Rating</p>
            <StarRating onChange={() => {}} />
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="font-inter font-bold text-2xl text-gray-900 mb-1">
              {stats.totalRatings.toLocaleString()}
            </h3>
            <p className="font-inter text-gray-600">Total Ratings</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="font-inter font-bold text-2xl text-gray-900 mb-1">
              {stats.recentRatings.length}
            </h3>
            <p className="font-inter text-gray-600">Recent Reviews</p>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="font-inter font-bold text-xl text-gray-900 mb-6">Rating Distribution</h2>
          <div className="space-y-4">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = stats.ratingDistribution[stars - 1];
              const percentage = stats.totalRatings > 0 ? (count / stats.totalRatings) * 100 : 0;
              
              return (
                <div key={stars} className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 w-16">
                    <span className="font-inter text-gray-900">{stars}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="w-16 text-right">
                    <span className="font-inter text-gray-600">{count}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Ratings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-inter font-bold text-xl text-gray-900">Recent Ratings</h2>
            <div className="flex items-center space-x-3">
              <button
                onClick={loadRatingsData}
                disabled={loading}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                <span className="font-inter font-medium">Refresh</span>
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {stats.recentRatings.map((rating) => (
              <div 
                key={rating.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <StarRating onChange={() => {}} />
                  <div>
                    <p className="font-inter font-medium text-gray-900">{rating.eventName}</p>
                    <p className="font-inter text-gray-500 text-sm">Your Rating</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-inter text-gray-500 text-sm">
                    {formatTimeAgo(rating.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Management */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="font-inter font-bold text-xl text-gray-900 mb-6">Data Management</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleExportData}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg font-inter font-medium hover:bg-green-700 transition-colors duration-200"
            >
              <BarChart3 className="w-5 h-5" />
              <span>Export Data</span>
            </button>
            
            <button
              onClick={() => setShowClearConfirm(true)}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg font-inter font-medium hover:bg-red-700 transition-colors duration-200"
            >
              <Trash2 className="w-5 h-5" />
              <span>Clear All Ratings</span>
            </button>
          </div>
        </div>

        {/* Clear Confirmation Modal */}
        {showClearConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-8 max-w-md w-full">
              <h3 className="font-inter font-bold text-xl text-gray-900 mb-4">
                Clear All Ratings?
              </h3>
              <p className="font-inter text-gray-600 mb-6">
                This action cannot be undone. All your ratings will be permanently deleted from local storage.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-inter font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleClearAllRatings}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-inter font-medium hover:bg-red-700 transition-colors duration-200"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewFeedbackPage;