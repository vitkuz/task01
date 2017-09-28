export default function (state = 'rating', action) {
    switch (action.type) {
        case 'SET_SORT_BY':
            console.log("SET_SORT_BY");
    }

    return state;

}