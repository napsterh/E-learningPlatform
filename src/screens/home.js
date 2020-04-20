import React, { useEffect, useState} from "react";

import Course1 from "../ui/curso1.png";
import Cardiograma from "../ui/cardiograma.jpg";

import { NavLink } from 'react-router-dom';
import  Rightbar  from './rightbar';
import Siderbar from "./siderbar";

function HomePage(){

    useEffect( () => {
        document.title = "iMedly";
    })

    const [popularCourse, setpopularCourse] = useState([
        {
            ID: 1,
            title: "Electrocardiograma - Nociones Básicas",
            tutor: {
                ID: 1,
                name: "Ernesto Salazar",
                username: "vzamora",
                dp: "http://placeimg.com/111/102/people?tutor" + 1,
            },
            duration: "1hr 22min",
            poster: Cardiograma
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
            dp: "https://i1.rgstatic.net/ii/profile.image/797570372739075-1567167003539_Q512/Victor_Zamora_Mesia.jpg",
        },
        {
            ID: 2,
            name: "José Rosales",
            username: "jrosales",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmH0e4EJ0EqvMZd_dSdAhI8BGI7n1e0LhaRd9wZ8Pa3V5RgRTg&usqp=CAU",
        },
        {
            ID: 3,
            name: "María Cevallos",
            username: "mcevallo",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAYHspqgRsQECjC9GsEERm-V8Vof3_k6Hqi6fm2-KYW6nD_Lbt&usqp=CAU",
        },
        {
            ID: 4,
            name: "José Rodriguez",
            username: "jrodriguez",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiQmB5uGOzzbPBq_fVo_n07fOt48Ut_y4c-3dE7R_9AOiC1USZ&usqp=CAU",
        },
        {
            ID: 5,
            name: "Ana Martinez",
            username: "amartinez",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJp-a_elekzDyXLghuMXtkHtul2FCNsVzMHhpsUig39z7WzNHQ&usqp=CAU",
        },
        {
            ID: 6,
            name: "Diana Mendez",
            username: "dmendez",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5EAxi1opjrZtssUdK44LANPw61_0uD_BUiYEwZt2lGfEM2ubQ&usqp=CAU",
        },
        {
            ID: 7,
            name: "Joel Calderón",
            username: "jcalderon",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRscOiZBMzJa-o6WgcZkJ1XSjM-U00OtkMaAaLA90glFnsJB5bY&usqp=CAU",
        },
        {
            ID: 7,
            name: "Martin Suarez",
            username: "msuarez",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYB-5tqNS3wMYgbv2KtFBN6UcAlfTeDSUb7iothHbVEwBuF_cU&usqp=CAU",
        }
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

        <React.Fragment>
            <div className="App flex">
            <Siderbar/>
            </div>
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
            <div className="right rel">
                <Rightbar/>
            </div>
        </React.Fragment>
    )
}

export default HomePage;