import React, {useState, useEffect} from "react"

import "../styles/orders.css"
import "../styles/index.css"
import "../styles/App.css"

export default function MealBoxList({meal}) {

    function deleteMeal() {
        alert("delete meal")
    }

    return (
        <div className="meal-box list">
            <img src={meal.img ? meal.img : "https://i.pinimg.com/564x/ef/e8/d3/efe8d36db6281666a126189f05bfeff1.jpg"} alt="food-img" />
            <div className="meal-info">
                <h5>{meal.name}</h5>
                <p>Price: {meal.price}zł</p>
            </div>
            <button className="side warning" onClick={deleteMeal}>
                <i className="fa-regular fa-trash-can"></i>
            </button>
        </div>
    )
}
