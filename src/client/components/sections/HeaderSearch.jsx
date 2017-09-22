import React from 'react';
import PropTypes from 'prop-types';

import Search from '../search/Search';


const HeaderSearch = (props) => {
    console.log('HeaderSearch.jsx', props);
    return (
        <header className="section header header-search header-cover-1">
            <div className="gradient-1">
                <div className="section-content">
                    <h1>netflixroulette </h1>
                    <p>Find Your Movie</p>
                    <Search updateSearchBy={props.updateSearchBy} searchByFlag={props.searchByFlag} handleSearch={props.handleSearch} />
                </div>
            </div>
        </header>
    );
};

HeaderSearch.propTypes = {
    updateSearchBy: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    searchByFlag: PropTypes.string.isRequired,
};

export default HeaderSearch;

