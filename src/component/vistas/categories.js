import React, { useEffect } from 'react';


function CategoriesPage(){

    useEffect( () => {
        document.title = "Categorías";
    })

    return (
        <div className="app-page rel">
            <h1 className="page-title s24 fontb c333">Categorias</h1>
        </div>
    )
}

export default CategoriesPage;