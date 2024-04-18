import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"

import "../styles/navBar.css"
import "../styles/index.css"
import "../styles/App.css"

export default function NavBar() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchData() {
            let apiCall = `https://localhost:7157/api/user/all`
            try {
                const response = await fetch(apiCall)
                const data = await response.json()
                setUsers(data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData();
    }, []);


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
                    {
                        users.length && (
                            <select name="user" id="user">
                                {users.map(user => (
                                    <option key={user.id} value={user.id}>{user.id} - {user.firstName} {user.lastName} - {user.organization}</option>
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
