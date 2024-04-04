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
        "orderPrice": 19.99,
        "notes": "Those are notes for order with id: 1",
        "positions" : 9,
        "firstName" : "FirstName 1",
        "secondName" : "SecondName 1",
        "lastName" : "LastName 1",
        "organization" : "Organization 1",
        "restaurant" : "McDonald's"
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

        setNewCartInputs(prev => ({
            ...prev,
            [inputId]: value
        }))
    }

    function validate() {
        let valid = true;
/*
        if (newCartInputs.bankAccountNumber === "") {
            valid = false
            document.getElementById("bankAccountNumber").classList.add("not-valid")
        }
        else {
            document.getElementById("bankAccountNumber").classList.remove("not-valid")
        }

        if (newCartInputs.phoneNumber === "") {
            valid = false
            document.getElementById("phoneNumber").classList.add("not-valid")
        }
        else {
            document.getElementById("phoneNumber").classList.remove("not-valid")
        }

        if (newCartInputs.country === "") {
            valid = false
            document.getElementById("country").classList.add("not-valid")
        }
        else {
            document.getElementById("country").classList.remove("not-valid")
        }

        if (newCartInputs.city === "") {
            valid = false
            document.getElementById("city").classList.add("not-valid")
        }
        else {
            document.getElementById("city").classList.remove("not-valid")
        }

        if (newCartInputs.street === "") {
            valid = false
            document.getElementById("street").classList.add("not-valid")
        }
        else {
            document.getElementById("street").classList.remove("not-valid")
        }

        if (newCartInputs.building === "") {
            valid = false
            document.getElementById("building").classList.add("not-valid")
        }
        else {
            document.getElementById("building").classList.remove("not-valid")
        }

        if (newCartInputs.minimumCartPrice === "") {
            valid = false
            document.getElementById("minimumCartPrice").classList.add("not-valid")
        }
        else {
            document.getElementById("minimumCartPrice").classList.remove("not-valid")
        }

        if (newCartInputs.deliveryPrice === "") {
            valid = false
            document.getElementById("deliveryPrice").classList.add("not-valid")
        }
        else {
            document.getElementById("deliveryPrice").classList.remove("not-valid")
        }

        if (newCartInputs.freeDeliveryPrice === "") {
            valid = false
            document.getElementById("freeDeliveryPrice").classList.add("not-valid")
        }
        else {
            document.getElementById("freeDeliveryPrice").classList.remove("not-valid")
        }


        let updatedDataToSend = { ...newCartInputs };
        if (updatedDataToSend.premises === "") {
            updatedDataToSend = { ...updatedDataToSend, premises: null };
        }
        if (updatedDataToSend.notes === "") {
            updatedDataToSend = { ...updatedDataToSend, notes: null };
        }
        setDataToSend(updatedDataToSend);

*/
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
                <h1>{orderInputs.firstName} - order &#40;{orderInputs.id}&#41;</h1>
                <div className="edit-meal-container">
                    <div className="form edit-left">
                        <div className="line top-bottom">
                            <div className="layer">

                                <div className="input-container">
                                    <label htmlFor="firstName">First name:</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        value={orderInputs["firstName"]}
                                        onChange={() => handleInputChange("firstName")}
                                    />
                                </div> {/* firstName */}

                                <div className="input-container">
                                    <label htmlFor="secondName">Second name:</label>
                                    <input
                                        type="text"
                                        id="secondName"
                                        value={orderInputs["secondName"]}
                                        onChange={() => handleInputChange("secondName")}
                                    />
                                </div> {/* secondName */}

                                <div className="input-container">
                                    <label htmlFor="lastName">Last name:</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        value={orderInputs["lastName"]}
                                        onChange={() => handleInputChange("lastName")}
                                    />
                                </div> {/* lastName */}

                            </div>
                        </div>
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
                            <button className="info" onClick={() => validate()}>Apply</button>
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
