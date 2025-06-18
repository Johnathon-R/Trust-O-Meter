import React, { useState, useEffect } from 'react';
import { Settings, Bell, Shield, Moon, Sun, Save, Sparkles, Download, Trash2 } from 'lucide-react';
import { exportRatings, clearAllRatings, getRatings } from '../utils/storage';

const SettingsPage: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [pendingDarkMode, setPendingDarkMode] = useState(false); // New state for pending changes
  const [language, setLanguage] = useState('en');
  const [showAnalytics, setShowAnalytics] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    setIsVisible(true);
    
    // Load settings from localStorage on component mount
    const savedSettings = localStorage.getItem('trust-o-meter-settings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setNotifications(settings.notifications ?? true);
      setDarkMode(settings.darkMode ?? false);
      setPendingDarkMode(settings.darkMode ?? false); // Initialize pendingDarkMode
      setLanguage(settings.language ?? 'en');
      setShowAnalytics(settings.showAnalytics ?? true);
    }

    // Check if dark mode is already enabled
    const isDarkMode = document.documentElement.classList.contains('dark');
    if (isDarkMode !== darkMode) {
      setDarkMode(isDarkMode);
      setPendingDarkMode(isDarkMode);
    }
  }, []);

  const handleSaveSettings = () => {
    const settings = {
      notifications,
      darkMode: pendingDarkMode, // Use pendingDarkMode instead of darkMode
      language,
      showAnalytics
    };
    localStorage.setItem('trust-o-meter-settings', JSON.stringify(settings));
    
    // Apply the pending dark mode change
    if (pendingDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Update the actual darkMode state to match the pending state
    setDarkMode(pendingDarkMode);
    
    setSaveMessage('Settings saved successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleToggleDarkMode = () => {
    // Only update the pending state, not the actual dark mode
    setPendingDarkMode(!pendingDarkMode);
  };

  const handleExportData = () => {
    const data = exportRatings();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `trust-o-meter-ratings-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleClearAllData = () => {
    clearAllRatings();
    setShowClearConfirm(false);
  };

  const handleToggleAnalytics = () => {
    setShowAnalytics(!showAnalytics);
    console.log('Analytics visibility toggled:', !showAnalytics);
  };

  const totalRatings = getRatings().length;

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
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-black py-12 px-4 relative overflow-hidden transition-all duration-500 ${
      darkMode ? 'dark' : ''
    }`}>
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
          <p className="font-inter text-lg text-gray-300 dark:text-gray-400">
            Customize your Trust-O-Meter experience
          </p>
        </div>

        <div className="space-y-8">
          {/* General Settings */}
          <div className={`group relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 hover:bg-white/15 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-inter font-bold text-xl text-white dark:text-gray-100">General</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between group/item hover:scale-105 transition-transform duration-300">
                  <div>
                    <h3 className="font-inter font-medium text-white dark:text-gray-200">Language</h3>
                    <p className="font-inter text-gray-400 dark:text-gray-500 text-sm">Choose your preferred language</p>
                  </div>
                  <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-lg border border-white/30 dark:border-gray-600/50 rounded-xl px-4 py-2 text-white dark:text-gray-200 font-inter focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-white/15 dark:hover:bg-gray-700/70 transition-all duration-300"
                  >
                    <option value="en" className="bg-gray-800 dark:bg-gray-900">English</option>
                    <option value="es" className="bg-gray-800 dark:bg-gray-900">Español</option>
                    <option value="fr" className="bg-gray-800 dark:bg-gray-900">Français</option>
                    <option value="de" className="bg-gray-800 dark:bg-gray-900">Deutsch</option>
                  </select>
                </div>

                <div className="flex items-center justify-between group/item hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                      {pendingDarkMode ? <Moon className="w-4 h-4 text-white" /> : <Sun className="w-4 h-4 text-white" />}
                    </div>
                    <div>
                      <h3 className="font-inter font-medium text-white dark:text-gray-200">Dark Mode</h3>
                      <p className="font-inter text-gray-400 dark:text-gray-500 text-sm">Switch to dark theme</p>
                    </div>
                  </div>
                  <ToggleSwitch enabled={pendingDarkMode} onChange={handleToggleDarkMode} />
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className={`group relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 hover:bg-white/15 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-inter font-bold text-xl text-white dark:text-gray-100">Notifications</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between group/item hover:scale-105 transition-transform duration-300">
                  <div>
                    <h3 className="font-inter font-medium text-white dark:text-gray-200">Push Notifications</h3>
                    <p className="font-inter text-gray-400 dark:text-gray-500 text-sm">Receive notifications about rating updates</p>
                  </div>
                  <ToggleSwitch enabled={notifications} onChange={() => setNotifications(!notifications)} />
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className={`group relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 hover:bg-white/15 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-inter font-bold text-xl text-white dark:text-gray-100">Privacy & Data</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between group/item hover:scale-105 transition-transform duration-300">
                  <div>
                    <h3 className="font-inter font-medium text-white dark:text-gray-200">Show in Analytics</h3>
                    <p className="font-inter text-gray-400 dark:text-gray-500 text-sm">Include your ratings in public analytics</p>
                  </div>
                  <ToggleSwitch enabled={showAnalytics} onChange={handleToggleAnalytics} />
                </div>

                <div className="border-t border-white/20 dark:border-gray-700/50 pt-6">
                  <h3 className="font-inter font-medium text-white dark:text-gray-200 mb-3">Data Export</h3>
                  <p className="font-inter text-gray-400 dark:text-gray-500 text-sm mb-4">
                    You have {totalRatings} rating{totalRatings !== 1 ? 's' : ''} stored locally
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={handleExportData}
                      className="group px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-inter font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                    >
                      <Download className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Export Data</span>
                    </button>
                    
                    <button 
                      onClick={() => setShowClearConfirm(true)}
                      disabled={totalRatings === 0}
                      className="group px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl font-inter font-medium hover:from-red-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      <Trash2 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Clear All Data</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className={`flex justify-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

          {/* Save Success Message */}
          {saveMessage && (
            <div className="flex justify-center">
              <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-6 py-3 rounded-xl font-inter font-medium">
                {saveMessage}
              </div>
            </div>
          )}
        </div>

        {/* Clear Confirmation Modal */}
        {showClearConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full">
              <h3 className="font-inter font-bold text-xl text-gray-900 dark:text-gray-100 mb-4">
                Clear All Data?
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                This action cannot be undone. All your ratings ({totalRatings} total) will be permanently deleted from local storage.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-inter font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleClearAllData}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-inter font-medium hover:bg-red-700 transition-colors duration-200"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;