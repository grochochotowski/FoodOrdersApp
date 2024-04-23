import React from 'react'

import "../../styles/restaurants.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function RestaurantMeals({restaurant}) {
  return (
    <div className="small-container auto">
            <div className="box">
                <h1>{restaurant}</h1>
         </div>
    </div>
  )
}
