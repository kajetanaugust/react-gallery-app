## Just Gallery App
App displays for a user 24 images fetched from [flickr API](https://www.flickr.com/).<br/> There are four default
tags: Bird, Cat, Horse, Cow from which the user can choose or the user can request their own theme of images.      

### How does it work
- The user can choose the default tags or write their own search tag in a search bar
- Search will also work when the user change query parameter in a url
- If the user tries to search non existing topics the app displays Not Found message
- Page has three routes, main that redirects to Bird tag, dynamic search route that changes depending on query-parameter and 404 route that shows user friendly message when the user try to visit non existing route 
- The page can be navigate by the use of back and forward browser navs

### Styling 
- I've decided for a simple modern layout with images displayed in a squares
- Main interactive elements are grouped at the top of the page: search bar, default images tags and a short friendly information about what tag is displaying now 
- Page has some modern styling solution such as nice button hover transition   

### Setup

1. In the project directory you should run:<br/><br/>
`npm install`<br/><br/> This will download project dependencies which are listed in package.json.

2. Next you need to get Flickr API key from [Flickr App Garden](https://www.flickr.com/services/apps/create/apply/) <br/>

3. Now you need to create your own **config.js** file and place it inside of a **src** directory. Your code inside of the config.js file should look like this:
    ```
    const apiKey = 'HERE IS A PLACE FOR YOUR OWN API KEY';
    export default apiKey;
    ```
4. To start an app in a development mode run:<br/><br/>
    `npm start`<br/><br/>
    and open in a browser http://localhost:3000. The page will automatically reload when you make changes.
    
## Credits
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It uses [React Router library]( https://reacttraining.com/react-router/) for setting routes, 
[axios]((https://github.com/axios/axios)) for fetching data and starting 
files from [Treehouse](https://teamtreehouse.com), Readme credits goes to [Monika Frankowska][https://github.com/monifra] .   


## Available Scripts
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


[]: https://github.com/monifra

[]: https://github.com/monifra