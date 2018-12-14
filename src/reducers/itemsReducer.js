export default function itemsReducer(state = {itemsFetched: false}, action) {
    switch (action.type) {
        case "FETCHING_ITEMS":
            return state;
        case "ITEMS_RESPONSE":
            return {...state, itemsFetched: true, items: action.payload}
        default:
            return state;
    }
}