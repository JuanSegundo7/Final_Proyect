import axios from "axios";
export const GET_COFFES = "GET_COFFES";
export const POST_COFFEE = "POST_COFFEE";
export const DELETE_COFFEE = "DELETE_COFFEE";
export const DETAIL_PRODUCTS = "DETAIL_PRODUCTS";
export const DETAIL_COFFEE = "DETAIL_COFFEE";
export const ABOUT = "ABOUT";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_CATEGORY = "GET_CATEGORY";
export const ORDERCOFFEES_AZ = "ORDERCOFFEES_AZ";
export const ORDERCOFFEES_ZA = "ORDERCOFFEES_ZA";
export const GET_COFFEE_BY_NAME = "GET_COFFEE_BY_NAME";
export const ORDER_PRODUCTS_A_Z = "ORDER_PRODUCTS_A_Z";
export const ORDER_PRODUCTS_Z_A = "ORDER_PRODUCTS_Z_A";
export const ORDER_COFFEE_STOCK_ASC = "ORDER_COFFEE_STOCK_ASC";
export const ORDER_COFFEE_STOCK_DSC = "ORDER_COFFEE_STOCK_DSC";
export const FILTER_RANGE = "FILTER_RANGE";
export const FILTER_COFFE_MIN = "FILTER_COFFE_MIN"
export const FILTER_COFFE_MAX = "FILTER_COFFE_MAX"

const baseUrl = `http://localhost:3001/`;

export const getCoffees = () => {
  try {
    return async function (dispatch) {
      let json = await axios.get(`${baseUrl}coffees`);
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
      .post(`${baseUrl}coffees`, payload)
      .then((res) => {
        dispatch({
          type: POST_COFFEE,
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

export const getCoffeesByName = (name) => {
  try {
    return async function (dispatch) {
      let json = await axios.get(`${baseUrl}coffees?name=${name}`);
      return dispatch({
        type: GET_COFFEE_BY_NAME,
        payload: json.data,
      });
    };
  } catch (error) {
    console.log(error.message, "Error en action");
  }
};

export const detailCoffees = (id) => (dispatch) => {
  return axios(`${baseUrl}coffees/${id}`)
    .then((res) => dispatch({ type: DETAIL_COFFEE, payload: res.data }))
    .catch((err) => console.log(err.message));
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const getProducts = () => (dispatch) => {
  return axios(`${baseUrl}products`)
    .then((res) => dispatch({ type: GET_PRODUCTS, payload: res.data }))
    .catch((err) => console.log(err.message));
};

export const detailProduct = (id) => (dispatch) => {
  return axios(`${baseUrl}products/${id}`)
    .then((res) => dispatch({ type: DETAIL_PRODUCTS, payload: res.data }))
    .catch((err) => console.log(err.message));
};

export const getCategory = () => (dispatch) => {
  return axios(`${baseUrl}categories`).then((res) =>
    dispatch({
      type: GET_CATEGORY,
      payload: res.data,
    })
  );
};

export const coffeeNameAZ = () => (dispatch) => {
  return axios(`http://localhost:3001/coffees?orderedbyname=asc`)
    .then((res) =>
      dispatch({
        type: ORDERCOFFEES_AZ,
        payload: res.data,
      })
    )
    .catch((error) => console.log(error.message));
};

export const coffeeNameZA = () => (dispatch) => {
  return axios(`http://localhost:3001/coffees?orderedbyname=des`)
    .then((res) =>
      dispatch({
        type: ORDERCOFFEES_ZA,
        payload: res.data,
      })
    )
    .catch((error) => console.log(error.message));
};

export const productNameAZ = () => (dispatch) => {
  return axios(`${baseUrl}products?orderedbyname=ASC`)
    .then((res) => dispatch({ type: ORDER_PRODUCTS_A_Z, payload: res.data }))
    .catch((err) => console.log(err.message));
};

export const productNameZA = () => (dispatch) => {
  return axios(`${baseUrl}products?orderedbyname=DES`)
    .then((res) => dispatch({ type: ORDER_PRODUCTS_A_Z, payload: res.data }))
    .catch((err) => console.log(err.message));
};

export const coffeeStockAsc = () => (dispatch) => {
  return axios(`http://localhost:3001/coffees?orderedbystock=asc`)
    .then((res) =>
      dispatch({
        type: ORDER_COFFEE_STOCK_ASC,
        payload: res.data,
      })
    )
    .catch((error) => console.log(error.message));
};

export const coffeeStockDes = () => (dispatch) => {
  return axios(`http://localhost:3001/coffees?orderedbystock=des`)
    .then((res) =>
      dispatch({
        type: ORDER_COFFEE_STOCK_DSC,
        payload: res.data,
      })
    )
    .catch((error) => console.log(error.message));
};

export const filterMin = (min, array) => (dispatch) => {
  return dispatch({ type: FILTER_RANGE, payload: { min, array } });
};

export const filterMax = (max, array) => (dispatch) => {
  return dispatch({ type: FILTER_RANGE, payload: { max, array } });
};





export const filterCoffeMin = (min, value) => {
  //console.log( min, value) //x ahora solo me traigo el valor del precio, tengo que ver si tambien me envio el array de cafes renderizados
  return function (dispatch) {
    return dispatch({
      type:FILTER_COFFE_MIN,
      payload: { min, value}
    })
  };
};

export const filterCoffeMax = (max, value) => { //x ahora solo me traigo el valor del precio, tengo que ver si tambien me envio el array de cafes renderizados
  return function (dispatch) {
    return dispatch({
      type:FILTER_COFFE_MAX,
      payload: {max, value}
    })
  };
};

