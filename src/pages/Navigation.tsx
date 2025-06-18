import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Star, BarChart3, Info, Users, Settings } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/rate', label: 'Rate', icon: Star },
    { path: '/feedback', label: 'Analytics', icon: BarChart3 },
    { path: '/about', label: 'About', icon: Info },
    { path: '/community', label: 'Community', icon: Users },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="border-b bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Shield className="w-8 h-8" />
            <span className="font-inter font-bold text-xl">Trust-O-Meter</span>
          </Link>

          <div className="hidden md:flex space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${isActive(path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-inter font-medium">{label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;