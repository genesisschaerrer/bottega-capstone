import React, {useState, useContext} from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

import {AdminContext} from "../context/admin-context"


const RegisterAdmin = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

 

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("https://gms-ecommerce-node-api.herokuapp.com/register", {username, email, password}, {withCredentials: true})
            .then(response => {
                console.log(response)
                setUsername("")
                setEmail("")
                setPassword("")
                history.push("/admindashboard")
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
                <button type="submit">Submit</button>     
            </form>

        </div>
    )
}

export default RegisterAdmin