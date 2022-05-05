import React from "react";
import "./FilterEth.scss";

const FilterEth = () => {
  return (
    <div className="search-bar">
      <div className="search-bar-title"> 
        <h1>The Ethereum Blockchain Explorer</h1>
      </div>
      <div className="select-search">
        <select defaultValue="" className="select-search-type custom-arrow-select">
          <option value="" disabled>
            All Filters
          </option>
          <option value="1">Addresses</option>
          <option value="2">Tokens</option>
          <option value="3">Name Tags</option>
          <option value="4">Labels</option>
          <option value="5">Websites</option>
        </select>
        <input
          className="search-input"
          type="text"
          placeholder="Search by Address / Txn Hash / Block / Token / Ens"
        />
        <button className="search-button" type="submit">
          <i className="fas fa-search fa-md"></i>
        </button>
      </div>
    </div>
  );
};

export default FilterEth;
