import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Test } from '../src/client/components/results/Test';

configure({ adapter: new Adapter() });

describe('Test', () => {
    const mockFn = jest.fn();
    const props = { qwerty: '123456', testFn: mockFn};
    const test = shallow(<Test {...props} />);
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
    describe('When changing input update `state`', () => {
        const stringToTest = 'Qwerty';
        beforeEach(() => {
            test.find('.input1').simulate('change', { target: { value: stringToTest } });
        });
        it('Find link, click on link, object added to state', () => {
            expect(test.state().value).toEqual(stringToTest);
        });
    });
    describe('Call fn', () => {
        beforeEach(() => {
            test.find('.btn-fn').simulate('click');
        });
        it('Dispatch fn() from props', () => {
            expect(mockFn).toHaveBeenCalledWith(parseInt('1', 10));
        });
    });
});
