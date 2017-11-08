import { normalize, schema } from 'normalizr';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import C from '../src/client/constants';
import { randomSearch, makeSearch } from '../src/client/actions/actions';

Enzyme.configure({ adapter: new Adapter() });

const movie = new schema.Entity('movies');
const movies = [movie];

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ movies: {} });

const mockResponse = { results: [{ id: 1, title: 'title 1' }, { id: 2, title: 'title 2' }, { id: 3, title: 'title 3' }] };

fetchMock.get('https://api.themoviedb.org/3/search/movie?api_key=d13d1d5aeffc289cf0b7508199063c50&query=Happy', mockResponse);
fetchMock.get('https://api.themoviedb.org/3/search/movie?api_key=d13d1d5aeffc289cf0b7508199063c50&query=Crazy', mockResponse);
fetchMock.get('https://api.themoviedb.org/3/search/movie?api_key=d13d1d5aeffc289cf0b7508199063c50&query=Family', mockResponse);
fetchMock.get('https://api.themoviedb.org/3/search/movie?api_key=d13d1d5aeffc289cf0b7508199063c50&query=Ghost', mockResponse);
fetchMock.get('https://api.themoviedb.org/3/search/movie?api_key=d13d1d5aeffc289cf0b7508199063c50&query=War', mockResponse);
fetchMock.get('https://api.themoviedb.org/3/search/movie?api_key=d13d1d5aeffc289cf0b7508199063c50&query=Sex', mockResponse);
fetchMock.get('https://api.themoviedb.org/3/search/movie?api_key=d13d1d5aeffc289cf0b7508199063c50&query=Vampire', mockResponse);
fetchMock.get('https://api.themoviedb.org/3/search/movie?api_key=d13d1d5aeffc289cf0b7508199063c50&query=Wife', mockResponse);
fetchMock.get('https://api.themoviedb.org/3/search/movie?api_key=d13d1d5aeffc289cf0b7508199063c50&query=Iron', mockResponse);
fetchMock.get('https://api.themoviedb.org/3/search/movie?api_key=d13d1d5aeffc289cf0b7508199063c50&query=Blood', mockResponse);
fetchMock.get('https://api.themoviedb.org/3/search/movie?api_key=d13d1d5aeffc289cf0b7508199063c50&query=Space', mockResponse);
fetchMock.get('https://api.themoviedb.org/3/search/movie?api_key=d13d1d5aeffc289cf0b7508199063c50&query=undefined', mockResponse);
fetchMock.get('https://api.themoviedb.org/3/movie/popular?api_key=d13d1d5aeffc289cf0b7508199063c50', mockResponse);


describe('Async actions', () => {
    const data = { results: [{ id: 1, title: 'title 1' }, { id: 2, title: 'title 2' }, { id: 3, title: 'title 3' }] };
    const normalizedData = normalize(data.results, movies);
    const expectedAction = { type: C.POPULATE_MOVIES, payload: normalizedData };
    it('creates async action to fetch movies', () => {
        return store.dispatch(randomSearch()).then(() => {
            expect(store.getActions()).toEqual([expectedAction]);
        });
    });
    it('creates async action to fetch POPULAR movies', () => {
        return store.dispatch(makeSearch('popular', null)).then(() => {
            expect(store.getActions()).toEqual([expectedAction, expectedAction]);
        });
    });
});

