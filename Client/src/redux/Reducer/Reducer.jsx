import {
  POST_USER,
  USERS,
  UPDATE_USER,
  GET_ONE_USER,
  GET_PRODUCTS,
  GET_ONE_PRODUCT,
  //POST_PRODUCT,
  //DELETE_PRODUCT,
  GET_PRODUCT_BY_QUERY,
  CLEAN_DETAIL,
  GET_BRANDS,
  GET_CATEGORIES,
  FILTER,
  CLEAN_FILTERED,
  CLEAN_NAME,
  ORDER_FILTER,
  SET_ALL_FAVORITES,
  ADD_ONE_FAVORITE,
  FILL_ALL_FAVORITES,
  MATCH_FAVORITE,
  ADD_TO_CART,
  MERCADOPAGO,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
  FIND_ALL_CART,
  SEND_EMAIL,
  UPDATE_PRODUCT,
  CLEAN_BRANDS,
  GET_COMMENTS,
  POST_COMMENT,
} from "../Actions/Actions";

const initialState = {
  Products: [],
  Product: {},
  Categories: [],

  Brands: [],
  ProductsBrand: [],
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
  FavoritesCopy: [],
  FavoriteBoolean: false,
  UpdateFavorite: 1,

  OrderPrice: [],
  Price: false,

  MercadoPagoUrl: "",

  Users: [],
  User: {},

  cart: [],

  Comments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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

    case SET_ALL_FAVORITES:
      return {
        ...state,
        Favorites: action.payload,
      };

    case ADD_ONE_FAVORITE:
      let totalFavorites = [...state.Favorites];
      if (state.Favorites.includes(action.payload)) {
        totalFavorites = totalFavorites.filter(
          (unFavorito) => unFavorito !== action.payload
        );
      } else {
        totalFavorites.push(action.payload);
      }
      if (state.Favorites.length === 1) localStorage.removeItem("Favorites-pf");

      return {
        ...state,
        Favorites: totalFavorites,
        UpdateFavorite: state.UpdateFavorite + 1,
      };

    case MATCH_FAVORITE: {
      const allProducts = state.Products;
      const favorites =
        allProducts &&
        allProducts.length &&
        state.Favorites?.map((fav) => {
          return allProducts?.find((p) => p._id === fav);
        });

      return {
        ...state,
        FavoritesCopy: favorites,
        FavoriteBoolean: true,
      };
    }

    case ADD_TO_CART:
      const allProducts = state.Products;

      let newCoffe = allProducts.find(
        (product) => product._id === action.payload
      );

      let itemInCart = state.cart.find((product) => {
        return product._id === newCoffe._id;
      });
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((product) => {
              return product._id === newCoffe._id
                ? {
                    ...product,
                    quantity: product.quantity + 1,
                    // stock: product.stock - 1,
                  }
                : product;
            }),
            update: state.update + 1,
          }
        : {
            ...state,
            cart: [...state.cart, { ...newCoffe, quantity: 1 }],
          };

    case REMOVE_ONE_FROM_CART: {
      const allCart = state.cart;

      let findProduct = allCart.find(
        (product) => product._id === action.payload
      );

      if (findProduct.quantity > 1) {
        findProduct.quantity = findProduct.quantity - 1;
        // findProduct.stock = findProduct.stock + 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      } else if (findProduct.quantity === 0) {
        const filterCart = allCart.filter(
          (coffe) => coffe._id !== action.payload
        );
        return {
          ...state,
          cart: filterCart,
        };
      }
      if (allCart.length === 1) {
        localStorage.removeItem("Cart-pf");
      }
    }

    case REMOVE_ALL_FROM_CART:
      const cart = state.cart;
      const filter2 = cart.filter((product) => product._id !== action.payload);
      if (state.cart.length === 1) localStorage.removeItem("Cart-pf");

      return {
        ...state,
        cart: filter2,
      };

    case CLEAR_CART:
      localStorage.removeItem("Cart-pf");
      return {
        ...state,
        cart: [],
      };

    case FIND_ALL_CART:
      const localStorageCart = JSON.parse(localStorage.getItem("Cart-pf"));

      if (localStorageCart && localStorageCart.length) {
        return {
          ...state,
          cart: localStorageCart,
        };
      } else {
        return {
          ...state,
        };
      }

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
    //return {
    //...state,
    //allCoffees: [...state.allCoffees, action.payload],
    //};
    // case DELETE_PRODUCT:
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
            ProductsBrand: action.payload,
          };
        }

        case "name": {
          return {
            ...state,
            ByName: action.payload,
            Search: true,
            updateFilter: state.updateFilter + 1,
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

    case CLEAN_BRANDS: {
      return {
        ...state,
        ProductsBrand: [],
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
      const filter = state[action.info];
      const infoOrder = action.infoOrder;
      const order =
        action.payload === "DES"
          ? filter.sort((p1, p2) => {
              if (p1[infoOrder] > p2[infoOrder]) return -1;
              if (p1[infoOrder] < p2[infoOrder]) return 1;
              return 0;
            })
          : filter.sort((p1, p2) => {
              if (p1[infoOrder] > p2[infoOrder]) return 1;
              if (p1[infoOrder] < p2[infoOrder]) return -1;
              return 0;
            });

      return {
        ...state,
        Filtered: action.info === "Filtered" ? order : [...state.Filtered],
        ByName: action.info === "ByName" ? order : [...state.ByName],
        FavoritesCopy:
          action.info === "FavoritesCopy" ? order : [...state.FavoritesCopy],
        ProductsBrand:
          action.info === "ProductsBrand" ? order : [...state.ProductsBrand],
        updateFilter: state.updateFilter + 1,
      };

    case SEND_EMAIL:
      return {
        ...state,
      };

    case USERS: {
      return {
        ...state,
        Users: action.payload,
      };
    }

    case POST_USER:
      return {
        ...state,
        User: action.payload,
        updateFilter: state.updateFilter + 1,
      };

    case GET_ONE_USER:
      return {
        ...state,
        User: action.payload,
        updateFilter: state.updateFilter + 1,
      };

    case MERCADOPAGO:
      return {
        ...state,
        MercadoPagoUrl: action.payload,
      };

    case GET_COMMENTS:
      return {
        ...state,
        Comments: action.payload,
      };

    case POST_COMMENT:
      return {
        ...state,
        updateFilter: state.updateFilter + 1,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
