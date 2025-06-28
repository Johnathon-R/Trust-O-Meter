import { useState, useEffect } from 'react';
import { Language, Translations, getTranslations, getCurrentLanguage } from '../utils/i18n';

export function useTranslation() {
  const [language, setLanguage] = useState<Language>(getCurrentLanguage());
  const [translations, setTranslations] = useState<Translations>(getTranslations(language));

  useEffect(() => {
    const handleStorageChange = () => {
      const newLanguage = getCurrentLanguage();
      setLanguage(newLanguage);
      setTranslations(getTranslations(newLanguage));
    };

    // Listen for storage changes
    window.addEventListener('storage', handleStorageChange);
    
    // Also check for changes periodically (for same-tab updates)
    const interval = setInterval(handleStorageChange, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    const currentSettings = JSON.parse(localStorage.getItem('trust-o-meter-settings') || '{}');
    const updatedSettings = { ...currentSettings, language: newLanguage };
    localStorage.setItem('trust-o-meter-settings', JSON.stringify(updatedSettings));
    
    setLanguage(newLanguage);
    setTranslations(getTranslations(newLanguage));
  };

  return {
    language,
    t: translations,
    changeLanguage,
  };
}