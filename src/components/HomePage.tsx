import React from 'react';
import { Link } from 'react-router-dom';
import { Star, BarChart3, Shield, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Shield className="w-24 h-24 text-cyan-400 animate-pulse" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
          
          <h1 className="font-orbitron font-black text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
            Trust-O-Meter
          </h1>
          
          <p className="font-inter text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Rate events with transparent, immutable feedback powered by{' '}
            <span className="text-cyan-400 font-semibold">Algorand</span>
          </p>
          
          <p className="font-inter text-lg text-gray-400 max-w-2xl mx-auto">
            Experience the future of rating systems with blockchain-verified transparency and complete anonymity
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-900/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <Zap className="w-8 h-8 text-green-400 mb-4 mx-auto" />
            <h3 className="font-orbitron font-semibold text-lg text-white mb-2">Instant & Anonymous</h3>
            <p className="font-inter text-gray-400">Submit ratings instantly without revealing your identity</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-900/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <Shield className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
            <h3 className="font-orbitron font-semibold text-lg text-white mb-2">Blockchain Verified</h3>
            <p className="font-inter text-gray-400">Every rating is permanently recorded on Algorand</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-900/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <BarChart3 className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
            <h3 className="font-orbitron font-semibold text-lg text-white mb-2">Transparent Analytics</h3>
            <p className="font-inter text-gray-400">View real-time statistics and rating trends</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            to="/rate"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl font-orbitron font-semibold text-white text-lg transition-all duration-300 hover:from-cyan-500 hover:to-blue-500 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 min-w-[200px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center space-x-2">
              <Star className="w-5 h-5" />
              <span>Rate Now</span>
            </div>
          </Link>
          
          <Link 
            to="/feedback"
            className="group relative px-8 py-4 bg-gray-800/80 border-2 border-cyan-500/30 rounded-2xl font-orbitron font-semibold text-cyan-400 text-lg transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-900/20 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 min-w-[200px]"
          >
            <div className="relative flex items-center justify-center space-x-2">
              <BarChart3 className="w-5 h-5" />
              <span>View Ratings</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;