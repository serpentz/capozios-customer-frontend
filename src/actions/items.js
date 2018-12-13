// API URLS

    const itemsURL = () => "http://localhost:3000/items";


// Headers

    // const headers = (data, type) => {
    //     return {
    //         method: type, 
    //         headers: {"Content-Type": "application/json", Accept:"application/json"},
    //         body: JSON.stringify(data)
    //         }
    // }


// Fetch calls

    export function fetchItems() {
        return (dispatch) => {
            dispatch({type: "FETCHING_ITEMS"});
            return fetch(itemsURL())
            .then(res => res.json())
            .then(response => dispatch({type: "ITEMS_RESPONSE", payload: response}));
        }
    }