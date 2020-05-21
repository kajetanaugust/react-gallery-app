import React from 'react';

const GalleryItem = (props) => {
    return (
        <li>
            <img src={props.url} />
        </li>
    )
}

export default GalleryItem;