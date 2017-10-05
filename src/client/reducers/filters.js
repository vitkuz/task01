export default function (state = null, action) {
    switch (action.type) {
        case 'SET_ACTIVE_FILTER':
            return state.map((filter) => {
                if (action.payload.type !== filter.type) {
                    filter.active = false;
                } else {
                    filter.active = true;
                    filter.sortDir = action.payload.sortDir;
                }
                return filter;
            });
    }
    
    return [{
        active: true,
        title: 'by year',
        type: 'release_year',
        sortDir: true,
    }, {
        active: false,
        title: 'by rating',
        type: 'rating',
        sortDir: true,
    },
    ];
}