import React, {Component} from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import apiKey from './config';
import PageNotFound from './components/PageNotFound';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';


export default class App extends Component {

    state = {
        searchedImages: [],
        isLoading: true,
        key: apiKey
    }

    searchFunction = (query = 'mountains') => {
        this.setState({isLoading:true, images:[]})
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    searchedImages: response.data.photos.photo,
                    isLoading: false,
                    query: query
                })
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        return (
            <Router>
                <div className={'container'}>
                    <Nav onSearch={this.searchFunction} />
                    <SearchBar onSearch={this.searchFunction} history={this.history} />
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to={`/search/mountains`}/>}/>
                        <Route exact path={'/search/:query'} render={({match}) =>
                            <Gallery
                                routeMatch={match} data={this.state.searchedImages}
                                queryData={this.state.query}
                                handleSearch={this.searchFunction}
                                loadingState={this.state.isLoading}
                            />}
                        />
                        <Route component={PageNotFound}/>
                    </Switch>
                </div>
            </Router>

        )
    }
}


