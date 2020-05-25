// Imports

import React, {Component} from 'react';
import GalleryItem from './GalleryItem';
import NoResultsFound from './NoResultsFound';

class Gallery extends Component {

    componentDidMount() {
       this.props.handleSearch(this.props.routeMatch.params.query);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.routeMatch.params.query !== prevProps.routeMatch.params.query) {
            this.props.handleSearch(this.props.routeMatch.params.query)
        }
    }

    render() {
        const results = this.props.data;
        console.log(results)
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