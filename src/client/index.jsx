import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './scss/index.scss';
import movieFromNetflix from './reducers/index';

let store = createStore(movieFromNetflix);

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
