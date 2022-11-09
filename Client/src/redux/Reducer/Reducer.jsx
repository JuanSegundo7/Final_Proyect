import {
  DELETE_COFFEE,
  GET_COFFES,
  POST_CAFFEE,
  DETAIL_COFFEE,
  ABOUT,
  DETAIL_PRODUCTS,
  CLEAN_DETAIL,
  GET_PRODUCTS,
} from "../Actions/Actions";

const initialState = {
  allCoffees: [],
  about: false,
  detailCoffee: {},
  detailProduct: {},
  allProducts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COFFES:
      return {
        ...state,
        allCoffees: action.payload,
        about: false,
      };
    case POST_CAFFEE:
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
        detailCoffee: {},
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
    // case ABOUT:
    //   console.log('reducer', action.payload)
    //   if(action.payload === true){
    //     return{
    //       ...state,
    //       about: true
    //     }
    //   } else{
    //     return{
    //       ...state,
    //       about: false
    //     }
    //   }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
