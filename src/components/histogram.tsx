import React, { useState, useMemo, useEffect } from 'react';
import { Star } from 'lucide-react'; // Assumes lucide-react is installed
import { RatingData } from '../utils/customTypes';
import { searchRatings } from '../backend/algorand';




{/* Horizontal bar version */ }
export default function RatingHistogram() {
  const [binCount, setBinCount] = useState(5);
  const [histogramData, setHistogramData] = useState<number[]>([]);
  const [ratings, setRatings] = useState<RatingData[]>([]);

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
      <h2 className="text-2xl font-bold text-white mb-6">Rating Distribution</h2>

      {/* Bin Slider */}
      <div className="mb-6">
        <label htmlFor="bin-slider" className="text-white font-medium mr-4">
          Number of Bins: {binCount}
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


{/* 

  Not working vertical bar histogram

  ** ISSUE: vertical bars do not display

export default function RatingHistogram() {
  const [binCount, setBinCount] = useState(5);

  const histogramData = useMemo(() => {
    const bins = new Array(binCount).fill(0);
    const binSize = 5 / binCount;

    getRatings().forEach((r) => {
      const index = Math.min(Math.floor(r.rating / binSize), binCount - 1);
      bins[index]++;
    });

    return bins;
  }, [binCount]);

  const maxCount = Math.max(...histogramData);
  const binSize = 5 / binCount;

  return (
    <div className="p-6 max-w-5xl mx-auto text-white">
      <h2 className="text-2xl font-bold mb-6">Rating Distribution (Vertical Histogram)</h2>

      {/* Slider Control /}
      <div className="mb-10">
        <label htmlFor="bin-slider" className="font-medium mr-4">
          Number of Bins: {binCount}
        </label>
        <input
          id="bin-slider"
          type="range"
          min={5}
          max={20}
          value={binCount}
          onChange={(e) => setBinCount(parseInt(e.target.value))}
          className="w-64 align-middle"
        />
      </div>

      {/* Vertical Histogram /}
      <div className="relative flex items-end justify-between h-64 w-full gap-2 border-t border-white/20 pt-4">
        {histogramData.map((count, i) => {
          const start = (i * binSize).toFixed(1);
          const end = ((i + 1) * binSize).toFixed(1);
          const heightRatio = maxCount > 0 ? count / maxCount : 0;
          const barHeight = heightRatio * 100;

          return (
            <div key={i} className="flex flex-col items-center flex-1">
              {/* Bar /}
              <div
                className="w-6 rounded-t-md bg-gradient-to-t from-blue-500 to-purple-600 transition-all duration-700"
                style={{ height: `${barHeight}%` }}
              ></div>

              {/* Count /}
              <span className="mt-2 text-sm font-mono">{count != 0 ? count : null}</span>

              {/* Label 
              <div className="mt-2 text-xs text-center leading-tight font-mono">
                <div>{start}</div>
                <Star className="w-3 h-3 mx-auto text-yellow-400 fill-yellow-400" />
                <div>{end}</div>
              </div>
              /}
            </div>
          );
        })}
      </div>
    </div>
  );
}

*/}