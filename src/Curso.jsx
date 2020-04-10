import React from 'react'
import PropTypes from 'prop-types'



            
const Curso = ({title, image, price, profesor}) => (
    
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            {
                image
                ? <img src={image} alt={title}/>
                : <p>No hay imagen</p>
            }
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <div className="s-main-center">
                {`Prof: ${profesor}`}
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://ed.team">{`$ ${price}`}</a>
            </div>
        </div>
    </article>
)

Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    profesor: PropTypes.string
}
Curso.defaultProps = {
    title: "No se encontró titulo",
    image: "https://static.vecteezy.com/system/resources/thumbnails/000/463/940/small/Background99.jpg?1555703569?nocache=true&cache_buster=220eba6d-5617-490e-ba3d-958828fa2337",
    price: "--",
    profesor: ""
}
export default Curso 