import React, { useState } from "react";

import Course1 from "../ui/curso1.png";
import Course2 from "../ui/curso2.png";

function Rightbar(){

    const [popularCourse, setpopularCourse] = useState([
        {
            ID: 1,
            title: "Generación de reportes epidemiológicos del COVID-19",
            tutor: {
                ID: 1,
                name: "Victor Zamora",
                username: "vzamora",
                dp: "http://placeimg.com/111/102/people?tutor" + 1,
            },
            duration: "1hr 22min",
            poster: Course2
        },
        {
            ID: 2,
            title: "Tratamiento de pacientes con transtornos psicológicos",
            tutor: {
                ID: 2,
                name: "Sigmund Freud",
                username: "sfreud",
                dp: "http://placeimg.com/111/102/people?tutor" + 2,
            },
            duration: "60 min",
            poster: Course1
        },
        {
            ID: 3,
            title: "Tratamiento de pacientes con transtornos psicológicos",
            tutor: {
                ID: 2,
                name: "Sigmund Freud",
                username: "sfreud",
                dp: "http://placeimg.com/111/102/people?tutor" + 3,
            },
            duration: "60 min",
            poster: Course1
        }
    ])

    var courseList = [];
    for(let i = 0; i < popularCourse.length; i++){
        courseList.push(
            <a href="#" className="course rel" key={"popular-course-" + i}>
                <div className="block rel" style={{
                    background: "#e2e2e2 url(" + popularCourse[i].poster +") no-repeat center"
                }}> 
                    <div className="user abs aic flex">
                        <div className="pic">
                            <img src={popularCourse[i].tutor.dp} className="bl"/>
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb cfff">{popularCourse[i].tutor.name}</h2>
                            <h2 className="s13 uname fontn cfff">@{popularCourse[i].tutor.username}</h2>
                        </div>
                    </div>

                    <div className="dura abs">
                        <h2 className="s13 name fontb cfff">{popularCourse[i].duration}</h2>
                    </div>

                    <div className="course-title abs">
                        <h2 className="s15 name fontb cfff">{popularCourse[i].title}</h2>
                    </div>

                </div>
            </a>
        )
    }

    return(
        <div className="rightbar rel">
            
            <div className="section rel">
                <h2 className="title s24 fontb">Búsqueda <span className="fontn">
                 Avanzada</span></h2>
                <div className="search-box rel flex">
                    <input type="text" placeholder="Busca cualquier tema..." 
                    className="qry s15 fontb"/>
                    <button className="go cfff s15 fontb">Buscar</button>
                </div>
            </div>

            <div className="section section-b rel">
                <div className="courses rel flex">
                    <div className="course-a">
                        {courseList[0]}
                    </div>
                    <div className="flex cols">
                        {courseList[1]}
                        {courseList[2]}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Rightbar;