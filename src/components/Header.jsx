import React from "react";
import logo from "../ocr-2-removebg-preview.png";
import "./header.css";

const Header = ({ pokeName, setpokeName, handleKeyPress, handleSearch }) => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Pokemon Logo" />
      </div>
      <div className="searchArea">
        <input
          className="search"
          type="text"
          value={pokeName}
          placeholder="Search card ..."
          onChange={(event) => {
            setpokeName(event.target.value);
          }}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSearch}>
          <i className="fa-solid fa-search"></i>
        </button>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Header;
