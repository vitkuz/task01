import { combineReducers } from 'redux';
import MoviesReducer from './reducer_movies';
import SelectedMovie from './reducer_selected_movie';
import SortBy from './sort_by';
import SearchBy from './search_by';

const rootReducer = combineReducers({
    list: MoviesReducer,
    selected: SelectedMovie,
    sortBy: SortBy,
    searchBy: SearchBy,
});

export default rootReducer;