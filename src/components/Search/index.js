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
        setResults([]); // Run over the current value of state "results"

        // If request is valid
        if(request.length > 0 && request !== " ") {

            products.products.map((product, index) => {

                // Check if name, description or tags match
                if(product.name.toLowerCase().includes(request) ||
                product.group.toLowerCase().includes(request) ||
                product.tags.filter(tag => (tag.toLowerCase().includes(request))).length > 0)
                {
                    tempResults.push(index);
                }
            });

            // Update state "results" with new value
            if(tempResults.length > 0) {
                setResults(tempResults);
            }

        }
    }

    // If there is no results
    return (
        <section className="search">
            <h3>Recherchez</h3>
            <input type="text" placeholder="Taper votre recherche ici..." value={request} onChange={OnTypeRequest} />
            <button onClick={SendRequest}>Rechercher</button>

            {/* The user didn't typed yet */}
            {!startedTyping ? (
              <h3>Tapez ce que vous cherchez ci-dessus !</h3>
            ) : (
                <>
                {results.length > 0 ? (
                // There is no results
                    <div>
                    <h3>Résultats pour "{request}" :</h3>
                    <p>{results.length > 1 ? (results.length + " résultats") : ("1 résultat")}</p>
                    <div className="search-results">
                        <ul className="product-list">
                            {results.map((result, index) => (
                                <li key={index}>
                                    <Product product={products.products[result]} index={result} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    </div>
                ) : (
                    <h3>Aucun résultats</h3>
                )}
                </>
            )}
        </section>
    );

}

export default Search;
