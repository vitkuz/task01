import React from 'react';

import Search from '../search/Search';

import { randomSearch } from '../../actions/actions';

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

function loadData(store) {
    return store.dispatch(randomSearch());
}

export default {
    loadData,
    component: HeaderSearch,
};

