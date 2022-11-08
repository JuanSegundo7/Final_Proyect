import { DELETE_COFFEE, GET_COFFES, POST_CAFFEE, ABOUT } from "../Actions/Actions";

const initialState = {
  allCoffees: [],
  about:false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COFFES:
      return {
        ...state,
        allCoffees: action.payload,
        about:false
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
