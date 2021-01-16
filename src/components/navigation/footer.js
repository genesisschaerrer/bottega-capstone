import React from "react"
import {NavLink, Link} from "react-router-dom"


const Footer = () => {
    return (
        <div className="nav-container">
            <div className="nav-bar">

                <a href="https://www.instagram.com/bottega.capstone/" target="_blank" rel="noreferrer noopener">Instagram</a>

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

export default Footer