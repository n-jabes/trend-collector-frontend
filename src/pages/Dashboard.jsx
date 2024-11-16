import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrendCard from '../components/TrendCard';
import TrendChart from '../components/TrendChart';

const Dashboard = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const response = await axios.get('https://trend-collector-backend.onrender.com/api/trends');
        console.log('trend data: ', response.data);
        setTrends(response.data);
      } catch (err) {
        setError('Failed to fetch trends data'); // Handle errors
        console.error('Error fetching trends data:', err);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchTrends();
  }, []);

  // Conditional rendering
  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while data is fetching
  }

  if (error) {
    return <div>{error}</div>; // Show error message if something went wrong
  }

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold">Exploding Topics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trends.length > 0 ? (
          trends.map((trend) => <TrendCard key={trend.keyword} trend={trend} />)
        ) : (
          <div>No trends available</div>
        )}
      </div>
      {/* {trends.length > 0 && <TrendChart trends={trends} />} */}
    </div>
  );
};

export default Dashboard;
