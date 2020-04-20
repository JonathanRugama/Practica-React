import React from 'react';
import "../styles/styles.scss"
import AppRoutes from './AppRoutes';
import { Provider } from 'react-redux';
import store from "../redux/store"
import { getCourseList } from '../redux/actionCreators';

store.dispatch(getCourseList())
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

    <Provider store = {store}>
        <AppRoutes />
    </Provider>
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