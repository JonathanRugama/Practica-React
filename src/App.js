import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'

const cursos = [{
    "title": "React desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
    "price": 30,
    "profesor": "Jona Rugama"
}, 
{
    "title": "JavaScript desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
    "price": 40,
    "profesor": "Mary Rugama"
}, 
{
    "title": "CSS desde cero",
    "image": "https://res.cloudinary.com/edteam/image/upload/v1585761957/blog/qoimvvcongtrvewiagvc.png",
    "price": 70,
    "profesor": "Liz Rugama"
    
}, {
    "title": "Go desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/565fa9ec-8f84-448a-b0d8-855d059f16dd.png",
    "price": 10,
    "profesor": "Carmen Rugama"
}
]
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

            {
                cursos.map(curso => <Curso title= {curso.title} image= {curso.image} price= {curso.price} profesor={curso.profesor} />)
            }
          
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