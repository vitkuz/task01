import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import { expect } from 'jest';
import Adapter from 'enzyme-adapter-react-15';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import rootReducer from '../src/client/reducers/index';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

import Search from '../src/client/components/search/Search';

configure({ adapter: new Adapter() });


it('Renders correctly', () => {
    // expect(search).toMatchSnapshot();
});

it('should dispatch action', (done) => {
    const getState = {}; // initial state of the store
    const action = { type: 'SET_SEARCH_QUERY' };
    const expectedActions = [action];
    const store = mockStore(getState, expectedActions, done);
    store.dispatch(action);
})
