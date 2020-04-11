import React from 'react';
import "./styles/styles.scss"
import CourseGrid from './CourseGrid'
import Course from './Course'
import Banner from './Banner'
import Form from './Form'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainMenu from './MainMenu'
import History from './History'

/* const cursos = [{
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
] */
const App = () => (
    <>
      <Router> 
          <MainMenu />
          <Switch>
            <Route path= "/" exact component = {Banner}/>
            <Route path="/cursos/:id" component = {Course}/> 
            <Route path="/cursos" exact component = {CourseGrid}/>
            <Route path="/historial/:valor" component = {Historial}/>
            <Route path="/historial" component = {History}/>
            <Route path="/formulario" exact component = { () => <Form name="Pagina de contacto"/>}/>
            <Route component= {() => (
                <div>
                    <h1>
                        Error 404 
                    </h1>
                    <span>Pagina no encontrada</span>
                </div>
            )} />
          </Switch>
      </Router>
      
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

/* Agrupar por funcionalidad todo lo que tenga que ver con curso */