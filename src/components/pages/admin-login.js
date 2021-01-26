import React from "react"

const AdminLogin = () => {
    return (
        <div className="admin-login-container">
            <h1 className="admin-header">ADMIN LOGIN</h1>
            <form className="admin-login-form">
    
                <input 
                className="login-input-box"
                type="text"
                name="username"
                placeholder="username"
                />

                <input 
                className="login-input-box"
                type="text"
                name="email"
                placeholder="email"
                />

                <input 
                className="login-input-box"
                type="password"
                name="password"
                placeholder="password"
                />

                <button>Submit</button>
            </form>

        </div>
    )
}

export default AdminLogin