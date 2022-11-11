import {
  GET_PRODUCTS,
  GET_ONE_PRODUCT,
  POST_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT_BY_QUERY,
  CLEAN_DETAIL
} from "../Actions/Actions";

const initialState = {
  Products: [],
  Product: {},
  Categories: [],
  Brands: [],
  
  ProductASC: [],
  ProductDES: [],
  ProductStockASC: [],
  ProductStockDES: [],
  ProductPriceASC: [],
  ProductPriceDES: [],

  CategoriesAccesories: [],
  CategoriesCoffee: [],
  CategoriesCoffeMaker: [],
  CategoriesOthers: [],

  // allProducts: [],
  // allProducts2: [],
  // filtersProduct: [],
  // filtersProduct2: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allCoffees: action.payload,
        allCoffees2: action.payload,
      };
    case GET_ONE_PRODUCT:
      return {
        ...state,
        detailCoffee: action.payload,
      };
    case POST_PRODUCT:
      console.log("redurer post", action.payload);
      return {
        ...state,
        allCoffees: [...state.allCoffees, action.payload],
      };
    // case DELETE_PRODUCT:
    //   console.log(action.id, "es el id");
    //   return {
    //     ...state,
    //   };

    case CLEAN_DETAIL:
      return {
        ...state,
      };

    case GET_PRODUCT_BY_QUERY: 
        switch(action.value){
            case "ProductASC": {
              return {
                ...state,
                ProductASC: action.payload
              }
            }
            case "ProductDES": {
              return {
                ...state,
                ProductDES: action.payload
              }
            }
            case "StockASC": {
              return {
                ...state,
                ProductStockASC: action.payload
              }
            }
            case "StockDES": {
              return {
                ...state,
                ProductStockDES: action.payload
              }
            }
            case "PriceASC": {
              return {
                ...state,
                ProductPriceASC: action.payload
              }
            }
            case "PriceDES": {
              return {
                ...state,
                ProductPriceDES: action.payload
              }
            }
            default: return { ...state }
        }

    // case FILTER_COFFE_MIN:
    //   if (action.payload.value == "coffee") {

    //     let aux2 = [];

    //     if (!state.filters2.length) {

    //       const filtrado = state.allCoffees2.filter((c) => action.payload.min <= c.price);
    //       filtrado.map((ele) => aux2.push(ele));
    //       return {
    //         ...state,
    //         filters:aux2,
    //         allCoffees: aux2,
    //       };

    //     } else {

    //       const filter2 = state.filters2.filter((c) => action.payload.min <= c.price);
    //       filter2.map((ele) => aux2.push(ele));

    //       return {
    //         ...state,
    //         //filters:aux2,
    //         allCoffees: aux2,
    //       };
    //     }


    //   } else if (action.payload.value == "products") {

    //     let aux3 = [];

    //     if (!state.filtersProduct2.length) {

    //       const filtrado = state.allProducts2.filter((c) => action.payload.min <= c.price);
    //       filtrado.map((ele) => aux3.push(ele));

    //       return {
    //         ...state,
    //         filtersProduct:aux3,
    //         allProducts: aux3,
    //       };

    //     } else {

    //       const filter2 = state.filtersProduct2.filter((c) => action.payload.min <= c.price);
    //       filter2.map((ele) => aux3.push(ele));

    //       return {
    //         ...state,
    //         //filtersProduct:aux2,
    //         allProducts: aux3,
    //       };
    //     }

    //   }

    // case FILTER_COFFE_MAX:
    //   if (action.payload.value === "coffee") {

    //     let aux = [];

    //     if (!state.filters.length) {

    //       const filtradoMax = state.allCoffees2.filter((c) => action.payload.max >= c.price);
    //       filtradoMax.map((ele) => aux.push(ele));

    //       return {
    //         ...state,
    //         filters2: aux,
    //         allCoffees: aux,
    //       };

    //     } else {

    //       const filter2 = state.filters.filter((c) => action.payload.max >= c.price);
    //       filter2.map((ele) => aux.push(ele));

    //       return {
    //         ...state,
    //         //filters2: aux,
    //         allCoffees: aux,
    //       };
    //     }


    //   } else if (action.payload.value == "products") {
    //     let aux = [];

    //     if (!state.filtersProduct.length) {

    //       const filtrado = state.allProducts2.filter((c) => action.payload.max >= c.price);
    //       filtrado.map((ele) => aux.push(ele));

    //       return {
    //         ...state,
    //         filtersProduct2:aux,
    //         allProducts: aux,
    //       };

    //     } else {

    //       const filter2 = state.filtersProduct.filter((c) => action.payload.max >= c.price);
    //       filter2.map((ele) => aux.push(ele));

    //       return {
    //         ...state,
    //         //filtersProduct2:aux,
    //         allProducts: aux,
    //       };
    //     }

    //   }

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;

