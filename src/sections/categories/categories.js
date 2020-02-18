import React from 'react';
import SectionList from "./sectionList";
import styles from './NavCategory.module.css';

const categories = () => (
    <nav className={styles.container}>
        <p>Editorial</p>
        <div className={styles.separator} />
        <SectionList />
    </nav>
);

export default categories;