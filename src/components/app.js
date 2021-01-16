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
import NavBar from "./navigation/nav-bar"
import ShopDetail from "./pages/shop-detail"
import Footer from "./navigation/footer"

export default class App extends Component {


  render() {
    return (
      <div className='app'>
        <Router>
          <NavBar />
         
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shopall" component={ShopAll} /> 
            <Route path="/about" component={AboutUs} /> 
            <Route path="/cart" component={Cart} /> 

            <Route path="/shop-detail" component={ShopDetail} />
          </Switch>

        <Footer />
        </Router>
      </div>
    );
  }
}
