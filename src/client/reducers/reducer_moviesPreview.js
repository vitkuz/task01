import C from '../constants';

const initialState = {
    byId: {},
    allIds: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case C.POPULATE_MOVIES:
            // console.log('FROM REDUCER----------------------------', action.payload);
            const byId = action.payload.entities.movies;
            const allIds = [...action.payload.result];
            return { byId, allIds };
        default:
            return state;
    }
}