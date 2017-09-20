import React from 'react';
import Search from '../search/Search';
import PropTypes from 'prop-types';

const HeaderSearch = (props) => {
    return (
        <header className="section header header-search header-cover-1">
            <div className="gradient-1">
                <div className="section-content">
                    <h1>netflixroulette </h1>
                    <p>Find Your Movie</p>
                    <Search updateSearchBy={props.updateSearchBy} searchByFlag={props.searchByFlag} handleSearch={props.handleSearch}/>
                </div>
            </div>
        </header>
    );
};

export default HeaderSearch;

