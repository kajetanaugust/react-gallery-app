import React, { Component } from 'react';

import apiKey from './config';
import Nav from './components/Nav.js'
import SearchBar from './components/SearchBar';
import NoResultsFound from './components/NoResultsFound';
import PageNotFound from './components/PageNotFound';
import Gallery from './components/Gallery';

// const key = apiKey;

export default class App extends Component {

  state={
    searchedImages: [],
    isLoading: true,
    key: apiKey
  }



    componentDidMount() {
        this.searchFunction()
        console.log(this.state.key)
    }

    searchFunction = (query = 'treehouse') => {
      console.log(this.state.key)

        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {

            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });

        // fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        //     .then(response => response.json())
        //     .then(responseData => console.log(responseData))
        //     .then(responseData => {
        //         this.setState({
        //             searchedImages: responseData.data.photos.photo,
        //             isLoading: false
        //         })
        //     })
        //     .catch(error => {
        //         console.log('Error fetching and parsing data', error)
        //     });
    }

  render(){
    return(
        <div>
            <SearchBar searchFunction={this.searchFunction} />
            <Nav />
            <div className="photo-container">
                <Gallery data={this.state.searchedImages}/>

            </div>
            {/*<NoResultsFound />*/}
            {/*<PageNotFound />*/}

        </div>




    )
  }
}


