import React from 'react';
import searchIcon from '../assets/icons/search.svg'
import stylesMain from './SearchBarMain.module.css';
import stylesHeader from './SearchBarHeader.module.css';

const SearchBar = (props) => {
    const styles = props.isHeader ? stylesHeader : stylesMain;
    return (<div className={styles.container}>
        <form action="/search">
            <button type="submit">
                <img src={searchIcon} alt='Search' />
            </button>
            <input type="text" placeholder="Search photos" name="search" />
        </form>
    </div>)
};

export default SearchBar;