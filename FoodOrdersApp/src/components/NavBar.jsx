import { Link } from "react-router-dom"

import "../styles/navBar.css"
import "../styles/index.css"
import "../styles/App.css"

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
                        <Link to="orders">
                            <h4>Orders</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="more">
                            <h4>More</h4>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
