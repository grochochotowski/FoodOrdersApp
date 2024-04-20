import React from 'react'

import "../styles/fallback.css"

export default function Fallback() {
    return (
        <div className='fallback'>
            <div className="text">
                <h1 class="loader"></h1>
            </div>
            <div className="bg"></div>
        </div>
    )
}
