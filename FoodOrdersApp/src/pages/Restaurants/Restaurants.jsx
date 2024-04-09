import { useState } from "react"
import { Link } from "react-router-dom"

import "../../styles/restaurants.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function Restaurants() {

    const [sorting, setSorting] = useState(["col1", 0])
    const [restaurants, setRestaurants] = useState([
        {
            "id" : 1,
            "name": "McDonald's",
            "category" : "fast food",
            "numberOfMeals" : 1
        },
        {
            "id" : 2,
            "name": "McDonald's",
            "category" : "fast food",
            "numberOfMeals" : 2
        },
        {
            "id" : 3,
            "name": "McDonald's",
            "category" : "fast food",
            "numberOfMeals" : 3
        },
        {
            "id" : 4,
            "name": "McDonald's",
            "category" : "fast food",
            "numberOfMeals" : 4
        },
        {
            "id" : 5,
            "name": "McDonald's",
            "category" : "fast food",
            "numberOfMeals" : 5
        },
        {
            "id" : 6,
            "name": "McDonald's",
            "category" : "fast food",
            "numberOfMeals" : 6
        },
        {
            "id" : 7,
            "name": "McDonald's",
            "category" : "fast food",
            "numberOfMeals" : 7
        },
        {
            "id" : 8,
            "name": "McDonald's",
            "category" : "fast food",
            "numberOfMeals" : 8
        },
        {
            "id" : 9,
            "name": "McDonald's",
            "category" : "fast food",
            "numberOfMeals" : 9
        },
        {
            "id" : 10,
            "name": "McDonald's",
            "category" : "fast food",
            "numberOfMeals" : 10
        }
    ])

    function sortTable(column) {
        setSorting(prev => {
            if (prev[0] === column && prev[1] === 0) return [column, 1]
            return [column, 0]
        })
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
                    <th onClick={() => sortTable("category")}>
                        {
                            sorting[0] == "category" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Category
                    </th>
                    <th onClick={() => sortTable("numberOfMeals")}>
                        {
                            sorting[0] == "numberOfMeals" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Number of meals
                    </th>
                    <th></th>
                </tr>
            </thead>
        );
    }
    function generateTableBody() {
        return (
            <tbody>
                {restaurants.map((restaurant) => (
                    <tr key={restaurant.id}>
                        <td>{restaurant.name}</td>
                        <td>{restaurant.category}</td>
                        <td>{restaurant.numberOfMeals}</td>
                        <td>
                            <Link to={`details/${restaurant.id}`} className="details">
                                <i className="fa-solid fa-info"></i>
                            </Link>
                            <Link to={`edit/${restaurant.id}`} className="edit">
                                <i className="fa-regular fa-pen-to-square"></i>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        )
    }

    return (
        <div className="container restaurants">
            <section className="box">
                <h1>Restaurants</h1>
                <div className="filter">
                    <div className="add-new">
                        <button className="button">New</button>
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
