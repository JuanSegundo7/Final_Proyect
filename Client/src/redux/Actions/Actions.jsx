import axios from "axios";
export const GET_COFFES = "GET_COFFES";
export const POST_CAFFEE = "POST_CAFFEE";

export const getCoffees = () => {
    return async function (dispatch){
     let json = await axios.get(`http://localhost:3001/coffees`)
     console.log('action data', json.data)
     return dispatch({
         type: GET_COFFES,
         payload: json.data
     });
    };
 }
 //asd

 export const postCoffes = (payload) => {
    return function (dispatch){
        axios.post(`http://localhost:3001/coffees`, payload)
         .then(res => {
                dispatch({
                    type: POST_CAFFEE, 
                    payload: res.data
                })
                    console.log('action post', res)
                })
        .catch((error) => console.log('error', error))
    }
 }