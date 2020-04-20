import {createStore, combineReducers, applyMiddleware} from "redux"
import { ADD_TO_CART, REMOVE_OF_CART, GET_COURSE_LIST } from "./actions"
import  { composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"

const initialStore ={
    cart: []

    
}
const initialCourses = {
    courses: []
}
/* Es el cartReducer el encargado de manejar el estado */
const cartReducer = (state = initialStore, {type, id}) => {
    if(type === ADD_TO_CART){
        // Si alguno de los ids que tengo en mi array es igual al id que tengo en el action, 
        //se retorna el estado a como estaba (no se toca)
        if(state.cart.find(a => a=== id )) return state        
        
        return {
            ...state,
            cart: state.cart.concat(id)
        }
    }
   if (type === REMOVE_OF_CART) {
    if(state.cart.find(a => a=== id )) return {
            ...state,
            cart: state.cart.filter(c => c !== id)
        }
    } 
    return state
}
const coursesReducer = (state = initialCourses,action) => {
    if (action.type === GET_COURSE_LIST) {
        return {
            ...state,
            courses: action.courses
        }
    }
    return state
}

export default createStore(combineReducers({cartReducer, coursesReducer}),composeWithDevTools(applyMiddleware(thunk)))

/* Desestructuración de objeto:
 action es lo mismo que si pusiera  { type , id } */