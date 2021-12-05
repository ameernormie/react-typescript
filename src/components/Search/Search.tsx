import React from "react";

import "./search.scss";

const Search = () => {
  return (
    <div className="search-wrapper">
      <h1 className="search-heading">Add via MPN</h1>

      <div className="search-content-wrapper">
        <div className="search-bar-wrapper">
          <img className="icon" src="/images/icons/search-icon.svg" />
          <input className="input-bar" type="text" />
        </div>
        
        <button className="action-button">Add manually</button>
      </div>
    </div>
  );
};

export default Search;
