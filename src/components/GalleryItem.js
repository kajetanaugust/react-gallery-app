import React from 'react';

const GalleryItem = (props) => {
    return(
        <li>
            <img src={props.info} />
        </li>
    )
}

export default GalleryItem;