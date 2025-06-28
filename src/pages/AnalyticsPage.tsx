import React, { useState, useEffect } from 'react';
import { BarChart3, Star, TrendingUp, Users, Calendar, RefreshCw, Sparkles, Lock } from 'lucide-react';
import RatingHistogram from '../components/histogram';
import { getRatingsData } from '../backend/functionality';
import { RatingStats } from '../utils/customTypes';
import { useTranslation } from '../backend/useTranslation.ts';
import { getSetting } from '../utils/settings';

// Floating dot component
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

const AnalyticsPage: React.FC = () => {
  const [stats, setStats] = useState<RatingStats>({
    averageRating: 0,
    totalRatings: 0,
    recentRatings: [],
    ratingDistribution: [],
  });
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
    loadRatingsData();
    
    // Check analytics setting
    const analyticsEnabled = getSetting('showAnalytics');
    setShowAnalytics(analyticsEnabled);
  }, []);

  // Listen for settings changes
  useEffect(() => {
    const handleStorageChange = () => {
      const analyticsEnabled = getSetting('showAnalytics');
      setShowAnalytics(analyticsEnabled);
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also check for changes periodically (for same-tab updates)
    const interval = setInterval(handleStorageChange, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
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

    if (diffInHours < 1) return t.analytics.timeAgo.justNow;
    if (diffInHours < 24) return `${diffInHours}${t.analytics.timeAgo.hoursAgo}`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}${t.analytics.timeAgo.daysAgo}`;
  };

  // If analytics is disabled, show privacy message
  if (!showAnalytics) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-black py-12 px-4 relative overflow-hidden transition-colors duration-300">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-15 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-15 animate-blob animation-delay-4000"></div>
        </div>

        <FloatingDotsBackground />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>

            <h1 className="font-inter font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-6">
              Analytics Privacy Mode
            </h1>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 hover:bg-white/15 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-inter font-bold text-2xl text-white dark:text-gray-100 mb-4">
                  Analytics Display Disabled
                </h2>
                <p className="font-inter text-gray-300 dark:text-gray-400 leading-relaxed mb-6">
                  You have chosen to hide analytics data for privacy. Your ratings are still being recorded on the blockchain, but the analytics display is disabled.
                </p>
                <p className="font-inter text-gray-400 dark:text-gray-500 text-sm mb-6">
                  To view analytics data, you can enable "Show in Analytics" in your Settings.
                </p>
                <a href="/settings" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-inter font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <span>Go to Settings</span>
                  <Lock className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-black py-12 px-4 relative overflow-hidden transition-colors duration-300">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-15 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      <FloatingDotsBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-4">
            <BarChart3 className="w-8 h-8 text-blue-400 dark:text-blue-300 mr-2" />
            <h1 className="font-inter font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300">
              {t.analytics.title}
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-400 dark:text-yellow-300 ml-2" />
          </div>
          <p className="font-inter text-lg text-gray-300 dark:text-gray-400">
            {t.analytics.subtitle}
          </p>
        </div>

        {/* Stats Overview */}
        <div className={`grid md:grid-cols-3 gap-6 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 dark:from-blue-600/20 dark:to-purple-700/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-400 dark:text-green-300" />
              </div>
              <h3 className="font-inter font-bold text-3xl text-white dark:text-gray-100 mb-1">
                {stats.averageRating.toFixed(2)}
              </h3>
              <p className="font-inter text-gray-300 dark:text-gray-400 mb-3">{t.analytics.averageRating}</p>
               <div className="flex gap-3">
                {[...Array(5)].map((_, i) => {
                  const fill = Math.min(Math.max(stats.averageRating - i, 0), 1) * 100;
                  return (
                    <div key={i} className="relative w-6 h-6">
                      {/* Filled star (foreground mask) */}
                      <div className="absolute top-0 left-0 h-full overflow-hidden text-yellow-400"
                        style={{ width: `${fill}%` }}
                      >
                        <Star className={`w-6 h-6 fill-yellow-400`} />
                      </div>

                      <Star className='text-gray-400'/>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-600/20 dark:from-green-600/20 dark:to-blue-700/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 dark:from-green-600 dark:to-blue-700 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-400 dark:text-green-300" />
              </div>
              <h3 className="font-inter font-bold text-3xl text-white dark:text-gray-100 mb-1">
                {stats.totalRatings.toLocaleString()}
              </h3>
              <p className="font-inter text-gray-300 dark:text-gray-400">{t.analytics.totalRatings}</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 dark:from-purple-600/20 dark:to-pink-700/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <Calendar className="w-5 h-5 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="font-inter font-bold text-3xl text-white dark:text-gray-100 mb-1">
                {stats.recentRatings.length}
              </h3>
              <p className="font-inter text-gray-300 dark:text-gray-400">{t.analytics.recentReviews}</p>
            </div>
          </div>
        </div>

        <div>
          <RatingHistogram />
        </div>

        {/* Recent Ratings */}
        <div className={`group relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 dark:from-purple-600/20 dark:to-pink-700/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 hover:bg-white/15 dark:hover:bg-gray-700/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-inter font-bold text-2xl text-white dark:text-gray-100 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-purple-400 dark:text-purple-300" />
                {t.analytics.recentRatings}
              </h2>
              <button
                onClick={loadRatingsData}
                disabled={loading}
                className="group/btn flex items-center space-x-2 px-4 py-2 bg-white/10 dark:bg-gray-700/50 text-blue-400 dark:text-blue-300 rounded-xl hover:bg-white/20 dark:hover:bg-gray-600/50 transition-all duration-300 disabled:opacity-50 hover:scale-105"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : 'group-hover/btn:rotate-180'} transition-transform duration-300`} />
                <span className="font-inter font-medium">{t.analytics.refresh}</span>
              </button>
            </div>

            <div className="space-y-4">
              {stats.recentRatings.slice(0, 9).map((rating, index) => (
                <div
                  key={index}
                  className="group/item flex items-center justify-between p-4 bg-white/5 dark:bg-gray-700/40 rounded-xl border border-white/10 dark:border-gray-600/50 hover:bg-white/10 dark:hover:bg-gray-600/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="group-hover/item:scale-110 transition-transform duration-300">
                       <div className="flex gap-3">
                        {[...Array(5)].map((_, i) => {
                          const fill = Math.min(Math.max(rating.rating - i, 0), 1) * 100;
                          return (
                            <div key={i} className="relative w-6 h-6">
                              {/* Filled star (foreground mask) */}
                              <div className="absolute top-0 left-0 h-full overflow-hidden text-yellow-400"
                                style={{ width: `${fill}%` }}
                              >
                                <Star className={`w-6 h-6 fill-yellow-400`} />
                              </div>
      
                              <Star className='text-gray-400'/>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <p className="font-inter font-semibold text-white dark:text-gray-100">{rating.eventName}</p>
                      <p className="font-inter text-gray-400 dark:text-gray-500 text-sm">{t.analytics.anonymousUser}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-inter text-gray-400 dark:text-gray-500 text-sm">
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

export default AnalyticsPage;