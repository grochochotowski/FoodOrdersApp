import { useState } from "react"
import useAuth from '../hooks/useAuth'

import "../styles/logIn.css"
import "../styles/index.css"
import "../styles/App.css"

export default function LogIn({instance, setToken}) {

    const { setAuth } = useAuth();

    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const [inputs, setInputs] = useState({
        "login" : "",
        "password" : ""
    });

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
        try {
            const response = await instance.post('/account/login', inputs, {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            });
            //setToken(response.data);
            console.log(response.data)
            const token = response?.data?.token
            setAuth({inputs, token})
        } catch (error) {
            console.error(error);
        }
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
  