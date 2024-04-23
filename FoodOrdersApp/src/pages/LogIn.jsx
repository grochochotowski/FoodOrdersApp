import { useState, useEffect } from "react"

import "../styles/logIn.css"
import "../styles/index.css"
import "../styles/App.css"

export default function LogIn() {

    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const [inputs, setInputs] = useState({
        "login" : "",
        "password" : ""
    });
    const [token, setToken] = useState({token: ""})

    function changePasswordVisibility() {
        setIsPasswordShown(prev => !prev)
    }

    function handleInputChange(inputId) {
        setInputs(prev => (
            {
                ...prev,
                [inputId]: document.getElementById(inputId).value
            }
        ))
    }

    async function login() {
        let apiCall = "https://localhost:7157/api/account/login"
        let requestOption = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        }
        const response = await fetch(apiCall, requestOption);
        const data = await response.json();
        setToken(data)
    }

    return (
        <main className="container">
            <div className="box">
                <h2>Log in to your account</h2>
                <div className="login-input">
                    <label htmlFor="login">Login:</label>
                    <input
                        type="text"
                        id="login"
                        onChange={() => handleInputChange("login")}
                        value={inputs.login}
                    />
                </div>
                <div className="password-input">
                    <label htmlFor="password">Password:</label>
                    <input
                        type={isPasswordShown ? "text" : "password"}
                        id="password"
                        onChange={() => handleInputChange("password")}
                        value={inputs.password}
                    />
                    {isPasswordShown
                    ? <i className="fa-regular fa-eye" onClick={() => changePasswordVisibility()}></i>
                    : <i className="fa-regular fa-eye-slash" onClick={() => changePasswordVisibility()}></i>
                    }
                </div>
                <button onClick={login}>Log In</button>
            </div>
        </main>
    )
}
  