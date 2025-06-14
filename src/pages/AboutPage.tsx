import React from 'react';
import { Shield, Star, BarChart3, Users, Lock, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="font-inter font-bold text-3xl text-gray-900 mb-4">
            About Trust-O-Meter
          </h1>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            A revolutionary rating system built on blockchain technology to ensure transparency, 
            immutability, and complete anonymity in feedback collection.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="font-inter font-bold text-2xl text-gray-900 mb-4">Our Mission</h2>
          <p className="font-inter text-gray-600 leading-relaxed mb-4">
            Trust-O-Meter was created to solve the fundamental problem of trust in rating systems. 
            Traditional platforms can manipulate, delete, or alter ratings, making it difficult to 
            trust the authenticity of feedback.
          </p>
          <p className="font-inter text-gray-600 leading-relaxed">
            By leveraging the Algorand blockchain, we ensure that every rating is permanently recorded, 
            completely transparent, and impossible to manipulate while maintaining user anonymity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-inter font-semibold text-lg text-gray-900 mb-2">Complete Anonymity</h3>
            <p className="font-inter text-gray-600">
              Your identity is never revealed. Rate freely without fear of retaliation or bias.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-inter font-semibold text-lg text-gray-900 mb-2">Immutable Records</h3>
            <p className="font-inter text-gray-600">
              Once submitted, ratings cannot be altered or deleted, ensuring permanent transparency.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-inter font-semibold text-lg text-gray-900 mb-2">Instant Verification</h3>
            <p className="font-inter text-gray-600">
              All ratings are instantly verified and recorded on the Algorand blockchain.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-inter font-semibold text-lg text-gray-900 mb-2">Real-time Analytics</h3>
            <p className="font-inter text-gray-600">
              View comprehensive statistics and trends based on authentic, unalterable data.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="font-inter font-bold text-2xl text-gray-900 mb-6">How It Works</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-inter font-bold text-blue-600">1</span>
              </div>
              <div>
                <h3 className="font-inter font-semibold text-gray-900 mb-1">Submit Your Rating</h3>
                <p className="font-inter text-gray-600">Choose your rating and event type through our simple interface.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-inter font-bold text-blue-600">2</span>
              </div>
              <div>
                <h3 className="font-inter font-semibold text-gray-900 mb-1">Connect Your Wallet</h3>
                <p className="font-inter text-gray-600">Securely connect your Algorand wallet to sign the transaction.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-inter font-bold text-blue-600">3</span>
              </div>
              <div>
                <h3 className="font-inter font-semibold text-gray-900 mb-1">Blockchain Recording</h3>
                <p className="font-inter text-gray-600">Your rating is permanently recorded on the Algorand blockchain.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-inter font-bold text-blue-600">4</span>
              </div>
              <div>
                <h3 className="font-inter font-semibold text-gray-900 mb-1">View Analytics</h3>
                <p className="font-inter text-gray-600">Access real-time statistics and trends based on all submitted ratings.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="font-inter font-bold text-2xl text-gray-900 mb-4">Built on Algorand</h2>
          <p className="font-inter text-gray-600 leading-relaxed mb-4">
            We chose Algorand for its exceptional speed, low transaction costs, and environmental sustainability. 
            The Algorand blockchain provides the perfect foundation for our rating system with its:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="font-inter text-gray-600">Instant transaction finality</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="font-inter text-gray-600">Minimal transaction fees</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="font-inter text-gray-600">Carbon-negative consensus mechanism</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="font-inter text-gray-600">Proven security and decentralization</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;