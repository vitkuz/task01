import React from 'react';

import Search from '../search/Search';

const HeaderSearch = () => {
    return (
        <header className="section header header-search header-cover-1">
            <div className="gradient-2">
                <div className="section-content">
                    <h1>netflixroulette </h1>
                    <p>Find Your Movie</p>
                    <Search />
                </div>
            </div>
        </header>
    );
};

export default HeaderSearch;

