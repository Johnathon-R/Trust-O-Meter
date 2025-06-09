import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Star, BarChart3 } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="border-b border-cyan-900/30 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Shield className="w-8 h-8" />
            <span className="font-orbitron font-bold text-xl">Trust-O-Meter</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link 
              to="/rate" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/rate') 
                  ? 'bg-cyan-900/30 text-cyan-300 shadow-lg shadow-cyan-500/20' 
                  : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-900/10'
              }`}
            >
              <Star className="w-4 h-4" />
              <span className="font-inter">Rate</span>
            </Link>
            
            <Link 
              to="/feedback" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/feedback') 
                  ? 'bg-cyan-900/30 text-cyan-300 shadow-lg shadow-cyan-500/20' 
                  : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-900/10'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span className="font-inter">Feedback</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;