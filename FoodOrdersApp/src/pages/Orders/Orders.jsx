import { useState } from "react"
import { Link } from "react-router-dom"

import "../../styles/orders.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function Orders() {

    const [sorting, setSorting] = useState(["col1", 0])
    const [filters, setFilters] = useState({
        "restaurant" : "",
        "organization" : "",
    })
    const [orders, setOrders] = useState([
        {
            "id" : 1,
            "user": {
                "firstName" : "Firstname 1",
                "lastName" : "Lastname 1"
            },
            "organization" : {
                "name" : "Organization 1"
            },
            "restaurant" : {
                "name" : "McDonald's"
            },
            "totalPrice" : 1.99,
            "positions" : 1
        },
        {
            "id" : 2,
            "user": {
                "firstName" : "Firstname 2",
                "lastName" : "Lastname 2"
            },
            "organization" : {
                "name" : "Organization 2"
            },
            "restaurant" : {
                "name" : "McDonald's"
            },
            "totalPrice" : 2.99,
            "positions" : 2
        },
        {
            "id" : 3,
            "user": {
                "firstName" : "Firstname 3",
                "lastName" : "Lastname 3"
            },
            "organization" : {
                "name" : "Organization 3"
            },
            "restaurant" : {
                "name" : "McDonald's"
            },
            "totalPrice" : 3.99,
            "positions" : 3
        },
        {
            "id" : 4,
            "user": {
                "firstName" : "Firstname 4",
                "lastName" : "Lastname 4"
            },
            "organization" : {
                "name" : "Organization 4"
            },
            "restaurant" : {
                "name" : "McDonald's"
            },
            "totalPrice" : 4.99,
            "positions" : 4
        },
        {
            "id" : 5,
            "user": {
                "firstName" : "Firstname 5",
                "lastName" : "Lastname 5"
            },
            "organization" : {
                "name" : "Organization 5"
            },
            "restaurant" : {
                "name" : "McDonald's"
            },
            "totalPrice" : 5.99,
            "positions" : 5
        },
        {
            "id" : 6,
            "user": {
                "firstName" : "Firstname 6",
                "lastName" : "Lastname 6"
            },
            "organization" : {
                "name" : "Organization 6"
            },
            "restaurant" : {
                "name" : "McDonald's"
            },
            "totalPrice" : 6.99,
            "positions" : 6
        },
        {
            "id" : 7,
            "user": {
                "firstName" : "Firstname 7",
                "lastName" : "Lastname 7"
            },
            "organization" : {
                "name" : "Organization 7"
            },
            "restaurant" : {
                "name" : "McDonald's"
            },
            "totalPrice" : 7.99,
            "positions" : 7
        },
        {
            "id" : 8,
            "user": {
                "firstName" : "Firstname 8",
                "lastName" : "Lastname 8"
            },
            "organization" : {
                "name" : "Organization 8"
            },
            "restaurant" : {
                "name" : "McDonald's"
            },
            "totalPrice" : 8.99,
            "positions" : 8
        },
        {
            "id" : 9,
            "user": {
                "firstName" : "Firstname 9",
                "lastName" : "Lastname 9"
            },
            "organization" : {
                "name" : "Organization 9"
            },
            "restaurant" : {
                "name" : "McDonald's"
            },
            "totalPrice" : 9.99,
            "positions" : 9
        },
        {
            "id" : 10,
            "user": {
                "firstName" : "Firstname 10",
                "lastName" : "Lastname 10"
            },
            "organization" : {
                "name" : "Organization 10"
            },
            "restaurant" : {
                "name" : "McDonald's"
            },
            "totalPrice" : 10.99,
            "positions" : 10
        },
    ])

    function sortTable(column) {
        setSorting(prev => {
            if (prev[0] === column && prev[1] === 0) return [column, 1]
            return [column, 0]
        })
    }
    function updateFilters(filter) {
        setFilters(prev => ({
            ...prev,
            [filter] : document.getElementById(filter).value
        }))
    }
    function filter() {
        alert(`filtering: ${filters.restaurant}, ${filters.organization}`)
    }

    function generateTableHeader() {
        return (
            <thead>
                <tr>
                    <th onClick={() => sortTable("name")}>
                        {
                            sorting[0] == "name" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Name
                    </th>
                    <th onClick={() => sortTable("organization")}>
                        {
                            sorting[0] == "organization" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Organization
                    </th>
                    <th onClick={() => sortTable("restaurant")}>
                        {
                            sorting[0] == "restaurant" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Restaurant
                    </th>
                    <th onClick={() => sortTable("totalPrice")}>
                        {
                            sorting[0] == "totalPrice" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Total price
                    </th>
                    <th onClick={() => sortTable("positions")}>
                        {
                            sorting[0] == "positions" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Positions
                    </th>
                    <th></th>
                </tr>
            </thead>
        );
    }
    function generateTableBody() {
        return (
            <tbody>
                {orders.map((cart) => (
                    <tr key={cart.id}>
                        <td>{cart.user.firstName} {cart.user.lastName}</td>
                        <td>{cart.organization.name}</td>
                        <td>{cart.restaurant.name}</td>
                        <td>{cart.totalPrice}</td>
                        <td>{cart.positions}</td>
                        <td>
                            <Link to={`details/${cart.id}`} className="details">
                                <i className="fa-solid fa-info"></i>
                            </Link>
                            <Link to={`edit/${cart.id}`} className="edit">
                                <i className="fa-regular fa-pen-to-square"></i>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        )
    }

    return (
        <div className="container">
            <section className="box">
                <h1>Orders</h1>
                <div className="filter">
                    <div className="add-new">
                        <Link to="new"className="button">New order</Link>
                    </div>
                        <div className="inputs">
                        <div className="single-filter">
                            <label htmlFor="restaurant">
                                <h4>Restaurant:</h4>
                            </label>
                            <input
                                type="text"
                                id="restaurant"
                                onChange={() => updateFilters("restaurant")}
                                value={filters.restaurant}    
                            />
                        </div>
                        <div className="single-filter">
                            <label htmlFor="organization">
                                <h4>Organization:</h4>
                            </label>
                            <input
                                type="text"
                                id="organization"
                                onChange={() => updateFilters("organization")}
                                value={filters.organization}    
                            />
                        </div>
                        <button onClick={() => filter()}>Filter</button>
                    </div>
                </div>

                <div className="list">
                    <table>
                        { generateTableHeader() }
                        { generateTableBody() }
                    </table>
                    <div className="pagination">
                        <ul>
                            <li className="clickable"><i className="fa-solid fa-caret-left"></i></li>
                            <li className="clickable">1</li>
                            <li>...</li>

                            <li className="clickable">10</li>
                            <li className="clickable">11</li>
                            <li className="clickable">12</li>
                            <li className="clickable">13</li>
                            <li className="clickable">14</li>

                            <li>...</li>
                            <li className="clickable">67</li>
                            <li className="clickable"><i className="fa-solid fa-caret-right"></i></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
