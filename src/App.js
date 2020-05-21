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
import Header from './components/Header';


export default class App extends Component {

    state = {
        searchedImages: [],
        isLoading: true,
        key: apiKey,
        mainQuery: 'border collie'
    }


    componentDidMount() {
        this.searchFunction()
        this.setState({mainQuery: this.query})
    }


    searchFunction = (query = this.state.mainQuery) => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    searchedImages: response.data.photos.photo,
                    isLoading: false,
                    mainQuery: this.query
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
                    <Header onSearch={this.searchFunction} history={this.props.history} urlChange={this.urlChange}/>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to={`/search/${this.state.mainQuery}`}/>}/>
                        <Route exact path={'/search/:query'} render={() => (this.state.isLoading) ? <p>loading...</p> :
                            <Gallery data={this.state.searchedImages}/>}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </div>
            </Router>

        )
    }
}


