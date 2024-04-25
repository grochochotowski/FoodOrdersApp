import React, {useState, useEffect} from "react"
import instance from "../api/axios.jsx"

import "../styles/orders.css"
import "../styles/index.css"
import "../styles/App.css"

export default function MealBoxList({meal, updateData, token}) {

    async function deleteMeal() {
        let apiCall = `meal/delete/${meal.id}`
            try {
                const response = await instance().delete(apiCall, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                })
                console.log(response)
                updateData()
            } catch (error) {
                console.error('Error fetching data:', error)
            }
    }

    return (
        <div className="meal-box list">
            <img src={meal.img ? meal.img : "https://i.pinimg.com/564x/ef/e8/d3/efe8d36db6281666a126189f05bfeff1.jpg"} alt="food-img" />
            <div className="meal-info">
                <h5>{meal.name} - {meal.price}zł</h5>
                <p>{meal.description}</p>
            </div>
            <button className="side warning" onClick={deleteMeal}>
                <i className="fa-regular fa-trash-can"></i>
            </button>
        </div>
    )
}
