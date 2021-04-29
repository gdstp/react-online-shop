import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import NotFound from "components/sections/NotFound";
import { AppProvider } from "context";
import PublicRoute from "routes/PublicRoute";
import Category from "views/Category";
import Products from "views/Products";
import Home from "./views/Home";
import Cart from "views/Cart";
import Checkout from "views/Checkout";
import CheckoutCompleted from "views/CheckoutCompleted";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Switch>
          <PublicRoute path="/" exact component={Home} />
          <PublicRoute path="/categories/:name" component={Category} />
          <PublicRoute path="/products/:id" component={Products} />
          <PublicRoute path="/cart" component={Cart} />
          <PublicRoute path="/404" component={NotFound} />
          <PublicRoute path="/checkout" component={Checkout} />
          <PublicRoute
            path="/checkout-complete"
            component={CheckoutCompleted}
          />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
