import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import Eventos from './pages/eventos';
import NaeEncontrada from './pages/naoencontrada';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//Define a rota da aplicação
const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/cadastrar' component={Cadastrar} />
        <Route path='/eventos' component={Eventos} />
        <Route component={NaeEncontrada} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();