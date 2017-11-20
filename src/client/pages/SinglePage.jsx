import React from 'react';

import HeaderSearch from '../components/sections/HeaderSearch';

import { randomSearch } from '../actions/actions';

const SinglePage = () => {
    return (
        <div>
            Single Movie Page
            <HeaderSearch />
        </div>
    );
};

function loadData(store) {
    return store.dispatch(randomSearch());
}

export default {
    loadData,
    component: SinglePage,
};

