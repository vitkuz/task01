import C from '../constants';

const API_KEY = 'd13d1d5aeffc289cf0b7508199063c50';

// const LANG = 'ru';
// https://api.themoviedb.org/3/movie/550?api_key=d13d1d5aeffc289cf0b7508199063c50
// https://image.tmdb.org/t/p/w500/ - images vase
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=whiplash&language=de-DE&region=DE

function putMovieToCache(movie) {
    return {
        type: C.PUT_MOVIE_TO_CACHE,
        payload: movie,
    };
}

export function getMoviesFromLocalStorage() {
    return {
        type: C.GET_MOVIES_FROM_LOCALSTORAGE,
    };
}

export function getMovieDetails(id) {
    return function (dispatch) {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,images`)
            .then(resp => resp.json()) // Transform the data into json
            .then(data => dispatch(putMovieToCache(data)))
            .catch((error) => {
                dispatch(showError(error));
            });
    };
}

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
            payload: data.results,
        };
    }
}

export function makeSearch(type = 'popular') {
    console.log(type);
    return function (dispatch) {
        // return fetch(`https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&query=${value}`)
        return fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`)
            .then(resp => resp.json()) // Transform the data into json
            .then(data => dispatch(populateMovies(data)))
            .catch((error) => {
                dispatch(showError(error));
            });
    };
}

export function setSearchBy(filter) {
    return {
        type: C.SET_SEARCH_BY,
        payload: filter,
    };
}

export function setActiveFilter(filter) {
    return {
        type: C.SET_ACTIVE_FILTER,
        payload: filter,
    };
}

export function setSearchQuery(value) {
    return {
        type: C.SET_SEARCH_QUERY,
        payload: value,
    };
}