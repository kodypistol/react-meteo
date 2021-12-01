import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

const Header = () => {

  return(
    <nav className="header-navigation">
    <div className="links">
      <Link to="/" className="active">Feed</Link>
      <Link to="/">En stock</Link>
      <Link to="/">A venir</Link>
    </div>
    <Link to="/search" className="search-btn">Rechercher</Link>
  </nav>

  );
}

export default Header;
