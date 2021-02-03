import React, {useState, useContext} from "react"
import axios from "axios"
import {NavLink, useHistory} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {AdminContext} from "../context/admin-context"



const Footer = () => {
    const [loggedIn, setLoggedIn] = useContext(AdminContext)
    const history = useHistory()

    const handleSignOut = () => {
        axios.delete("https://gms-ecommerce-client-react.herokuapp.com/logout", {withCredentials: true})
        .then(() => {
            setLoggedIn("LOGGED_OUT")
            history.push("/")
        })
    } 

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
                {loggedIn === "LOGGED_IN" ? <a onClick={handleSignOut}><FontAwesomeIcon style={{"color": "white", "fontSize": "2em"}} icon="sign-out-alt"/></a>: null}   
        </div>  

        </div>
    ) 
}

export default Footer