// import React from 'react';

import HomePage from './pages/HomePage';
import SinglePage from './pages/SinglePage';
import PageNotFound from './pages/NotFoundPage';

export default [
    {
        ...HomePage,
        path: '/',
        exact: true,
    },
    {
        ...HomePage,
        path: '/movies',
        exact: true,
    },
    {
        ...SinglePage,
        path: '/movies/:id',
    },
    {
        ...PageNotFound,
        path: '*',
    },
];
