import { useState } from "react"
import "../styles/logIn.css"

export default function LogIn() {

    const [isPasswordShown, setIsPasswordShown] = useState(false)

    function changePasswordVisibility() {
        setIsPasswordShown(prev => !prev)
    }

    return (
      <main className="container">
          <h1>Log in to your account</h1>
          <div className="form">
              <div className="login">
                  <label htmlFor="login">Login:</label>
                  <input type="text" id="login"/>
              </div>
              <label htmlFor="password">Password:</label>
              <div className="password-input">
                  <input type={isPasswordShown ? "text" : "password"} id="password"/>
                  {isPasswordShown
                  ? <i className="fa-regular fa-eye" onClick={() => changePasswordVisibility()}></i>
                  : <i className="fa-regular fa-eye-slash" onClick={() => changePasswordVisibility()}></i>
                  }
              </div>
          </div>
      </main>
    )
  }
  