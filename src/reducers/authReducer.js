export default function authReducer(state = {loggedIn: false}, action) {
    switch (action.type) {
    // Validating Tokens
        case "VALIDATING_TOKEN":
            return state
        case "NO_TOKEN":
            return state
    // Logging In 
        case "LOGGING_IN":
            return state
        case "LOGIN_RESPONSE":
            if (!action.payload.message){
                localStorage.setItem("token", action.payload.jwt);
                return {...state, loggedIn: true, user: action.payload.user, jwt: action.payload.jwt}
            } else {
                return {...state, loggedIn: false}
            }
    // Logging Out
        case "LOGG_OUT":
            return {...state, loggedIn: false, jwt: ''}
        case "PROFILE_RESPONSE":
            if(!action.payload.error) {
                return {...state, loggedIn: true, user: action.payload};
            } else {
                console.warn(action.payload);
                localStorage.removeItem("token");
                return state;
            }
        case "TOKEN_RESET":
            console.warn(action.payload);
            localStorage.removeItem("token");
            return state;
    // Create User
        case "CREATING_USER":
            console.log(action.payload)
            return state;
        case "CREATE_USER_RESPONSE":
            return state;
        default:
            return state;
    }
}