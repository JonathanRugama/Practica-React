import {createStore} from "redux"


const initialStore ={
    cart: []
    
}
/* Es el rootReducer el encargado de manejar el estado */
const rootReducer = (state = initialStore, action) => {
    return state
}

export default createStore(rootReducer)