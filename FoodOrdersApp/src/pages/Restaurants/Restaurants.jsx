import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import "../../styles/restaurants.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function Restaurants() {

    const [sorting, setSorting] = useState(["name", 0])
    const [result, setResult] = useState([])
    const [page, setPage] = useState(1);

    function sortTable(column) {
        setSorting(prev => {
            if (prev[0] === column && prev[1] === 0) return [column, 1]
            return [column, 0]
        })
    }

    async function fetchData() {
        let apiCall = `https://localhost:7157/api/restaurant/list?` +
            `sortBy=${sorting[0]}&` +
            `sortDireciton=${sorting[1] == 0 ? "ASC" : "DESC"}&` +
            `page=${page}`
        try {
            const response = await fetch(apiCall)
            const data = await response.json()
            setResult(data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }
    useEffect(() => {
        fetchData();
    }, [sorting, page]);

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
                {result.items && result.items.map((restaurant) => 
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
                )}
            </tbody>
        )
    }
    function generatePagination() {

        const paginationItems = [];

        if (result.length != 0) {

            // Generate left arrow
            if (page > 1) {
                paginationItems.push(
                    <li className="clickable" onClick={() => setPage(page - 1)} key={"arrow-left"}>
                        <i className="fa-solid fa-caret-left"></i>
                    </li>
                )
            }
            else {
                paginationItems.push(
                    <li className="disable" key={"arrow-left"}>
                        <i className="fa-solid fa-caret-left"></i>
                    </li>
                )
            }

            if (result.totalPages <= 7) {
                for (let i = 1; i <= result.totalPages; i++) {
                    paginationItems.push(<li key={i} className="clickable" onClick={() => setPage(i)}>{i}</li>);
                }
            }
            else {

                if (page <= 4) {
                    for (let i = 1; i <= 7; i++) {
                        if (i == page) {
                            paginationItems.push(<li key={i} className="selected" onClick={() => setPage(i)}>{i}</li>);
                        }
                        else {
                            paginationItems.push(<li key={i} className="clickable" onClick={() => setPage(i)}>{i}</li>);
                        }
                    }
                    paginationItems.push(<li key={"dots2"}>...</li>)
                    paginationItems.push(<li key={result.totalPages} className="clickable" onClick={() => setPage(result.totalPages)}>{result.totalPages}</li>);
                }
                else if (result.totalPages - page < 5) {
                    paginationItems.push(<li key={1} className="clickable" onClick={() => setPage(1)}>{1}</li>);
                    paginationItems.push(<li key={"dots1"}>...</li>)
                    for (let i = result.totalPages-6; i <= result.totalPages; i++) {
                        if (i == page) {
                            paginationItems.push(<li key={i} className="selected" onClick={() => setPage(i)}>{i}</li>);
                        }
                        else {
                            paginationItems.push(<li key={i} className="clickable" onClick={() => setPage(i)}>{i}</li>);
                        }
                    }
                }
                else {
                    paginationItems.push(<li key={1} className="clickable" onClick={() => setPage(1)}>{1}</li>);
                    paginationItems.push(<li key={"dots1"}>...</li>)

                    for (let i = page-2; i < page; i++) {
                        paginationItems.push(<li key={i} className="clickable" onClick={() => setPage(i)}>{i}</li>);
                    }

                    paginationItems.push(<li key={page} className="selected" onClick={() => setPage(page)}>{page}</li>)

                    for (let i = page+1; i <= page+2; i++) {
                        paginationItems.push(<li key={i} className="clickable" onClick={() => setPage(i)}>{i}</li>);
                    }
                
                    paginationItems.push(<li key={"dots2"}>...</li>)
                    paginationItems.push(<li key={result.totalPages} className="clickable" onClick={() => setPage(result.totalPages)}>{result.totalPages}</li>);
                }
                
                // Generate right arrow
                if (page < result.totalPages) {
                    paginationItems.push(
                        <li className="clickable" onClick={() => setPage(page + 1)} key={"arrow-right"}>
                            <i className="fa-solid fa-caret-right"></i>
                        </li>
                    )
                }
                else {
                    paginationItems.push(
                        <li className="disable" key={"arrow-right"}>
                            <i className="fa-solid fa-caret-right"></i>
                        </li>
                    )
                }
            }
            return paginationItems;
        }
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
                            { generatePagination() }
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
