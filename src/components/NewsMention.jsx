import React from 'react';

const NewsMention = ({ count }) => {
  return (
    <div className="mt-2 text-sm text-gray-500">
      <strong>{count}</strong> news mentions
    </div>
  );
};

export default NewsMention;
