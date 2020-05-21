import React from 'react';
import {withRouter} from 'react-router-dom';

import Nav from './Nav';
import SearchBar from './SearchBar';


const Header = (props) => {

    const urlChange = (phrase) => {
        props.history.push(`/search/${phrase}`);
    }
    return (
        <div>
            <SearchBar onSearch={props.onSearch} history={props.history} urlChange={urlChange}/>
            <Nav onSearch={props.onSearch} urlChange={urlChange}/>
        </div>
    )

}

export default withRouter(Header)