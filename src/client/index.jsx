import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';

import './scss/index.scss';
import rootReducer from './reducers/index';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', render);
}
