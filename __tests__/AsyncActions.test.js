import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import C from '../src/client/constants';
import { randomSearch, makeSearch, getMovieDetails } from '../src/client/actions/actions';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const createMockStore = configureMockStore(middlewares);
const store = createMockStore({ moviesPreviews: {} });

const mockResponse = { results: [{ id: 1, title: 'title 1' }, { id: 2, title: 'title 2' }, { id: 3, title: 'title 3' }] };
const mockResponse2 = { id: 1, title: 'title 1' };


fetchMock.get('*', mockResponse);


describe('Async actions', () => {




    const expectedAction = {
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
    };

    it('creates async action to fetch movies', () => {
        fetchMock.restore();
        fetchMock.get('*', mockResponse);
        return store.dispatch(randomSearch()).then(() => {
            expect(store.getActions()).toEqual([expectedAction]);
        });
    });
    it('creates async action to fetch POPULAR movies', () => {
        return store.dispatch(makeSearch('popular', null)).then(() => {
            expect(store.getActions()).toEqual([expectedAction, expectedAction]);
        });
    });



    const expectedAction2 = {
        type: C.PUT_MOVIE_TO_CACHE,
        payload: {
            entities: {
                movies: {
                    1: { id: 1, title: 'title 1' },
                },
            },
            result: [1],
        },
    };
    //
    it('creates async action to fetch MOVIE DETAILS', () => {
        fetchMock.restore();
        fetchMock.get('*', mockResponse2);
        return store.dispatch(getMovieDetails(1)).then(() => {
            expect(store.getActions()).toEqual([expectedAction, expectedAction, expectedAction2]);
        });
    });
});

