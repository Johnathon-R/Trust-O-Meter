import React, { useState } from 'react';
import { Settings, Bell, Shield, Wallet, Moon, Sun, Globe, Save } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [autoConnect, setAutoConnect] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(true);

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

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Settings className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="font-inter font-bold text-3xl text-gray-900 mb-2">
            Settings
          </h1>
          <p className="font-inter text-lg text-gray-600">
            Customize your Trust-O-Meter experience
          </p>
        </div>

        <div className="space-y-8">
          {/* General Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="font-inter font-bold text-xl text-gray-900">General</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-inter font-medium text-gray-900">Language</h3>
                  <p className="font-inter text-gray-500 text-sm">Choose your preferred language</p>
                </div>
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-gray-900 font-inter focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-inter font-medium text-gray-900">Dark Mode</h3>
                  <p className="font-inter text-gray-500 text-sm">Switch to dark theme</p>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    darkMode ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      darkMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="font-inter font-bold text-xl text-gray-900">Notifications</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-inter font-medium text-gray-900">Push Notifications</h3>
                  <p className="font-inter text-gray-500 text-sm">Receive notifications about rating updates</p>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notifications ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Wallet Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <Wallet className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="font-inter font-bold text-xl text-gray-900">Wallet</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-inter font-medium text-gray-900">Auto-Connect Wallet</h3>
                  <p className="font-inter text-gray-500 text-sm">Automatically connect to your preferred wallet</p>
                </div>
                <button
                  onClick={() => setAutoConnect(!autoConnect)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    autoConnect ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      autoConnect ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-inter font-medium text-gray-900 mb-3">Connected Wallet</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-inter text-gray-600 text-sm">No wallet connected</p>
                  <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-inter font-medium hover:bg-blue-700 transition-colors duration-200">
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="font-inter font-bold text-xl text-gray-900">Privacy</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-inter font-medium text-gray-900">Show in Analytics</h3>
                  <p className="font-inter text-gray-500 text-sm">Include your ratings in public analytics</p>
                </div>
                <button
                  onClick={() => setShowAnalytics(!showAnalytics)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    showAnalytics ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      showAnalytics ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-inter font-medium text-gray-900 mb-3">Data Export</h3>
                <p className="font-inter text-gray-500 text-sm mb-4">
                  Download your rating history and data
                </p>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-inter font-medium hover:bg-gray-200 transition-colors duration-200">
                  Export Data
                </button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSaveSettings}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-inter font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <Save className="w-5 h-5" />
              <span>Save Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;