import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

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
              if(product.name.toLowerCase().includes(request.toLowerCase()) ||
              product.group.toLowerCase().includes(request.toLowerCase()) ||
              product.tags.filter(tag => (tag.toLowerCase().includes(request.toLowerCase()))).length > 0)
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
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9819 18.266L15.3178 14.4813C14.707 13.8503 14.5915 12.8966 14.8633 12.0615C16.0978 8.26828 15.8586 1.47754 8.92227 1.47754C4.62502 1.47754 1.95891 4.85167 1.95891 8.35109C1.95891 10.993 3.61085 15.1413 9.15016 15.1413C10.0903 15.1413 11.2771 14.8843 12.4163 14.2244" stroke="#ffffff" stroke-width="2"/></svg>
        </button>
      </nav>

      {/* Search section */}
      <div className={searchIsOpen ? "search active" : "search"}>
        <div className="head">
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9819 18.266L15.3178 14.4813C14.707 13.8503 14.5915 12.8966 14.8633 12.0615C16.0978 8.26828 15.8586 1.47754 8.92227 1.47754C4.62502 1.47754 1.95891 4.85167 1.95891 8.35109C1.95891 10.993 3.61085 15.1413 9.15016 15.1413C10.0903 15.1413 11.2771 14.8843 12.4163 14.2244" stroke="#111111" stroke-width="2"/></svg>
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
