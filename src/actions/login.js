// API URLS
    const loginURL = () => "http://localhost:3000/api/v1/login";
    const profileURL = () => "http://localhost:3000/api/v1/profile";


// Headers
    const headers = (data, type) => {
        return {
            method: type, 
            headers: {"Content-Type": "application/json", Accept:"application/json"},
            body: JSON.stringify(data)
            }
    }

// Function
    
    export function checkForToken() {
        return (dispatch) => {
                if (localStorage.token) {
                dispatch({type: "VALIDATING_TOKEN"});
                dispatch(fetchProfile(localStorage.token));
            } else {
                dispatch({type: "NO_TOKEN"})
            }
        }
    };


// Fetch calls


    export function fetchLogin(cred) {
        return (dispatch) => {
            dispatch({type: "LOGGING_IN"});
            return fetch(loginURL(), headers({user: cred}, "POST"))
                .then(res => res.json())
                .then(response => dispatch({type: "LOGIN_RESPONSE", payload: response}));
                // .catch needs to be added here
        }
    };

    function fetchProfile(token) {
        return (dispatch) => { 
                fetch(profileURL(), {
                method: 'GET',
                headers: {
                Authorization: `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(response => dispatch({type: "PROFILE_RESPONSE", payload: response}))
            .catch(error => dispatch({type: "TOKEN_RESET", payload: error}))
        }
    }