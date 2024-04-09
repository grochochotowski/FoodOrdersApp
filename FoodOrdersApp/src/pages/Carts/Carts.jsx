import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import "../../styles/carts.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function Carts() {

    const [sorting, setSorting] = useState(["organization", 0])
    const [filters, setFilters] = useState({
        "restaurant" : "",
        "organization" : "",
    })
    const [result, setResult] = useState([])
    const [page, setPage] = useState(1);

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
        fetchData();
    }

    const fetchData = async () => {
        let apiCall = `https://localhost:7157/api/cart/all?` +
            `${filters.organization && "organization=" + filters.organization + "&"}` +
            `${filters.restaurant && "restaurant=" + filters.restaurant + "&"}` +
            `sortBy=${sorting[0]}&` +
            `sortDireciton=${sorting[1] == 0 ? "ASC" : "DESC"}&` +
            `page=${page}`
        try {
            const response = await fetch(apiCall);
            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [sorting, page]);

    function generateTableHeader() {
        return (
            <thead>
                <tr>
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
                    <th onClick={() => sortTable("totalCartPrice")}>
                        {
                            sorting[0] == "totalCartPrice" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Total / Minimum price
                    </th>
                    <th onClick={() => sortTable("deliveryPrice")}>
                        {
                            sorting[0] == "deliveryPrice" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Delivery cost
                    </th>
                    <th></th>
                </tr>
            </thead>
        );
    }
    function generateTableBody() {
        return (
            <tbody>
                {result.items && result.items.map((cart) => (
                    <tr key={cart.id}>
                        <td>{cart.organization}</td>
                        <td>{cart.restaurant}</td>
                        <td>{cart.totalCartPrice} / {cart.minPrice}</td>
                        <td>{cart.deliveryPrice}</td>
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
        );
    }
    function generatePagination() {
        const paginationItems = [];
        if (result.totalPages <= 7) {
            for (let i = 1; i <= result.totalPages; i++) {
                paginationItems.push(<li key={i} className="clickable" onClick={() => setPage(i)}>{i}</li>);
            }
        }
        else {
            paginationItems.push(<li key={1} className="clickable" onClick={() => setPage(1)}>{1}</li>)
            
            if (page-2 < 1) {
                paginationItems.push(<li key={"dots1"}>...</li>)
                for (let i = page-2; i <= page+2; i++) {
                    paginationItems.push(<li key={i} className="clickable" onClick={() => setPage(i)}>{i}</li>);
                }
            }
            else {
                for (let i = 2; i <= 5; i++) {
                    if (i < result.totalPages) {
                        paginationItems.push(<li key={i} className="clickable" onClick={() => setPage(i)}>{i}</li>);
                    }
                }
            }

            if (page-2 > 1 && page+2 < result.totalPages) {
                for (let i = page-2; i <= page+2; i++) {
                    paginationItems.push(<li key={i} className="clickable" onClick={() => setPage(i)}>{i}</li>);
                }
            }

            if (page+2 < result.totalPages) {
                paginationItems.push(<li key={"dots2"}>...</li>)
            }
            paginationItems.push(<li key={result.totalPages} className="clickable" onClick={() => setPage(result.totalPages)}>{result.totalPages}</li>)
        }
        return paginationItems;
    }
    

    return (
        <div className="container carts">
            <section className="box">
                <h1>Carts</h1>
                <div className="filter">
                    <div className="add-new">
                        <Link to="new"className="button">New cart</Link>
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
                            { generatePagination() }
                            <li className="clickable"><i className="fa-solid fa-caret-right"></i></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
