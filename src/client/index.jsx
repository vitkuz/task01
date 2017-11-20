import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';

import './scss/index.scss';
import rootReducer from './reducers/index';


/* eslint-disable no-underscore-dangle */
const store = createStore(
    rootReducer,
    window.INITIAL_STATE,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
);
/* eslint-enable */

ReactDOM.hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

// // Hot Module Replacement API
// if (module.hot) {
//     module.hot.accept('./App', hydrate);
// }
