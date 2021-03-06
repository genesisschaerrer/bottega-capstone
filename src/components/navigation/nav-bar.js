import React, {useContext} from "react"
import {NavLink} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import logo from "../../../static/images/logos/logo.png"
import Cart from "../pages/cart"
import {CartContext} from "../context/cart-context"
import {AdminContext} from "../context/admin-context"


const NavBar = () => {
    const [cart, setCart] = useContext(CartContext)
    const [loggedIn, setLoggedIn] = useContext(AdminContext)

    return (
        <div className="nav-container">
            <div className="nav-bar">

                <NavLink exact to="/" activeClassName="nav-link-active">
                    <img className="navbar-logo" src={logo} />   
                </NavLink>
            
                <div className="menu-bar">
                    {loggedIn === "LOGGED_IN"? <NavLink to="/admindashboard" className="navbar-link" activeClassName="nav-link-active">Dashboard</NavLink>:null }
                    <NavLink exact to="/" className="navbar-link mobile-home" activeClassName="nav-link-active">Home</NavLink>
                    <NavLink to="/shopall" className="navbar-link" activeClassName="nav-link-active">Shop All</NavLink>
                    <NavLink to="/about" className="navbar-link" activeClassName="nav-link-active">About</NavLink>
                    <NavLink to="/cart" className="navbar-link" activeClassName="nav-link-active"><FontAwesomeIcon style={{"fontSize": "1.5em"}} icon="shopping-cart" /> {cart.length}</NavLink>      
                </div>  
        </div>  

        </div>
    )
}

export default NavBar