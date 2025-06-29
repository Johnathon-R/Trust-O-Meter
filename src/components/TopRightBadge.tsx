import React from 'react';

const TopRightBadge: React.FC = () => {
  return (
    <div className="absolute top-4 right-4 z-50 flex gap-4">
      <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700/50 rounded-xl px-4 py-2 flex items-center gap-2">
        <span className="text-sm text-white dark:text-gray-200 font-inter">Powered by</span>
        <img src="/images/logo-black.png" alt="Algorand" className="h-6 w-auto" />
        <img src="/images/white_circle_360x360.png" alt="Bolt.new" className="h-6 w-auto" />
      </div>
    </div>
  );
};

export default TopRightBadge;
