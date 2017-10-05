import React from 'react';
import PropTypes from 'prop-types';

import Search from '../search/Search';


const HeaderSearch = (props) => {
    return (
        <header className="section header header-search header-cover-1">
            <div className="gradient-2">
                <div className="section-content">
                    <h1>netflixroulette </h1>
                    <p>Find Your Movie</p>
                    <Search setSearchQuery={props.setSearchQuery} searchQuery={props.searchQuery} updateSearchBy={props.updateSearchBy} searchByFlag={props.searchByFlag} handleSearch={props.handleSearch} />
                </div>
            </div>
        </header>
    );
};

HeaderSearch.propTypes = {
    updateSearchBy: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
    searchByFlag: PropTypes.string.isRequired,
    searchQuery: PropTypes.string.isRequired,
};

export default HeaderSearch;

