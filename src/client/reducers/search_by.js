export default function (state = 'title', action) {
    switch (action.type) {
        case 'SET_SEARCH_BY':
            console.log('SET_SEARCH_BY', action.payload);
            return action.payload;
    }

    return state;

}