import React, { useEffect, useState } from "react";
import products from "json/products.json";

function Search() {
    const [request, setRequest] = useState("");
    let titres = [];

    useEffect(()=>{
        // recup tout les titres des projets
    },[])

    function OnTypeRequest (event) {
        setRequest(event.target.value);
    }

    function SendRequest() {
        console.log(request);
    }

    return (
        <section className="search">
            <input type="text" placeholder="Taper votre recherche ici..." value={request} onChange={OnTypeRequest} />
            <button onClick={SendRequest}>Rechercher</button>
        </section>
    );
}

export default Search;