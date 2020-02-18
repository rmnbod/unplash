import React from 'react';
import likeIcon from '../../assets/icons/heart.svg'
import addIcon from '../../assets/icons/add.svg'
import downloadIcon from '../../assets/icons/arrow.svg'
import styles from './Item.module.css';

const item = (props) => (
    <div className={styles.content}>
        <div className={styles.user}>
            <img src={props.avatar} alt='avatar' />
            <p>{props.username}</p>
        </div>
        <img src={props.photo} alt='phot' />
        <div className={styles.actions}>
            <div>
                <button className={styles.like} href='/like'>
                    <img src={likeIcon} alt='like' />
                </button>
                <button href='/add'>
                    <img src={addIcon} alt='add' />
                </button>
            </div>
            <div>
                <button href='/download'>
                    <img src={downloadIcon} alt='download' />
                </button>
            </div>
        </div>
    </div>
);

export default item;