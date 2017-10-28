import { combineReducers } from 'redux';

import MoviesPreview from './reducer_moviesPreview';
import SearchReducer from './reducer_search';
import Filters from './reducer_filters';
import MoviesFull from './reducer_moviesFull';
import Notification from './reducer_notifications';

const rootReducer = combineReducers({
    searchQuery: SearchReducer,
    moviesPreviews: MoviesPreview,
    filters: Filters,
    notifications: Notification,
    moviesFull: MoviesFull,
});

export default rootReducer;
