import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

import Product from "components/Product";
import SearchResult from "components/SearchResult";
import products from "json/products.json";

const Header = () => {

  const [searchIsOpen, setSearchIsOpen] = useState(false);
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

  function toggleSearchPanel() {
    setSearchIsOpen(!searchIsOpen);
  }

  return(
    <section className="header">
      {/* Header */}
      <nav className="header-navigation">
        <div className="links">
          <Link to="/" className="active">Feed</Link>
          <Link to="/">En stock</Link>
          <Link to="/">A venir</Link>
        </div>
        <button className="search-btn" onClick={toggleSearchPanel}>
          <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/></svg>
        </button>
      </nav>

      {/* Search section */}
      <div className={searchIsOpen ? "search active" : "search"}>
        <div className="head">
          <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/></svg>
          <input type="text" placeholder="Taper votre recherche ici..." value={request} onChange={OnTypeRequest} />
          <button onClick={toggleSearchPanel}>Annuler</button>
        </div>

        {/* The user didn't typed yet */}
        {!startedTyping ? (
          <h3 className="search-title">Tapez ce que vous cherchez ci-dessus !</h3>
        ) : (
            <>
            {results.length > 0 ? (
            // There is no results
            <div>
              <h3 className="search-title">{results.length > 1 ? (results.length + " résultats") : ("1 résultat")} pour "{request}" :</h3>

              <div className="search-results">
                  <ul className="product-list">
                      {results.map((result, index) => (
                          <li key={index}>
                              <SearchResult product={products.products[result]} index={result} onSelect={toggleSearchPanel} />
                          </li>
                      ))}
                  </ul>
              </div>
            </div>
              ) : (
                  <h3 className="search-title">Aucun résultats</h3>
              )}
              </>
          )}
        </div>
    </section>
  );
}

export default Header;
