import React from 'react';

import HeaderMovieSingle from '../components/sections/HeaderMovieSingle';
import MovieGrid from '../components/results/MovieGrid';

import { randomSearch, getMovieDetails } from '../actions/actions';

const SinglePage = (props) => {
    return (
        <div>
            <HeaderMovieSingle {...props} />
            <MovieGrid />
        </div>
    );
};

function loadData(store, id) {
    const promises = [store.dispatch(randomSearch()), store.dispatch(getMovieDetails(id))];
    return Promise.all(promises);
}

export default {
    loadData,
    component: SinglePage,
};

