import {
  DELETE_COFFEE,
  GET_COFFES,
  POST_COFFEE,
  DETAIL_COFFEE,
  ABOUT,
  DETAIL_PRODUCTS,
  CLEAN_DETAIL,
  GET_PRODUCTS,
  GET_CATEGORY,
  ORDERCOFFEES_AZ,
  ORDERCOFFEES_ZA,
  GET_COFFEE_BY_NAME,
  ORDER_PRODUCTS_A_Z,
  ORDER_PRODUCTS_Z_A,
  ORDER_COFFEE_STOCK_ASC,
  ORDER_COFFEE_STOCK_DSC,
  FILTER_RANGE,
} from "../Actions/Actions";

const initialState = {
  allCoffees: [],
  allProducts: [],
  filters: [],
  category: [],
  detailCoffee: {},
  detailProduct: {},
  min: 1,
  max: 5000,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COFFES:
      return {
        ...state,
        allCoffees: action.payload,
        about: false,
      };
    case POST_COFFEE:
      console.log("redurer post", action.payload);
      return {
        ...state,
        allCoffees: [...state.allCoffees, action.payload],
      };
    case DELETE_COFFEE:
      console.log(action.id, "es el id");
      return {
        ...state,
      };

    case DETAIL_COFFEE:
      return {
        ...state,
        detailCoffee: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        detailCoffee: {},
        detailProduct: {},
      };

    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

    case DETAIL_PRODUCTS:
      return {
        ...state,
        detailProduct: action.payload,
      };
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    case ORDERCOFFEES_AZ: {
      // console.log('llegue reducer', action.payload)
      return {
        ...state,
        allCoffees: action.payload,
      };
    }
    case ORDERCOFFEES_ZA:
      return {
        ...state,
        allCoffees: action.payload,
      };

    case GET_COFFEE_BY_NAME:
      return {
        ...state,
        allCoffees: action.payload,
      };
    case ORDER_COFFEE_STOCK_ASC:
      return {
        ...state,
        allCoffees: action.payload,
      };
    case ORDER_COFFEE_STOCK_DSC:
      return {
        ...state,
        allCoffees: action.payload,
      };

    case ORDER_PRODUCTS_A_Z:
      return {
        ...state,
        allProducts: action.payload,
      };
    case ORDER_PRODUCTS_Z_A:
      return {
        ...state,
        allProducts: action.payload,
      };
    case FILTER_RANGE:
      const { array } = action.payload;
      const { max } = action.payload;
      const { min } = action.payload;

      const maxFinal = max === undefined ? state.max : max;
      const minFinal = min === undefined ? state.min : min;

      // const arrTotal = array.filter((e) => {
      //   return e.price >= minFinal && e.price <= maxFinal;
      // });
      console.log(state.max, "max");
      console.log(state.min, "min");
      return {
        ...state,
        // allProducts: arrTotal,
        max: max,
        min: min,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
