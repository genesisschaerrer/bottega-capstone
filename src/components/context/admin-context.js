import React, {useState} from "react"


export const AdminContext = React.createContext()

export const AdminProvider = (props) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <AdminContext.Provider value={[username, setUsername, email, setEmail, password, setPassword, loggedIn, setLoggedIn]}>
            {props.children}
        </AdminContext.Provider>
    )
} 