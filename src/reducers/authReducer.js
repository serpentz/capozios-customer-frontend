export default function authReducer(state = {loggedIn: false}, action) {
    switch (action.type) {
        case "VALIDATING_TOKEN":
            return state
        case "NO_TOKEN":
            return state
        case "LOGGING_IN":
            return state
        case "LOGIN_RESPONSE":
            if (!action.payload.message){
                localStorage.setItem("token", action.payload.jwt);
                return {...state, loggedIn: true, user: action.payload.user, jwt: action.payload.jwt}
            } else {
                return {...state, loggedIn: false}
            }
        case "PROFILE_RESPONSE":
                return {...state, loggedIn: true, user: action.payload};
        case "TOKEN_RESET":
            console.warn(action.payload);
            localStorage.removeItem("token");
            return state;
        default:
            return state;
    }
}