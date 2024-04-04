import React from 'react'
import { useNavigate } from "react-router-dom"

import "../styles/more.css"
import "../styles/index.css"
import "../styles/App.css"

export default function More() {

    const navigate = useNavigate()

    return (
        <div className="container">
            <section className="box">
                <h1>More pages</h1>
                <div className="pages">
                    <div className="page-container" onClick={navigate("/restaurants")}>
                        <h2>Restaurants</h2>
                    </div>
                    
                    <div className="page-container" onClick={navigate("/users")}>
                        <h2>Users</h2>
                    </div>
                    
                    <div className="page-container" onClick={navigate("/organizations")}>
                        <h2>Organizations</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}
