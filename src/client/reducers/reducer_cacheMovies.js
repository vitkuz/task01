import C from '../constants';

const initialCache = {
    movies: [],
};

export default function (state = initialCache, action) {
    switch (action.type) {
        case C.PUT_MOVIE_TO_CACHE:
            console.log(action.payload);
            const newMovies1 = [...state.movies, action.payload];
            localStorage.setItem('movies', JSON.stringify(newMovies1));
            return { movies: newMovies1 };
        case C.GET_MOVIES_FROM_LOCALSTORAGE:
            const tretrievedObject = localStorage.getItem('movies');
            const newMovies2 = JSON.parse(tretrievedObject);
            console.log(newMovies2);
            if (!newMovies2) {
                newMovies2 = [];
            }
            return { movies: newMovies2 };
        default:
            return state;
    }
}
