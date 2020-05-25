// Imports

import React, {Component} from 'react';
import GalleryItem from './GalleryItem';
import NoResultsFound from './NoResultsFound';

// Gallery class

class Gallery extends Component {

    // Running the search function passed from App.js for the first time
    componentDidMount() {
       this.props.handleSearch(this.props.routeMatch.params.query);
    }

    /*
     Checking if the URL matches the search phrase saved in props,
     if no the search function in App.js runs
    */
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.routeMatch.params.query !== prevProps.routeMatch.params.query) {
            this.props.handleSearch(this.props.routeMatch.params.query)
        }
    }

    /*
     This code checks if the images matching the search phrase were found (array length)
     if yes the data is passed to the GalleryItem.js which returns 24 individual photo objects to the pictures array
     if no images were found the NoResultsFound component is rendered
     during the loading of the results the Loading... message is rendered
    */
    render() {
        const results = this.props.data;
        let pictures;


        if (results.length > 0) {
            pictures = results.map(result => <GalleryItem
                url={`https://farm${result.farm}.staticflickr.com/${result.server}/${result.id}_${result.secret}.jpg`}
                key={result.id} alt={result.title}/>)
        } else {
            pictures = <NoResultsFound/>
        }

        if(this.props.loadingState){
           pictures = <li className='not-found'><p>Loading...</p></li>;
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
}

// Export

export default Gallery;