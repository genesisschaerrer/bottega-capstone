import React from "react"
import {NavLink, Link} from "react-router-dom"


const Footer = () => {
    return (
        <div className="nav-container" style={{"backgroundColor": "#4A4F4E", "marginTop": "4em"}}>
            <div className="nav-bar">

                <a href="https://www.instagram.com/bottega.capstone/" style={{"color": "white"}} className="navbar-link" target="_blank" rel="noreferrer noopener">Instagram</a>

                <div className="menu-bar">
                    <NavLink exact to="/" className="navbar-link" activeClassName="nav-link-active" style={{"color": "white"}} >Home</NavLink>
                    <NavLink to="/shopall" className="navbar-link" className="navbar-link" activeClassName="nav-link-active" style={{"color": "white"}} >Shop All</NavLink>
                    <NavLink to="/about" className="navbar-link" activeClassName="nav-link-active" style={{"color": "white"}} >About</NavLink>
                    <NavLink to="/cart" className="navbar-link" activeClassName="nav-link-active" style={{"color": "white"}} >Cart</NavLink>      
                </div>  
        </div>  

        </div>
    )
}

export default Footer