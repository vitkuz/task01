import C from '../actions/constants';

export default function (state = '', action) {
    switch (action.type) {
        case C.SET_SEARCH_QUERY:
            console.log(C.SET_SEARCH_QUERY, action.payload);
            return action.payload;
        default:
            break;
    }
    return state;
}