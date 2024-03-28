import React from 'react'

export default function NavBar() {
  return (
    <nav className='nav-container'>
        <div className="nav-box">
            <div className="logo">
                <h1>FoodOrdersApp</h1>
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Carts</li>
                    <li>Manage</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
