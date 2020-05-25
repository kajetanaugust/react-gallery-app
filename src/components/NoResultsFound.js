// Imports

import React from 'react';

/*
 Function for displaying No Results found error
*/

const NoResultsFound = () => {
    return (
        <li className={'not-found'}>
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
        </li>
    )
}

// Export

export default NoResultsFound;