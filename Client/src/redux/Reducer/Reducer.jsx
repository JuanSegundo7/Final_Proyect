import { GET_COFFES, POST_CAFFEE } from "../Actions/Actions";

const initialState = {
allCoffees: [],
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COFFES:
            return{
                ...state,
                allCoffees:action.payload
            }
        case POST_CAFFEE:
            console.log('redurer post', action.payload)
            return{
                ...state,
                allCoffees:[...state.allCoffees, action.payload]
            }
            default:
                return {
                    ...state
                };
    }
}

export default rootReducer;