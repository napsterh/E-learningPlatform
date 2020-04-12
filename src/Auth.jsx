import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';

function Auth(props) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    const logout = async () => {
        await firebase.auth().signOut();
    }

    return(
    <div>
        {
            !user &&
            <div>
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" onChange={ (ev)=> setEmail(ev.target.value)}/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" onChange={ (ev)=> setPassword(ev.target.value)}/>
                <button onClick={submit}>Crear cuenta</button>
                <button onClick={login}>Iniciar Sesión</button>
            </div>
        }
        {
            user && <button onClick={logout}>Cerrar sesión</button>
        }
    </div>
    )
}

export default Auth;