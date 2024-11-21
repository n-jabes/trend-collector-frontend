import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="mb-4 flex items-center gap-10">
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          className="p-2 border border-gray-300 rounded-lg w-full"
          placeholder="Search for a topic..."
        />
        <button type="submit" className="py-2 px-4 bg-blue-400 rounded-lg ">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
