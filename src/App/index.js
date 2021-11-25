//jshint esversion:6

import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Product from 'components/Product';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
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
