import { Link } from "react-router-dom"
import "../styles/navBar.css"

export default function NavBar() {
  return (
    <nav className='container'>
        <div className="box">
            <div className="logo">
                <h1>FoodOrdersApp</h1>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="test">
                            <h3>Home</h3>
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
