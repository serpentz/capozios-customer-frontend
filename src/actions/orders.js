// URLS
const orderURL = () => "http://localhost:3000/orders";

// Fetch Calls

export function postOrder (order) {
    return (dispatch) => {
        dispatch({type: "SENDING_ORDER"});
        return fetch(orderURL,{
                        method: "POST",
                        headers: {
                            
                            Accept: "application/json",
                            "Content-Type": "application/jason"
                        },
                        body: JSON.stringify({order: order}),
                        }
                    )
            .then(res => res.json())
            .then(response => dispatch({type: "ORDER_RESPONSE", payload: response}))
    }
}