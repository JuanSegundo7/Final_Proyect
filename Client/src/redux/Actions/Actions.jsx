import axios from "axios";

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

// export const ORDERCOFFEES_AZ = "ORDERCOFFEES_AZ";
// export const ORDERCOFFEES_ZA = "ORDERCOFFEES_ZA";
// export const ORDER_COFFEE_STOCK_ASC = "ORDER_COFFEE_STOCK_ASC";
// export const ORDER_COFFEE_STOCK_DSC = "ORDER_COFFEE_STOCK_DSC";
// export const FILTER_RANGE = "FILTER_RANGE";
// export const FILTER_COFFE_MIN = "FILTER_COFFE_MIN";
// export const FILTER_COFFE_MAX = "FILTER_COFFE_MAX";

const baseUrl = `http://localhost:3001/`;

// PRODUCTS

// TODOS LOS PRODUCTOS: CAFES, MAQUINAS, ACCESORIOS, OTROS

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

// export const getBrandByQuery = (brand) => (dispatch) => {
//   console.log(brand, "es brand en action");
//   return axios(`${baseUrl}products?brand=${brand}`)
//     .then((res) => dispatch({ type: GET_BRAND_BY_QUERY, payload: res.data }))
//     .catch((error) => console.log(error));
// };

// export const getCategory = () => (dispatch) => {
//   return axios(`${baseUrl}categories`).then((res) =>
//     dispatch({
//       type: GET_CATEGORY,
//       payload: res.data,
//     })
//   );
// };

// export const productNameAZ = () => (dispatch) => {
//   return axios(`${baseUrl}products?orderedbyname=ASC`)
//     .then((res) => dispatch({ type: ORDER_PRODUCTS_A_Z, payload: res.data }))
//     .catch((err) => console.log(err.message));
// };

// export const productNameZA = () => (dispatch) => {
//   return axios(`${baseUrl}products?orderedbyname=DES`)
//     .then((res) => dispatch({ type: ORDER_PRODUCTS_A_Z, payload: res.data }))
//     .catch((err) => console.log(err.message));
// };

// export const coffeeStockAsc = () => (dispatch) => {
//   return axios(`http://localhost:3001/coffees?orderedbystock=asc`)
//     .then((res) =>
//       dispatch({
//         type: ORDER_COFFEE_STOCK_ASC,
//         payload: res.data,
//       })
//     )
//     .catch((error) => console.log(error.message));
// };

// export const coffeeStockDes = () => (dispatch) => {
//   return axios(`http://localhost:3001/coffees?orderedbystock=des`)
//     .then((res) =>
//       dispatch({
//         type: ORDER_COFFEE_STOCK_DSC,
//         payload: res.data,
//       })
//     )
//     .catch((error) => console.log(error.message));
// };

// export const filterMin = (min) => (dispatch) => {
//   return dispatch({ type: FILTER_RANGE, payload: { min } });
// };

// export const filterAll = () => (dispatch) => {
//   return dispatch({ type: "FILTER_ALL" });
// };

// export const filterCoffeMin = (min, value) => {
//   //console.log( min, value) //x ahora solo me traigo el valor del precio, tengo que ver si tambien me envio el array de cafes renderizados
//   return function (dispatch) {
//     return dispatch({
//       type: FILTER_COFFE_MIN,
//       payload: { min, value },
//     });
//   };
// };

// export const filterCoffeMax = (max, value) => {
//   //x ahora solo me traigo el valor del precio, tengo que ver si tambien me envio el array de cafes renderizados
//   return function (dispatch) {
//     return dispatch({
//       type: FILTER_COFFE_MAX,
//       payload: { max, value },
//     });
//   };
// };

// //http://localhost:3001/brands?category=coffee
