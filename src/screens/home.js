import React, { useEffect, useState} from "react";

import Course1 from "../ui/curso1.png";
import Course2 from "../ui/curso2.png";

import { NavLink } from 'react-router-dom';

function HomePage(){

    useEffect( () => {
        document.title = "iMedly";
    })

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
        }
    ])

    const [topTutors, setTopTutors] = useState([
        {
            ID: 1,
            name: "Victor Zamora",
            username: "vzamora",
            dp: "http://placeimg.com/111/102/people?tutors" + 1,
        },
        {
            ID: 2,
            name: "Victor Zamora",
            username: "vzamora",
            dp: "http://placeimg.com/111/102/people?tutors" + 2,
        },
        {
            ID: 3,
            name: "Victor Zamora",
            username: "vzamora",
            dp: "http://placeimg.com/111/102/people?tutors" + 3,
        },
        {
            ID: 4,
            name: "Victor Zamora",
            username: "vzamora",
            dp: "http://placeimg.com/111/102/people?tutors" + 4,
        },
        {
            ID: 5,
            name: "Victor Zamora",
            username: "vzamora",
            dp: "http://placeimg.com/111/102/people?tutors" + 5,
        },
        {
            ID: 6,
            name: "Victor Zamora",
            username: "vzamora",
            dp: "http://placeimg.com/111/102/people?tutors" + 6,
        },
    ])

    //LISTA PROFESORES EN VIVO
    var tutorList = [];
    for(let i = 0; i < 10; i++){
        tutorList.push(
            <button className="tutor rel" key={"tutor-live-" + i}>
                <img src={"http://placeimg.com/111/102/people?" + i } className="bl"/>
            </button>
        )
    }

    //LISTA CURSOS POPULARES
    var courseList = [];
    for(let i = 0; i < popularCourse.length; i++){
        courseList.push(
            <NavLink to={"/course/" + popularCourse[i].ID} className="course rel" key={"popular-course-" + i}>
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
            </NavLink>
        )
    }

    //LISTA PROFESORES TOP
    var topTutorsList = [];
    for(let i = 0; i < topTutors.length; i++){
        topTutorsList.push(
            <a href="#" className="user-block rel noul" key={"top-tutors-" + i}>
                    <div className="user aic flex">
                        <div className="pic">
                            <img src={topTutors[i].dp} className="bl"/>
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb c333">{topTutors[i].name}</h2>
                            <h2 className="s13 uname fontn c333">@{topTutors[i].username}</h2>
                        </div>
                    </div>
            </a>
        )
    }

    return (
        <div className="home-page rel">
            {/****  PROFESORES EN VIVO  ****/}
            <div className="section rel">
                <h2 className="title s24 fontb">Streaming <span className="fontn">
                 Ahora</span></h2>
                <div className="tutors rel flex">
                    {tutorList}
                </div>
            </div>

            {/****  BANNER CURSOS POPULARES  ****/}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Popular <span className="fontn">
                 Esta semana</span></h2>
                <div className="courses rel flex">
                    {courseList}
                </div>
            </div>

            {/****  TOP PROFESORES  ****/}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Top <span className="fontn">
                 profesores</span></h2>
                <div className="top-tutors rel flex">
                    {topTutorsList}
                </div>
            </div>

        </div>
    )
}

export default HomePage;