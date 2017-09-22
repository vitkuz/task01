import * as React from 'react';
import PropTypes from 'prop-types';
import HeaderSearch from '../components/sections/HeaderSearch';
import MovieGrid from '../components/results/MovieGrid';

const HomePage = props => (
    <div>
        <HeaderSearch updateSearchBy={props.updateSearchBy} searchByFlag={props.searchByFlag} handleSearch={props.handleSearch} />
        <MovieGrid database={props.database} updateSortBy={props.updateSortBy} sortByFlag={props.sortByFlag} />
    </div>
);

HomePage.propTypes = {
    database: PropTypes.array.isRequired,
    searchByFlag: PropTypes.string.isRequired,
    sortByFlag: PropTypes.string.isRequired,
    updateSearchBy: PropTypes.func.isRequired,
    updateSortBy: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
};

export default HomePage;
