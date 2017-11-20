import React from 'react';

import HeaderSearch from '../components/sections/HeaderSearch';

import { randomSearch } from '../actions/actions';

const HomePage = () => {
    return (
        <div>
            <HeaderSearch />
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

