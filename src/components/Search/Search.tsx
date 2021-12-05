import React from "react";

import "./search.scss";

interface ISearchProps {
  query: string;
  searchHandler: (query: string) => void;
}

const Search = (props: ISearchProps) => {
  return (
    <div className="search-wrapper">
      <h1 className="search-heading">Add via MPN</h1>

      <div className="search-content-wrapper">
        <div className="search-bar-wrapper">
          <img className="icon" src="/images/icons/search-icon.svg" />
          <input
            className="input-bar"
            onChange={(e) => props.searchHandler(e.target.value)}
            type="text"
          />
        </div>

        <button className="action-button">Add manually</button>
      </div>
    </div>
  );
};

export default Search;
