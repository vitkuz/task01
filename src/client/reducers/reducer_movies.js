import {FETCH_MOVIES} from '../actions/indeх';

export function MoviesReducer(state = null, action) {

    console.log("Actions received",action);

    switch (action.type) {
        case FETCH_MOVIES:
            return action.payload;
    }

    return state;

}