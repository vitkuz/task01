import { combineReducers } from 'redux';

import MoviesPreview from './reducer_moviesPreview';
import SearchReducer from './reducer_search';
import Filters from './reducer_filters';
import MoviesFull from './reducer_moviesFull';

const rootReducer = combineReducers({
    searchQuery: SearchReducer,
    moviesPreviews: MoviesPreview,
    filters: Filters,
    moviesFull: MoviesFull,
});

export default rootReducer;
