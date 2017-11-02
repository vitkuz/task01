import { normalize, schema } from 'normalizr';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import { addNotification } from '../src/client/actions/actions';
import MoviesPreview from '../src/client/reducers/reducer_moviesPreview';

const movie = new schema.Entity('movies');
const movies = [movie];

Enzyme.configure({ adapter: new Adapter() });

describe('Test app', () => {
    it('test addNotification action', () => {
        expect(addNotification('notification1')).toEqual({type: 'ADD_NOTIFICATION',
            payload: 'notification1',});
    });

    it('test MoviesPreview reducer', () => {
        const data = [{ id: 1, title: 'title 1' }, { id: 2, title: 'title 2' }, { id: 3, title: 'title 3' }];
        const normalizedData = normalize(data, movies);
        const action = { type: 'POPULATE_MOVIES', payload: normalizedData };
        expect(MoviesPreview(null, action)).toEqual({
                byId: {
                    1: { id: 1, title: 'title 1' },
                    2: { id: 2, title: 'title 2' },
                    3: { id: 3, title: 'title 3' },
                },
                allIds: [1, 2, 3],
        });
    });
});