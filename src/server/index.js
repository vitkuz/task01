var opn = require('opn');
var path = require('path');
var express = require('express');

import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

var app = express();

const config = require('dotenv').config();
const port = process.env.PORT || config.parsed.PORT;
process.env.NODE_ENV = config.parsed.NODE_ENV;

// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
    // Create a new Redux store instance
    const store = createStore(counterApp)

    // Render the component to a string
    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    )

    // Grab the initial state from our Redux store
    const preloadedState = store.getState()

    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

if (process.env.NODE_ENV !== 'production') {
    var webpackMiddleware = require("webpack-dev-middleware");
    var webpack = require('webpack');
    var webpackConfig = require('../../webpack.config.js');
    app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
    app.use(express.static('build'));
    app.get('*', function (req, res) {
        res.sendfile(path.join(__dirname, 'build/index.html'));
    });
}



// app.set('view engine', 'pug');



app.listen(port || 4000, function () {
    console.log(`Example app listening on port ${port}!`);

    if (process.env.NODE_ENV !== 'production') {
        opn(`http://localhost:${port}`);
    }
});