import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"

import "../styles/navBar.css"
import "../styles/index.css"
import "../styles/App.css"

export default function NavBar({handleUserChange, user, users}) {

    function changeUser(event) {
        const selectedUserId = event.target.value;
        const user = users.find(u => u.id == selectedUserId)
        handleUserChange(user)
    }


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
                                <h4>Log In</h4>
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
                    {
                        users.length && (
                            <select name="user" id="user" onChange={changeUser} value={user.id}>
                                {users.map(userSelect => (
                                    <option key={userSelect.id} value={userSelect.id}>{userSelect.id} - {userSelect.firstName} {userSelect.lastName} - {userSelect.organizationName}</option>
                                ))}
                            </select>
                        )
                    }
                    {users.length === 0 && <p>No users found</p>}
                </div>
            </div>
        </nav>
    )
}
