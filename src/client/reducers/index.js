import { combineReducers } from 'redux';

import MoviesReducer from './reducer_movies';
import SelectedMovie from './reducer_selected_movie';
import SearchBy from './search_by';
import Filters from './filters';


const rootReducer = combineReducers({
    searchResults: MoviesReducer,
    selected: SelectedMovie,
    filters: Filters,
    searchBy: SearchBy,
});

export default rootReducer;
