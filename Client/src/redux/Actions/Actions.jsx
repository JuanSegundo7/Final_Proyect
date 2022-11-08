import axios from "axios";
export const GET_COFFES = "GET_COFFES";
export const POST_CAFFEE = "POST_CAFFEE";
export const DELETE_COFFEE = "DELETE_COFFEE";

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
//asd

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
