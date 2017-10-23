import { combineReducers } from 'redux';

import MoviesReducer from './reducer_movies';
import SearchReducer from './reducer_search';
import Filters from './reducer_filters';
import Cache from './reducer_cacheMovies';
import Notification from './reducer_notifications';

const rootReducer = combineReducers({
    searchQuery: SearchReducer,
    searchResults: MoviesReducer,
    filters: Filters,
    notifications: Notification,
    cache: Cache,
});

export default rootReducer;
