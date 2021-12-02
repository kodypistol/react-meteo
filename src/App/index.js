//jshint esversion:6
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from 'components/Header';
import ProductsPage from 'components/ProductsPage';
import Footer from 'components/Footer';
import Search from "components/Search";
import ScrollHider from 'components/ScrollHider';
import { AppContextProvider } from "components/AppContext/AppContext.js";

import ProductDetails from "components/ProductDetails";

function App() {

  return (
  <AppContextProvider>
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/details/:productId">
          <ProductDetails />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/">
          <ProductsPage />
        </Route>
        <Route path="/">
          Erreur 404
        </Route>
      </Switch>
      <Footer />
      <ScrollHider />
    </BrowserRouter>
    </AppContextProvider>
  );

}

export default App;
