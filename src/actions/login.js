// API URLS
const loginURL = () => "http://localhost:3000/api/v1/login";
const headers = (data, type) => {
    return {
        method: type, 
        headers: {"Content-Type": "application/json", Accept:"application/json"},
        body: JSON.stringify({user: data})
        }
}


// Fetch calls
export function fetchLogin(cred) {
    return (dispatch) => {
        dispatch({type: "LOGGING_IN"});
        return fetch(loginURL(), headers(cred, "POST"))
        .then(res => res.json())
        .then(response => dispatch({type: "LOGIN_RESPONSE", payload: response}));
        // .catch needs to be added here
    }
}