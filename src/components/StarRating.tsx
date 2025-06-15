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
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-10 h-10'
  };

  return (
    <div className="flex justify-center space-x-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => !readonly && onRatingChange(star)}
          className={`group relative transition-all duration-300 ${
            readonly ? 'cursor-default' : 'cursor-pointer hover:scale-125 hover:-translate-y-1'
          }`}
        >
          <div className={`absolute inset-0 rounded-full blur-md transition-all duration-300 ${
            star <= rating ? 'bg-yellow-400/50 scale-150' : 'bg-transparent'
          } ${!readonly ? 'group-hover:bg-yellow-400/30 group-hover:scale-150' : ''}`}></div>
          <Star
            className={`${sizeClasses[size]} relative transition-all duration-300 ${
              star <= rating
                ? 'text-yellow-400 fill-yellow-400 drop-shadow-lg'
                : 'text-gray-400 hover:text-gray-300'
            } ${!readonly ? 'group-hover:drop-shadow-2xl' : ''}`}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;