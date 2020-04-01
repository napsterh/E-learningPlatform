import React from "react";

function HomePage(){

    var tutorList = [];
    for(let i = 0; i < 10; i++){
        tutorList.push(
            <button className="tutor rel" key={"tutor-live-" + i}>
                <img src={"http://placeimg.com/111/102/people?" + i } className="bl"/>
            </button>
        )
    }

    return (
        <div className="home-page rel">
            {/****  tutors live ahora  ****/}
            <div className="section rel">
                <h2 className="title s24 fontb">Streaming <span className="fontn">
                 Ahora</span></h2>
                <div className="tutors rel flex">
                    {tutorList}
                </div>
            </div>

            {/****  tutors live ahora  ****/}
            <div className="section rel">
                <h2 className="title s24 fontb">Popular <span className="fontn">
                 Esta semana</span></h2>
                <div className="rel flex">
                    {tutorList}
                </div>
            </div>

        </div>
    )
}

export default HomePage;