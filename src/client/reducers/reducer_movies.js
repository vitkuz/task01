import C from '../constants';

const initialState = {
    byId: {},
    allIds: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case C.POPULATE_MOVIES:
            const byId = Object.assign({}, state.byId, action.payload.entities.movies );
            const allIds = [...state.allIds, ...action.payload.result];
            return { byId, allIds };
        default:
            return state;
    }
}