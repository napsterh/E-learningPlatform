import React, {useState} from "react";

import Course1 from "../ui/curso1.png";
import Preview from "../ui/preview.png";

function CoursePage(props){

    const [course, setCourse] = useState(
        {
            ID: 1,
            title: "Electrocardiograma - Nociones Básicas",
            about: "Este curso te ayudará a generar reportes de electrocardiogramas para determinar males congénitos previos a un diagnostico general puestos en los ultimos 10 días",
            tutor: {
                ID: 1,
                name: "Ernesto Salazar",
                username: "esalazar",
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
                    title: "Reportes de electrocardiogramas en pacientes hipertensos en latinoamérica",
                    duration: "10 min 13 seg"
                },
                {
                    ID: 1,
                    title: "Recolección de datos a nivel mundial",
                    duration: "23 min 56 seg"
                },{
                    ID: 1,
                    title: "Electrocardiograma en el Perú",
                    duration: "50 min "
                }
            ]
        }
    );

    const [chat, setChat] = useState([ 
        { 
            ID: 1,
            name: "Homer López",
            cargo: "Estudiante",
            mensaje: "Este curso es fantastico",
            dp: "http://placeimg.com/111/102/people?guest-4",
        },
        { 
            ID: 3,
            name: "Diego Ramos",
            cargo: "Estudiante",
            mensaje: "Hola amigos, recien empiezo y quisiera saber como puedo aprender mas mientras estoy sin dispositovo ni internet algun pdf que recomienden sobre estos temas lo basicoo, agradeceria mucho",
            dp: "http://placeimg.com/111/102/people?tutor" + 2,
        },
        { 
            ID: 2,
            name: "Ernesto Salazar",
            cargo: "Tutor",
            mensaje: "Gracias por sus comentarios",
            dp: "http://placeimg.com/111/102/people?tutor" + 1,
        }
    ])

    var chatForo = [];
    for(let i=0; i < chat.length; i++){
        chatForo.push(
            <div key={"course-video-" + i} className="you-list rel">
                <div className="chat rel aic flex">
                    <div className="pic">
                        <img src={chat[i].dp} className="bl"/>
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 name fontb c333">{chat[i].name}</h2>
                        <h2 className="s13 uname fontn c777">{chat[i].cargo}</h2>
                    </div>
                </div>
                <div className="chat rel aic ">
                    <h2 className="s15 name c333">{chat[i].mensaje}</h2>
                </div>
                <hr></hr>
                <div className="chat rel aic ">
                    <div className="fas fa-reply fa-lg ico"/>
                    <div className="far fa-heart fa-lg ico"/>
                    <div className="fas fa-share-alt fa-lg ico"/>
                </div>
            </div>
        );
    }

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
                    <iframe className="youtube rel" src="https://www.youtube.com/embed/A-Ko6FmzEjk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   {/*  
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
                    */}
                </div>
                <div className="prise">
                    <div className="primer">    

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
                    <div className="segundo rel">
                        <h2 className="title s24 fontb">Detalles <span className="fontn">
                        del curso</span></h2>
                        <div className="course-videos aic flex">
                            {courseVideos}
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
                    <h2 className="title s24 fontb">Foro <span className="fontn">en curso</span></h2>
                    <div className="now-chat rel">
                        <div className="search-box rel flex">
                            <div className="pic">
                                <img src="http://placeimg.com/111/102/people?guest-4" className="bl"/>
                            </div>
                            <input type="text" placeholder="Escribe tu pregunta o comentario" 
                            className="qry s13 fontb"/>
                            <button className="go cfff s13 fontb">Enviar</button>
                         </div>
                        {chatForo}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursePage;
