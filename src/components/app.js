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
import AdminLogin from "./pages/admin-login"
import AdminDashboard from "./pages/admin-dashboard";
import shopFlowers from "./pages/shop-flowers"
import shopPlants from "./pages/shop-plants"
import { CartProvider } from "./context/cart-context";


// const theme = {
//   light: {
//     colro: "red"
//   },
//   dark: {}
// }
// <context.provider value={{cart: cart, setCart: setCart}}
const App = () => {

    return (
      <CartProvider>
      <div className='app'>
        <Router>
          <NavBar />
         
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shopall" component={ShopAll} /> 
            <Route path="/about" component={AboutUs} /> 
            <Route path="/cart" component={Cart} /> 

            <Route path="/shop-detail/:id" component={ShopDetail} />
            <Route path="/adminlogin" component={AdminLogin} />
            <Route path="/admindashboard" component={AdminDashboard} />
            <Route path="/shop-plants" component={shopPlants} /> 
            <Route path="/shop-flowers" component={shopFlowers} />
          </Switch>

        {/* <Footer /> */}
        </Router>
      </div>
      </CartProvider>
    )
}

export default App
