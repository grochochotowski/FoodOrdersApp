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
                    <div className="page-container" onClick={() => {navigate("/restaurants")}}>
                        <h3>Restaurants</h3>
                    </div>
                    
                    <div className="page-container" onClick={() => {navigate("/users")}}>
                        <h3>Users</h3>
                    </div>
                    
                    <div className="page-container" onClick={() => {navigate("/organizations")}}>
                        <h3>Organizations</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}
