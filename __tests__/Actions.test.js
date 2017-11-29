import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as A from '../src/client/actions/actions';
import C from '../src/client/constants';

Enzyme.configure({ adapter: new Adapter() });

describe('Test app', () => {
    it('test action: setSearchBy action', () => {
        const filter = 'qwerty';
        expect(A.setSearchBy(filter)).toEqual({ type: C.SET_SEARCH_BY,
            payload: filter });
    });
    it('test action: populateMovies', () => {
        const data = { results: [{ id: 1, title: 'title 1' }, { id: 2, title: 'title 2' }, { id: 3, title: 'title 3' }] };

        expect(A.populateMovies(data)).toEqual({
            type: C.POPULATE_MOVIES,
            payload: {
                entities: {
                    movies: {
                        1: { id: 1, title: 'title 1' },
                        2: { id: 2, title: 'title 2' },
                        3: { id: 3, title: 'title 3' },
                    },
                },
                result: [1, 2, 3],
            },
        });
    });
    it('test action: putMovieToCache', () => {
        const mockResponse = { id: 1, title: 'title 1' };

        expect(A.putMovieToCache(mockResponse)).toEqual({
            type: C.PUT_MOVIE_TO_CACHE,
            payload: {
                entities: {
                    movies: {
                        1: { id: 1, title: 'title 1' },
                    },
                },
                result: [1],
            },
        });
    });

});
