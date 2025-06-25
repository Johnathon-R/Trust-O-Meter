import React, { useEffect, useState } from 'react';
import { Users, MessageCircle, TrendingUp, Award, Calendar, ExternalLink, Sparkles } from 'lucide-react';
import { searchRatings } from '../backend/algorand';
import { RatingData } from '../utils/customTypes';

const CommunityPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ratings, setRatings] = useState<RatingData[]>([]);

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

  const communityStats = [
    { label: 'Active Users', value: Math.round(ratings.length * 1.2 + 10), icon: Users, color: 'blue' },
    { label: 'Total Ratings', value: ratings.length, icon: TrendingUp, color: 'green' },
    { label: 'Events Rated', value: ratings.length, icon: Calendar, color: 'purple' },
    { label: 'Community Score', value: Math.round(ratings.reduce((acc, curr) => acc + curr.rating, 0) * 10) / 100, icon: Award, color: 'orange' },
  ];

  const recentActivity = [
    { action: 'New rating submitted', event: 'Tech Conference 2025', time: '2 minutes ago' },
    { action: 'Event created', event: 'Workshop: Blockchain Basics', time: '15 minutes ago' },
    { action: 'Community milestone', event: '15,000 ratings reached!', time: '1 hour ago' },
    { action: 'New rating submitted', event: 'Product Launch Event', time: '2 hours ago' },
    { action: 'Event created', event: 'Team Building Session', time: '3 hours ago' },
  ];

  const topEvents = [
    { name: 'Annual Tech Summit', rating: 4.8, totalRatings: 234 },
    { name: 'Blockchain Workshop Series', rating: 4.7, totalRatings: 189 },
    { name: 'Product Launch Showcase', rating: 4.6, totalRatings: 156 },
    { name: 'Community Meetup', rating: 4.5, totalRatings: 143 },
    { name: 'Developer Conference', rating: 4.4, totalRatings: 128 },
  ];

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
              Community Hub
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-400 ml-2" />
          </div>
          <p className="font-inter text-lg text-gray-300 dark:text-gray-400 max-w-2xl mx-auto">
            Connect with our growing community of users who value transparent and honest feedback.
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
                  Recent Activity
                </h2>
              </div>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="group/item flex items-start space-x-3 p-3 bg-white/5 dark:bg-gray-700/30 rounded-xl hover:bg-white/10 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-[1.02]">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <div className="flex-1">
                      <p className="font-inter text-white dark:text-gray-100 font-medium">{activity.action}</p>
                      <p className="font-inter text-gray-300 dark:text-gray-400 text-sm">{activity.event}</p>
                      <p className="font-inter text-gray-400 dark:text-gray-500 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
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
                  Top Rated Events
                </h2>
              </div>
              
              <div className="space-y-4">
                {topEvents.map((event, index) => (
                  <div key={index} className="group/item flex items-center justify-between p-3 bg-white/5 dark:bg-gray-700/30 rounded-xl hover:bg-white/10 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex-1">
                      <p className="font-inter text-white dark:text-gray-100 font-medium">{event.name}</p>
                      <p className="font-inter text-gray-400 dark:text-gray-500 text-sm">{event.totalRatings} ratings</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <span className="font-inter font-bold text-white dark:text-gray-100">{event.rating}</span>
                        <span className="text-yellow-400 text-lg group-hover/item:scale-125 transition-transform duration-300">★</span>
                      </div>
                    </div>
                  </div>
                ))}
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
              Community Guidelines
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-inter font-semibold text-white dark:text-gray-100 mb-3">Rating Guidelines</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2 group/guideline hover:scale-105 transition-transform duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0 group-hover/guideline:scale-150 transition-transform duration-300"></div>
                    <span className="font-inter text-gray-300 dark:text-gray-400">Be honest and constructive in your feedback</span>
                  </li>
                  <li className="flex items-start space-x-2 group/guideline hover:scale-105 transition-transform duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mt-2 flex-shrink-0 group-hover/guideline:scale-150 transition-transform duration-300"></div>
                    <span className="font-inter text-gray-300 dark:text-gray-400">Rate based on your actual experience</span>
                  </li>
                  <li className="flex items-start space-x-2 group/guideline hover:scale-105 transition-transform duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-600 rounded-full mt-2 flex-shrink-0 group-hover/guideline:scale-150 transition-transform duration-300"></div>
                    <span className="font-inter text-gray-300 dark:text-gray-400">Respect the anonymity of the platform</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-inter font-semibold text-white dark:text-gray-100 mb-3">Community Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2 group/value hover:scale-105 transition-transform duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-2 flex-shrink-0 group-hover/value:scale-150 transition-transform duration-300"></div>
                    <span className="font-inter text-gray-300 dark:text-gray-400">Transparency and honesty</span>
                  </li>
                  <li className="flex items-start space-x-2 group/value hover:scale-105 transition-transform duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0 group-hover/value:scale-150 transition-transform duration-300"></div>
                    <span className="font-inter text-gray-300 dark:text-gray-400">Constructive feedback</span>
                  </li>
                  <li className="flex items-start space-x-2 group/value hover:scale-105 transition-transform duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mt-2 flex-shrink-0 group-hover/value:scale-150 transition-transform duration-300"></div>
                    <span className="font-inter text-gray-300 dark:text-gray-400">Respect for all participants</span>
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
              Join Our Community
            </h2>
            <p className="font-inter text-blue-100 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Connect with other users, share feedback, and help build a more transparent rating ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href='https://discord.com' target="_blank">
                <button className="group px-6 py-3 bg-white text-blue-600 rounded-xl font-inter font-medium hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg">
                  <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Join Discord</span>
                </button>
              </a>
              <a target="_blank" href='https://worldslargesthackathon.devpost.com/?ref_feature=challenge&ref_medium=homepage-recommended-hackathons&_gl=1*c2nf51*_gcl_au*MTAxNDY3OTc2NC4xNzQ5NDMxODA2*_ga*MTQ4MjE3MDE1MS4xNzQ5NDMxODA2*_ga_0YHJK3Y10M*czE3NTA4MTAxNTMkbzUkZzEkdDE3NTA4MTAxNTUkajU4JGwwJGgw'>
                <button className="group px-6 py-3 bg-blue-600/20 text-white border border-blue-400/30 rounded-xl font-inter font-medium hover:bg-blue-600/30 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg">
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Follow Updates</span>
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