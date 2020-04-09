import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'

const App = () => (
    <>
        <div className="main-banner img-container" id="main-banner">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                    <img className="main-banner__img" src="https://dam.ngenespanol.com/wp-content/uploads/2018/12/plantas-verdes-2-770x395.png" />
                    <div className="main-banner__data s-center">
                        <p className="t2 s-mb-0">Título del banner</p>
                        <p> Subtítulo del banner</p>
                        <a href="#" className="button">Botón del banner</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="ed-grid m-grid-3">
           <Curso />
           <Curso />
        </div>
    </>
    
)
export default App;

/* Reglas
1. Toda etiqueta debe cerrarse
2. Los componenetes deben devolver un solo elemento padre
3. Apoyarse de los Fragments cuando necesito devolver 2 elementos
4. Fragment => <> hijos </> 
5. img siempre se cierran en React
6. En JSX se utiliza "classNameName" para utilizar las clases
7. el atributo for en JSX pasa a ser htmlFor
8. No se puede utilizar if, else y while en JSX*/