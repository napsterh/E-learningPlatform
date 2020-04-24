import React, { Component, useEffect } from 'react';
import './App.css';
import HomePage from "./component/vistas/home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegistrarUser from './component/seguridad/RegistrarUsers';
import Login from './component/seguridad/Login';
import { FirebaseContext } from './server';


import { useStateValue } from './session/store';

import RutaAutenticada from './component/seguridad/RutaAutenticada';

import './css/props.css';
import './css/App.css';





function App(props) {

  let firebase = React.useContext(FirebaseContext);

  const [autenticacionIniciada, setupFirebaseInicial] = React.useState(false);

  const [{ openSnackbar }, dispatch] = useStateValue();

  useEffect(() => {
    firebase.estaIniciado().then(val => {
      setupFirebaseInicial(val);
    })
  })


  return autenticacionIniciada !== false ?(
    <React.Fragment>
      <BrowserRouter>
            <Switch>
              <RutaAutenticada exact path="/" autenticadoFirebase={firebase.auth.currentUser} component={HomePage} />
              <Route path="/auth/login" exact component={Login} />
              <Route path="/auth/RegistrarUser" exact component={RegistrarUser} />
            </Switch>

      </BrowserRouter>
    </React.Fragment>
  )
  : null
    ;
}

export default App;


