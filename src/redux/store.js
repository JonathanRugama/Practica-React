import {createStore} from "redux"
import { ADD_TO_CART } from "./actions"


const initialStore ={
    cart: []
    
}
/* Es el rootReducer el encargado de manejar el estado */
const rootReducer = (state = initialStore, action) => {
    if(action.type === ADD_TO_CART){
        return {
            ...state,
            cart: state.cart.concat(action.id)
        }
    }
    return state
}

export default createStore(rootReducer)