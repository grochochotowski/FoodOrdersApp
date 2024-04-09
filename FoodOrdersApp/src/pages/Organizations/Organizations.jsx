import { useState } from "react"
import { Link } from "react-router-dom"

import "../../styles/organizations.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function Organizations() {

    const [sorting, setSorting] = useState(["col1", 0])
    const [organizations, setOrganizations] = useState([
        {
            "id" : 1,
            "name": "Org 1",
            "notes" : "note for org 1"
        },
        {
            "id" : 2,
            "name": "Org 2",
            "notes" : "note for org 2"
        },
        {
            "id" : 3,
            "name": "Org 3",
            "notes" : "note for org 3"
        },
        {
            "id" : 4,
            "name": "Org 4",
            "notes" : "note for org 4"
        },
        {
            "id" : 5,
            "name": "Org 5",
            "notes" : "note for org 5"
        },
        {
            "id" : 6,
            "name": "Org 6",
            "notes" : "note for org 6"
        },
        {
            "id" : 7,
            "name": "Org 7",
            "notes" : "note for org 7"
        },
        {
            "id" : 8,
            "name": "Org 8",
            "notes" : "note for org 8"
        },
        {
            "id" : 9,
            "name": "Org 9",
            "notes" : "note for org 9"
        },
        {
            "id" : 10,
            "name": "Org 10",
            "notes" : "note for org 10"
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
                    <th onClick={() => sortTable("notes")}>
                        {
                            sorting[0] == "notes" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Notes
                    </th>
                    <th></th>
                </tr>
            </thead>
        );
    }
    function generateTableBody() {
        return (
            <tbody>
                {organizations.map((organization) => (
                    <tr key={organization.id}>
                        <td>{organization.name}</td>
                        <td>{organization.notes}</td>
                        <td>
                            <Link to={`details/${organization.id}`} className="details">
                                <i className="fa-solid fa-info"></i>
                            </Link>
                            <Link to={`edit/${organization.id}`} className="edit">
                                <i className="fa-regular fa-pen-to-square"></i>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        )
    }

    return (
        <div className="container organizations">
            <section className="box">
                <h1>Organizations</h1>
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
