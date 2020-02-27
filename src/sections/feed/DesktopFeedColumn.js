import React from "react";
import DesktopFeedItem from "./DesktopFeedItem";
import styles from './DesktopFeedColumn.module.css';
import item from "./item";

const DesktopFeedColumn = (props) => {
    return (
        <div className={styles.column} className={styles.content} >
            {props.items.map(item => (
                <DesktopFeedItem photo={item.photo} />
            ))}
        </div>
    );
}

export default DesktopFeedColumn;