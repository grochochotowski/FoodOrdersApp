import { Link } from "react-router-dom"
import "../styles/navBar.css"

export default function NavBar() {
  return (
    <nav className='container'>
        <div className="box">
            <div className="logo">
                <h3>FoodOrdersApp</h3>
            </div>
            <div className="menu">
                <ul>
                    <li className="home">
                        <Link to="log-in">
                            <h4>Home</h4>
                            <p>(Log out)</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="carts">
                            <h4>Carts</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="test">
                            <h4>Manage</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="test">
                            <h4>About</h4>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
