import React, { useEffect, useState } from "react";
import products from "json/products.json";

function Search() {
    const [request, setRequest] = useState("");
    const [results, setResults] = useState(-1);

    function OnTypeRequest (event) {
        setRequest(event.target.value);
    }

    function SendRequest() {
        // for each products in database
        setResults(-1);

        for(var i = 0; i < products.products.length; i++) {
            var currentProduct = products.products[i];

            // check if name or description or tags match with request
            if(request.length > 0 && request !== " ") {

                if(currentProduct.name.toLowerCase().includes(request) 
                || currentProduct.description.toLowerCase().includes(request)
                ||currentProduct.tags.includes(request)) {
                    setResults(i);
                    break;
                }
            }
            
        }
    }

    // If there are results
    if(results >= 0) {
        return (
            <section className="search">
                <input type="text" placeholder="Taper votre recherche ici..." value={request} onChange={OnTypeRequest} />
                <button onClick={SendRequest}>Rechercher</button>
    
                <div className="search-results">
                    <h3>{products.products[results].name}</h3>
                    <p>{products.products[results].description}</p>
                </div>
            </section>
        );
    }
    // If there is no results
    else {
        return (
            <section className="search">
                <input type="text" placeholder="Taper votre recherche ici..." value={request} onChange={OnTypeRequest} />
                <button onClick={SendRequest}>Rechercher</button>

                <p><i>Aucun résultats...</i></p>
            </section>
        );
    }
    
}

export default Search;