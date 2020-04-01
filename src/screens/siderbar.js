import React, { useState } from "react";
import logo from '../ui/logo.png';

function Siderbar(){

    const [nav, setNav] = useState([
        {label: "Inicio", slug: "/", icon: "fas fa-hospital"},
        {label: "Descubrir", slug: "descubrir", icon: "fas fa-stethoscope"},
        {label: "Categorías", slug: "categoria", icon: "fas fa-pills"},
        {label: "Mis cursos", slug: "mis-cursos", icon: "fas fa-book"}
    ])
    const [currentPage, setCurrentPage] = useState("/");

    var navigation = [];
    for(let i = 0; i < nav.length; i++){
        navigation.push(
            <li key={"nav-" + i + "-" + nav[i].slug}>
                    <a href={nav[i].slug} className={"aic link noul flex c333" + (currentPage == nav[i].slug ? " on" : "")}>
                        <div className={"ico s20 " + nav[i].icon}/>
                        <h2 className="lbl s20">{nav[i].label}</h2>
                    </a>
                </li>
        );
    }

    return(
        <div className="siderbar fixed">
            <a href="#" className="logo bl">
                <img src={logo} className="bl"/>
            </a>

            <ul className="nav">
                {navigation}
            </ul>

            <div className="updated-course flex aic">
                <div className="icon-lamp-bright ico"/>
                <div className="lbl s15 fontb c333">
                    Cursos actualizados
                    <h2 className="author s13 c777">por Homer López</h2>
                </div>
            </div>
        </div>
    )
}

export default Siderbar;