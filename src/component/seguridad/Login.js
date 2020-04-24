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
        <div className="h-login">
            <div className="h-login__one">
                <div className="h-login__card">
                    <div className="h-login__card--image"><img src="http://imedly.com/res/img/logo.png" /></div>
                    <div className="h-login__card--title">
                        <h2>Sé el médico que siempre soñaste ser</h2>
				    </div>
                    <div className="h-login__card--body">
                        <div className="h-input">
                            <input type="email" id="email" onChange={this.onChange} name="email" value={this.state.usuario.email} placeholder="Correo electrónico" />
                        </div>
                        <div className="h-input">
                            <input type="password" id="password" onChange={this.onChange} name="password" value={this.state.usuario.password} placeholder="Contrase&ntilde;a" />
                        </div>
                    </div>
                    <div className="h-login__card--actions">
					    <button className="h-button h-button--raised" type="submit" onClick={this.login} >Ingresar</button>
				    </div>
                </div>
            </div>
            <div className="h-login__second">
			<div className="h-login__image">
				<img src="http://imedly.com/res/img/girl-medic.svg" />
				<h2>Con iMedly tendrás una plataforma que te guiará durante todo tu trayecto estudiantil.</h2>
			</div>
		</div>
	    </div>
    )
}
}


export default compose(consumerFirebase)(Login);