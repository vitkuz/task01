import * as React from 'react';
import HeaderSearch from '../components/sections/HeaderSearch';
import MovieGrid from '../components/results/MovieGrid';

const HomePage = props => (
    <div>
        <HeaderSearch updateSearchBy={props.updateSearchBy} searchByFlag={props.searchByFlag} handleSearch={props.handleSearch} />
        <MovieGrid database={props.database} updateSortBy={props.updateSortBy} sortByFlag={props.sortByFlag} />
    </div>
);

export default HomePage;
