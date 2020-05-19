import React from 'react';
import GalleryItem from './GalleryItem';
import NoResultsFound from './NoResultsFound';

const Gallery = (props) => {
    const results = props.data;
    let pictures;
    console.log(results)

    if (results.length > 0) {
        pictures = results.map(result => <GalleryItem
            url={`https://farm${result.farm}.staticflickr.com/${result.server}/${result.id}_${result.secret}.jpg`}
            key={result.id}/>)
    } else {
        pictures = <NoResultsFound/>
    }
    console.log(pictures)
    return (

        <ul>
            {pictures}
        </ul>

    )
}


export default Gallery;