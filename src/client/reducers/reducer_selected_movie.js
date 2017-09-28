export default function (state = null, action) {
    switch (action.type) {
        case 'ITEM_SELECTED':
            console.log("SELECTED");
            return action.payload;

    }

    return state

}