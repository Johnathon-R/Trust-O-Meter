import React, { useState, useMemo, useEffect } from 'react';
import { Star } from 'lucide-react'; // Assumes lucide-react is installed
import { RatingData } from '../utils/customTypes';
import { searchRatings } from '../backend/algorand';
import { useTranslation } from '../backend/useTranslation.ts';

{/* Horizontal bar version */ }
export default function RatingHistogram() {
  const [binCount, setBinCount] = useState(5);
  const [histogramData, setHistogramData] = useState<number[]>([]);
  const [ratings, setRatings] = useState<RatingData[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const loadHistogram = async () => {
      const ratings: RatingData[] = await searchRatings();
      setRatings(ratings);

      const bins = new Array(binCount).fill(0);
      const binSize = 5/binCount;

      ratings.forEach(r => {
        const index = Math.min(Math.floor(r.rating / binSize), binCount - 1);
        bins[index]++;
      });

      setHistogramData(bins);
    }

    loadHistogram();
  }, [binCount]);

  const maxCount = Math.max(...histogramData);
  const binSize = 5 / binCount;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">{t.analytics.ratingDistribution}</h2>

      {/* Bin Slider */}
      <div className="mb-6">
        <label htmlFor="bin-slider" className="text-white font-medium mr-4">
          {t.analytics.numberOfBins}: {binCount}
        </label>
        <input
          id="bin-slider"
          type="range"
          min={5}
          max={20}
          value={binCount}
          onChange={(e) => setBinCount(parseInt(e.target.value))}
          className="w-64"
        />
      </div>

      {/* Histogram */}
      <div className="space-y-4">
        {histogramData.map((count, i) => {
          const start = (i * binSize).toFixed(1);
          const end = ((i + 1) * binSize).toFixed(1);
          const percentage = (count / ratings.length) * 100;
          const widthPercent = (count / maxCount) * 100;

          return (
            <div key={i} className="flex items-center space-x-4 group/bar hover:scale-[1.01] transition-transform duration-300">
              {/* Label */}
              <div className="w-24 flex items-center justify-between text-white text-sm font-mono">
                <span>{start}</span>
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>{end}</span>
              </div>

              {/* Bar */}
              <div className="flex-1 bg-white/10 dark:bg-gray-700/50 rounded-full h-4 overflow-hidden backdrop-blur-lg">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 transition-all duration-700"
                  style={{ width: `${widthPercent}%` }}
                ></div>
              </div>

              {/* Count */}
              <div className="w-10 text-right text-white font-medium">{count}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}