import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


const Nav = (props) => {

        return (
            <nav className={'main-nav'}>
                <ul>
                    <li><NavLink to={`/search/cats`}>Cats</NavLink></li>
                    <li><NavLink to={`/search/dogs`}>Dogs</NavLink></li>
                    <li><NavLink to={`/search/treehouse`}>Treehouse</NavLink></li>
                </ul>
            </nav>

        )
}


export default Nav;