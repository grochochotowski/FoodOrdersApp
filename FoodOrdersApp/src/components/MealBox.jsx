import React from "react"

import "../styles/orders.css"
import "../styles/index.css"
import "../styles/App.css"

export default function MealBox({meal}) {
    
    function removeMeal() {
        alert("remove meal" + meal.id)
    }

    return (
        <div className="meal-box">
            <img src={meal.img ? meal.img : "https://i.pinimg.com/564x/ef/e8/d3/efe8d36db6281666a126189f05bfeff1.jpg"} alt="food-img" />
            <div className="meal-info">
                <h5>{meal.meal}</h5>
                <p>Quantity: {meal.quantity}</p>
                <p>Price: {meal.price}zł</p>
            </div>
        </div>
    )
}
