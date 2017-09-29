export default function (state = 'rating', action) {
    switch (action.type) {
        case 'SET_FILTER_BY':
            console.log('SET_FILTER_BY', action.payload);
            return action.payload;
    }

    return state;

}