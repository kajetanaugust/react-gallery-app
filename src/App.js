import React, { Component } from 'react';

import { apiKey } from './config';
import Nav from './components/Nav.js'
import SearchBar from './components/SearchBar';
import NoResultsFound from './components/NoResultsFound';
import PageNotFound from './components/PageNotFound';

export default class App extends Component {

  state={
    searchedImages: [],
    isLoading: true
  }

    componentDidMount() {
        this.searchFunction()
    }

    searchFunction = (query = 'treehouse') => {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ce3bd4def7809b2bc9606df2d0067b7a&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => response.json())
            .then(responseData => {
                this.setState({searchedImages: responseData.data,
                    isloading: false
                })

            })
            .catch(error => {
                console.log('Error fetching and parsing data', error)
            });
    }

  render(){
    return(
        <div>
            <SearchBar searchFunction={this.searchFunction} />
            <Nav />
            <NoResultsFound />
            <PageNotFound />

        </div>




    )
  }
}


