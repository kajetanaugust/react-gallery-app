import React from 'react';

const GalleryItem = (props) => {
    return (
        <li>
            <img src={props.url} alt={props.alt}/>
        </li>
    )
}

export default GalleryItem;