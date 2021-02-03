import React, { Component, useContext, useState, useEffect } from "react";
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import {library} from "@fortawesome/fontawesome-svg-core"
import {FortAweomeIcon} from "@fortawesome/react-fontawesome"
import {
  faTrash,
  faEdit,
  faShoppingCart,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faSpinner
} from "@fortawesome/free-solid-svg-icons"



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
import EditCarousel from "./pages/edit-carousel"
import NoPage from "./not-found/no-page"
import SuccessPage from "./out-come/success-page"
import FailurePage from "./out-come/failure-page"
import { CartProvider } from "./context/cart-context";
import { AdminContext } from "./context/admin-context";



library.add(
  faTrash,
  faEdit,
  faShoppingCart,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faSpinner
)


const App = () => {
  const [loggedIn, setLoggedIn] = useState("LOGGED_OUT")
  const authorizedPages = () => {

    return [
      <Route path="/admindashboard" component={AdminDashboard} />,
      <Route path="/edit-carousel" component={EditCarousel} />
    ]
  }

  useEffect(() => {
    axios.get("https://gms-ecommerce-client-react.herokuapp.com/check-login", {withCredentials: true})
      .then(res => {
        setLoggedIn("LOGGED_IN")
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

    return (
      <AdminContext.Provider value={[loggedIn, setLoggedIn]}>
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
            <Route path="/shop-plants" component={shopPlants} /> 
            <Route path="/shop-flowers" component={shopFlowers} />
            <Route path="/successful-payment" component={SuccessPage} />
            <Route path="/failed-payment" component={FailurePage} />

            {loggedIn === "LOGGED_IN" ? authorizedPages(): <NoPage />}
          </Switch>

          <Footer />
        </Router>
      </div>
      </CartProvider>
      </AdminContext.Provider>
    )
}

export default App
