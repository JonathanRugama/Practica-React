import React from 'react';
import Courses from './Pages/Courses'
import Course from './Pages/Course'

import Form from './Pages/Form'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainMenu from './Organisms/MainMenu'
import History from './Pages/History'
import Home from './Pages/Home'
import Users from './Pages/Users'


const AppRoutes = () => (
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
)

export default AppRoutes