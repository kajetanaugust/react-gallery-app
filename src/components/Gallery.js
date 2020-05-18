import React from 'react';
import GalleryItem from './GalleryItem';
import NoResultsFound from './NoResultsFound';

const Gallery = (props) => {
    const results = props.data;
    console.log(results)
    let pictures;

    if(results.length > 0) {
        pictures = results.map( pic => <GalleryItem info={`https://farm${results.farm}.staticflickr.com/${results.server}/${results.id}_${results.secret}.jpg alt=""`} />)
    }else {
        pictures = <NoResultsFound />
    }

    return(
        <ul>
            {pictures}
        </ul>

    )
}


export default Gallery;