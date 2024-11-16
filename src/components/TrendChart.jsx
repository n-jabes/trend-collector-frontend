import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TrendChart = ({ trends }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Cleanup the old chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Define the chart data
    const data = {
      labels: trends.map((trend) => trend.keyword),
      datasets: [
        {
          label: 'Popularity',
          data: trends.map((trend) => trend.popularity),
          borderColor: 'rgba(75,192,192,1)',
          fill: true,
        },
      ],
    };

    // Create a new chart instance
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new ChartJS(ctx, {
      type: 'line', // Line chart type
      data: data,
      options: {
        responsive: true,
        scales: {
          x: { type: 'category' }, // 'category' scale for x-axis (keyword labels)
          y: { type: 'linear', beginAtZero: true }, // Linear scale for y-axis (popularity)
        },
        plugins: {
          title: {
            display: true,
            text: 'Trend Popularity Over Time',
          },
        },
      },
    });

    // Cleanup function for the chart instance when the component is unmounted
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [trends]); // Re-run the effect when trends change

  return <canvas ref={chartRef}></canvas>;
};

export default TrendChart;
