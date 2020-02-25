import React from "react";
import logo from "../../assets/icons/camera.svg";
import styles from '../header/DesktopHeader.module.css';
import SearchBar from "../../common/searchBar";
import LoginJoinHeader from './loginJoinHeader';

export default () => {
    return (
        <header className={styles.container}>
            <img className={styles.logo} src={logo} />
            <SearchBar isHeader={true} />
            <a>Home</a>
            <a>Collections</a>
            <a>{'\u{1F784}\u{1F784}\u{1F784}'}</a>
            <a className={styles.submit} >Submit a photo</a>
            <LoginJoinHeader className={styles.login_join} />
        </header>
    );
};


