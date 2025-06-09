import React from 'react';
import { Link } from 'react-router-dom';
import { Star, BarChart3, Shield } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-16 h-16 text-blue-600" />
          </div>
          
          <h1 className="font-inter font-bold text-5xl md:text-6xl text-gray-900 mb-6">
            Trust-O-Meter
          </h1>
          
          <p className="font-inter text-xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
            Rate events with transparent, immutable feedback powered by Algorand
          </p>
          
          <p className="font-inter text-lg text-gray-500 max-w-xl mx-auto">
            Simple, secure, and completely anonymous rating system
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-inter font-semibold text-lg text-gray-900 mb-2">Instant Rating</h3>
            <p className="font-inter text-gray-600">Submit ratings quickly and anonymously</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-inter font-semibold text-lg text-gray-900 mb-2">Blockchain Verified</h3>
            <p className="font-inter text-gray-600">Permanently recorded on Algorand</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-inter font-semibold text-lg text-gray-900 mb-2">Real-time Analytics</h3>
            <p className="font-inter text-gray-600">View statistics and trends</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/rate"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-inter font-medium hover:bg-blue-700 transition-colors duration-200 min-w-[160px]"
          >
            Rate Now
          </Link>
          
          <Link 
            to="/feedback"
            className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-inter font-medium hover:bg-gray-50 transition-colors duration-200 min-w-[160px]"
          >
            View Ratings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;