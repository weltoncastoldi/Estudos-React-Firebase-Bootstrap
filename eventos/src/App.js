import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/store/';
import { Provider } from 'react-redux';

/* PÁGINAS */
import Login from './view/login/';
import NovoUsuario from './view/usuario-novo/';
import Home from './view/home/';

import { isModuleDeclaration } from '@babel/types';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/novousuario' component={NovoUsuario}></Route>
        <Route exact path='/' component={Home}></Route>
      </Router>
    </Provider>
  );
}

export default App;
