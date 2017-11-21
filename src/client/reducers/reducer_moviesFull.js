import C from '../constants';

const initialCache = {
    byId: {},
    allIds: [],
};

export default function (state = initialCache, action) {
    switch (action.type) {
        case C.PUT_MOVIE_TO_CACHE: {
            // console.log('PUT_MOVIE_TO_CACHE', action.payload);
            const byId = Object.assign({}, state.byId, action.payload.entities.movies);
            const allIds = [...state.allIds, ...action.payload.result];
            // console.log('meraged object', { byId, allIds });
            return { byId, allIds };
        }
        case C.POPULATE_CACHE: {
            // console.log('POPULATE_CACHE', action.payload);
            const byId2 = Object.assign({}, state.byId, action.payload.entities.movies);
            const allIds2 = [...state.allIds, ...action.payload.result];
            return { byId: byId2, allIds: allIds2 };
        }
        default: {
            return state;
        }
    }
}
