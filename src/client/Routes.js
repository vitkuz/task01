import React from 'react';

import HomePage from './pages/HomePage';
import SinglePage from './pages/SinglePage';

// import PageNotFound from './pages/PageNotFound';

export default [
    {
        ...HomePage,
        path: '/movies',
    },
    {
        ...SinglePage,
        path: '/movies/:id',
    },
];
