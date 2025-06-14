import  React, { useState, useRef } from "react";
import { Star } from 'lucide-react';

/**
 * @brief Star rating properties
 */
type StarSliderProps = {
    value?: number;
    onChange?: (value: number) => void;
    max?: number;
    precision?: number;
}

/**
 * @brief Star rating functionality
 */
const StarRating: React.FC<StarSliderProps> = ({ 
    value=0, onChange, max=5, precision = 0.01}) => {
        
    const [hoverValue, setHoverValue] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const computeValue = (event: React.MouseEvent): number | null => {
        // Get the bounding box
        const rect = containerRef.current?.getBoundingClientRect();

        // Check for hover
        if (!rect) return null;

        const x = event.clientX - rect.left;
        const rawValue = Math.min(Math.max((x / rect.width) * max, 0), max);
        return Math.min(Math.max(Math.round(rawValue / precision) * precision, 0), max);
    };

    const handleMouseMove = (event: React.MouseEvent) => {
        const newVal = computeValue(event);
        if (newVal !== null) {
            setHoverValue(newVal);
        }
    };

    const handleMouseLeave = () => setHoverValue(null);

    const handleClick = (event: React.MouseEvent) => {
        const newVal = computeValue(event);

        /** 
         * @todo Fix the gurad clause even though it works.
         */
        if (hoverValue !== null && onChange) {
            onChange(parseFloat(newVal.toFixed(2)));
        }
    };
   
    const displayValue = hoverValue !== null ? hoverValue : value;

    const getStarColor = (val: number) => {
        if (val < 2) return 'text-red-400 fill-red-400';
        if (val < 4) return 'text-orange-400 fill-orange-400';
        return 'text-yellow-400 fill-yellow-400';
    };

    return (
        <div 
            ref={containerRef} 
            className="flex justify-center gap-1 w-fit cursor-pointer select-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}>
            {[...Array(max)].map((_, i) => {
                const fill = Math.min(Math.max(displayValue - i, 0), 1) * 100;

                return (
                    <div key={i} className="relative w-6 h-6">
                        {/* Empty star (background) */}
                        <Star className="absolute w-6 h-6 text-gray-300"/>

                        {/* Filled star (foreground mask) */}
                        <div
                            className="absolute top-0 left-0 h-full overflow-hidden text-yellow-400"
                            style={{ width: `${fill}%` }}>
                            <Star className={`w-6 h-6 ${getStarColor(displayValue)}`}/>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default StarRating;