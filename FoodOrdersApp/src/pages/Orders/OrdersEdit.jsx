import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

import MealBoxEdit from "../../components/MealBoxEdit";

import "../../styles/orders.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function OrdersDetails()
{
    const params = useParams();
    const navigate = useNavigate();
    
    const [orderEdit, setOrderEdit] = useState({})
    const [meals, setMealse] = useState([])
    const [orderInputs, setOrderInputs] = useState()

    useEffect(() => {
        async function fetchData() {
            let apiCallEdit = `https://localhost:7157/api/order/edit/${params.id}`
            let apiCallMeals = `https://localhost:7157/api/meal/order/${params.id}`
            try {
                const responseEdit = await fetch(apiCallEdit)
                const dataEdit = await responseEdit.json()
                setOrderEdit(dataEdit)
                setOrderInputs(dataEdit.note)

                const responseMeals = await fetch(apiCallMeals)
                const dataMeals = await responseMeals.json()
                setMealse(dataMeals)

            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData();
    }, []);
    
    function newMeal() {
        alert("new meal")
    }
    const [dataToSend, setDataToSend] = useState({})

    function handleInputChange(inputId) {
        const value = document.getElementById(inputId).value;

        setOrderInputs(value)
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
                <h1>Order &#40;{orderEdit.id}&#41; - Cart {orderEdit.cart}</h1>
                <div className="order-container">
                    <div className="form order-left">
                        
                        <div className="line top-bottom">
                            <div className="layer">

                                <div className="input-container">
                                    <label htmlFor="notes">Notes:</label>
                                    <textarea
                                    name="notes"
                                    id="notes"
                                    value={orderInputs}
                                    onChange={() => handleInputChange("notes")}
                                    ></textarea>                          
                                </div> {/* notes */}

                            </div>
                        </div>
                        <div className="control-buttons">
                            <button onClick={() => {navigate("/orders")}}>List</button>
                            <button className="details-clr" onClick={() => {navigate(`/orders/details/${params.id}`)}}>Details</button>
                            <button className="info" onClick={() => validate()}>Apply</button>
                            <button className="warning" onClick={() => deleteCart()}>Delete</button>
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
