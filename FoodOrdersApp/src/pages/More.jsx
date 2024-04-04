import React from 'react'
import { Link } from "react-router-dom"

import "../styles/more.css"
import "../styles/index.css"
import "../styles/App.css"

export default function More() {
    return (
        <div className="container">
            <section className="box">
                <h1>More pages</h1>
                <div className="pages">
                    <Link to="/restaurants">
                        <h2>Restaurants</h2>
                    </Link>
                    
                    <Link to="/users">
                        <h2>Users</h2>
                    </Link>
                    
                    <Link to="/organizations">
                        <h2>Organizations</h2>
                    </Link>
                </div>
            </section>
        </div>
    )
}
