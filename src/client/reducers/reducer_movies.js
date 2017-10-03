export default function (state = null, action) {
    switch (action.type) {
        case 'POPULATE_MOVIES':
            return action.payload;
        case 'ERROR':
            console.log('ERROR', action.payload);
            return action.payload;
        default:
            return state;
    }
}