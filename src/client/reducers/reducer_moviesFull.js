import C from '../constants';

const initialCache = {
    byId: {},
    allIds: [],
};

export default function (state = initialCache, action) {
    switch (action.type) {
        case C.PUT_MOVIE_TO_CACHE: {
            const byId = Object.assign({}, state.byId, action.payload.entities.movies);
            const allIds = [...state.allIds, ...action.payload.result];
            return { byId, allIds };
        }
        case C.POPULATE_CACHE: {
            const byId2 = Object.assign({}, state.byId, action.payload.entities.movies);
            const allIds2 = [...state.allIds, ...action.payload.result];
            return { byId: byId2, allIds: allIds2 };
        }
        default: {
            return state;
        }
    }
}
