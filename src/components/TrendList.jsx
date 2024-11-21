import React from "react";
import TrendCard from "./TrendCard";

const TrendList = ({ trends }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trends.map((trend) => (
        <TrendCard key={trend._id} trend={trend} />
      ))}
    </div>
  );
};

export default TrendList;
