import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  onRatingChange, 
  readonly = false, 
  size = 'lg' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className="flex justify-center space-x-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => !readonly && onRatingChange(star)}
          className={`transition-all duration-300 ${
            readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110 active:scale-95'
          }`}
        >
          <Star
            className={`${sizeClasses[size]} transition-all duration-300 ${
              star <= rating
                ? 'text-yellow-400 fill-yellow-400 drop-shadow-lg shadow-yellow-400/50'
                : 'text-gray-600 hover:text-gray-400'
            } ${!readonly && star <= rating ? 'animate-pulse' : ''}`}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;