// Imports

import React from 'react';

/*
Function for rendering individual list items
containing image with src and alt attributes
*/

const GalleryItem = (props) => {
    return (
        <li>
            <img src={props.url} alt={props.alt}/>
        </li>
    )
}

// Export

export default GalleryItem;