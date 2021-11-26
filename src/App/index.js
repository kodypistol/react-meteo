//jshint esversion:6

import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from 'components/Header'
import Product from 'components/Product';

import ProductDetails from "components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/details/:productId">
          <ProductDetails />
        </Route>
        <Route exact path="/">
          <Product />
        </Route>
        <Route path="/">
          Erreur 404
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
