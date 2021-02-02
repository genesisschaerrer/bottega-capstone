// import React, {useState, createContext} from "react"
import {createContext} from "react"

export const AdminContext = createContext()



// export const AdminContext = createContext() 

// export const AdminProvider = (props) => {
//     const [loggedIn, setLoggedIn] = useState("LOGGED_OUT")

//     return (
//         <AdminContext.Provider value={[loggedIn, setLoggedIn]}>
//             {props.children}
//         </AdminContext.Provider>
//     )
// } 