import { normalize, schema } from 'normalizr';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MoviesPreview from '../src/client/reducers/reducer_moviesPreview';
import C from '../src/client/constants';

const movie = new schema.Entity('movies');
const movies = [movie];

Enzyme.configure({ adapter: new Adapter() });

describe('Test app', () => {
    it('test MoviesPreview reducer', () => {
        const data = [{ id: 1, title: 'title 1' }, { id: 2, title: 'title 2' }, { id: 3, title: 'title 3' }];
        const normalizedData = normalize(data, movies);
        const action = { type: C.POPULATE_MOVIES, payload: normalizedData };
        expect(MoviesPreview(undefined, action)).toEqual({
            byId: {
                1: { id: 1, title: 'title 1' },
                2: { id: 2, title: 'title 2' },
                3: { id: 3, title: 'title 3' },
            },
            allIds: [1, 2, 3],
        });
    });
});