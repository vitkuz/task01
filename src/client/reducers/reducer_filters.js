const dafaultFilters = {
    filters: [
        { type: 'release_date', title: 'By date' },
        { type: 'vote_average', title: 'By rating' },
    ],
    active: 'release_date',
    reverse: true,
};

export default function (state = dafaultFilters, action) {
    switch (action.type) {
        case 'SET_ACTIVE_FILTER':
            return Object.assign({}, state, {
                active: action.payload.active,
                reverse: !state.reverse,
            });
        default:
            return state;
    }
}
