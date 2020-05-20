import React from 'react';
import GalleryItem from './GalleryItem';
import NoResultsFound from './NoResultsFound';

const Gallery = (props) => {
    const results = props.data;
    console.log(results)
    let pictures;


    if (results.length > 0) {
        pictures = results.map(result => <GalleryItem
            url={`https://farm${result.farm}.staticflickr.com/${result.server}/${result.id}_${result.secret}.jpg`}
            key={result.id}/>)
    } else {
        pictures = <NoResultsFound/>
    }

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {pictures}
            </ul>
        </div>


    )
}


export default Gallery;