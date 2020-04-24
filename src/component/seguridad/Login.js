import React, { Component } from 'react';
import { compose } from 'recompose';
import { consumerFirebase } from '../../server';
import { iniciarSesion } from '../../session/actions/sesionAction';
import { openMensajePantalla } from '../../session/actions/snackbarAction';
import { StateContext } from '../../session/store';


class Login extends Component {

    static contextType = StateContext;

    state = {
        firebase : null,
        usuario : {
            email : '',
            password : ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){

        if(nextProps.firebase  === prevState.firebase){
            return null;
        }

        return {
            firebase : nextProps.firebase
        }

    }

    onChange = e => {
        let usuario = Object.assign({}, this.state.usuario);
        usuario[e.target.name] = e.target.value;
        this.setState({
            usuario : usuario
        })
    }

    login = async e => {
        e.preventDefault();
        const [{sesion}, dispatch] = this.context;
        const { firebase, usuario } = this.state;
        const {email, password} = usuario;

        let callback = await iniciarSesion(dispatch, firebase, email, password)
        if(callback.status){
            openMensajePantalla(dispatch, {
                open : true,
                mensaje : "Inició sesión correctamente"
            });
            this.props.history.push("/");
        }else{
            openMensajePantalla(dispatch, {
                open : true,
                mensaje : "Usuario y/o contraseña incorrecta"
            });
        }
    }

render() {
    return (
        <div>
            <div>
                <label >Email</label>
                    <input type="email" id="email" onChange={this.onChange} name="email" value={this.state.usuario.email}/>
                <label >Contraseña</label>
                    <input type="password" id="password" onChange={this.onChange} name="password" value={this.state.usuario.password}/>
            </div>
            <button type="submit" onClick={this.login}>iniciar Sesión</button>
        </div>
    )
}
}


export default compose(consumerFirebase)(Login); 