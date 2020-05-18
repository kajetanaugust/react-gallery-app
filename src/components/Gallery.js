import React from 'react';
import GalleryItem from './GalleryItem';
import NoResultsFound from './NoResultsFound';

const Gallery = (props) => {
    const results = props.data;
    let pictures;

    if(results.length > 0) {
        pictures = results.map( pic => <GalleryItem farm={results.farm} server={results.server} id={results.id} secret={results.secret} />)
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