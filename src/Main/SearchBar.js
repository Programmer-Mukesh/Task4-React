import React from "react";

const SearchBar = () => (
  <div className="searchBar">
    <div className="leftBar">
      <span className="lightGreyText">Get started today.</span>
      <button className="leftButtonBar">Post a job</button>
    </div>
    <div className="rightBar">
      <form action="">
        <label className="lightGreyText">Find a</label>
        <select className="selector">
          <option>Child Care Provider</option>
        </select>
        <label className="lightGreyText">in ZIP</label>
        <input className="zip" type="text" placeholder=" " />
        <label className="lightGreyText">witin</label>
        <select className="selector">
          <option>10 miles</option>
        </select>
        <button className="searchBtn">Search</button>
      </form>
    </div>
  </div>
);

export default SearchBar;
