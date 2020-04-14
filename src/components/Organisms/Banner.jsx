import React from 'react'

const Banner = () => (

    <div className="main-banner img-container" id="main-banner">
    <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
            <img className="main-banner__img" src="https://dam.ngenespanol.com/wp-content/uploads/2018/12/plantas-verdes-2-770x395.png" alt= "Banner"/>
            <div className="main-banner__data s-center">
                <p className="t2 s-mb-0">Título del banner</p>
                <p> Subtítulo del banner</p>
                <a href="https://ed.team" className="button">Botón del banner</a>
            </div>
        </div>
    </div>
</div>
)

export default Banner