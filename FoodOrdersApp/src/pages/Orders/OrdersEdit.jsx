import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

import MealBoxEdit from "../../components/MealBoxEdit";

import "../../styles/orders.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function OrdersDetails() {

    const params = useParams();
    const navigate = useNavigate();
    console.log(params.id)

    const [orderInputs, setOrderInputs] = useState({
        "id" : 1,
        "notes": "Those are notes for order with id: 1",
        "positions" : 9,
        "firstName" : "FirstName 1"
    })
    const [meals, setMeals] = useState([
        {
            "id" : 1,
            "img" : "https://source.unsplash.com/random/200x200?sig=1",
            "name" : "Meal 1",
            "price" : 5.99,
            "quantity" : 2
        },
        {
            "id" : 2,
            "img" : "https://source.unsplash.com/random/200x200?sig=2",
            "name" : "Meal 2",
            "price" : 4.99,
            "quantity" : 3
        },
        {
            "id" : 3,
            "img" : "https://source.unsplash.com/random/200x200?sig=3",
            "name" : "Meal 3",
            "price" : 3.99,
            "quantity" : 2
        },
        {
            "id" : 4,
            "img" : "https://source.unsplash.com/random/200x200?sig=4",
            "name" : "Meal 4",
            "price" : 2.99,
            "quantity" : 1
        },
        {
            "id" : 5,
            "img" : "https://source.unsplash.com/random/200x200?sig=5",
            "name" : "Meal 5",
            "price" : 5.99,
            "quantity" : 2
        },
        {
            "id" : 6,
            "img" : "https://source.unsplash.com/random/200x200?sig=6",
            "name" : "Meal 6",
            "price" : 6.99,
            "quantity" : 2
        },
        {
            "id" : 7,
            "img" : "https://source.unsplash.com/random/200x200?sig=7",
            "name" : "Meal 7",
            "price" : 7.99,
            "quantity" : 1
        },
        {
            "id" : 8,
            "img" : "https://source.unsplash.com/random/200x200?sig=8",
            "name" : "Meal 8",
            "price" : 8.99,
            "quantity" : 2
        }
    ])
    function newMeal() {
        alert("new meal")
    }
    const [dataToSend, setDataToSend] = useState({})

    function handleInputChange(inputId) {
        const value = document.getElementById(inputId).value;

        setOrderInputs(prev => ({
            ...prev,
            [inputId]: value
        }))
    }

    function sendData() {
        alert("API call happening")

        console.log(dataToSend);
    }

    function deleteOrder() {
        alert("deleting")
    }

    return (
        <div className="container">
            <section className="box">
                <h1>{orderInputs.firstName} - order &#40;{orderInputs.id}&#41;</h1>
                <div className="edit-meal-container">
                    <div className="form edit-left">
                        
                        <div className="line top-bottom">
                            <div className="layer">

                                <div className="input-container">
                                    <label htmlFor="notes">Notes:</label>
                                    <textarea
                                    name="notes"
                                    id="notes"
                                    value={orderInputs["notes"]}
                                    onChange={() => handleInputChange("notes")}
                                    ></textarea>                          
                                </div> {/* notes */}

                            </div>
                        </div>
                        <div className="control-buttons">
                            <button onClick={() => {navigate("/carts")}}>Go back</button>
                            <button className="info" onClick={() => sendData()}>Apply</button>
                            <button className="warning" onClick={() => deleteOrder()}>Delete</button>
                        </div>
                    </div>
                    <div className="edit-right">
                        <div className="meals-shortcuts">
                            <div className="new-meal" onClick={() => newMeal()}>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            {
                                meals.map((meal) => (
                                    <MealBoxEdit key={meal.id} meal={meal} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
