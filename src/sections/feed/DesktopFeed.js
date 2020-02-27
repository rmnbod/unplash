import React from "react";
import DesktopFeedItem from "./DesktopFeedItem";
import styles from './DesktopFeed.module.css';
import DesktopFeedColumn from "./DesktopFeedColumn";

const colNum = 3;

const DesktopFeed = React.memo((props) => {

    const itemsCount = props.items.length;
    const fstColItems = props.items.splice(0, Math.round(itemsCount / colNum));
    const sndColItems = props.items.splice(0, Math.round(itemsCount / colNum));
    const thrdColItems = props.items;

    return (
        <div className={styles.content} >
            <DesktopFeedColumn items={fstColItems} />
            <DesktopFeedColumn items={sndColItems} />
            <DesktopFeedColumn items={thrdColItems} />
        </div>
    );
})

export default DesktopFeed;