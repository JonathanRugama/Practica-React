import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'
/* import App from './App'; */
import * as serviceWorker from './serviceWorker';
 const root = document.getElementById("root") 
/* const elemento = React.createElement(componente, propiedades, hijos) */
/* const elemento = React.createElement("h1", {className: "saludo"}, "Hola mundo1") */
ReactDOM.render(<App />, root);


