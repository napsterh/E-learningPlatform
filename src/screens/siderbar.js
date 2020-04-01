import React from "react";
import logo from '../ui/logo.png';

function Siderbar(){
    return(
        <div className="siderbar fixed">
            <a href="#" className="logo bl">
                <img src={logo} className="bl"/>
            </a>
        </div>
    )
}

export default Siderbar;