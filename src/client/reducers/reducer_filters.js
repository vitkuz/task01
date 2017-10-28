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
                reverse: action.payload.reverse,
            });
            // const filterToChange = state.filters.find((filter) => {
            //     return action.payload.active === filter.type;
            // });
            // filterToChange.reverse = !filterToChange.reverse;
            // console.log({ filters: state.filters, active: action.payload.active, reverse: filterToChange.reverse });
            // return { filters: state.filters, active: action.payload.active, reverse: filterToChange.reverse };
        default:
            return state;
    }
}
