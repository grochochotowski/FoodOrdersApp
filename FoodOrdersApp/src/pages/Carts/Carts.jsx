import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import instance from "../../api/axios"

import "../../styles/carts.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function Carts({token}) {

    const [sorting, setSorting] = useState(["organization", 0])
    const [filters, setFilters] = useState({ "filters" : "" })
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
            [filter] : document.getElementById(filter).value
        }))
    }
    function filter() {
        fetchData();
    }

    async function fetchData() {
        const token = localStorage.getItem('token');
        let apiCall = `/cart/all?` +
            `${filters.filters && "filters=" + filters.filters + "&"}` +
            `sortBy=${sorting[0]}&` +
            `sortDireciton=${sorting[1] == 0 ? "ASC" : "DESC"}&` +
            `page=${page}`
        try {
            const response = await instance().get(apiCall, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setResult(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        if (token) {
            fetchData();
        }
    }, [sorting, page]);

    function generateTableHeader() {
        return (
            <thead>
                <tr>
                    <th className="thin" onClick={() => sortTable("id")}>
                        {
                            sorting[0] == "id" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Cart
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
                        <td>{cart.id}</td>
                        <td>{cart.organization}</td>
                        <td>{cart.restaurant}</td>
                        <td>{cart.totalCartPrice.toFixed(2)} / {cart.minPrice.toFixed(2)}</td>
                        <td>{cart.freeDeliveryMinPrice < cart.totalCartPrice ? "Free" : cart.deliveryPrice.toFixed(2)}</td>
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
            return paginationItems;
        }
    }
    

    return (
        <div className="container carts">
            <section className="box">
                <h1>Carts</h1>
                <div className="filter">
                    <div className="add-new">
                        <Link to="new" className="button">New cart</Link>
                    </div>
                    <div className="inputs">
                        <div className="single-filter">
                            <input
                                type="text"
                                id="filters"
                                onChange={() => updateFilters("filters")}
                                value={filters.filters}    
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
                            { generatePagination() }
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
