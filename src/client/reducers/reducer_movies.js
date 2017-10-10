import C from '../actions/constants';

export default function (state = [], action) {
    switch (action.type) {
        case C.POPULATE_MOVIES:
            if (Array.isArray(action.payload)) {
                return action.payload;
            } return [action.payload];
        case C.ERROR:
            return action.payload;
        default:
            return state;
    }
}