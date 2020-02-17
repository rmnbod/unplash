import React from 'react';
import SearchBar from './searchBar';

const searchMain = () => (
    <section id='search-main'>
        <div id='search-panel'>
            <h1>Unplash</h1>
            <p>The internet’s source of freely usable images.
                <br />
                Powered by creators everywhere.</p>
            <SearchBar />
            <div>
                <p>Trending: </p>
                <ul id='keyword-list'>
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