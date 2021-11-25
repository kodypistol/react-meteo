//jshint esversion:6

import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Product from 'components/Product';

import ProductDetails from "components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/details">
          <ProductDetails avaliableDate="09/12, 09:00" gender="Homme" minSize="35.5" maxSize="49.5" />
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
