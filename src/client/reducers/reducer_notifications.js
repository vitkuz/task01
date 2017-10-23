import C from '../constants';

const initialState = [];
let counter = 0;

export default function (state = initialState, action) {
    switch (action.type) {
        case C.ADD_NOTIFICATION:
            console.log(C.ADD_NOTIFICATION, state, action.payload);
            action.payload.id = counter;
            counter += 1;
            return [...state, action.payload];
        case C.REMOVE_NOTIFICATION:
            console.log(C.REMOVE_NOTIFICATION, state, action.payload);
            const filtered = state.filter((item) => {
                return action.payload !== item.id;
            });
            console.log(filtered);
            return [...filtered];
        default:
            break;
    }
    return state;
}