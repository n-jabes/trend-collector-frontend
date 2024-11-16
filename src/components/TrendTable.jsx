import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TrendTable = ({ trends }) => {
  if (!trends || trends.length === 0) {
    return <p>No trends available</p>;
  }

  return (
    <TableContainer component={Paper} className="rounded-lg shadow-lg overflow-hidden">
    <Table className="min-w-full">
      <TableHead>
        <TableRow className="bg-gray-100">
          <TableCell className="font-bold text-sm text-gray-700 px-6 py-4">Keyword</TableCell>
          <TableCell className="font-bold text-sm text-gray-700 px-6 py-4">Description</TableCell>
          <TableCell className="font-bold text-sm text-gray-700 px-6 py-4">Popularity</TableCell>
          <TableCell className="font-bold text-sm text-gray-700 px-6 py-4">Source</TableCell>
          <TableCell className="font-bold text-sm text-gray-700 px-6 py-4">Time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {trends.map((trend) => (
          <TableRow key={trend._id} className="hover:bg-gray-50">
            <TableCell className="px-6 py-4">{trend.keyword}</TableCell>
            <TableCell className="px-6 py-4">{trend.description || 'N/A'}</TableCell>
            <TableCell className="px-6 py-4">{trend.popularity}</TableCell>
            <TableCell className="px-6 py-4">{trend.source}</TableCell>
            <TableCell className="px-6 py-4">{new Date(trend.time).toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  
  );
};

export default TrendTable;
