import axios from "axios";

export const FETCH_MOVIES = "FETCH_MOVIES";

var testURL = 'https://jsonplaceholder.typicode.com/albums';

export function fetchMovies() {

    var request = axios.get(testURL);

    console.log("Request",request);

    return {
        type:FETCH_MOVIES,
        payload:request
    }
}