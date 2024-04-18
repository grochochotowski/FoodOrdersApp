import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

import MealBoxEdit from "../../components/MealBoxEdit";

import "../../styles/orders.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function OrderNew({user}) {

    const params = useParams();
    const navigate = useNavigate();

    const [newOrderInputs, setNewOrderInputs] = useState({
        "notes": "",
        "cartId" : 0,
        "positions" : 0
    })
    const [meals, setMeals] = useState([])

    function newMeal() {
        alert("new meal")
    }
    const [dataToSend, setDataToSend] = useState({})

    function handleInputChange(inputId) {
        const value = document.getElementById(inputId).value;

        setNewOrderInputs(prev => ({
            ...prev,
            [inputId]: value
        }))
    }
    function handleSelectChange(event, selectId) {
        const value = parseInt(event.target.value)

        setNewOrderInputs(prev => ({
            ...prev,
            [selectId]: value
        }))
    }


    function validate() {
        let valid = true;

        if (newOrderInputs.cartId === 0) {
            valid = false
            document.getElementById("cartId").classList.add("not-valid")
        }
        else {
            document.getElementById("cartId").classList.remove("not-valid")
        }


        let updatedDataToSend = { ...newOrderInputs };
        if (updatedDataToSend.notes === "") {
            updatedDataToSend = { ...updatedDataToSend, notes: null };
        }
        setDataToSend(updatedDataToSend);


        if (valid) sendData()
        else alert("not-valid")
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
                <h1>New order</h1>
                <div className="order-container">
                    <div className="form order-left">

                    <div className="line">
                        <div className="layer">

                            <div className="input-container">
                                    <label htmlFor="cartId">Cart:</label>
                                    <select
                                        name="cartId"
                                        id="cartId"
                                        value={newOrderInputs["cartId"]}
                                        onChange={(event) => handleSelectChange(event, "cartId")}
                                    >
                                        <option value={0}>--- Choose cart ---</option>
                                        <option value={1}>Cart 1</option>
                                        <option value={2}>Cart 2</option>
                                        <option value={3}>Cart 3</option>
                                        <option value={4}>Cart 4</option>
                                        <option value={5}>Cart 5</option>
                                        <option value={6}>Cart 6</option>
                                    </select>
                            </div> {/* cartId */}

                        </div>
                    </div>
                        
                        <div className="line top-bottom">
                            <div className="layer">

                                <div className="input-container">
                                    <label htmlFor="notes">Notes:</label>
                                    <textarea
                                    name="notes"
                                    id="notes"
                                    value={newOrderInputs["notes"]}
                                    onChange={() => handleInputChange("notes")}
                                    ></textarea>                          
                                </div> {/* notes */}

                            </div>
                        </div>
                        <div className="control-buttons">
                            <button onClick={() => {navigate("/orders")}}>List</button>
                            <button className="info" onClick={() => validate()}>Create</button>
                        </div>
                    </div>
                    <div className="order-right">
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
