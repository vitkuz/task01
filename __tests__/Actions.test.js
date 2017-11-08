import { normalize, schema } from 'normalizr';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as A from '../src/client/actions/actions';
import C from '../src/client/constants';

Enzyme.configure({ adapter: new Adapter() });

const movie = new schema.Entity('movies');
const movies = [movie];

describe('Test app', () => {
    it('test action: setSearchBy action', () => {
        const filter = 'qwerty';
        expect(A.setSearchBy(filter)).toEqual({ type: C.SET_SEARCH_BY,
            payload: filter });
    });
    it('test action: populateMovies', () => {
        const data = {};
        data.results = [{ id: 1, title: 'title 1' }, { id: 2, title: 'title 2' }, { id: 3, title: 'title 3' }];
        const normalizedData = normalize(data.results, movies);
        expect(A.populateMovies(data)).toEqual({ type: C.POPULATE_MOVIES,
            payload: normalizedData });
    });
    it('test action: putMovieToCache', () => {
        const movie1 = [{ id: 1, title: 'title 1' }];
        const normalizedData = normalize([movie1], movies);
        expect(A.putMovieToCache(movie1)).toEqual({ type: C.PUT_MOVIE_TO_CACHE,
            payload: normalizedData });
    });

    it('test action: addNotification', () => {
        const message = 'Dummy text';
        expect(A.addNotification(message)).toEqual({ type: C.ADD_NOTIFICATION,
            payload: message });
    });

    it('test action: removeNotification', () => {
        expect(A.removeNotification(1)).toEqual({ type: C.REMOVE_NOTIFICATION,
            payload: 1 });
    });
});
