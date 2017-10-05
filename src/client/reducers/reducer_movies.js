import C from '../actions/constants';

export default function (state = null, action) {
    switch (action.type) {
        case C.POPULATE_MOVIES:
            return action.payload;
        case C.ERROR:
            return action.payload;
        default:
            return state;
    }
}