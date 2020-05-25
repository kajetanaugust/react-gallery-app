// Imports

import React from 'react';

/*
 Function for displaying Page Not Found (404) error
*/
const PageNotFound = () => {
    return (
        <ul>
            <li className={'not-found'}>
                <h3>Page Not Found (404)</h3>
                <p>Sorry, the page you are looking for doesn't exist.</p>
            </li>
        </ul>
    )
}

// Export

export default PageNotFound;