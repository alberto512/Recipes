import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Create from "./pages/Create";
import Info from "./pages/Info";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/RecipesWeb/" component={Home}></Route>
        <Route exact path="/RecipesWeb/recipes" component={Recipes}></Route>
        <Route exact path="/RecipesWeb/create" component={Create}></Route>
        <Route exact path="/RecipesWeb/info/:id" component={Info}></Route>
      </Switch>
    </div>
  );
}

export default App;
