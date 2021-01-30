import React, {useState, useContext} from "react"
import { useHistory } from "react-router-dom"

import AdminContext from "../context/admin-context"

const AdminLogin = () => {
    // const [username, setUsername] = useContext(AdminContext)
    // const [email, setEmail] = useContext(AdminContext)
    // const [password, setPassword] = useContext(AdminContext)
    // const [loggedIn, setLoggedIn] = useContext(AdminContext)
    const [username, setUsername] = useState("user")
    const [email, setEmail] = useState("gen@gmail")
    const [password, setPassword] = useState("12345678")
    const [loggedIn, setLoggedIn] = useState(false)
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()
        if(username === "user" && email === "gen@gmail" && password === "12345678"){
            setLoggedIn(true)
            setUsername("")
            setEmail("")
            setPassword("")
            console.log("im logged in")
            history.push("/admindashboard")

        } else {
            console.log("wrong credentials")
        }
      
    }


    return (
        <div className="admin-login-container">
            <h1 className="admin-header">ADMIN LOGIN</h1>
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

export default AdminLogin