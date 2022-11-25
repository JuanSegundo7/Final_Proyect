import axios from "axios";

// USERS
export const GET_ONE_USER = "GET_ONE_USER";
export const POST_USER = "POST_USER";
export const UPDATE_USER = "UPDATE_USER";

// FAVORITES
export const SET_ALL_FAVORITES = "SET_ALL_FAVORITES";
export const ADD_ONE_FAVORITE = "ADD_ONE_FAVORITE";
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

//CART
/* export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const FIND_ALL_CART = "FIND_ALL_CART"; */

//MAIL
export const SEND_EMAIL = "SEND_EMAIL";

//USERS

export const USERS = "USERS";

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
      const response = await axios.post(`${baseUrl}products`, payload);
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
    const response = await axios.get(`${baseUrl}categories`);
    return dispatch({
      type: "GET_CATEGORIES",
      payload: response.data,
    });
  };
}

export const sortFilter = (value, info, infoOrder) => (dispatch) => {
  return dispatch({
    type: ORDER_FILTER,
    payload: value,
    info: info,
    infoOrder: infoOrder,
  });
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
      const response = await axios.post(`${baseUrl}images`, payload);
      return response;
    } catch (error) {
      console.log("error", error);
    }
  };
};

// FAVORITES

export const setAllFavorites = (totalFavorites) => (dispatch) => {
  return dispatch({
    type: SET_ALL_FAVORITES,
    payload: totalFavorites,
  });
};

export const addOneFavorite = (newFavoriteId) => (dispatch) => {
  return dispatch({
    type: ADD_ONE_FAVORITE,
    payload: newFavoriteId,
  });
};

export const fillAllFavorites = (FavoritesArray) => (dispatch) => {
  return dispatch({
    type: FILL_ALL_FAVORITES,
    payload: FavoritesArray,
  });
};

export const matchFavorite = () => (dispatch) => {
  return dispatch({ type: MATCH_FAVORITE });
};

// USERS

export const updateUser = (id, body) => {
  return async function (dispatch) {
    if (id) {
      try {
        const response = await axios.put(`${baseUrl}users/${id}`, body);
        return dispatch({
          type: UPDATE_USER,
          payload: response.data,
        });
      } catch (error) {
        console.log("error", error);
      }
    }
  };
};

export const postUser = (payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${baseUrl}users`, payload);
      return dispatch({
        type: POST_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export function getOneUser(id) {
  return async function (dispatch) {
    const response = await axios(`${baseUrl}users/${id}`);
    return dispatch({
      type: GET_ONE_USER,
      payload: response.data,
    });
  };
}

export const getUsers = () => (dispatch) => {
  return axios(`${baseUrl}users`)
    .then((res) => dispatch({ type: USERS, payload: res.data }))
    .catch((err) => console.log(err));
};

//CART
/*
ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
*/
/* export const addToCart = (id) => (dispatch) => {
  return dispatch({
    type: ADD_TO_CART,
    payload: id,
  });
}; */

/* export const removeOneToCart = (id) => (dispatch) => {
  return dispatch({
    type: REMOVE_ONE_FROM_CART,
    payload: id,
  });
}; */

/* export const removeAllToCart = (id) => (dispatch) => {
  return dispatch({
    type: REMOVE_ALL_FROM_CART,
    payload: id,
  });
}; */

/* export const clearCart = () => (dispatch) => {
  return dispatch({
    type: CLEAR_CART,
  });
}; */

/* export const findAllCart = (CartArray) => (dispatch) => {
  return dispatch({
    type: FIND_ALL_CART,
    payload: CartArray,
  });
}; */

//EMAIL

export const sendEmail = (payload) => (dispatch) => {
  return axios
    .post(`${baseUrl}mail`, payload)
    .then((data) => dispatch({ type: SEND_EMAIL, payload: data.data }));
};
