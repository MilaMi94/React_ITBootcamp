import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleReset = () => {
    setSearch("");
  };
  return (
    <form className="form-search" onSubmit={handleSearch}>
      <input
        className="search-input"
        value={search}
        placeholder="Search for favorite movie"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button className="form-search-btn" type="submit" onClick={handleSearch}>
        <span>Search</span>
      </button>
    </form>
  );
};

export default Search;
