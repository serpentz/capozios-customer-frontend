// import { combineReducers } from 'redux';


export default function rootReducer(state = {loggedIn: false}, action) {
    switch (action.type) {
        case "LOGGING_IN":
            return state
        case "LOGIN_RESPONSE":
            // if statement to see if the user has proper login credentials
            if (!action.payload.message){
                return {...state, loggedIn: true, user: action.payload.user, jwt: action.payload.jwt}
            } else {
                return {...state, loggedIn: false}
            }
        default:
            return state;
    }
}