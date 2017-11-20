import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../client/reducers/index';


export default () => {
    const store = createStore(rootReducers,
        {},
        applyMiddleware(thunk));


    return store;
};
