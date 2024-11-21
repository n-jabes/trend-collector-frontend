import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TrendCard = ({ trend }) => {
  const { keyword, newsMentions, timeline_data, trendScore } = trend;

  // Generate a gradient for the chart background
  const createGradient = (ctx, chartArea) => {
    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    gradient.addColorStop(0, "rgba(34,193,195, 0.2)"); // Top color
    gradient.addColorStop(1, "rgba(253,187,45, 0.2)"); // Bottom color
    return gradient;
  };

  const chartData = {
    labels: timeline_data.map((_, index) => `Week ${index + 1}`),
    datasets: [
      {
        label: "Popularity",
        data: timeline_data.map((data) => data.popularity),
        borderColor: "#4CAF50",
        backgroundColor: (context) => {
          const { ctx, chartArea } = context.chart;
          if (!chartArea) return null; // Chart hasn't been rendered yet
          return createGradient(ctx, chartArea);
        },
        borderWidth: 2,
        fill: true,
        tension: 0.4, // Makes the line smooth
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (Weeks)",
          color: "#888", // Axis title color
          font: { family: "Poppins", size: 12 },
        },
        grid: {
          display: false, // Hide vertical gridlines
        },
      },
      y: {
        title: {
          display: true,
          text: "Popularity",
          color: "#888",
          font: { family: "Poppins", size: 12 },
        },
        grid: {
          color: "rgba(200,200,200,0.2)", // Light gridline color
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#444", // Legend text color
          font: { family: "Poppins", size: 14 },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.7)", // Dark background for tooltip
        titleFont: { family: "Poppins", size: 14 },
        bodyFont: { family: "Poppins", size: 12 },
        cornerRadius: 8,
        padding: 10,
      },
    },
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-md rounded-md">
      <h3 className="text-xl font-semibold text-blue-600">{keyword}</h3>
      <p className="text-sm text-gray-500">News Mentions: {newsMentions}</p>
      <div className="my-4" style={{ height: "300px" }}>
        <Line data={chartData} options={options} />
      </div>
      <p className="text-sm font-semibold">Trend Score: {trendScore}</p>
    </div>
  );
};

export default TrendCard;
