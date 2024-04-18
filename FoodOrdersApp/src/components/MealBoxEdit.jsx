import React from "react"

import "../styles/orders.css"
import "../styles/index.css"
import "../styles/App.css"

export default function MealBoxEdit({meal, deleteMealToggle, changeDeleteId}) {

    function handleClick() {
        console.log(meal.id)
        deleteMealToggle()
        changeDeleteId(meal.id)
    }

    return (
        <>
            <div className="meal-box">
                <img src={meal.img} alt="food-img" />
                <div className="meal-info">
                    <h5>{meal.name}</h5>
                    <p>Quantity: {meal.quantity}</p>
                    <p>Price: {meal.price}zł</p>
                </div>
                <button className="side warning" onClick={handleClick}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </>
    )
}
