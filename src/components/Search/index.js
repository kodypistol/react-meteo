import React, { useEffect, useState } from "react";

import Product from "components/Product";

import "./style.css";
import products from "json/products.json";

function Search (props) {
    const [startedTyping, setStartedTyping] = useState(false); 
    const [request, setRequest] = useState(""); // A string entered by the user in input
    const [results, setResults] = useState([]); // Array of products index that match with request

    // Update field & state
    function OnTypeRequest (event) {
        setStartedTyping(true);
        setRequest(event.target.value);
    }

    // Searching
    // When request state is updated : start a new request
    useEffect(() => {
        SendRequest();
    }, [ request ]);

    // Search throught products database
    function SendRequest() {
        let tempResults = []; // Temporary array to run over the old value of state "results"
        setResults(tempResults); // Run over the current value of state "results"

        // If request is valid
        if(request.length > 0 && request !== " ") {

            for(var i = 0; i < products.products.length; i++) {
                var currentProduct = products.products[i]; // Current target of searching

                // Check if name, description or tags match
                if(currentProduct.name.toLowerCase().includes(request) 
                || currentProduct.group.toLowerCase().includes(request)
                || currentProduct.description.toLowerCase().includes(request)
                ||currentProduct.tags.includes(request))
                {
                    tempResults.push(i);
                    break;
                }
                
            }
        }

        // Update state "results" with new value
        if(tempResults.length > 0) {
            setResults(tempResults);
        }
    }

    // If user didnt type yet
    if(startedTyping === false) {
        return (
            <section className="search">
                <h3>Recherchez</h3>
                <input type="text" placeholder="Taper votre recherche ici..." value={request} onChange={OnTypeRequest} />
                <button onClick={SendRequest}>Rechercher</button>
    
                <h3>Tapez ce que vous cherchez ci-dessus !</h3>
            </section>
        );
    }
    
    // If there are results
    if(results.length > 0) {
        return (
            <section className="search">
                <h3>Recherchez</h3>
                <input type="text" placeholder="Taper votre recherche ici..." value={request} onChange={OnTypeRequest} />
                <button onClick={SendRequest}>Rechercher</button>
    
                <h3>Résultats pour "{request}" :</h3>
                <div className="search-results">
                    <ul className="product-list">
                        {results.map((result, index) => (
                            <li key={index}>
                                <Product product={products.products[result]} index={result} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        );
    }

    // If there is no results
    return (
        <section className="search">
            <h3>Recherchez</h3>
            <input type="text" placeholder="Taper votre recherche ici..." value={request} onChange={OnTypeRequest} />
            <button onClick={SendRequest}>Rechercher</button>

            <h3>Aucun résultats</h3>
        </section>
    );

}

export default Search;