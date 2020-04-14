import React from 'react';
import "../styles/styles.scss"
import Courses from './Pages/Courses'
import Course from './Pages/Course'

import Form from './Pages/Form'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainMenu from './Organisms/MainMenu'
import History from './Pages/History'
import Home from './Pages/Home'
import Users from './Pages/Users'

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
            <Route path= "/" exact component = {Home}/>
            <Route path="/cursos/:id" component = {Course}/> 
            <Route path="/cursos" exact component = {Courses}/>
            
            <Route path="/historial" component = {History}/>
            <Route path="/usuarios" component = {Users}/>
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

/* Agrupar por funcionalidad todo lo que tenga que ver con curso  por ejemplo

src/Components
    -Atoms
    -Molecules
    -Organisms
    -Templates
    -Pages

src/Course/CoursePage.jsx
src/Course/CourseCard.jsx
src/Course/CourseGrid.jsx

src/Forms/FormPage.jsx*/