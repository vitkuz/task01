import { combineReducers } from 'redux';

import MoviesReducer from './reducer_movies';
import SearchReducer from './reducer_search';
import Directors from './reducer_directors';
import SearchBy from './reducer_searchBy';
import Filters from './reducer_filters';


const rootReducer = combineReducers({
    searchQuery: SearchReducer,
    searchResults: MoviesReducer,
    filters: Filters,
    searchBy: SearchBy,
    directors: Directors,
});

export default rootReducer;
