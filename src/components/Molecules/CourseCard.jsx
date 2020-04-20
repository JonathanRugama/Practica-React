import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { addToCart, removeOfCart } from '../../redux/actionCreators'
import {connect} from "react-redux"


            
const CourseCard = ({key,id,title, image, price, professor, addCourseToCart, removeCourseOfCart, cart}) => (
    
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            {   
                <Link to={`/cursos/${id}`}>
                    image
                ? <img src={image} alt={title}/>
                : <p>No hay imagen</p>
                </Link>
                
            }
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <div className="s-main-center">
                {`Prof: ${professor}`}
            </div>
            <div className="s-main-center">
                {
                    cart.find(a => a === id) 
                    ? /* Esto es verdadero? */
                    <button className="button--ghost-alert button--tiny" 
                    onClick={() =>removeCourseOfCart(id)}>Remover</button>
                    : /* Si es falso, haga esto otro */
                    <button className="button--ghost-alert button--tiny" 
                    onClick=
                    {()=> addCourseToCart(id)}>
                        {
                       `$ ${price}`
                        }
                    </button>
                }
               
            </div>
        </div>
    </article>
)

CourseCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    professor: PropTypes.string
}
CourseCard.defaultProps = {
    title: "No se encontró titulo",
    image: "https://static.vecteezy.com/system/resources/thumbnails/000/463/940/small/Background99.jpg?1555703569?nocache=true&cache_buster=220eba6d-5617-490e-ba3d-958828fa2337",
    price: "--",
    professor: ""
}


const mapStateToProps = state => ({
    cart: state.cartReducer.cart
})

const mapDispatchToProps = dispatch => ({
    addCourseToCart(id) {
        dispatch(addToCart(id))
    },
    removeCourseOfCart(id) {
        dispatch(removeOfCart(id))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(CourseCard)