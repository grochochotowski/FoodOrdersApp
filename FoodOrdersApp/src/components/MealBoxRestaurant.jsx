import React from "react"

import "../styles/orders.css"
import "../styles/index.css"
import "../styles/App.css"

export default function MealBoxRestaurant({meal}) {
    
    function removeMeal() {
        alert("remove meal" + meal.id)
    }

    return (
        <div className="meal-box">
            <img src={meal.img ? meal.img : "https://i.pinimg.com/564x/ef/e8/d3/efe8d36db6281666a126189f05bfeff1.jpg"} alt="food-img" />
            <div className="meal-info">
                <h5>{meal.name}</h5>
                <p>Price: {meal.price}zł</p>
                <input type="text" />
            </div>
        </div>
    )
}
