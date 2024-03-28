import React from 'react'
import { Link } from "react-router-dom"

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
                        <Link to="example">Home</Link>
                    </li>
                    <li>
                        <Link to="example">Carts</Link>
                    </li>
                    <li>
                        <Link to="example">Manage</Link>
                    </li>
                    <li>
                        <Link to="example">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
