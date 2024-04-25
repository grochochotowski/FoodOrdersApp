import { useState, useEffect } from "react"
import instance from "../../api/axios.jsx"

import OrganizationsNew from "./OrganizationsNew.jsx"

import "../../styles/organizations.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function Organizations({token}) {

    const [sorting, setSorting] = useState(["name", 0])
    const [result, setResult] = useState([])
    const [page, setPage] = useState(1);
    const [openNew, setOpenNew] = useState(false);

    function sortTable(column) {
        setSorting(prev => {
            if (prev[0] === column && prev[1] === 0) return [column, 1]
            return [column, 0]
        })
    }

    async function fetchData() {
        let apiCall = `/organization/list?` +
            `sortBy=${sorting[0]}&` +
            `sortDireciton=${sorting[1] == 0 ? "ASC" : "DESC"}&` +
            `page=${page}`
        try {
            const response = await instance().get(apiCall, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            setResult(response.data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }
    useEffect(() => {
        if(token){
            fetchData();
        }
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
                    <th></th>
                </tr>
            </thead>
        );
    }
    function generateTableBody() {
        return (
            <tbody>
                {result.items && result.items.map((organization) => 
                    <tr key={organization.id}>
                        <td>{organization.name}</td>
                        <td>
                            <div onClick={() => deleteOrganization(organization.id)} className="deleteListElement">
                                <i className="fa-regular fa-trash-can"></i>
                            </div>
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

    async function deleteOrganization(organizationId) {
        var apiCall = `organization/delete/${organizationId}`
        try {
            const response = await instance().delete(apiCall, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            fetchData()
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }
    
    useEffect(() => {
        function handleClickOutside(event) {
          if (event.target.closest(".small-container") && !event.target.closest(".box")) setOpenNew(false);
        }
    
        document.addEventListener("click", handleClickOutside);
    
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="container organizations">
            <section className="box">
                <h1>Organizations</h1>
                <div className="filter">
                    <div className="add-new">
                        <button onClick={() => setOpenNew(true)}>New</button>
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
            {
                openNew && <OrganizationsNew hideNew={() => setOpenNew(false)} updateData={() => fetchData()} token={token}/>
            }
        </div>
    )
}
