import {
  GET_ONE_USER,
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
  SET_FAVORITES,
  FILL_ALL_FAVORITES,
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

  Favorites: [],

  User: {},

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  
    case GET_ONE_USER:
      return {
        ...state,
        User: action.payload,
      };
       
    case FILL_ALL_FAVORITES:
      const myLocalStorage = localStorage.getItem("Favorites-pf");
      if (myLocalStorage && myLocalStorage.length) {
        const newArray = myLocalStorage.split(",");

        for (let i = 0; i < newArray.length; i++) {
          if (!state.Favorites.includes(newArray[i])) {
            state.Favorites.push(newArray[i]);
          }
        }
      }

      return {
        ...state,
      };


    case SET_FAVORITES:
      let totalFavorites = [...state.Favorites];
      if (state.Favorites.includes(action.payload)) {
        totalFavorites = totalFavorites.filter(
          (unFavorito) => unFavorito !== action.payload
        );
      } else {
        totalFavorites.push(action.payload);
      }

      return {
        ...state,
        Favorites: totalFavorites,
      };

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

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
