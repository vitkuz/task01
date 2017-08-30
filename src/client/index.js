import React from 'react'
import ReactDOM,{ render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import netflixApp from './reducers'

import './scss/index.scss';
import _ from "lodash";

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(netflixApp, preloadedState)


console.log("TEST 1");
console.log("TEST 2");
console.log("TEST 3");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);