import C from './constants';

function populateMovies(data) {
    console.log(data);
    if (data.errorcode === 404) {
        return {
            type: C.ERROR,
            payload: data.message,
        };
    } else {
        return {
            type: C.POPULATE_MOVIES,
            payload: data,
        };
    }
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
    return {
        type: C.SET_SEARCH_BY,
        payload: value,
    };
}

export function setActiveFilter(filter) {
    return {
        type: C.SET_ACTIVE_FILTER,
        payload: filter,
    };
}