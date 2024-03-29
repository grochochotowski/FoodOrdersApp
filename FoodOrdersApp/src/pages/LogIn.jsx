import { useState } from "react"

import "../styles/logIn.css"
import "../styles/index.css"
import "../styles/App.css"

export default function LogIn() {

    const [isPasswordShown, setIsPasswordShown] = useState(false)

    function changePasswordVisibility() {
        setIsPasswordShown(prev => !prev)
    }

    return (
        <main className="container">
            <div className="box">
                <h2>Log in to your account</h2>
                <div className="login-input">
                    <label htmlFor="login">Login:</label>
                    <input type="text" id="login"/>
                </div>
                <div className="password-input">
                    <label htmlFor="password">Password:</label>
                    <input type={isPasswordShown ? "text" : "password"} id="password"/>
                    {isPasswordShown
                    ? <i className="fa-regular fa-eye" onClick={() => changePasswordVisibility()}></i>
                    : <i className="fa-regular fa-eye-slash" onClick={() => changePasswordVisibility()}></i>
                    }
                </div>
                <button>Log In</button>
            </div>
        </main>
    )
}
  