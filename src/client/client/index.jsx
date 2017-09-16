import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './scss/index.scss';

render(
    <App txt="Some text" />,
    document.getElementById('root'),
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', render);
}
