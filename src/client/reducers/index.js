import { combineReducers } from 'redux';

import MoviesReducer from './reducer_movies';
import SearchReducer from './reducer_search';
import SearchBy from './reducer_searchBy';
import Filters from './reducer_filters';
import Cache from './reducer_cacheMovies';

const rootReducer = combineReducers({
    searchQuery: SearchReducer,
    searchResults: MoviesReducer,
    filters: Filters,
    searchBy: SearchBy,
    cache: Cache,
});

export default rootReducer;
