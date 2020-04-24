import React, { useEffect } from 'react';


function DiscoverPage(){

    useEffect( () => {
        document.title = "Descubrir";
    })

    return (
        <div className="app-page rel">
            <h1 className="page-title s24 fontb c333">Descubrir</h1>
        </div>
    )
}

export default DiscoverPage;