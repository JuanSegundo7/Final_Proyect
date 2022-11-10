import {
  DELETE_COFFEE,
  GET_COFFES,
  POST_COFFEE,
  DETAIL_COFFEE,
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
  FILTER_COFFE_MIN,
  FILTER_COFFE_MAX,
} from "../Actions/Actions";

const initialState = {
  allCoffees: [],
  allCoffees2:[],
  filters: [],
  filters2: [],

  allProducts: [],
  allProducts2: [],
  filtersProduct: [],
  filtersProduct2: [],

  detailCoffee: {},
  category: [],
  detailProduct: {},
  filterCoffe:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COFFES:
      return {
        ...state,
        allCoffees: action.payload,
        allCoffees2: action.payload,
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
        allProducts2: action.payload
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
      }
      
    case ORDER_PRODUCTS_Z_A:
      return {
        ...state,
        allProducts: action.payload,
      };

    case FILTER_COFFE_MIN:

      if(action.payload.value == 'coffee'){
        let aux2 = []
 
        if(!state.filters2.length){
          const filtrado = state.allCoffees2.filter((c) => action.payload.min <= c.price)
          filtrado.map((ele) => aux2.push(ele))
 
        } else {
 
          const filter2 = state.filters2.filter((c) => action.payload.min <= c.price)
          filter2.map((ele) => aux2.push(ele))
 
        }
 
       return{
         ...state,
         allCoffees:aux2
       }

      } else if (action.payload.value == 'products'){
        console.log('entre products')
        let aux2 = []
 
        if(!state.filtersProduct2.length){
          const filtrado = state.allProducts2.filter((c) => action.payload.min <= c.price)
          filtrado.map((ele) => aux2.push(ele))
 
        } else {
 
          const filter2 = state.filtersProduct2.filter((c) => action.payload.min <= c.price)
          filter2.map((ele) => aux2.push(ele))
 
        }
 
       return{
         ...state,
         allProducts:aux2
       }
      }

    case FILTER_COFFE_MAX: 
    if(action.payload.value === 'coffee'){

      let aux = []

      if(!state.filtersProduct.length){

        const filtradoMax = state.allCoffees2.filter((c) => action.payload.max >= c.price)
        filtradoMax.map((ele) => aux.push(ele))

      } else {

        const filter2 = state.filtersProduct.filter((c) => action.payload.max >= c.price)
        filter2.map((ele) => aux.push(ele))

      }

      return{
        ...state,
        filtersProduct2:aux,
        allCoffees: aux
      }
    } else if (action.payload.value == 'products'){
      let aux = []
 
      if(!state.filters.length){
        const filtrado = state.allProducts2.filter((c) => action.payload.max >= c.price)
        filtrado.map((ele) => aux.push(ele))

      } else {

        const filter2 = state.filters.filter((c) => action.payload.max >= c.price)
        filter2.map((ele) => aux.push(ele))

      }

     return{
       ...state,
       allProducts:aux
     }
    }


    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
