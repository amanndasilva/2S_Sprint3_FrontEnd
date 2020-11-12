import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import Eventos from './pages/eventos';
import Dashboard from './pages/admin/dashboard';
import CrudCategorias from './pages/admin/crudcategorias';
import CrudEventos from './pages/admin/crudeventos';
import SemPermissao from './pages/sempermissao';
import NaeEncontrada from './pages/naoencontrada';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const RotaPrivada = ({component : Component, ...rest}) => (
  <Route 
    {...rest}
    render = { props => 
        localStorage.getItem('token-nyous') !== null ? 
          (<Component {...props} />) : 
          (<Redirect to={{ pathname :'/login', state :{from : props.location}}} />)
    }
  />
);

const RotaPrivadaAdmin = ({component : Component, ...rest}) => (
  <Route 
    {...rest}
    render = { props => 
        localStorage.getItem('token-nyous') !== null && jwt_decode(localStorage.getItem('token-nyous')).role === 'Admin' ? 
          (<Component {...props} />) : 
          (<Redirect to={{ pathname :'/login', state :{from : props.location}}} />)
    }
  />
);

//Define as rotas da aplicação
const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/cadastrar' component={Cadastrar} />
        <Route path='/eventos' component={Eventos} />
        <Route path='/admin/dashboard' component={Dashboard} />
        <Route path='/admin/categorias' component={CrudCategorias} />
        <Route path='/admin/eventos' component={CrudEventos} />
        <Route path='/sempermissao' component={SemPermissao} />
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
