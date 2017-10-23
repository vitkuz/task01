import C from '../constants';

const initialState = {
    byId: {},
    allIds: [],
};

function findIndex(movie, state) {
    return state.findIndex((item) => {
        return movie.id === item.id;
    });
}

export default function (state = initialState, action) {
    switch (action.type) {
        case C.POPULATE_MOVIES:
            if (Array.isArray(action.payload)) {
                const filtered = action.payload.filter((item) => {
                    return findIndex(item, state.byId) < 0;
                });
                const merged = [...filtered, ...state.byId];
                const allIds = merged.map((item) => {
                    return item.id;
                });
                return { byId: merged, allIds };
            } return [action.payload, ...state.byId];
        default:
            return state;
    }
}