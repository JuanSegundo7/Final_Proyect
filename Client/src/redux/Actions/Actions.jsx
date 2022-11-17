import axios from "axios";

// USERS
export const GET_ONE_USER = "GET_ONE_USER";

// FAVORITES
export const SET_FAVORITES = "SET_FAVORITES";
export const FILL_ALL_FAVORITES = "FILL_ALL_FAVORITES";
export const MATCH_FAVORITE = "MATCH_FAVORITE";

// CATEGORIES
export const GET_CATEGORIES = "GET_CATEGORIES";

// PRODUCTS
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_ONE_PRODUCT = "GET_ONE_PRODUCT";
export const POST_PRODUCT = "POST_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_PRODUCT_BY_QUERY = "GET_PRODUCT_BY_QUERY";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const CLEAN_FILTERED = "CLEAN_FILTERED";
export const CLEAN_NAME = "CLEAN_NAME";
export const CLEAN_ORDER = "CLEAN_ORDER";

// FILTERS
export const FILTER_BRAND = "FILTER_BRAND";
export const FILTER = "FILTER";

// BRANDS
export const GET_BRANDS = "GET_BRANDS";
// export const GET_BRAND_BY_QUERY = "GET_BRANDS_BY_QUERY";

//ORDERS
export const ORDER_FILTER = "ORDER_FILTER";
export const ORDER_SEARCH = "ORDER_SEARCH";

const baseUrl = `http://localhost:3001/`;

/*****************************************************************************************************/

// PRODUCTS

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${baseUrl}products`);
    dispatch({ type: GET_PRODUCTS, payload: data });
  } catch (error) {
    console.log(`${error}`);
  }
};

export const postProduct = (payload) => {
  return async function (dispatch) {
    try {
      var response = await axios.post(`${baseUrl}products`, payload);
      return response;
    } catch (error) {
      console.log("error", error);
    }
  };
};

// dispatch(getProductsByQuery("name, orderbyName, category", "ASC"))

// `${baseUrl}products?orderedbyname=ASC`

export const getProductByQuery = (info, name, value, order) => {
  try {
    return async function (dispatch) {
      let json = await axios.get(
        `${baseUrl}products?${info}=${value}&${order}`
      ); // category=coffee
      return dispatch({
        type: GET_PRODUCT_BY_QUERY,
        value: `${value}`,
        name: `${name}`,
        payload: json.data,
      });
    };
  } catch (error) {
    console.log(error.message, "Error en action");
  }
};

// dispatch(getOneProduct(id)) - Detail

export const getOneProduct = (id) => async (dispatch) => {
  try {
    await axios
      .get(`${baseUrl}products/${id}`)
      .then((data) => dispatch({ type: GET_ONE_PRODUCT, payload: data.data }));
  } catch (e) {
    console.log(e);
  }
};

export const deleteProduct = (id) => {
  return { type: DELETE_PRODUCT, id };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

// BRANDS

export const getBrands = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${baseUrl}brands`);
    dispatch({ type: GET_BRANDS, payload: data });
  } catch (error) {
    console.log(`${error}`);
  }
};

export const filterBrands = (value) => (dispatch) => {
  return dispatch({ type: FILTER_BRAND, payload: value });
};

export const filter = (value, info) => (dispatch) => {
  return dispatch({ type: FILTER, info: info, value: value });
};

// CATEGORIES

export function getCategories() {
  return async function (dispatch) {
    var response = await axios.get(`${baseUrl}categories`);
    return dispatch({
      type: "GET_CATEGORIES",
      payload: response.data,
    });
  };
}

export const sortFilter = (value) => (dispatch) => {
  return dispatch({ type: ORDER_FILTER, payload: value });
};

export const sortSearch = (value) => (dispatch) => {
  return dispatch({ type: ORDER_SEARCH, payload: value });
};

export const cleanFiltered = () => (dispatch) => {
  return dispatch({ type: CLEAN_FILTERED });
};

export const cleanByName = () => (dispatch) => {
  return dispatch({ type: CLEAN_NAME });
};

// IMAGES

export const postImage = (payload) => {
  return async function (dispatch) {
    try {
      var response = await axios.post(`${baseUrl}images`, payload);
      return response;
    } catch (error) {
      console.log("error", error);
    }
  };
};

// FAVORITES

export const setFavorites = (newFavoriteId) => (dispatch) => {
  return dispatch({
    type: "SET_FAVORITES",
    payload: newFavoriteId,
  });
};

export const fillAllFavorites = (FavoritesArray) => (dispatch) => {
  return dispatch({
    type: "FILL_ALL_FAVORITES",
    payload: FavoritesArray,
  });
};

export const matchFavorite = () => (dispatch) => {
  return dispatch({ type: MATCH_FAVORITE });
};

// USERS

export const postUser = (payload) => {
  return async function (dispatch) {
    try {
      var response = await axios.post(`${baseUrl}users`, payload);
      return response;
    } catch (error) {
      console.log("error", error);
    }
  };
};

export function getOneUser(id) {
  return async function (dispatch) {
    var response = await axios(`${baseUrl}users/${id}`);
    console.log("datos:", response.data);
    return dispatch({
      type: GET_ONE_USER,
      payload: response.data,
    });
  };
}

// //http://localhost:3001/brands?category=coffee
