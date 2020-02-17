import React from "react";
import home from "../assets/icons/home.svg";
import collection from "../assets/icons/collection.svg";
import upload from "../assets/icons/upload.svg";
import search from "../assets/icons/search.svg";
import "../App.css";

const header = () => {
  return (
    <header>
      <ul id="nav-list">
        <li>
          <a className="header-nav-item" href="#home">
            <img src={home} alt="Home" />
          </a>
        </li>
        <li>
          <a className="header-nav-item" href="#collections">
            <img src={collection} alt="Home" />
          </a>
        </li>
        <li>
          <a className="header-nav-item" href="#upload">
            <img src={upload} alt="Home" />
          </a>
        </li>
        <li>
          <a className="header-nav-item" href="#search">
            <img src={search} alt="Home" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default header;
