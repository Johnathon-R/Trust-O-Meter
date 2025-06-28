import React, { useEffect, useState } from 'react';
import { Users, MessageCircle, TrendingUp, Award, Calendar, Sparkles } from 'lucide-react';
import { searchRatings } from '../backend/algorand';
import { RatingData } from '../utils/customTypes';
import { useTranslation } from '../backend/useTranslation.ts';

const CommunityPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ratings, setRatings] = useState<RatingData[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const fetchRatings = async () => {
      const data = await searchRatings();
      setRatings(data);
    };
  
    fetchRatings();
  }, []);

  // Calculate community stats based on actual ratings
  const communityStats = [
    { label: t.community.stats.activeUsers, value: Math.round(ratings.length * 1.2 + 10), icon: Users, color: 'blue' },
    { label: t.community.stats.totalRatings, value: ratings.length, icon: TrendingUp, color: 'green' },
    { label: t.community.stats.eventsRated, value: new Set(ratings.map(r => r.eventName)).size, icon: Calendar, color: 'purple' },
    { label: t.community.stats.communityScore, value: ratings.length > 0 ? (ratings.reduce((acc, curr) => acc + curr.rating, 0) / ratings.length).toFixed(1) : '0.0', icon: Award, color: 'orange' },
  ];

  // Generate recent activity based on actual ratings
  const generateRecentActivity = () => {
    const activities = [];
    const sortedRatings = [...ratings].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    
    // Add recent ratings
    sortedRatings.slice(0, 3).forEach((rating, index) => {
      const timeAgo = getTimeAgo(rating.timestamp);
      activities.push({
        action: t.community.recentActivity.actions.newRating,
        event: rating.eventName,
        time: timeAgo
      });
    });

    // Add some milestone activities if we have enough ratings
    if (ratings.length >= 10) {
      activities.push({
        action: t.community.recentActivity.actions.milestone,
        event: `${ratings.length} ${t.community.stats.totalRatings.toLowerCase()} reached!`,
        time: '1 hour ago'
      });
    }

    // Add event creation activities based on unique events
    const uniqueEvents = Array.from(new Set(ratings.map(r => r.eventName)));
    uniqueEvents.slice(0, 2).forEach((eventName, index) => {
      activities.push({
        action: t.community.recentActivity.actions.eventCreated,
        event: eventName,
        time: `${2 + index} hours ago`
      });
    });

    return activities.slice(0, 5); // Return max 5 activities
  };

  // Generate top events based on actual ratings
  const generateTopEvents = () => {
    const eventRatings = new Map<string, { ratings: number[], count: number }>();
    
    ratings.forEach(rating => {
      if (!eventRatings.has(rating.eventName)) {
        eventRatings.set(rating.eventName, { ratings: [], count: 0 });
      }
      const event = eventRatings.get(rating.eventName)!;
      event.ratings.push(rating.rating);
      event.count++;
    });

    const topEvents = Array.from(eventRatings.entries())
      .map(([name, data]) => ({
        name,
        rating: data.ratings.reduce((sum, r) => sum + r, 0) / data.ratings.length,
        totalRatings: data.count
      }))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);

    return topEvents;
  };

  const getTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  const recentActivity = generateRecentActivity();
  const topEvents = generateTopEvents();

  const getGradientClasses = (color: string) => {
    const gradients = {
      blue: 'from-blue-500 to-purple-600',
      green: 'from-green-500 to-blue-600',
      purple: 'from-purple-500 to-pink-600',
      orange: 'from-orange-500 to-red-600',
    };
    return gradients[color as keyof typeof gradients] || gradients.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-black py-12 px-4 relative overflow-hidden transition-all duration-500">
      {/* Animated background */}
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

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-blue-400 mr-2" />
            <h1 className="font-inter font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {t.community.title}
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-400 ml-2" />
          </div>
          <p className="font-inter text-lg text-gray-300 dark:text-gray-400 max-w-2xl mx-auto">
            {t.community.subtitle}
          </p>
        </div>

        {/* Community Stats */}
        <div className={`grid md:grid-cols-4 gap-6 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            const gradientClass = getGradientClasses(stat.color);
            
            return (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass.replace('to-', 'to-').replace('from-', 'from-').split(' ').map(c => c + '/20').join(' ')} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className={`w-12 h-12 bg-gradient-to-r ${gradientClass} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-inter font-bold text-2xl text-white dark:text-gray-100 mb-1">
                    {stat.value}
                  </h3>
                  <p className="font-inter text-gray-300 dark:text-gray-400">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className={`group relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 hover:bg-white/15 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-inter font-bold text-xl text-white dark:text-gray-100 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-blue-400" />
                  {t.community.recentActivity.title}
                </h2>
              </div>
              
              <div className="space-y-4">
                {recentActivity.length > 0 ? recentActivity.map((activity, index) => (
                  <div key={index} className="group/item flex items-start space-x-3 p-3 bg-white/5 dark:bg-gray-700/30 rounded-xl hover:bg-white/10 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-[1.02]">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <div className="flex-1">
                      <p className="font-inter text-white dark:text-gray-100 font-medium">{activity.action}</p>
                      <p className="font-inter text-gray-300 dark:text-gray-400 text-sm">{activity.event}</p>
                      <p className="font-inter text-gray-400 dark:text-gray-500 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                )) : (
                  <div className="text-center py-8">
                    <p className="font-inter text-gray-400 dark:text-gray-500">No recent activity yet. Be the first to rate an event!</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Top Rated Events */}
          <div className={`group relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 hover:bg-white/15 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-inter font-bold text-xl text-white dark:text-gray-100 flex items-center gap-2">
                  <Award className="w-6 h-6 text-purple-400" />
                  {t.community.topEvents.title}
                </h2>
              </div>
              
              <div className="space-y-4">
                {topEvents.length > 0 ? topEvents.map((event, index) => (
                  <div key={index} className="group/item flex items-center justify-between p-3 bg-white/5 dark:bg-gray-700/30 rounded-xl hover:bg-white/10 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex-1">
                      <p className="font-inter text-white dark:text-gray-100 font-medium">{event.name}</p>
                      <p className="font-inter text-gray-400 dark:text-gray-500 text-sm">{event.totalRatings} {t.community.topEvents.ratings}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <span className="font-inter font-bold text-white dark:text-gray-100">{event.rating.toFixed(1)}</span>
                        <span className="text-yellow-400 text-lg group-hover/item:scale-125 transition-transform duration-300">★</span>
                      </div>
                    </div>
                  </div>
                )) : (
                  <div className="text-center py-8">
                    <p className="font-inter text-gray-400 dark:text-gray-500">No events rated yet. Start rating events to see top performers!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className={`group relative mt-8 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 hover:bg-white/15 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <h2 className="font-inter font-bold text-xl text-white dark:text-gray-100 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-green-400" />
              {t.community.guidelines.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-inter font-semibold text-white dark:text-gray-100 mb-3">{t.community.guidelines.rating.title}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2 group/guideline hover:scale-105 transition-transform duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0 group-hover/guideline:scale-150 transition-transform duration-300"></div>
                    <span className="font-inter text-gray-300 dark:text-gray-400">{t.community.guidelines.rating.honest}</span>
                  </li>
                  <li className="flex items-start space-x-2 group/guideline hover:scale-105 transition-transform duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mt-2 flex-shrink-0 group-hover/guideline:scale-150 transition-transform duration-300"></div>
                    <span className="font-inter text-gray-300 dark:text-gray-400">{t.community.guidelines.rating.experience}</span>
                  </li>
                  <li className="flex items-start space-x-2 group/guideline hover:scale-105 transition-transform duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-600 rounded-full mt-2 flex-shrink-0 group-hover/guideline:scale-150 transition-transform duration-300"></div>
                    <span className="font-inter text-gray-300 dark:text-gray-400">{t.community.guidelines.rating.anonymity}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-inter font-semibold text-white dark:text-gray-100 mb-3">{t.community.guidelines.values.title}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2 group/value hover:scale-105 transition-transform duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-2 flex-shrink-0 group-hover/value:scale-150 transition-transform duration-300"></div>
                    <span className="font-inter text-gray-300 dark:text-gray-400">{t.community.guidelines.values.transparency}</span>
                  </li>
                  <li className="flex items-start space-x-2 group/value hover:scale-105 transition-transform duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0 group-hover/value:scale-150 transition-transform duration-300"></div>
                    <span className="font-inter text-gray-300 dark:text-gray-400">{t.community.guidelines.values.constructive}</span>
                  </li>
                  <li className="flex items-start space-x-2 group/value hover:scale-105 transition-transform duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mt-2 flex-shrink-0 group-hover/value:scale-150 transition-transform duration-300"></div>
                    <span className="font-inter text-gray-300 dark:text-gray-400">{t.community.guidelines.values.respect}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Join Community */}
        <div className={`relative mt-8 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-50"></div>
          <div className="relative bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg border border-white/30 dark:border-gray-600/50 rounded-2xl p-8 text-center hover:scale-[1.02] transition-transform duration-300">
            <h2 className="font-inter font-bold text-2xl text-white dark:text-gray-100 mb-4">
              {t.community.joinCommunity.title}
            </h2>
            <p className="font-inter text-blue-100 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              {t.community.joinCommunity.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href='https://discord.com' target="_blank">
                <button className="group px-6 py-3 bg-white text-blue-600 rounded-xl font-inter font-medium hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg">
                  <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>{t.community.joinCommunity.joinDiscord}</span>
                </button>
              </a>
              <a target="_blank" href='https://worldslargesthackathon.devpost.com/?ref_feature=challenge&ref_medium=homepage-recommended-hackathons&_gl=1*c2nf51*_gcl_au*MTAxNDY3OTc2NC4xNzQ5NDMxODA2*_ga*MTQ4MjE3MDE1MS4xNzQ5NDMxODA2*_ga_0YHJK3Y10M*czE3NTA4MTAxNTMkbzUkZzEkdDE3NTA4MTAxNTUkajU4JGwwJGgw'>
                <button className="group px-6 py-3 bg-blue-600/20 text-white border border-blue-400/30 rounded-xl font-inter font-medium hover:bg-blue-600/30 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg">
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>{t.community.joinCommunity.followUpdates}</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;