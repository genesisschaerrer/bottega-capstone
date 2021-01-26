import React from "react"
import {NavLink} from "react-router-dom"

import logo from "../../../static/images/logos/logo.png"


const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="nav-bar">

                <NavLink exact to="/" activeClassName="nav-link-active">
                    <img className="navbar-logo" src={logo} />   
                </NavLink>

                <div className="menu-bar">
                    <NavLink exact to="/" className="navbar-link" activeClassName="nav-link-active">Home</NavLink>
                    <NavLink to="/shopall" className="navbar-link" activeClassName="nav-link-active">Shop All</NavLink>
                    <NavLink to="/about" className="navbar-link" activeClassName="nav-link-active">About</NavLink>
                    <NavLink to="/cart" className="navbar-link" activeClassName="nav-link-active">Cart</NavLink>      
                </div>  
        </div>  

        </div>
    )
}

export default NavBar