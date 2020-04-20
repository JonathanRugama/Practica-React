import React from 'react'
import {connect} from 'react-redux'
const CartCounter = ({cartLength}) => (
    <li>
        <button className="button tiny ghost"> 
            {`Carrito: ${cartLength.length}` }
        </button>
    </li>
)
/* con este metodo mapStateToProps, estamos diciendo que props de CartCounter, va a tener cartLength
 (especificado en el metodo) como atributo */
const mapStateToProps = state => (
/* Necesita leer el estado */
{
                 //En el estado global tenemos un atributo cart
    cartLength: state.cartReducer.cart
}

)
const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter)