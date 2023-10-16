import React, { useState } from "react";
import search from "../../assets/greySearch.png";
import "../css/search.css";
function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="Searchbar">
      <img src={search} width="20px" height="20px" alt="" />
      <input
        type="text"
        placeholder="Hae"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
