import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


import Home from "./pages/home"
import ShopAll from "./pages/shop-all"
import AboutUs from "./pages/about-us"
import Cart from "./pages/cart"

export default class App extends Component {


  render() {
    return (
      <div className='app'>
        <Router>
         
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shopall" component={ShopAll} /> 
            <Route path="/about" component={AboutUs} /> 
            <Route path="cart" component={Cart} /> 
          </Switch>

        </Router>
      </div>
    );
  }
}
