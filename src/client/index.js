import React from 'react'
import ReactDOM,{ render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import './scss/index.scss';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);