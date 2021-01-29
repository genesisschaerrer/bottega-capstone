import React, {useState} from "react"
import { useHistory } from "react-router-dom"

const AdminLogin = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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
                {/* {loggedIn ? <Link to="/admindashboard" type="submit">Submit</Link>: <button type="submit">Submit</button>} */}
                <button type="submit">Submint</button>
            </form>

        </div>
    )
}

export default AdminLogin