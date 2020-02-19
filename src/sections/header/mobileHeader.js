import React from "react";
import home from "../../assets/icons/home.svg";
import collection from "../../assets/icons/collection.svg";
import upload from "../../assets/icons/upload.svg";
import search from "../../assets/icons/search.svg";
import styles from '../header/Header.module.css';

export default () => {
  return (
    <header className={styles.container}>
      <ul className={styles.itemList}>
        <li >
          <a href="/home">
            <img src={home} alt="Home" />
          </a>
        </li>
        <li >
          <a href="/collections">
            <img src={collection} alt="Home" />
          </a>
        </li>
        <li >
          <a href="/upload">
            <img src={upload} alt="Home" />
          </a>
        </li>
        <li >
          <a href="/search">
            <img src={search} alt="Home" />
          </a>
        </li>
      </ul>
    </header>
  );
};