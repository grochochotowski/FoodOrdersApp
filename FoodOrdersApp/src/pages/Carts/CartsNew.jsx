import { useState, useEffect } from "react"
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
        "country" : "",
        "city": "",
        "street": "",
        "building": "",
        "premises": "",
        "minimumCartPrice": "",
        "deliveryPrice": "",
        "freeDeliveryPrice": "",
        "notes": "",
    })
    const [dataToSend, setDataToSend] = useState({})
    const [restaurants, setRestaurants] = useState([])
    const [organizations, setOrganizations] = useState([])

    function handleInputChange(inputId) {
        const value = document.getElementById(inputId).value;

        setNewCartInputs(prev => ({
            ...prev,
            [inputId]: value
        }))
    }
    function handleSelectChange(event, selectId) {
        const value = parseInt(event.target.value)

        setNewCartInputs(prev => ({
            ...prev,
            [selectId]: value
        }))
    }

    function validate() {
        let valid = true;
        if (newCartInputs.restaurantId === 0) {
            valid = false
            document.getElementById("restaurantId").classList.add("not-valid")
        }
        else {
            document.getElementById("restaurantId").classList.remove("not-valid")
        }

        if (newCartInputs.organizationId === 0) {
            valid = false
            document.getElementById("organizationId").classList.add("not-valid")
        }
        else {
            document.getElementById("organizationId").classList.remove("not-valid")
        }

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


        if (valid) sendData()
    }
    async function sendData() {

        let apiCall = `https://localhost:7157/api/cart/new`
        let requestOption = {
            body: JSON.stringify(setDataToSend)
        }
        const response = await fetch(apiCall, requestOption)

        if (response != ok) {
            alert('Error fetching data:', error)
        }

        //window.location.href = `/details/${response.id}`;
    }

    useEffect(() => {
        async function fetchData() {
            let apiCallRestaurant = `https://localhost:7157/api/restaurant/all`
            let apiCallOrganization = `https://localhost:7157/api/organization/all`
            try {
                const responseRestaurant = await fetch(apiCallRestaurant)
                const dataRestaurant = await responseRestaurant.json()
                setRestaurants(dataRestaurant)

                const responseOrganization = await fetch(apiCallOrganization)
                const dataOrganization = await responseOrganization.json()
                setOrganizations(dataOrganization)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData();
    }, []);

    function generateRestaurantSelect() {
        return(
            <select
                name="restaurantId"
                id="restaurantId"
                value={newCartInputs["restaurantId"]}
                onChange={(event) => handleSelectChange(event, "restaurantId")}
            >
                <option value={0}>--- Choose restaurant ---</option>
                {restaurants.map(restaurant => (
                <option key={restaurant.id} value={restaurant.id}>{restaurant.name}</option>
            ))}
            </select>
        )
    }
    function generateOrganizationSelect() {
        return(
            <select
            name="organizationId"
            id="organizationId"
            value={newCartInputs["organizationId"]}
            onChange={(event) => handleSelectChange(event, "organizationId")}
        >
            <option value={0}>--- Choose organization ---</option>
            {organizations.map(organization => (
                <option key={organization.id} value={organization.id}>{organization.name}</option>
            ))}
        </select>
        )
    }

    return (
        <div className="container">
            <section className="box">
                <h1>New cart</h1>
                <div className="form">
                    <div className="line">
                        <div className="layer selects">

                            <div className="input-container">
                                    <label htmlFor="restaurantId">Restaurant:</label>
                                    {generateRestaurantSelect()}
                            </div> {/* restaurant */}

                            <div className="input-container">
                                    <label htmlFor="organizationId">Organization:</label>
                                    {generateOrganizationSelect()}
                            </div> {/* organization */}

                        </div>
                    </div>
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
                    <button onClick={() => validate()}>Create cart</button>
                </div>
            </section>
        </div>
    )
}
