import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, BarChart3, Shield, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useTranslation } from '../backend/useTranslation.ts';
import { getSetting } from '../utils/settings';
import { getRatingsData } from '../backend/functionality';
import { RatingStats } from '../utils/customTypes';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState<RatingStats>({
    averageRating: 0,
    totalRatings: 0,
    recentRatings: [],
    ratingDistribution: [],
  });
  const [showAnalytics, setShowAnalytics] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const loadStats = async () => {
      const data = await getRatingsData();
      if (data) setStats(data);
    };

    loadStats();

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-black relative overflow-hidden transition-all duration-500">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
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

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Section */}
          <br></br><br></br>
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>

            <h1 className="font-inter font-bold text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 animate-gradient-x">
              {t.home.title}
            </h1>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="font-inter text-2xl text-gray-300 dark:text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed">
                {t.home.subtitle}
              </p>

              <p className="font-inter text-lg text-gray-400 dark:text-gray-500 max-w-xl mx-auto flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                {t.home.description}
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-all duration-300 group-hover:blur-md"></div>
              <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-inter font-bold text-xl text-white dark:text-gray-100 mb-3">{t.home.features.instantRating.title}</h3>
                <p className="font-inter text-gray-300 dark:text-gray-400 leading-relaxed">{t.home.features.instantRating.description}</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-all duration-300 group-hover:blur-md"></div>
              <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-inter font-bold text-xl text-white dark:text-gray-100 mb-3">{t.home.features.blockchainVerified.title}</h3>
                <p className="font-inter text-gray-300 dark:text-gray-400 leading-relaxed">{t.home.features.blockchainVerified.description}</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-all duration-300 group-hover:blur-md"></div>
              <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-inter font-bold text-xl text-white dark:text-gray-100 mb-3">{t.home.features.realTimeAnalytics.title}</h3>
                <p className="font-inter text-gray-300 dark:text-gray-400 leading-relaxed">{t.home.features.realTimeAnalytics.description}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              to="/rate"
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-inter font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 min-w-[200px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>{t.home.buttons.rateNow}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>

            <Link
              to="/feedback"
              className="group relative px-10 py-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/30 dark:border-gray-600/50 text-white rounded-xl font-inter font-semibold hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300 min-w-[200px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                <BarChart3 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>{t.home.buttons.viewAnalytics}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </div>

          {/* Stats Section - Only show if analytics is enabled */}
          {showAnalytics && (
            <div className={`mt-20 grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {Math.round(stats.totalRatings * 1.2 + 10)}
                </div>
                <div className="text-gray-400 dark:text-gray-500 font-inter">{t.home.stats.activeUsers}</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stats.totalRatings}
                </div>
                <div className="text-gray-400 dark:text-gray-500 font-inter">{t.home.stats.totalRatings}</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stats.averageRating.toFixed(1)}★
                </div>
                <div className="text-gray-400 dark:text-gray-500 font-inter">{t.home.stats.averageRating}</div>
              </div>
            </div>
          )}
          <br></br><br></br>
        </div>
      </div>

      {/* Rating Cards Section - Only show if analytics is enabled */}
      {showAnalytics &&   stats.totalRatings > 0 && (
        <div className={`grid mx-auto max-w-6xl sm:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.recentRatings.slice(0, 9).map((r, idx) => (
            <div key={r.id || `${r.eventName}-${idx}`} className="group relative flex-col">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-all duration-300 group-hover:blur-md"></div>
              <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div>
                  <h3 className="font-inter font-bold text-xl text-white dark:text-gray-100 mb-3">{r.eventName}</h3>
                </div>
                <div className="flex gap-3">
                  {[...Array(5)].map((_, i) => {
                    const fill = Math.min(Math.max(r.rating - i, 0), 1) * 100;
                    return (
                      <div key={i} className="relative w-6 h-6">
                        {/* Filled star (foreground mask) */}
                        <div className="absolute top-0 left-0 h-full overflow-hidden text-yellow-400"
                          style={{ width: `${fill}%` }}
                        >
                          <Star className={`w-6 h-6 fill-yellow-400`} />
                        </div>

                        <Star className='text-gray-400 hover:text-gray-300'/>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;