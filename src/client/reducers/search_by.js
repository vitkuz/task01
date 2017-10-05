import C from '../actions/constants';

export default function (state = 'title', action) {
    switch (action.type) {
        case C.SET_SEARCH_BY:
            console.log(C.SET_SEARCH_BY, action.payload);
            return action.payload;
    }

    return state;

}