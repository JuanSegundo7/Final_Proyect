import axios from "axios";
export const GET_COFFES = "GET_COFFES";
export const POST_CAFFEE = "POST_CAFFEE";
export const DELETE_COFFEE = "DELETE_COFFEE";
export const DETAIL_PRODUCT = "DETAIL_PRODUCT";
export const DETAIL_COFFEE = "DETAIL_COFFEE";
export const ABOUT = "ABOUT";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_PRODUCTS = "GET_PRODUCTS";

export const getCoffees = () => {
  try {
    return async function (dispatch) {
      let json = await axios.get(`http://localhost:3001/coffees`);
      return dispatch({
        type: GET_COFFES,
        payload: json.data,
      });
    };
  } catch (error) {
    console.log(error.message, "Error en action");
  }
};

export const postCoffes = (payload) => {
  return function (dispatch) {
    axios
      .post(`http://localhost:3001/coffees`, payload)
      .then((res) => {
        dispatch({
          type: POST_CAFFEE,
          payload: res.data,
        });
        console.log("action post", res);
      })
      .catch((error) => console.log("error", error));
  };
};

export const deleteCoffee = (id) => {
  return { type: DELETE_COFFEE, id };
};

export const detailCoffees = (id) => (dispatch) => {
  return axios(`http://localhost:3001/coffees/${id}`)
    .then((res) => dispatch({ type: DETAIL_COFFEE, payload: res.data }))
    .catch((err) => console.log(err.message));
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const getProducts = () => (dispatch) => {
  return axios(`http://localhost:3001/products`)
    .then((res) => dispatch({ type: GET_PRODUCTS, payload: res.data }))
    .catch((err) => console.log(err.message));
};

// export const about = (payload) => {
//   console.log('action',payload)
//   return{
//     type:ABOUT,
//     payload
//   }
// }
