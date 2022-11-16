import {
  GET_PRODUCTS,
  GET_ONE_PRODUCT,
  POST_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT_BY_QUERY,
  CLEAN_DETAIL,
  GET_BRANDS,
  GET_CATEGORIES,
  FILTER,
  CLEAN_FILTERED,
  CLEAN_NAME,
  CLEAN_ORDER,
  ORDER_FILTER,
  ORDER_SEARCH,
} from "../Actions/Actions";

const initialState = {
  Products: [],
  Product: {},
  Categories: [],
  Brands: [],
  BrandsCopy: [],

  ByName: [],
  Search: false,

  CategoriesAccesories: [],
  CategoriesCoffee: [],
  CategoriesCoffeeMaker: [],
  CategoriesOthers: [],

  Filtered: [],
  Filter: false,
  updateFilter: 1,

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
        Products: action.payload,
      };
    case GET_ONE_PRODUCT:
      return {
        ...state,
        Product: action.payload,
      };
    //case POST_PRODUCT:
    //console.log("reducer post", action.payload);
    //return {
    //...state,
    //allCoffees: [...state.allCoffees, action.payload],
    //};
    // case DELETE_PRODUCT:
    //   console.log(action.id, "es el id");
    //   return {
    //     ...state,
    //   };

    case CLEAN_DETAIL:
      return {
        ...state,
        Product: {},
      };

    case GET_PRODUCT_BY_QUERY:
      switch (action.name) {
        case "coffee": {
          return {
            ...state,
            CategoriesCoffee: action.payload,
          };
        }
        case "coffee-maker": {
          return {
            ...state,
            CategoriesCoffeeMaker: action.payload,
          };
        }
        case "accessories": {
          return {
            ...state,
            CategoriesAccesories: action.payload,
          };
        }
        case "others": {
          return {
            ...state,
            CategoriesOthers: action.payload,
          };
        }

        case "brand": {
          return {
            ...state,
            Brands: action.payload,
          };
        }

        case "name": {
          return {
            ...state,
            ByName: action.payload,
            Search: true,
          };
        }

        default:
          return { ...state };
      }

    case GET_BRANDS: {
      return {
        ...state,
        Brands: action.payload,
        BrandsCopy: action.payload,
      };
    }

    case GET_CATEGORIES: {
      return {
        ...state,
        Categories: action.payload,
      };
    }

    case CLEAN_FILTERED:
      return {
        ...state,
        Filtered: [],
        Filter: false,
        updateFilter: state.updateFilter + 1,
      };

    case CLEAN_NAME:
      return {
        ...state,
        ByName: [],
        Search: false,
      };

    // FILTER

    case FILTER: {
      const { min, max } = action.value;
      const array = state[action.info];

      // const copyCoffees = state[action.info]
      const priceMin = array.filter((e) => e.price > min);
      const priceFinal = priceMin.filter((e) => e.price < max);

      return {
        ...state,
        Filtered: priceFinal,
        updateFilter: state.updateFilter + 1,
        Filter: true,
      };
    }

    case ORDER_FILTER:
      const filter = state.Filtered;
      const order =
        action.payload === "DES"
          ? filter.sort((p1, p2) => {
              if (p1.name > p2.name) return -1;
              if (p1.name < p2.name) return 1;
              return 0;
            })
          : filter.sort((p1, p2) => {
              if (p1.name > p2.name) return 1;
              if (p1.name < p2.name) return -1;
              return 0;
            });

      return {
        ...state,
        Filtered: order,
        updateFilter: state.updateFilter + 1,
      };

    case ORDER_SEARCH:
      const search = state.ByName;
      const ordered =
        action.payload === "DES"
          ? search.sort((p1, p2) => {
              if (p1.name > p2.name) return -1;
              if (p1.name < p2.name) return 1;
              return 0;
            })
          : search.sort((p1, p2) => {
              if (p1.name > p2.name) return 1;
              if (p1.name < p2.name) return -1;
              return 0;
            });

      return {
        ...state,
        ByName: ordered,
        updateFilter: state.updateFilter + 1,
      };

    // case FILTER_BRAND:
    //   const filterBrand = state.Filters.filter((coffee) => {
    //     return coffee.brand?.name === action.payload;
    //   });
    //   console.log(filterBrand, "filterBrand");
    //   return {
    //     ...state,
    //     Brands: filterBrand,
    //   };

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
