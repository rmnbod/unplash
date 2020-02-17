import React from 'react';
import SectionList from "./sectionList";

const categories = () => (
    <nav className='nav-category'>
        <p>Editorial</p>
        <div id='section-list-separator' />
        <SectionList />
    </nav>
);

export default categories;