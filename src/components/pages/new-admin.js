import React, {useState, useContext} from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import {FontAwesomeIcon, FortAweomeIcon} from "@fortawesome/react-fontawesome"

import {AdminContext} from "../context/admin-context"


const RegisterAdmin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

 

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)

        axios.post("https://gms-ecommerce-node-api.herokuapp.com/register", {username, email, password}, {withCredentials: true})
            .then(response => {
                console.log(response)
                setUsername("")
                setEmail("")
                setPassword("")
                history.push("/adminlogin")
            })
            .catch(error => console.log("error: ", error))
    }
 

    return (
        <div className="admin-login-container">
            <h1 className="admin-header">REGISTER NEW ADMIN</h1>
            <form className="admin-login-form" onSubmit={handleSubmit}>
    
                <input 
                className="login-input-box"
                type="text"
                name="username"
                placeholder="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                />

                <input 
                className="login-input-box"
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

                <input 
                className="login-input-box"
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                {isLoading? <FontAwesomeIcon icon="spinner" spin style={{"fontSize": "2em", "marginBottom": "-1em"}} />: null} 
                <button type="submit">Submit</button>   
                <div style={{"margin": "1.5em auto", "fontSize": ".7rem"}}>username minimum 6 characters | password must be 8 characters</div>  
            </form>

        </div>
    )
}

export default RegisterAdmin