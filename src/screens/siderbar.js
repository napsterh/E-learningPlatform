import React, { useState } from "react";
import logo from '../ui/logo.png';

import { NavLink } from 'react-router-dom';
import Auth from '../Auth';

function Siderbar(){

    const [nav, setNav] = useState([
        {label: "Inicio", slug: "/home", icon: "fas fa-hospital"},
        {label: "Descubrir", slug: "descubrir", icon: "fas fa-stethoscope"},
        {label: "Categorías", slug: "categoria", icon: "fas fa-pills"},
        {label: "Mis cursos", slug: "mis-cursos", icon: "fas fa-book"}
    ])
    const [currentPage, setCurrentPage] = useState("/");

    var navigation = [];
    for(let i = 0; i < nav.length; i++){
        navigation.push(
            <li key={"nav-" + i + "-" + nav[i].slug}>
                    <NavLink to={nav[i].slug} className={"aic link noul flex c333"}>
                        <div className={"ico s20 " + nav[i].icon}/>
                        <h2 className="lbl s20">{nav[i].label}</h2>
                    </NavLink>
                </li>
        );
    }

    return(
        <React.Fragment>
            <div className="siderbar rel">
                <a href="#" className="logo bl">
                    <img src={logo} className="bl"/>
                </a>

                <ul className="nav">
                    {navigation}
                </ul>

                <div className="updated-course flex aic">
                    <div className="fas fa-hand-holding-medical fa-lg ico"/>
                    <div className="lbl s15 fontb c333">
                        Cursos actualizados
                        <h2 className="author s13 c777">por Homer López</h2>
                    </div>
                </div>

                <div className="stats aic flex">

                    <div className="stats-box flex">
                        <div className="ico ico-heart s24 fas fa-heart"/>
                        <h2 className="val s15 c333 fontb">1800</h2>
                        <h2 className="lbl s13 c777">puntos</h2>
                    </div>

                    <div className="stats-box flex">
                        <div className="ico ico-heartbeat s24 fas fa-heartbeat"/>
                        <h2 className="val s15 c333 fontb">45.3%</h2>
                        <h2 className="lbl s13 c777">completo</h2>
                    </div>

                </div>

                <div className="me flex aic">
                    <div className="photo cfff s24">
                        <img src="http://placeimg.com/111/102/people" className="bl"/>
                    </div>
                    <div className="lbl s15 fontb c333">
                        <h2 className="uname s13 c777">@napsterh</h2>
                    </div>
                </div>
                <div className="flex aic">
                    <Auth/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Siderbar;