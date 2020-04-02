import React, {useState} from "react";

import Course1 from "../ui/curso1.png";

function HomePage(){

    const [popularCourse, setpopularCourse] = useState([
        {
            ID: 1,
            title: "Generación de reportes epidemiólogos del COVID-19",
            tutor: {
                ID: 1,
                name: "Victor Zamora",
                username: "vzamora",
                dp: "http://placeimg.com/111/102/people?tutor" + 1,
            },
            duration: "82 min",
            poster: Course1
        }
    ])

    //LIVE TUTORS LIST
    var tutorList = [];
    for(let i = 0; i < 10; i++){
        tutorList.push(
            <button className="tutor rel" key={"tutor-live-" + i}>
                <img src={"http://placeimg.com/111/102/people?" + i } className="bl"/>
            </button>
        )
    }

    //LIST POPULAR COURSES
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

                </div>
            </a>
        )
    }

    return (
        <div className="home-page rel">
            {/****  TUTORS LIVE AHORA  ****/}
            <div className="section rel">
                <h2 className="title s24 fontb">Streaming <span className="fontn">
                 Ahora</span></h2>
                <div className="tutors rel flex">
                    {tutorList}
                </div>
            </div>

            {/****  tutors live ahora  ****/}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Popular <span className="fontn">
                 Esta semana</span></h2>
                <div className="courses rel flex">
                    {courseList}
                </div>
            </div>

        </div>
    )
}

export default HomePage;