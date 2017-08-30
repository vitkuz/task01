var opn = require('opn');
var path = require('path');
var express = require('express');
import fs from 'fs';

import React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {renderToString} from 'react-dom/server'
import App from '../client/App'
import netflixApp from '../client/reducers'


var app = express();

const config = require('dotenv').config();
const port = process.env.PORT || config.parsed.PORT;
process.env.NODE_ENV = config.parsed.NODE_ENV;

// This is fired every time the server side receives a request


function handleRender(req, res) {
    // Create a new Redux store instance
    const store = createStore(netflixApp)
    // Grab the initial state from our Redux store


    fs.readFile('./build/index.html', 'utf8', function (err, file) {
        if (err) {
            return console.log(err);
        }

        const preloadedState = store.getState()

        // Render the component to a string
        const html = renderToString(
            <Provider store={store}>
                <App />
            </Provider>
        )

        const document = file.replace(/<div id="root"><\/div>/, `
        <div id="root">${html}</div>
        <script>       
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>`);
        res.send(document);
    });

}


if (process.env.NODE_ENV !== 'production') {
    var webpackMiddleware = require("webpack-dev-middleware");
    var webpack = require('webpack');
    var webpackConfig = require('../../webpack.config.js');
    app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
    app.use(express.static('build'));

    app.get('*', handleRender);

}


// app.set('view engine', 'pug');


app.listen(port || 4000, function () {
    console.log(`Example app listening on port ${port}!`);

    if (process.env.NODE_ENV !== 'production') {
        opn(`http://localhost:${port}`);
    }
});