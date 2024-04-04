import React from "react"

import "../styles/orders.css"
import "../styles/index.css"
import "../styles/App.css"

export default function MealBox({meal}) {
    
    function removeMeal() {
        alert("remove meal" + meal.id)
    }

    return (
        <div className="order-box">
            <img src={meal.img} alt="food-img" />
            <div className="order-info">
                <h5>{meal.name}</h5>
                <p>Positions: {meal.positions}</p>
                <p>Price: {meal.price}zł</p>
            </div>
            <button className="warning" onClick={() => removeMeal()}>Remove</button>
        </div>
    )
}
