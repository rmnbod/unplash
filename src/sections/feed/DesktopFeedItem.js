import React from 'react';
import styles from './DesktopFeedItem.module.css';

const DesktopFeedItem = (props) => (
    <div className={styles.content}>
        <figure >
            <img src={props.photo} alt='like' />
            <div className={styles.controls_overlay}>
                <div className={styles.upper_controls}>
                    <button >Button</button>
                    <button >Button</button>
                </div>
            </div>
        </figure>
    </div>

);

export default DesktopFeedItem;