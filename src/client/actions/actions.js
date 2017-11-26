import { normalize, schema } from 'normalizr';
import fetch from 'isomorphic-fetch';
import C from '../constants';

const movie = new schema.Entity('movies');
const movies = [movie];

const API_KEY = 'd13d1d5aeffc289cf0b7508199063c50';

const RANDOM_SEARCH_KEYWORDS = ['Happy', 'Crazy', 'Family', 'Space', 'Ghost', 'War', 'Sex', 'Vampire', 'Wife', 'Iron', 'Blood'];

export function customFn(data) {
    return {
        type: C.POPULATE_MOVIES,
        payload: data,
    };
}

export function populateMovies(data) {
    const normalizedData = normalize(data.results, movies);
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

export function putMovieToCache(object) {
    const normalizedData = normalize([object], movies);
    console.log('=======================================');
    console.log(normalizedData);
    console.log('=======================================');
    return {
        type: C.PUT_MOVIE_TO_CACHE,
        payload: normalizedData,
    };
}

export function getMovieDetails(id) {
    console.log('getMovieDetails');
    return function (dispatch) {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,images`)
            .then(resp => resp.json()) // Transform the data into json
            .then(data => dispatch(putMovieToCache(data)))
            .catch((error) => {
                console.log(error);
            });
    };
}

export function randomSearch() {
    console.log('randomSearch');
    const term = RANDOM_SEARCH_KEYWORDS[Math.round(Math.random() * RANDOM_SEARCH_KEYWORDS.length)];
    return function (dispatch) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term}`)
            .then(resp => resp.json()) // Transform the data into json
            .then((data) => {
                dispatch(populateMovies(data));
            })
            .catch((error) => {
                console.log(error);
                // dispatch(showError(error));
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
                        console.log(error);
                    });
            };
        case 'search':
            return function (dispatch) {
                return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${queryValue}`)
                    .then(resp => resp.json()) // Transform the data into json
                    .then(data => dispatch(populateMovies(data)))
                    .catch((error) => {
                        console.log(error);
                        // dispatch(showError(error));
                    });
            };
        default: {
            return null;
        }
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
