import React from 'react';
import likeIcon from '../assets/icons/heart.svg'
import addIcon from '../assets/icons/add.svg'
import downloadIcon from '../assets/icons/arrow.svg'

const item = (props) => (
    <div className='item'>
        <div className='item-user'>
            <img className='avatar' src={props.avatar} alt='avatar' />
            <p className='username'>John Doe</p>
        </div>
        <img src={props.photo} alt='photso' />
        <div className='photo-actions'>
            <div>
                <button className='like' href='/like'>
                    <img src={likeIcon} alt='like' />
                </button>
                <button className='add' href='/add'>
                    <img src={addIcon} alt='add' />
                </button>
            </div>
            <div>
                <button className='download' href='/download'>
                    <img src={downloadIcon} alt='download' />
                </button>
            </div>
        </div>
    </div>
);

export default item;