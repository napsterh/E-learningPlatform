import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Fire from './firebase-config';
import { FirebaseAppProvider } from 'reactfire';

ReactDOM.render((
  <FirebaseAppProvider firebaseConfig = {Fire}>
    <Suspense fallback={'Conectando la app...'}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </FirebaseAppProvider>
  ),document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
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