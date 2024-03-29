export default function Login() {
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
                <input type="password" id="password"/>
                <i className="fa-regular fa-eye"></i>
                <i className="fa-regular fa-eye-slash"></i>
            </div>
        </div>
    </main>
  )
}
