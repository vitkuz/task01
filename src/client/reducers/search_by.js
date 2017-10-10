import C from '../actions/constants';

const by = [
    { title: 'title', type: 'title', active: true },
    { title: 'director', type: 'director', active: false },
];

export default function (state = by, action) {
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
    }
    return state;
}
