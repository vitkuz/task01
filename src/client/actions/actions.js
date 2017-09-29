function populateMovies(data) {
    return {
        type: 'POPULATE_MOVIES',
        payload: data,
    };
}

function showError(error) {
    return {
        type: 'ERROR',
        payload: error,
    };
}

export function selectItem(item) {
    console.log('selectItem', item);
    return {
        type: 'ITEM_SELECTED',
        payload: item,
    };
}

export function makeTitleSearch(value) {
    return function (dispatch) {
        return fetch(`https://netflixroulette.net/api/api.php?title=${value}`)
            .then(resp => resp.json()) // Transform the data into json
            .then(data => dispatch(populateMovies(data)))
            .catch((error) => {
                dispatch(showError(error));
            });
    };
}

export function makeDirectorSearch(value) {
    return function (dispatch) {
        return fetch(`https://netflixroulette.net/api/api.php?director=${value}`)
            .then(resp => resp.json()) // Transform the data into json
            .then(data => dispatch(populateMovies(data)))
            .catch((error) => {
                dispatch(showError(error));
            });
    };
}

export function setSearchBy(value) {
    //console.log('setSearchBy', value);
    return {
        type: 'SET_SEARCH_BY',
        payload: value,
    };
}

export function setFilterBy(value) {
    //console.log('setSearchBy', value);
    return {
        type: 'SET_FILTER_BY',
        payload: value,
    };
}