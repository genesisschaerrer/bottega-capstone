import React, {useState} from "react"


export const AdminContext = React.createContext()

export const AdminProvider = (props) => {
    const [username, setUsername] = useState("user")
    const [email, setEmail] = useState("gen@gmail.com")
    const [password, setPassword] = useState("12345678")
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <AdminContext.Provider value={[username, setUsername, email, setEmail, password, setPassword, loggedIn, setLoggedIn]}>
            {props.children}
        </AdminContext.Provider>
    )
} 