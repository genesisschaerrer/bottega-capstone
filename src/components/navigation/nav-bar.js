import React from "react"
import {NavLink} from "react-router-dom"


const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="nav-bar">

                <NavLink exact to="/" activeClassName="nav-link-active">Logo</NavLink>

                <div className="menu-bar">
                    <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                    <NavLink to="/shopall" activeClassName="nav-link-active">Shop All</NavLink>
                    <NavLink to="/about" activeClassName="nav-link-active">About</NavLink>
                    <NavLink to="/cart" activeClassName="nav-link-active">Cart</NavLink>      
                </div>  
        </div>  

        </div>
    )
}

export default NavBar