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
            <div className="user">
                <select name="user" id="user">
                    <option value="user-1">User 1</option>
                    <option value="user-2">User 2</option>
                    <option value="user-3">User 3</option>
                    <option value="user-4">User 4</option>
                    <option value="user-5">User 5</option>
                </select>
            </div>
        </div>
    </nav>
  )
}
