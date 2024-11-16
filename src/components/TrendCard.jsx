import React from 'react';

const TrendCard = ({ trend }) => (
  <div className="p-4 bg-white rounded-lg shadow-md">
    <h3 className="text-xl font-bold">{trend.keyword}</h3>
    <p>{trend.description}</p>
    <p className="text-gray-500">Popularity: {trend.popularity}</p>
    <p className="text-sm text-gray-400">Source: {trend.source}</p>
  </div>
);

export default TrendCard;
