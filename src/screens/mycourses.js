import React, { useEffect } from 'react';


function MyCoursesPage(){

    useEffect( () => {
        document.title = "Mis Cursos";
    })

    return (
        <div className="app-page rel">
            <h1 className="page-title s24 fontb c333">Mis cursos</h1>
        </div>
    )
}

export default MyCoursesPage;