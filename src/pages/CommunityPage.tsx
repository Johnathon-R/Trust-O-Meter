import React from 'react';
import { Users, MessageCircle, TrendingUp, Award, Calendar, ExternalLink } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const communityStats = [
    { label: 'Active Users', value: '2,847', icon: Users, color: 'blue' },
    { label: 'Total Ratings', value: '15,392', icon: TrendingUp, color: 'green' },
    { label: 'Events Rated', value: '1,205', icon: Calendar, color: 'purple' },
    { label: 'Community Score', value: '4.6/5', icon: Award, color: 'orange' },
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

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-inter font-bold text-3xl text-gray-900 mb-4">
            Community Hub
          </h1>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with our growing community of users who value transparent and honest feedback.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses = {
              blue: 'bg-blue-50 text-blue-600',
              green: 'bg-green-50 text-green-600',
              purple: 'bg-purple-50 text-purple-600',
              orange: 'bg-orange-50 text-orange-600',
            };
            
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-inter font-bold text-2xl text-gray-900 mb-1">
                  {stat.value}
                </h3>
                <p className="font-inter text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-inter font-bold text-xl text-gray-900">Recent Activity</h2>
              <MessageCircle className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="font-inter text-gray-900 font-medium">{activity.action}</p>
                    <p className="font-inter text-gray-600 text-sm">{activity.event}</p>
                    <p className="font-inter text-gray-400 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Rated Events */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-inter font-bold text-xl text-gray-900">Top Rated Events</h2>
              <Award className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="space-y-4">
              {topEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-inter text-gray-900 font-medium">{event.name}</p>
                    <p className="font-inter text-gray-500 text-sm">{event.totalRatings} ratings</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <span className="font-inter font-bold text-gray-900">{event.rating}</span>
                      <span className="text-yellow-400">★</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mt-8">
          <h2 className="font-inter font-bold text-xl text-gray-900 mb-6">Community Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-inter font-semibold text-gray-900 mb-3">Rating Guidelines</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-inter text-gray-600">Be honest and constructive in your feedback</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-inter text-gray-600">Rate based on your actual experience</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-inter text-gray-600">Respect the anonymity of the platform</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-inter font-semibold text-gray-900 mb-3">Community Values</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-inter text-gray-600">Transparency and honesty</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-inter text-gray-600">Constructive feedback</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-inter text-gray-600">Respect for all participants</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Join Community */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 mt-8 text-center">
          <h2 className="font-inter font-bold text-2xl text-white mb-4">
            Join Our Community
          </h2>
          <p className="font-inter text-blue-100 mb-6 max-w-2xl mx-auto">
            Connect with other users, share feedback, and help build a more transparent rating ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-inter font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Join Discord</span>
              <ExternalLink className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white border border-blue-400 rounded-lg font-inter font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Follow Updates</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;