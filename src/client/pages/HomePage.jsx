import React from 'react';

import HeaderSearch from '../components/sections/HeaderSearch';
import MovieGrid from '../components/results/MovieGrid';

import { randomSearch } from '../actions/actions';

const HomePage = () => {
    return (
        <div>
            <HeaderSearch />
            <MovieGrid />
        </div>
    );
};

function loadData(store) {
    return store.dispatch(randomSearch());
}

export default {
    loadData,
    component: HomePage,
};

