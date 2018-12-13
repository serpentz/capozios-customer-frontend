// API URLS
const loginURL = () => "http://localhost:3000/api/v1/login";



// Fetch calls
export function fetchLogin() {
    return (dispatch) => {
        dispatch({type: "LOGGING_IN"});
        return fetch(loginURL())
        .then(res => res.json())
        .then(json => dispatch({type: "LOGIN_RESPONSE", payload: json}));
        // .catch needs to be added here
    }
}