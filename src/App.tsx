import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoute from "routes/PublicRoute";
import Category from "views/Category";
import Products from "views/Products";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" exact component={Home} />
        <PublicRoute path="/categories/:name" component={Category} />
        <PublicRoute path="/products/:id" component={Products} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
