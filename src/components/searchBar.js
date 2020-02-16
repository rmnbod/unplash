import React from 'react';
import search from '../assets/icons/search.svg'

const searchBar = () => (
    <div id='search-form'>
        <form id='main-search-input' action="/action_page.php">
            <button id='search-btn' type="submit">
                <img src={search} alt='Search' />
            </button>
            <input type="text" placeholder="Search photos" name="search" />
        </form>
    </div>
);

export default searchBar;