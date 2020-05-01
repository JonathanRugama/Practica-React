import React, {useReducer} from "react"
import CartContext from "./Cart/CartContext"
import { ADD_TO_CART } from "./Cart/actions"
import { REMOVE_FROM_CART } from "./Cart/actions"



const initialState = {
    cart: []
}
/* Se desestructuro el objeto action en type y course */
const cartReducer = (state, {type,course}) => {
    if (type === ADD_TO_CART) {
        return {
            cart: state.cart.concat(course)
        }
    }
    if(type === REMOVE_FROM_CART) {
        return {
            cart: state.cart.filter(c=> c.id !== course)
        }
    }
    return state
}
const CartProvider = ({children}) => {

  

    const [state, dispatch] = useReducer(cartReducer, initialState)
    return(
    <CartContext.Provider value = {[state, dispatch]}>
        {children}
    </CartContext.Provider>
    )

}

export default CartProvider