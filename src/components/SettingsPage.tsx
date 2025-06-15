import React, { useState, useEffect } from 'react';
import { Settings, Bell, Shield, Wallet, Moon, Sun, Globe, Save, Sparkles } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [autoConnect, setAutoConnect] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSaveSettings = () => {
    // In a real app, this would save to localStorage or backend
    console.log('Settings saved:', {
      notifications,
      darkMode,
      language,
      autoConnect,
      showAnalytics
    });
  };

  const ToggleSwitch = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ${
        enabled ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-600'
      } hover:scale-110`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-all duration-300 ${
          enabled ? 'translate-x-6 shadow-lg' : 'translate-x-1'
        }`}
      />
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          <h1 className="font-inter font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
            Settings
          </h1>
          <p className="font-inter text-lg text-gray-300">
            Customize your Trust-O-Meter experience
          </p>
        </div>

        <div className="space-y-8">
          {/* General Settings */}
          <div className={`group relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-inter font-bold text-xl text-white">General</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between group/item hover:scale-105 transition-transform duration-300">
                  <div>
                    <h3 className="font-inter font-medium text-white">Language</h3>
                    <p className="font-inter text-gray-400 text-sm">Choose your preferred language</p>
                  </div>
                  <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl px-4 py-2 text-white font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-white/15 transition-all duration-300"
                  >
                    <option value="en" className="bg-gray-800">English</option>
                    <option value="es" className="bg-gray-800">Español</option>
                    <option value="fr" className="bg-gray-800">Français</option>
                    <option value="de" className="bg-gray-800">Deutsch</option>
                  </select>
                </div>

                <div className="flex items-center justify-between group/item hover:scale-105 transition-transform duration-300">
                  <div>
                    <h3 className="font-inter font-medium text-white">Dark Mode</h3>
                    <p className="font-inter text-gray-400 text-sm">Switch to dark theme</p>
                  </div>
                  <ToggleSwitch enabled={darkMode} onChange={() => setDarkMode(!darkMode)} />
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className={`group relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-inter font-bold text-xl text-white">Notifications</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between group/item hover:scale-105 transition-transform duration-300">
                  <div>
                    <h3 className="font-inter font-medium text-white">Push Notifications</h3>
                    <p className="font-inter text-gray-400 text-sm">Receive notifications about rating updates</p>
                  </div>
                  <ToggleSwitch enabled={notifications} onChange={() => setNotifications(!notifications)} />
                </div>
              </div>
            </div>
          </div>

          {/* Wallet Settings */}
          <div className={`group relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-inter font-bold text-xl text-white">Wallet</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between group/item hover:scale-105 transition-transform duration-300">
                  <div>
                    <h3 className="font-inter font-medium text-white">Auto-Connect Wallet</h3>
                    <p className="font-inter text-gray-400 text-sm">Automatically connect to your preferred wallet</p>
                  </div>
                  <ToggleSwitch enabled={autoConnect} onChange={() => setAutoConnect(!autoConnect)} />
                </div>

                <div className="border-t border-white/20 pt-6">
                  <h3 className="font-inter font-medium text-white mb-3">Connected Wallet</h3>
                  <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <p className="font-inter text-gray-400 text-sm">No wallet connected</p>
                    <button className="group mt-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-inter font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <span className="flex items-center gap-2">
                        <Wallet className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                        Connect Wallet
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className={`group relative transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-inter font-bold text-xl text-white">Privacy</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between group/item hover:scale-105 transition-transform duration-300">
                  <div>
                    <h3 className="font-inter font-medium text-white">Show in Analytics</h3>
                    <p className="font-inter text-gray-400 text-sm">Include your ratings in public analytics</p>
                  </div>
                  <ToggleSwitch enabled={showAnalytics} onChange={() => setShowAnalytics(!showAnalytics)} />
                </div>

                <div className="border-t border-white/20 pt-6">
                  <h3 className="font-inter font-medium text-white mb-3">Data Export</h3>
                  <p className="font-inter text-gray-400 text-sm mb-4">
                    Download your rating history and data
                  </p>
                  <button className="group px-4 py-2 bg-white/10 text-gray-300 rounded-xl font-inter font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <span className="flex items-center gap-2">
                      <Shield className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                      Export Data
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className={`flex justify-center transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={handleSaveSettings}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-inter font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                <Save className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Save Settings</span>
                <Sparkles className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;