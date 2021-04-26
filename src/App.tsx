import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoute from "routes/PublicRoute";
import Category from "views/Category";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" exact component={Home} />
        <PublicRoute path="/categories/:name" component={Category} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
