import React, {Component} from 'react';


export default class Nav extends Component {

    render() {

        const buttonClick = (phrase, props) => {
            this.props.onSearch(phrase);
            this.props.urlChange(phrase);
        }

        return (
            <nav className={'main-nav'}>
                <ul>
                    <li><a onClick={() => buttonClick('cats')}>Cats</a></li>
                    <li><a onClick={() => buttonClick('dogs')}>Dogs</a></li>
                    <li><a onClick={() => buttonClick('treehouse')}>Treehouse</a></li>
                </ul>
            </nav>
        )
    }
}
