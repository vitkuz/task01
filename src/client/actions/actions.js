import { normalize, schema } from 'normalizr';
import C from '../constants';

const movie = new schema.Entity('movies');
const movies = [movie];

const API_KEY = 'd13d1d5aeffc289cf0b7508199063c50';

const RANDOM_SEARCH_KEYWORDS = ['Happy', 'Crazy', 'Family', 'Space', 'Ghost', 'War', 'Sex', 'Vampire', 'Wife', 'Iron', 'Blood'];

function populateMovies(data) {
    console.log(data);
    const normalizedData = normalize(data.results, movies);
    console.log(normalizedData);
    return {
        type: C.POPULATE_MOVIES,
        payload: normalizedData,
    };
}

function populateCache(data) {
    const normalizedData = normalize(data, movies);
    return {
        type: C.POPULATE_CACHE,
        payload: normalizedData,
    };
}

function updateLocalStorage() {
    const localStorageObjects = JSON.parse(localStorage.getItem('movies'));
    if (localStorageObjects) {
        localStorageObjects.push(movie);
    }
    localStorage.setItem('movies', JSON.stringify(localStorageObjects));
}

function putMovieToCache(movie) {
    const normalizedData = normalize([movie], movies);
    console.log('putMovieToCache', normalizedData);
    return {
        type: C.PUT_MOVIE_TO_CACHE,
        payload: normalizedData,
    };
}

export function getMoviesFromLocalStorage() {
    return function (dispatch) {
        const tretrievedObject = JSON.parse(localStorage.getItem('movies'));
        if (tretrievedObject) {
            dispatch(populateCache(tretrievedObject));
        } else {
            // dispatch(showError(error));
            console.log(error);
        }
    };
}

export function getMovieDetails(id) {
    return function (dispatch) {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,images`)
            .then(resp => resp.json()) // Transform the data into json
            .then(data => dispatch(putMovieToCache(data)))
            .catch((error) => {
                console.log(error);
            });
    };
}

export function addNotification(notification) {
    return {
        type: C.ADD_NOTIFICATION,
        payload: notification,
    };
}

export function removeNotification(id) {
    return {
        type: C.REMOVE_NOTIFICATION,
        payload: id,
    };
}

export function randomSearch() {
    const term = RANDOM_SEARCH_KEYWORDS[Math.round(Math.random() * RANDOM_SEARCH_KEYWORDS.length)];
    return function (dispatch) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term}`)
            .then(resp => resp.json()) // Transform the data into json
            .then(data => dispatch(populateMovies(data)))
            .catch((error) => {
                dispatch(showError(error));
            });
    };
}

export function makeSearch(type = 'popular', queryValue) {
    switch (type) {
        case 'popular':
            return function (dispatch) {
                return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
                    .then(resp => resp.json()) // Transform the data into json
                    .then(data => dispatch(populateMovies(data)))
                    .catch((error) => {
                        dispatch(showError(error));
                    });
            };
        case 'search':
            return function (dispatch) {
                return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${queryValue}`)
                    .then(resp => resp.json()) // Transform the data into json
                    .then(data => dispatch(populateMovies(data)))
                    .catch((error) => {
                        dispatch(showError(error));
                    });
            };
    }
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