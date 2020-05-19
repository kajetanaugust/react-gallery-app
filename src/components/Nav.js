import React, {Component} from 'react';


export default class Nav extends Component {

    render() {

        const buttonClick = (phrase, props) => {
            this.props.onSearch(phrase);
        }

        return (
            <nav className={'main-nav'}>
                <ul>
                    <li><a onClick={() => buttonClick('cats')} href="#">Cats</a></li>
                    <li><a onClick={() => buttonClick('dogs')} href="#">Dogs</a></li>
                    <li><a onClick={() => buttonClick('treehouse')} href="#">Treehouse</a></li>
                </ul>
            </nav>
        )
    }
}




// import React from 'react';
//
// const Nav = (props, e) => {
//
//     return (
//         <nav className={'main-nav'}>
//             <ul>
//                 <li><a onClick={console.log(e.target)} href="#">Cats</a></li>
//                 <li><a href="#">Dogs</a></li>
//                 <li><a href="#">Treehouse</a></li>
//             </ul>
//         </nav>
//     )
// }
//
//
// export default Nav;

