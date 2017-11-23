import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { MovieGrid } from '../src/client/components/results/MovieGrid';

Enzyme.configure({ adapter: new Adapter() });

describe('MovieGrid.jsx', () => {
    const filters = {
        filters: [
            { type: 'release_date', title: 'By date' },
            { type: 'vote_average', title: 'By rating' },
        ],
        active: 'release_date',
        reverse: true,
    };

    it('Renders correctly', () => {
        const test = shallow(<MovieGrid />);
        expect(test).toMatchSnapshot();
    });
    it('Find .message-not-found if 0 items are passed', () => {
        const items = [];
        const test = shallow(<MovieGrid items={items} filters={filters} />);
        console.log(test.debug());
        console.log(test.find('.message-not-found').children().length);
        expect(test.find('.message-not-found').children().length).toEqual(1);
    });
    it('Find 3 nodes if sent 3 movies', () => {
        const items = [
            { id: 1, title: 'title 1' },
            { id: 2, title: 'title 2' },
            { id: 3, title: 'title 3' },
        ];
        const test = shallow(<MovieGrid items={items} filters={filters} />);
        console.log(test.debug());
        expect(test.find('.movies-gid-content').children().length).toEqual(3);
    });
});
