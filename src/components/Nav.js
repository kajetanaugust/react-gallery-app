import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {

        return (
            <nav className={'main-nav'}>
                <ul>
                    <li><NavLink to={`/search/Lake`}>Lake</NavLink></li>
                    <li><NavLink to={`/search/mountains`}>Mountains</NavLink></li>
                    <li><NavLink to={`/search/forest`}>Forest</NavLink></li>
                </ul>
            </nav>

        )
}


export default Nav;