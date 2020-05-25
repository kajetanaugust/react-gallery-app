// Imports

import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

/*
Class component for creating searchbar and adding functionality
*/

class SearchBar extends Component {

    // Component State

    state = {
        searchPhrase: ''
    }

    // Function for changing state content to the value of search bar

    searchPhraseChange = e => {
        this.setState({searchPhrase: e.target.value});
    }

    /*
     This function:
     prevents default behaviour of submit button,
     sets url value to the searched phrase,
     passes search phrase to the main search function in App.js,
     resets the search field
    */

    searchButtonClick = (e, props) => {
        e.preventDefault();
        let query = this.query.value;
        this.props.history.push(`/search/${query}`)
        this.props.onSearch(query);
        e.currentTarget.reset();
    }

    // Creating the search form and passing props to the input field
    render() {
        return (
            <form className={'search-form'} onSubmit={this.searchButtonClick}>
                <input
                    type={'search'}
                    name={'search'}
                    placeholder={'Search'}
                    onChange={this.searchPhraseChange}
                    ref={(input) => this.query = input}
                    required
                />
                <button type={'submit'} className={'search-button'}>
                    <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </button>
            </form>

        )
    }
}

// Export

export default withRouter(SearchBar);