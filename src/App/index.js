import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/">
          Root
        </Route>
        <Route path="/">
          Erreur 404
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
