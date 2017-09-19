import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import './scss/index.scss';

render(
    <App />,
    document.getElementById('root'),
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', render);
}