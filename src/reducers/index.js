import { combineReducers } from 'redux';


export default function rootReducer(state = {loggingIn: false}, action) {
    switch (action.type) {
        case "LOGGING_IN":
            return {loggingIn: true};
        case "LOGIN_RESPONSE":
            // if statement to see if the user has proper login credentials

            return {logginIn: false, user: action.payload}
        default:
            return state;
    }
}