import React from 'react';

export const Button = ({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-xl transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};