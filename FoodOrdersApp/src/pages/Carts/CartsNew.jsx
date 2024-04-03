import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "../../styles/carts.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function CartsNew() {

    const navigate = useNavigate();

    const [newCartInputs, setNewCartInputs] = useState({
        "restaurantId" : 0,
        "organizationId" : 0,
        "bankAccountNumber": "",
        "phoneNumber": "",
        "city": "",
        "street": "",
        "building": "",
        "premises": "",
        "minimumCartPrice": "",
        "deliveryPrice": "",
        "freeDeliveryPrice": "",
        "notes": "",
    })

    function handleInputChange(inputId) {
        const value = document.getElementById(inputId).value;

        setNewCartInputs(prev => ({
            ...prev,
            [inputId]: value
        }))

        console.log(newCartInputs)
    }
    function handleSelectChange(event, selectId) {
        const value = parseInt(event.target.value)

        setNewCartInputs(prev => ({
            ...prev,
            [selectId]: value
        }))

        console.log(newCartInputs)
    }

    function validate() {
        alert("validation")
    }

  return (
    <div className="container">
            <section className="box">
                <h1>Carts</h1>
                <div className="path">
                    <p className="path-link" onClick={() => {navigate("/carts")}}>Carts</p>
                    <p className="path-arrows">&#47;&#47;&#47;</p>
                    <p className="path-link" onClick={() => {navigate("/carts/new")}}>New cart</p>
                </div>
                <div className="form">
                    <div className="line">
                        <div className="layer selects">

                            <div className="input-container">
                                <label htmlFor="restaurant">Restaurant:</label>
                                <select
                                    name="restaurant"
                                    id="restaurant"
                                    value={newCartInputs["restaurantId"]}
                                    onChange={(event) => handleSelectChange(event, "restaurantId")}
                                >
                                    <option value={0}>--- Choose restaurant ---</option>
                                    <option value={1}>Restaurant 1</option>
                                    <option value={2}>Restaurant 2</option>
                                    <option value={3}>Restaurant 3</option>
                                    <option value={4}>Restaurant 4</option>
                                    <option value={5}>Restaurant 5</option>
                                    <option value={6}>Restaurant 6</option>
                                </select>
                            </div>

                            <div className="input-container">
                                <label htmlFor="organization">Organization:</label>
                                <select
                                    name="organization"
                                    id="organization"
                                    value={newCartInputs["organizationId"]}
                                    onChange={(event) => handleSelectChange(event, "organizationId")}
                                >
                                    <option value={0}>--- Choose organization ---</option>
                                    <option value={1}>Organization 1</option>
                                    <option value={2}>Organization 2</option>
                                    <option value={3}>Organization 3</option>
                                    <option value={4}>Organization 4</option>
                                    <option value={5}>Organization 5</option>
                                    <option value={6}>Organization 6</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    <div className="line top-bottom">
                        <div className="layer top">

                            <div className="input-container">
                                <label htmlFor="bankAccountNumber">Bank account number:</label>
                                <input
                                    type="text"
                                    id="bankAccountNumber"
                                    onChange={() => handleInputChange("bankAccountNumber")}
                                />
                            </div>

                            <div className="input-container">
                                <label htmlFor="phoneNumber">Phone number:</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    onChange={() => handleInputChange("phoneNumber")}
                                />
                            </div>

                        </div>
                        <div className="layer bottom">

                            <div className="input-container">
                                <label htmlFor="city">City:</label>
                                <input
                                    type="text"
                                    id="city"
                                    onChange={() => handleInputChange("city")}
                                />
                            </div>

                            <div className="input-container">
                                <label htmlFor="street">Street:</label>
                                <input
                                    type="text"
                                    id="street"
                                    onChange={() => handleInputChange("street")}
                                />
                            </div>

                            <div className="input-container">
                                <label htmlFor="building">Building:</label>
                                <input
                                    type="text"
                                    id="building"
                                    onChange={() => handleInputChange("building")}
                                />
                            </div>

                            <div className="input-container">
                                <label htmlFor="premises">Premises:</label>
                                <input
                                    type="text"
                                    id="premises"
                                    onChange={() => handleInputChange("premises")}
                                />
                            </div>

                        </div>
                    </div>
                    <div className="line left-right">
                        <div className="layer left">

                            <div className="input-container">
                                <label htmlFor="minimumCartPrice">Minimum cart price:</label>
                                <input
                                    type="text"
                                    id="minimumCartPrice"
                                    onChange={() => handleInputChange("minimumCartPrice")}    
                                />
                            </div>

                            <div className="input-container">
                                <label htmlFor="deliveryPrice">Delivery price:</label>
                                <input
                                    type="text"
                                    id="deliveryPrice"
                                    onChange={() => handleInputChange("deliveryPrice")}    
                                />
                            </div>

                            <div className="input-container">
                                <label htmlFor="freeDeliveryPrice">Free delivery price:</label>
                                <input
                                    type="text"
                                    id="freeDeliveryPrice"
                                    onChange={() => handleInputChange("freeDeliveryPrice")}    
                                />
                            </div>

                        </div>
                        <div className="layer right">

                            <div className="input-container">
                                <label htmlFor="notes">Notes:</label>
                                <textarea
                                name="notes"
                                id="notes"
                                onChange={() => handleInputChange("notes")}
                                ></textarea>                          
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="control-buttons">
                    <button onClick={() => {navigate("/carts")}}>Go back</button>
                    <button onClick={() => validate()}>Create cart</button>
                </div>
            </section>
        </div>
  )
}
