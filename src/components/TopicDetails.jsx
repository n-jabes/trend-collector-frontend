import React from 'react';

const TopicDetails = ({ topic }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">{topic.topic}</h2>
      <p className="text-gray-600">Trend Score: {topic.trendScore}</p>
      <p className="text-gray-600">News Mentions: {topic.newsMentions}</p>
      <h3 className="text-xl font-semibold">Related Queries</h3>
      <ul className="space-y-2">
        {topic.relatedQueries.map((query, index) => (
          <li key={index} className="text-gray-700">
            {query}
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold">Trends Data</h3>
      <div className="space-y-2">
        {topic.trendsData.map((trend, index) => (
          <p key={index} className="text-gray-700">
            {trend}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TopicDetails;
