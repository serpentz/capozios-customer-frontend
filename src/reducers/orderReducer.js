export default function orderReducer (state = {}, action) {
    switch (action.type) {
        case "SENDING_ORDER":
            return state;
        case "ORDER_RESPONSE":
            return state;
        default:
            return state
    }
}