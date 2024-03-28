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
                        <Link to="test">Home</Link>
                    </li>
                    <li>
                        <Link to="test">Carts</Link>
                    </li>
                    <li>
                        <Link to="test">Manage</Link>
                    </li>
                    <li>
                        <Link to="test">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
