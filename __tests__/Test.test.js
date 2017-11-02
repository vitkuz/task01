import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Test from '../src/client/components/results/Test';

configure({ adapter: new Adapter() });

describe('Test', () => {
    const test = shallow(<Test />);
    it('Renders correctly', () => {
        expect(test).toMatchSnapshot();
    });
    it('Test state', () => {
        expect(test.state().dummy).toEqual([]);
    });
    describe('When clicking', () => {
        beforeEach(() => {
            test.find('.btn').simulate('click');
        });
        afterEach(() => {
            test.setState({ dummy: [], value: '' });
        });
        it('Find link, click on link, object added to state', () => {
            expect(test.state().dummy).toEqual([{ id: 1 }]);
        });
        it('Find link, click on link, test object rendered', () => {
            expect(test.find('.item-list').children().length).toEqual(1);
        });
    });
    describe('When changing input update `sate` ', () => {
        const stringToTest = 'Qwerty';
        beforeEach(() => {
            test.find('.input1').simulate('change', { target: { value: stringToTest } });
        });
        it('Find link, click on link, object added to state', () => {
            expect(test.state().value).toEqual(stringToTest);
        });
    });
});

// it('should dispatch action', (done) => {
//     const getState = {}; // initial state of the store
//     const action = { type: 'SET_SEARCH_QUERY' };
//     const expectedActions = [action];
//     const store = mockStore(getState, expectedActions, done);
//     store.dispatch(action);
// })
