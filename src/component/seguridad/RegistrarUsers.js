
import React, { Component } from 'react';
import { compose } from 'recompose';
import { consumerFirebase } from '../../server';
import { crearUsuario } from '../../session/actions/sesionAction';
import { openMensajePantalla } from '../../session/actions/snackbarAction';
import { StateContext } from '../../session/store';

class RegistrarUser extends Component {

        static contextType = StateContext;

        state = {
            firebase : null,
            usuario : {
                nombre : '',
                apellido : '',
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

        registrarUsuario = async e => {
            e.preventDefault();
            const [{sesion}, dispatch] = this.context;
            const {firebase, usuario} = this.state;

            let callback = await crearUsuario(dispatch, firebase, usuario);
            if(callback.status){
                this.props.history.push("/")
            }else{
                openMensajePantalla(dispatch, {
                    open : true,
                    mensaje : callback.mensaje.message
                })
            }
        }

    render() {
        return (
            <div>
                <div>
                    <label>Nombre</label>
                        <input type="nombre" id="nombre" onChange={this.onChange} name="nombre" value={this.state.usuario.nombre}/>
                    <label >Apellidos</label>
                        <input type="apellido" id="apellido" onChange={this.onChange} name="apellido" value={this.state.usuario.apellido}/>
                    <label >Email</label>
                        <input type="email" id="email" onChange={this.onChange} name="email" value={this.state.usuario.email}/>
                    <label >Contraseña</label>
                        <input type="password" id="password" onChange={this.onChange} name="password" value={this.state.usuario.password}/>
                </div>
                    <button type="submit" onClick={this.registrarUsuario}>Registrar</button>
            </div>
        )
    }
}

export default compose(consumerFirebase)(RegistrarUser);