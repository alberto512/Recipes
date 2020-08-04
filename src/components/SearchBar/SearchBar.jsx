import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <React.Fragment>
      <div className="container">
        <form method="get" action="">
          <div className="tb">
            <div className="td">
              <input
                className="input-bar"
                type="text"
                placeholder="Search"
                required
              />
            </div>
            <div className="td" id="cover">
              <button className="button-bar" type="submit">
                <div className="circle"></div>
                <span className="button-span"></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
