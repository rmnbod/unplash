import React from 'react';
import SearchBar from '../../common/searchBar';
import styles from './Search.module.css';

const searchMain = () => (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1>Unplash</h1>
            <p>The internet’s source of freely usable images.
                <br />
                Powered by creators everywhere.</p>
            <SearchBar />
            <div>
                <p>Trending: </p>
                <ul className={styles.keywordList}>
                    <li>
                        <a href='/searchKeyword'>Keyword</a>
                    </li>
                    <li>
                        <a href='/searchKeyword'>Keyword</a>
                    </li>
                    <li>
                        <a href='/searchKeyword'>Keyword</a>
                    </li>
                </ul>
            </div>

        </div>
    </section>
);

export default searchMain;