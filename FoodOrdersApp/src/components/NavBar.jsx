import { Link } from "react-router-dom"
import "../styles/navBar.css"

export default function NavBar() {
  return (
    <nav className='container'>
        <div className="box">
            <div className="logo">
                <h2>FoodOrdersApp</h2>
            </div>
            <div className="menu">
                <ul>
                    <li className="home">
                        <Link to="login">
                            <h3>Home</h3>
                            <p>(Log out)</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="test">
                            <h3>Carts</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="test">
                            <h3>Manage</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="test">
                            <h3>About</h3>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
