import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Star, BarChart3, Info, Users, Settings, Menu, X, Zap } from 'lucide-react';
import { useTranslation } from '../backend/useTranslation.ts';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/rate', label: t.nav.rate, icon: Star },
    { path: '/feedback', label: t.nav.analytics, icon: BarChart3 },
    { path: '/about', label: t.nav.about, icon: Info },
    { path: '/community', label: t.nav.community, icon: Users },
    { path: '/settings', label: t.nav.settings, icon: Settings },
  ];

  return (
    <nav className="border-b border-white/10 bg-slate-900/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="group flex items-center space-x-3 text-white hover:text-blue-400 transition-all duration-300"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="font-inter font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Trust-O-Meter
            </span>
          </Link>

          <div className="hidden md:flex space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path} 
                className={`group relative flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 overflow-hidden ${
                  isActive(path) 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-400 border border-blue-500/30' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {isActive(path) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl"></div>
                )}
                <div className="relative flex items-center space-x-2">
                  <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive(path) ? 'scale-110' : 'group-hover:scale-110'}`} />
                  <span className="font-inter font-medium">{label}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Powered by logo - Desktop */}
          <div className="hidden md:flex items-center">
            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700/50 rounded-xl px-4 py-2 flex items-center gap-2">
              <span className="text-sm text-white dark:text-gray-200 font-inter">Powered by</span>
              <img src="/images/logo-black.png" alt="Algorand" className="h-6 w-auto" />
              <img src="/images/white_circle_360x360.png" alt="Bolt.new" className="h-6 w-auto" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="space-y-2">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link 
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive(path) 
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-400 border border-blue-500/30' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-inter font-medium">{label}</span>
                </Link>
              ))}
              
              {/* Mobile Powered by Badge in Menu */}
              <div className="px-4 py-2">
                <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700/50 rounded-xl px-4 py-3 flex items-center gap-2">
                  <span className="text-sm text-white dark:text-gray-200 font-inter">Powered by</span>
                  <img src="/images/logo-black.png" alt="Algorand" className="h-6 w-auto" />
                  <img src="/images/white_circle_360x360.png" alt="Bolt.new" className="h-6 w-auto" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;