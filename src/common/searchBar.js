import React from 'react';
import searchIcon from '../assets/icons/search.svg'
import styles from './SearchBar.module.css';

const searchBar = () => (
    <div className={styles.container}>
        <form action="/search">
            <button type="submit">
                <img src={searchIcon} alt='Search' />
            </button>
            <input type="text" placeholder="Search photos" name="search" />
        </form>
    </div>
);

export default searchBar;