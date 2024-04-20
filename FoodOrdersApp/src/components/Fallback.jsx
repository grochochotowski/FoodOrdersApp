import React from 'react'

import "../styles/fallback.css"

export default function Fallback() {
    return (
        <div className='fallback'>
            <div className="text">
                <h1>Loading page</h1>
                <h1 id="dot-1">.</h1>
                <h1 id="dot-2">.</h1>
                <h1 id="dot-3">.</h1>
            </div>
            <div className="bg"></div>
        </div>
    )
}
