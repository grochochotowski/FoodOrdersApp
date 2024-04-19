import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

import MealBoxEdit from "../../components/MealBoxEdit";

import "../../styles/orders.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function OrderNew({user}) {

    const navigate = useNavigate();
    const [newOrderInputs, setNewOrderInputs] = useState({
        "notes": "",
        "cartId": "",
        "userId": "",
    })
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let apiCall = `https://localhost:7157/api/cart/organization/${user.organizationId}`
            try {
                const response = await fetch(apiCall)
                const data = await response.json()
                setCarts(data)

            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData();
    }, []);

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
        console.log(newOrderInputs)
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
        updatedDataToSend.userId = user.id
        
        if (valid) sendData(updatedDataToSend)
    }
    function sendData(updatedDataToSend) {

        console.log(updatedDataToSend);
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
                                        {carts &&
                                        (carts.map(cart => (
                                            <option key={cart.id} value={cart.id}>({cart.id}) {cart.organization} - {cart.restaurant}</option>
                                        )))}
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
                </div>
            </section>
        </div>
    )
}
