import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Movie from '../src/client/components/results/Movie';

Enzyme.configure({ adapter: new Adapter() });

describe('Movie.jsx', () => {
    const props = {
        adult: false,
        backdrop_path: '/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg',
        genre_ids: [12, 18, 27],
        id: 346364,
        original_language: 'en',
        original_title: 'It',
        overview: 'In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.',
        popularity: 837.54052,
        poster_path: '/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg',
        release_date: '2017-09-05',
        title: 'It',
        video: false,
        vote_average: 7.4,
        vote_count: 2193,
    };
    const test = shallow(<Movie movie={props} />);

    it('Renders correctly', () => {
        expect(test).toMatchSnapshot();
    });
});