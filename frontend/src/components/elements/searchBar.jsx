import React from "react";
import search from "../../assets/greySearch.png";
import "../css/search.css";

function SearchBar({ value, onChange }) {
  return (
    <div className="Searchbar">
      <img src={search} width="20px" height="20px" alt="" />
      <input
        type="text"
        placeholder="Search by name"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
