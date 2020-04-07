import React, {useState} from "react";

import Course1 from "../ui/curso1.png";
import Preview from "../ui/preview.jpg";

function CoursePage(props){

    const [course, setCourse] = useState(
        {
            ID: 1,
            title: "Generación de reportes epidemiológicos del COVID-19",
            about: "Este curso te ayudará a generar reportes de todos los datos informativos respecto al covid-19 a nivel nacional y con referencia al resto del mundo.",
            tutor: {
                ID: 1,
                name: "Victor Zamora",
                username: "vzamora",
                dp: "http://placeimg.com/111/102/people?tutor" + 1,
            },
            duration: "1hr 22min",
            poster: Preview,

            videos: [
                {
                    ID: 1,
                    title: "Introducción",
                    duration: "3 min 23 seg"
                },
                {
                    ID: 1,
                    title: "Empezando",
                    duration: "8 min 06 seg"
                },
                {
                    ID: 1,
                    title: "Epidemiología en el Perú",
                    duration: "10 min 13 seg"
                },
                {
                    ID: 1,
                    title: "Recolección de datos a nivel mundial",
                    duration: "23 min 56 seg"
                },{
                    ID: 1,
                    title: "Reporte epidemiológicos por paises en latinoamérica",
                    duration: "50 min "
                }
            ]
        }
    );

    const courseID = props.match.params.courseid;

    var courseVideos = [];
    for(let i=0; i < course.videos.length; i++){
        courseVideos.push(
            <a href="#" key={"course-video-" + i} className="noul aic rel flex">
                <div className="id s18 fontn cfff">{course.videos[i].ID}</div>
                <div className="meta rel">
                    <h1 className="s15 lbl fontb c333">{course.videos[i].title}</h1>
                    <h1 className="s13 dur fontn c777">{course.videos[i].duration}</h1>
                </div>
            </a>
        );
    }


    return (
        <div className="course-page rel flex">

            <div className="course-preview rel">

               

                <div className="player rel">
                    <video poster={course.poster}/>
                    <div className="ctrls abs aic flex">
                        <button className="fas fa-pause s24 pp"/>
                        <div className="timer rel fontn s15 cfff">
                            02:51 / 09:54
                        </div>
                        <div className="slider rel">
                            <div className="prog rel">
                                <div className="bar rel">
                                    <div className="knob abs" />
                                </div>
                            </div>
                        </div>
                        <button className="fas fa-volume-up s24 vol"/>
                        <button className="fas fa-expand s24 fs"/>
                    </div>
                </div>

                <div className="tutor rel aic flex">
                    <div className="pic">
                        <img src={course.tutor.dp} className="bl"/>
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 name fontb c333">{course.tutor.name}</h2>
                        <h2 className="s13 uname fontn c777">Tutor del curso</h2>
                    </div>
                </div>

                <div className="course-meta">
                    <h2 className="s24 title fontb c333">{course.title}</h2>
                    <p className="s18 about fontn c777" dangerouslySetInnerHTML={{__html: course.about}}/>
                </div>

                <div className="section section-b rel">
                    <h2 className="title s24 fontb">Cursos <span className="fontn">
                    logrados</span></h2>
                    <div className="course-stats aic flex">
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

                    <div className="stats-box flex">
                        <div className="ico ico-thermometer s24 fas fa-thermometer"/>
                        <h2 className="val s15 c333 fontb">+21</h2>
                        <h2 className="lbl s13 c777">nivel</h2>
                    </div>

                    </div>
                </div>
            </div>

            <div className="course-info rel">

                <div className="section rel flex">
                    <div className="now-watching rel">
                        <div className="tooltip abs s13 fontb cfff">54 en vivo</div>
                        <div className="section section-b rel">
                            <h2 className="title s24 fontb">Viendo <span className="fontn">
                            ahora</span></h2>
                            <div className="you-list rel flex">
                                <div className="you rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/111/102/people?guest-1" className="bl"/>
                                    </div>
                                    <span class="tooltiptext">Maria Fernández</span>
                                </div>
                                <div className="you rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/111/102/people?guest-2" className="bl"/>
                                    </div>
                                    <span class="tooltiptext">Abel Tarazona</span>
                                </div>
                                <div className="you rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/111/102/people?guest-3" className="bl"/>
                                    </div>
                                    <span class="tooltiptext">Homer López</span>
                                </div>
                                <div className="you rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/111/102/people?guest-4" className="bl"/>
                                    </div>
                                    <span class="tooltiptext">Elena Mendez</span>
                                </div>
                                <div className="you rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/111/102/people?guest-5" className="bl"/>
                                    </div>
                                    <span class="tooltiptext">Diego Ramos</span>
                                </div>
                                <div className="you rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/111/102/people?guest-6" className="bl"/>
                                    </div>
                                    <span class="tooltiptext">Jorge Saavedra</span>
                                </div>
                                <div className="you rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/111/102/people?guest-7" className="bl"/>
                                    </div>
                                    <span class="tooltiptext">Diana Rosales</span>
                                </div>
                                <div className="you rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/111/102/people?guest-8" className="bl"/>
                                    </div>
                                    <span class="tooltiptext">Victor Costa</span>
                                </div>
                                <div className="you rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/111/102/people?guest-9" className="bl"/>
                                    </div>
                                    <span class="tooltiptext">Renata Flores</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section section-b rel">
                <div className="chat rel">
                        <div className="section section-b rel">
                            <h2 className="title s24 fontb">Chat <span className="fontn">
                            en curso</span></h2>
                            <div className="messages aic flex">
                                <div className="bubble rel">
                                    <h2 className="txt ibl fontn s15 c333">Soy Homer</h2>
                                </div>
                                <div className="bubble rel">
                                    <h2 className="txt ibl fontn s15 c333">me gusta este curso</h2>
                                </div>
                                <div className="bubble  bubble-mine rel">
                                    <h2 className="txt ibl fontn s15 c333">Hey</h2>
                                </div>
                                <div className="bubble bubble-mine rel">
                                    <h2 className="txt ibl fontn s15 c333">Buena intro, gracias...</h2>
                                </div>
                                <div className="bubble bubble-mine rel">
                                    <h2 className="txt ibl fontn s15 c333">Seguiré practicando</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section section-b rel">
                    <h2 className="title s24 fontb">Detalles <span className="fontn">
                    del curso</span></h2>
                    <div className="course-videos aic flex">
                        {courseVideos}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursePage;