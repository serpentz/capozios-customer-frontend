export default function orderReducer (state = {}, action) {
    switch (action.type) {
        case "SENDING_ORDER":
            return state;
        case "ORDER_RESPONSE":
            return state;
        case "ADDING_ITEM":
            return state;
        case "ITEM_ADDED":
            return {...state, order: action.payload}
        default:
            return state
    }
}