import React, { useEffect, useState } from 'react';
import TrendList from '../components/TrendList';

const HomePage = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrends = async (query = '') => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://trend-collector-backend.onrender.com/api/trends`
      ); // Assuming this hits your backend API
      const data = await response.json();
      setTrends(data);
    } catch (error) {
      console.error('Error fetching trends:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTrends(); // Fetch initial trends on page load
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 font-poppins">
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">Trend Tracker</h1>
          <p className="text-lg mt-2">
            Discover the latest trends and insights
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
          </div>
        ) : trends.length > 0 ? (
          <TrendList trends={trends} />
        ) : (
          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-gray-600">
              No trends available. Try again later.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;
