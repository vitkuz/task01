import C from '../constants';

const searchBy = [
    { title: 'Popular', type: 'popular', active: true },
    { title: 'Director', type: 'director', active: false },
];

export default function (state = searchBy, action) {
    switch (action.type) {
        case C.SET_SEARCH_BY:
            return state.map((filter) => {
                if (action.payload.type !== filter.type) {
                    filter.active = false;
                } else {
                    filter.active = true;
                }
                return filter;
            });
        default:
            return state;
    }
}
