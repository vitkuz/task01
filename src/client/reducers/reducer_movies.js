import C from '../actions/constants';

function findIndex(movie, state) {
    return state.findIndex((item) => {
        return movie.unit === item.unit;
    });
}

export default function (state = [], action) {
    switch (action.type) {
        case C.POPULATE_MOVIES:
            if (Array.isArray(action.payload)) {
                const filtered = action.payload.filter((item) => {
                    console.log(findIndex(item, state) < 0);
                    return findIndex(item, state) < 0;
                });
                const merged = [...state, ...filtered];
                const allIds = merged.map((item) => {
                    return item.unit;
                });
                console.log({ byId: merged, allIds });
                return { byId: merged, allIds };
            } return [action.payload];
        case C.ERROR:
            return action.payload;
        default:
            return state;
    }
}