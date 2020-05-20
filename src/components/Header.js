import React, {Component} from 'react';

import Nav from './Nav';
import SearchBar from './SearchBar';


const Header =(props) => {
        return (
            <div>
                <SearchBar onSearch={props.onSearch} history={props.history} />
                <Nav onSearch={props.onSearch} />
            </div>
        )

}

export default Header