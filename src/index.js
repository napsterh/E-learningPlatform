import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './server';

import { initialState } from './session/initialState';
import { StateProvider } from './session/store';
import { mainReducer } from './session/reducers';



ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <StateProvider initialState={initialState} reducer={mainReducer}>
        <App />
      </StateProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
/* Para cargar un servicio web como firebase
colocar suspense y enviar un props de spinner por ejemplo para
esperar la carga y despues renderizar, tambien se puyede colocar
una frase co,o "Conectando la app..."

<suspense fallback={"Conectando la app..."}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
<suspense>

*/