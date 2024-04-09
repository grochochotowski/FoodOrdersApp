import { useState } from "react"
import { Link } from "react-router-dom"

import "../../styles/users.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function Users() {

    const [sorting, setSorting] = useState(["col1", 0])
    const [users, setUsers] = useState([
        {
            "id" : 1,
            "firstName": "Name",
            "lastName" : "Surname",
            "email" : "email@email",
            "organization" :  {
                "name" : "Org 1",
            }
        },
        {
            "id" : 2,
            "firstName": "Name",
            "lastName" : "Surname",
            "email" : "email@email",
            "organization" :  {
                "name" : "Org 2",
            }
        },
        {
            "id" : 3,
            "firstName": "Name",
            "lastName" : "Surname",
            "email" : "email@email",
            "organization" :  {
                "name" : "Org 3",
            }
        },
        {
            "id" : 4,
            "firstName": "Name",
            "lastName" : "Surname",
            "email" : "email@email",
            "organization" :  {
                "name" : "Org 4",
            }
        },
        {
            "id" : 4,
            "firstName": "Name",
            "lastName" : "Surname",
            "email" : "email@email",
            "organization" :  {
                "name" : "Org 4",
            }
        },
        {
            "id" : 5,
            "firstName": "Name",
            "lastName" : "Surname",
            "email" : "email@email",
            "organization" :  {
                "name" : "Org 5",
            }
        },
        {
            "id" : 6,
            "firstName": "Name",
            "lastName" : "Surname",
            "email" : "email@email",
            "organization" :  {
                "name" : "Org 6",
            }
        },
        {
            "id" : 7,
            "firstName": "Name",
            "lastName" : "Surname",
            "email" : "email@email",
            "organization" :  {
                "name" : "Org 7",
            }
        },
        {
            "id" : 8,
            "firstName": "Name",
            "lastName" : "Surname",
            "email" : "email@email",
            "organization" :  {
                "name" : "Org 8",
            }
        },
        {
            "id" : 9,
            "firstName": "Name",
            "lastName" : "Surname",
            "email" : "email@email",
            "organization" :  {
                "name" : "Org 9",
            }
        },
        {
            "id" : 10,
            "firstName": "Name",
            "lastName" : "Surname",
            "email" : "email@email",
            "organization" :  {
                "name" : "Org 10",
            }
        },
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
                    <th onClick={() => sortTable("firstNname")}>
                        {
                            sorting[0] == "firstNname" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        First nname
                    </th>
                    <th onClick={() => sortTable("lastNname")}>
                        {
                            sorting[0] == "lastNname" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Last nname
                    </th>
                    <th onClick={() => sortTable("email")}>
                        {
                            sorting[0] == "email" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Email
                    </th>
                    <th onClick={() => sortTable("Organization")}>
                        {
                            sorting[0] == "Organization" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Organization
                    </th>
                    <th></th>
                </tr>
            </thead>
        );
    }
    function generateTableBody() {
        return (
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.organization.name}</td>
                        <td>
                            <Link to={`details/${user.id}`} className="details">
                                <i className="fa-solid fa-info"></i>
                            </Link>
                            <Link to={`edit/${user.id}`} className="edit">
                                <i className="fa-regular fa-pen-to-square"></i>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        )
    }

    return (
        <div className="container users">
            <section className="box">
                <h1>Users</h1>
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
