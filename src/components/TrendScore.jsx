import React from 'react';

const TrendScore = ({ score }) => {
  return (
    <div className="flex items-center mt-2">
      <span className="text-lg font-medium">Trend Score: {score}</span>
      <div className="ml-4 w-full bg-gray-200 rounded-full">
        <div
          className={`bg-green-500 text-xs leading-none py-1 text-center text-white rounded-full`}
          style={{ width: `${score}%` }}
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default TrendScore;
