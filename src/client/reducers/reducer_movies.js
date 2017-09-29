export default function (state = null, action) {
    switch (action.type) {
        case 'POPULATE_MOVIES':
            console.log('POPULATE_MOVIES', action.payload);
            return action.payload;
        case 'ERROR':
            console.log('ERROR', action.payload);
            return action.payload;
        default:
            return state;
    }
}