import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import "../../styles/carts.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function CartsEdit() {

    const navigate = useNavigate();
    const params = useParams();
    console.log(params.id)

    const [cartDetails, seCartDetail] = useState({
        "id" : params.id,
        "restaurant" : {
            "name" : "McDonald's"
        },
        "organization" : {
            "name" : "Organization " + params.id
        }
    })

    const [newCartInputs, setNewCartInputs] = useState({
        "bankAccountNumber": "12 3456 7890 1234 5678 9012 3456",
        "phoneNumber": "123 456 789",
        "country" : "PL",
        "city": "Bialystok",
        "street": "Żurawia",
        "building": "71",
        "premises": "123",
        "minimumCartPrice": 19.99,
        "deliveryPrice": 0.00,
        "freeDeliveryPrice": 19.99,
        "notes": "Those are notes for order with id: 1",
    })
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

        if (newCartInputs.bankAccountNumber == "") {
            valid = false
            document.getElementById("bankAccountNumber").classList.add("not-valid")
        }
        else {
            document.getElementById("bankAccountNumber").classList.remove("not-valid")
        }

        if (newCartInputs.phoneNumber == "") {
            valid = false
            document.getElementById("phoneNumber").classList.add("not-valid")
        }
        else {
            document.getElementById("phoneNumber").classList.remove("not-valid")
        }

        if (newCartInputs.country == "") {
            valid = false
            document.getElementById("country").classList.add("not-valid")
        }
        else {
            document.getElementById("country").classList.remove("not-valid")
        }

        if (newCartInputs.city == "") {
            valid = false
            document.getElementById("city").classList.add("not-valid")
        }
        else {
            document.getElementById("city").classList.remove("not-valid")
        }

        if (newCartInputs.street == "") {
            valid = false
            document.getElementById("street").classList.add("not-valid")
        }
        else {
            document.getElementById("street").classList.remove("not-valid")
        }

        if (newCartInputs.building == "") {
            valid = false
            document.getElementById("building").classList.add("not-valid")
        }
        else {
            document.getElementById("building").classList.remove("not-valid")
        }

        if (newCartInputs.minimumCartPrice == "") {
            valid = false
            document.getElementById("minimumCartPrice").classList.add("not-valid")
        }
        else {
            document.getElementById("minimumCartPrice").classList.remove("not-valid")
        }

        if (newCartInputs.deliveryPrice == "") {
            valid = false
            document.getElementById("deliveryPrice").classList.add("not-valid")
        }
        else {
            document.getElementById("deliveryPrice").classList.remove("not-valid")
        }

        if (newCartInputs.freeDeliveryPrice == "") {
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


        if (valid) sendData()
        else alert("not-valid")
    }

    function sendData() {
        alert("API call happening")

        console.log(dataToSend);
    }

    function deleteCart() {
        alert("deleting")
    }

    return (
        <div className="container">
            <section className="box">
            <h1>Cart &#40;{cartDetails.id}&#41; - {cartDetails.organization.name} - {cartDetails.restaurant.name}</h1>
                <div className="form">
                    <div className="line top-bottom">
                        <div className="layer top">

                            <div className="input-container">
                                    <label htmlFor="bankAccountNumber">Bank account number:</label>
                                    <input
                                        type="text"
                                        id="bankAccountNumber"
                                        value={newCartInputs["bankAccountNumber"]}
                                        onChange={() => handleInputChange("bankAccountNumber")}
                                    />
                            </div> {/* bankAccountNumber */}

                            <div className="input-container">
                                    <label htmlFor="phoneNumber">Phone number:</label>
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        value={newCartInputs["phoneNumber"]}
                                        onChange={() => handleInputChange("phoneNumber")}
                                    />
                            </div> {/* phoneNumber */}

                        </div>
                        <div className="layer bottom">

                            <div className="input-container">
                                    <label htmlFor="country">Country:</label>
                                    <input
                                        type="text"
                                        id="country"
                                        value={newCartInputs["country"]}
                                        onChange={() => handleInputChange("country")}
                                    />
                            </div> {/* country */}

                            <div className="input-container">
                                    <label htmlFor="city">City:</label>
                                    <input
                                        type="text"
                                        id="city"
                                        value={newCartInputs["city"]}
                                        onChange={() => handleInputChange("city")}
                                    />
                            </div> {/* city */}

                            <div className="input-container">
                                    <label htmlFor="street">Street:</label>
                                    <input
                                        type="text"
                                        id="street"
                                        value={newCartInputs["street"]}
                                        onChange={() => handleInputChange("street")}
                                    />
                            </div> {/* street */}

                            <div className="input-container">
                                    <label htmlFor="building">Building:</label>
                                    <input
                                        type="text"
                                        id="building"
                                        value={newCartInputs["building"]}
                                        onChange={() => handleInputChange("building")}
                                    />
                            </div> {/* building */}

                            <div className="input-container">
                                    <label htmlFor="premises">Premises:</label>
                                    <input
                                        type="text"
                                        id="premises"
                                        value={newCartInputs["premises"]}
                                        onChange={() => handleInputChange("premises")}
                                    />
                            </div> {/* premises */}

                        </div>
                    </div>
                    <div className="line left-right">
                        <div className="layer left">

                            <div className="input-container">
                                    <label htmlFor="minimumCartPrice">Minimum cart price:</label>
                                    <input
                                        type="text"
                                        id="minimumCartPrice"
                                        value={newCartInputs["minimumCartPrice"]}
                                        onChange={() => handleInputChange("minimumCartPrice")}    
                                    />
                            </div> {/* minimumCartPrice */}

                            <div className="input-container">
                                    <label htmlFor="deliveryPrice">Delivery price:</label>
                                    <input
                                        type="text"
                                        id="deliveryPrice"
                                        value={newCartInputs["deliveryPrice"]}
                                        onChange={() => handleInputChange("deliveryPrice")}    
                                    />
                            </div> {/* deliveryPrice */}

                            <div className="input-container">
                                    <label htmlFor="freeDeliveryPrice">Free delivery price:</label>
                                    <input
                                        type="text"
                                        id="freeDeliveryPrice"
                                        value={newCartInputs["freeDeliveryPrice"]}
                                        onChange={() => handleInputChange("freeDeliveryPrice")}    
                                    />
                            </div> {/* freeDeliveryPrice */}

                        </div>
                        <div className="layer right">

                            <div className="input-container">
                                    <label htmlFor="notes">Notes:</label>
                                    <textarea
                                    name="notes"
                                    id="notes"
                                    value={newCartInputs["notes"]}
                                    onChange={() => handleInputChange("notes")}
                                    ></textarea>                          
                            </div> {/* notes */}
                            
                        </div>
                    </div>
                </div>
                <div className="control-buttons">
                    <button onClick={() => {navigate("/carts")}}>Go back</button>
                    <button className="info" onClick={() => validate()}>Apply</button>
                    <button className="warning" onClick={() => deleteCart()}>Delete</button>
                </div>
            </section>
        </div>
    )
}
