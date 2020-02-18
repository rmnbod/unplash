import React from 'react';
import searchIcon from '../../assets/icons/search.svg'
import styles from './Search.module.css';

const searchBar = () => (
    <div className={styles.formContainer}>
        <form action="/action_page.php">
            <button id='search-btn' type="submit">
                <img src={searchIcon} alt='Search' />
            </button>
            <input type="text" placeholder="Search photos" name="search" />
        </form>
    </div>
);

export default searchBar;