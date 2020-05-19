import React, {Component} from 'react';
import axios from 'axios';

import apiKey from './config';
import Nav from './components/Nav.js'
import SearchBar from './components/SearchBar';
import NoResultsFound from './components/NoResultsFound';
import PageNotFound from './components/PageNotFound';
import Gallery from './components/Gallery';

// const key = apiKey;

export default class App extends Component {

    state = {
        searchedImages: [],
        isLoading: true,
        key: apiKey
    }


    componentDidMount() {
        this.searchFunction()
    }

    searchFunction = (query = 'treehouse') => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    searchedImages: response.data.photos.photo,
                    isLoading: false
                })
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        return (
            <div>
                <SearchBar onSearch={this.searchFunction}/>
                <Nav/>
                <div className="photo-container">
                    {
                        (this.state.isLoading) ? <p>loading...</p> : <Gallery data={this.state.searchedImages}/>
                    }
                </div>
                {/*<NoResultsFound />*/}
                {/*<PageNotFound />*/}

            </div>


        )
    }
}


