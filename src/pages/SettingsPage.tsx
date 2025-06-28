import React, { useState, useEffect } from 'react';
import { Settings, Bell, Shield, Moon, Sun, Download, Trash2 } from 'lucide-react';
import { exportRatings } from '../backend/functionality';
import { searchRatings } from '../backend/algorand';
import { RatingData } from '../utils/customTypes';
import { t, getCurrentLanguage, type Language } from '../utils/i18n';

const SettingsPage: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [showAnalytics, setShowAnalytics] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [ratings, setRatings] = useState<RatingData[]>([]);

  const saveSettings = () => {
    const settings = {
      notifications,
      darkMode,
      language,
      showAnalytics
    };
    localStorage.setItem('trust-o-meter-settings', JSON.stringify(settings));
    
    // Apply dark mode immediately
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Load settings on component mount
  useEffect(() => {
    setIsVisible(true);

    const savedSettings = localStorage.getItem('trust-o-meter-settings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setNotifications(settings.notifications ?? true);
      setDarkMode(settings.darkMode ?? false);
      setLanguage(settings.language ?? 'en');
      setShowAnalytics(settings.showAnalytics ?? true);
    }

    // Check if dark mode is already enabled
    const isDarkMode = document.documentElement.classList.contains('dark');
    if (isDarkMode !== darkMode) {
      setDarkMode(isDarkMode);
    }

    // Fetch the ratings from backend
    const fetchRatings = async () => {
      const data = await searchRatings();
      setRatings(data);
    };

    fetchRatings();
  }, []);

  // Save settings when they change (but not on initial load)
  useEffect(() => {
    if (isVisible) {
      saveSettings();
    }
  }, [notifications, darkMode, language, showAnalytics, isVisible]);

  const handleExportData = () => {
    const data = JSON.stringify(ratings, null, 2);
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

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value as Language;
    setLanguage(newLanguage);
    
    // Reload page after a short delay to apply language changes
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const totalRatings = ratings.length;

  const ToggleSwitch = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ${enabled ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-600'} hover:scale-110`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-all duration-300 ${enabled ? 'translate-x-6 shadow-lg' : 'translate-x-1'}`}
      />
    </button>
  );

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-black py-12 px-4 relative overflow-hidden transition-all duration-500 ${darkMode ? 'dark' : ''
      }`}>
      {/* Background elements remain the same */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

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
            {t('settingsTitle')}
          </h1>
          <p className="font-inter text-lg text-gray-300 dark:text-gray-400">
            {t('customizeExperience')}
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
                <h2 className="font-inter font-bold text-xl text-white dark:text-gray-100">{t('general')}</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between group/item hover:scale-105 transition-transform duration-300">
                  <div>
                    <h3 className="font-inter font-medium text-white dark:text-gray-200">{t('language')}</h3>
                    <p className="font-inter text-gray-400 dark:text-gray-500 text-sm">{t('chooseLanguage')}</p>
                  </div>
                  <select
                    value={language}
                    onChange={handleLanguageChange}
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
                      {darkMode ? <Moon className="w-4 h-4 text-white" /> : <Sun className="w-4 h-4 text-white" />}
                    </div>
                    <div>
                      <h3 className="font-inter font-medium text-white dark:text-gray-200">{t('darkMode')}</h3>
                      <p className="font-inter text-gray-400 dark:text-gray-500 text-sm">{t('switchDarkTheme')}</p>
                    </div>
                  </div>
                  <ToggleSwitch enabled={darkMode} onChange={() => setDarkMode(!darkMode)} />
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
                <h2 className="font-inter font-bold text-xl text-white dark:text-gray-100">{t('notifications')}</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between group/item hover:scale-105 transition-transform duration-300">
                  <div>
                    <h3 className="font-inter font-medium text-white dark:text-gray-200">{t('pushNotifications')}</h3>
                    <p className="font-inter text-gray-400 dark:text-gray-500 text-sm">{t('receiveNotifications')}</p>
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
                <h2 className="font-inter font-bold text-xl text-white dark:text-gray-100">{t('privacyData')}</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between group/item hover:scale-105 transition-transform duration-300">
                  <div>
                    <h3 className="font-inter font-medium text-white dark:text-gray-200">{t('showInAnalytics')}</h3>
                    <p className="font-inter text-gray-400 dark:text-gray-500 text-sm">{t('includeRatingsAnalytics')}</p>
                  </div>
                  <ToggleSwitch enabled={showAnalytics} onChange={() => setShowAnalytics(!showAnalytics)} />
                </div>

                <div className="border-t border-white/20 dark:border-gray-700/50 pt-6">
                  <h3 className="font-inter font-medium text-white dark:text-gray-200 mb-3">{t('dataExport')}</h3>
                  <p className="font-inter text-gray-400 dark:text-gray-500 text-sm mb-4">
                    {`${totalRatings} ${totalRatings !== 1 ? t('ratings') : t('ratingsStored')}`}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleExportData}
                      className="group px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-inter font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                    >
                      <Download className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                      <span>{t('exportData')}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clear Confirmation Modal */}
        {showClearConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full">
              <h3 className="font-inter font-bold text-xl text-gray-900 dark:text-gray-100 mb-4">
                {t('clearAllDataConfirm')}
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                {`${t('actionCannotUndone')} (${totalRatings} ${t('totalRatings').toLowerCase()})`}
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-inter font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  {t('cancel')}
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