import React, { useState } from "react";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">Exploding Topics Clone</h1>
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          className="border border-gray-300 rounded-l-md px-4 py-2 w-64"
          placeholder="Search for trends..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md"
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
