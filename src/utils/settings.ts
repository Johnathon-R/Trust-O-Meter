export interface AppSettings {
  notifications: boolean;
  darkMode: boolean;
  language: string;
  showAnalytics: boolean;
}

export const getSettings = (): AppSettings => {
  const savedSettings = localStorage.getItem('trust-o-meter-settings');
  if (savedSettings) {
    return JSON.parse(savedSettings);
  }
  return {
    notifications: true,
    darkMode: false,
    language: 'en',
    showAnalytics: true
  };
};

export const getSetting = (key: keyof AppSettings): any => {
  const settings = getSettings();
  return settings[key];
};