import React from 'react';
import Item from './item';

const feed = (props) => (
    props.items.map(item => {
        return <Item avatar={item.avatar} username={item.username} photo={item.photo} />;
    }));

export default feed;