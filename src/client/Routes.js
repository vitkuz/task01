import React from 'react';

// Page components
import HeaderSearch from './components/sections/HeaderSearch';
import HeaderMovie from './components/sections/HeaderMovieSingle';
import MovieGrid from './components/results/MovieGrid';

import Footer from './components/sections/Footer';

// import PageNotFound from './pages/PageNotFound';

export default [
    {
        path: '/',
        component: MovieGrid,
    },
    {
        ...HeaderSearch,
        path: '/movies',
    },
    {
        path: '/movies/:id',
        component: HeaderMovie,
    },
    {
        path: '*',
        component: Footer,
    },
];
