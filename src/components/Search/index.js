import React, { useEffect, useState } from "react";
import products from "json/products.json";

function Search() {
    const [request, setRequest] = useState("");
    const [results, setResults] = useState(0);

    function OnTypeRequest (event) {
        setRequest(event.target.value);
    }

    function SendRequest() {
        var foundSomething = false;

        // for each products in database
        for(var i = 0; i < products.products.length; i++) {
            var currentProduct = products.products[i];

            // check if name or description or tags match with request
            if(currentProduct.name.includes(request) 
            || currentProduct.description.includes(request)
            ||currentProduct.tags.includes(request)) {
                console.log("Found match at ", i);
                setResults(i);
                foundSomething = true;
                break;
            }

            if(!foundSomething) {
                setResults(-1);
            }
        }
    }

    return (
        <section className="search">
            <input type="text" placeholder="Taper votre recherche ici..." value={request} onChange={OnTypeRequest} />
            <button onClick={SendRequest}>Rechercher</button>

            {}
            <div className="search-results">
                <h3>{products.products[results].name}</h3>
                <p>{products.products[results].description}</p>
            </div>
        </section>
    );
}

export default Search;