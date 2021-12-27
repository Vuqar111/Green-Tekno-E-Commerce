import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Navbar,
  Sidebar,
  Footer,
  SecondNavbar,
  Popup,
} from "./components";
import {
  Home,
  SingleProduct,
  Cart,
  Error,
  FormAccepting,
  FormAccept2,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <SecondNavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/cash">
          <FormAccepting />
        </Route>

        <Route path="/credit">
          <FormAccept2 />
        </Route>

       

        <Route path="/pop">
          <Popup />
        </Route>

        <Route path="/products/:id" children={<SingleProduct />} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
