export default function itemsReducer(state, action) {
    switch (action.type) {
        case "FETCHING_ITEMS":
            return state;
        case "ITEMS_RESPONSE":
            return {...state, items: action.payload}
        default:
            return state;
    }
}