import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

/* PÁGINAS */
import Login from './view/login/';
import NovoUsuario from './view/usuario-novo/';
import Home from './view/home/';

function App() {
  return (
    <Router>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/novousuario' component={NovoUsuario}></Route>
      <Route exact path='/' component={Home}></Route>
    </Router>
  );
}

export default App;
