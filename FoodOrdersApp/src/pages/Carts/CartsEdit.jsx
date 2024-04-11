import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import "../../styles/carts.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function CartsEdit() {

    const navigate = useNavigate();
    const params = useParams();

    const [cartDetails, setCartDetail] = useState({})

    const [cartInputs, setCartInputs] = useState({
        bankAccountNumber: "",
        phoneNumber: "",
        country: "",
        city: "",
        street: "",
        building: "",
        premises: "",
        minPrice: "",
        deliveryPrice: "",
        freeDeliveryMinPrice: "",
        note: ""
    })
    const [dataToSend, setDataToSend] = useState({})

    function handleInputChange(inputId) {
        const value = document.getElementById(inputId).value;

        setCartInputs(prev => ({
            ...prev,
            [inputId]: value
        }))
    }

    function validate() {
        let valid = true;

        if (cartInputs.bankAccountNumber === "") {
            valid = false
            document.getElementById("bankAccountNumber").classList.add("not-valid")
        }
        else {
            document.getElementById("bankAccountNumber").classList.remove("not-valid")
        }

        if (cartInputs.phoneNumber === "") {
            valid = false
            document.getElementById("phoneNumber").classList.add("not-valid")
        }
        else {
            document.getElementById("phoneNumber").classList.remove("not-valid")
        }

        if (cartInputs.country === "") {
            valid = false
            document.getElementById("country").classList.add("not-valid")
        }
        else {
            document.getElementById("country").classList.remove("not-valid")
        }

        if (cartInputs.city === "") {
            valid = false
            document.getElementById("city").classList.add("not-valid")
        }
        else {
            document.getElementById("city").classList.remove("not-valid")
        }

        if (cartInputs.street === "") {
            valid = false
            document.getElementById("street").classList.add("not-valid")
        }
        else {
            document.getElementById("street").classList.remove("not-valid")
        }

        if (cartInputs.building === "") {
            valid = false
            document.getElementById("building").classList.add("not-valid")
        }
        else {
            document.getElementById("building").classList.remove("not-valid")
        }

        if (cartInputs.minPrice === "") {
            valid = false
            document.getElementById("minPrice").classList.add("not-valid")
        }
        else {
            document.getElementById("minPrice").classList.remove("not-valid")
        }

        if (cartInputs.deliveryPrice === "") {
            valid = false
            document.getElementById("deliveryPrice").classList.add("not-valid")
        }
        else {
            document.getElementById("deliveryPrice").classList.remove("not-valid")
        }

        if (cartInputs.freeDeliveryMinPrice === "") {
            valid = false
            document.getElementById("freeDeliveryMinPrice").classList.add("not-valid")
        }
        else {
            document.getElementById("freeDeliveryMinPrice").classList.remove("not-valid")
        }


        let updatedDataToSend = { ...cartInputs };
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

    useEffect(() => {
        async function fetchData() {
            let apiCall = `https://localhost:7157/api/cart/get/${params.id}`
            try {
                const response = await fetch(apiCall)
                const data = await response.json()
                if (data.address) {
                    setCartInputs({
                        "bankAccountNumber": data.bankAccountNumber,
                        "phoneNumber": data.phoneNumber,
                        "minPrice": data.minPrice,
                        "deliveryPrice": data.deliveryPrice,
                        "freeDeliveryMinPrice": data.freeDeliveryMinPrice,
                        "note": data.note,
                        "country" : data.address.country,
                        "city": data.address.city,
                        "street": data.address.street,
                        "building": data.address.building,
                        "premises": data.address.premises,
                    })
                }
                
                setCartDetail({
                    "id" : data.id,
                    "restaurant" : data.restaurant,
                    "organization" : data.organization
                })

            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData();
    }, []);

    return (
        <div className="container">
            <section className="box">
            <h1>Cart &#40;{cartDetails.id}&#41; - {cartDetails.organization} - {cartDetails.restaurant}</h1>
                <div className="form">
                    <div className="line top-bottom">
                        <div className="layer top">

                            <div className="input-container">
                                    <label htmlFor="bankAccountNumber">Bank account number:</label>
                                    <input
                                        type="text"
                                        id="bankAccountNumber"
                                        value={cartInputs["bankAccountNumber"]}
                                        onChange={() => handleInputChange("bankAccountNumber")}
                                    />
                            </div> {/* bankAccountNumber */}

                            <div className="input-container">
                                    <label htmlFor="phoneNumber">Phone number:</label>
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        value={cartInputs["phoneNumber"]}
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
                                        value={cartInputs["country"]}
                                        onChange={() => handleInputChange("country")}
                                    />
                            </div> {/* country */}

                            <div className="input-container">
                                    <label htmlFor="city">City:</label>
                                    <input
                                        type="text"
                                        id="city"
                                        value={cartInputs["city"]}
                                        onChange={() => handleInputChange("city")}
                                    />
                            </div> {/* city */}

                            <div className="input-container">
                                    <label htmlFor="street">Street:</label>
                                    <input
                                        type="text"
                                        id="street"
                                        value={cartInputs["street"]}
                                        onChange={() => handleInputChange("street")}
                                    />
                            </div> {/* street */}

                            <div className="input-container">
                                    <label htmlFor="building">Building:</label>
                                    <input
                                        type="text"
                                        id="building"
                                        value={cartInputs["building"]}
                                        onChange={() => handleInputChange("building")}
                                    />
                            </div> {/* building */}

                            <div className="input-container">
                                    <label htmlFor="premises">Premises:</label>
                                    <input
                                        type="text"
                                        id="premises"
                                        value={cartInputs["premises"]}
                                        onChange={() => handleInputChange("premises")}
                                    />
                            </div> {/* premises */}

                        </div>
                    </div>
                    <div className="line left-right">
                        <div className="layer left">

                            <div className="input-container">
                                    <label htmlFor="minPrice">Minimum cart price:</label>
                                    <input
                                        type="text"
                                        id="minPrice"
                                        value={cartInputs["minPrice"]}
                                        onChange={() => handleInputChange("minPrice")}    
                                    />
                            </div> {/* minPrice */}

                            <div className="input-container">
                                    <label htmlFor="deliveryPrice">Delivery price:</label>
                                    <input
                                        type="text"
                                        id="deliveryPrice"
                                        value={cartInputs["deliveryPrice"]}
                                        onChange={() => handleInputChange("deliveryPrice")}    
                                    />
                            </div> {/* deliveryPrice */}

                            <div className="input-container">
                                    <label htmlFor="freeDeliveryMinPrice">Free delivery price:</label>
                                    <input
                                        type="text"
                                        id="freeDeliveryMinPrice"
                                        value={cartInputs["freeDeliveryMinPrice"]}
                                        onChange={() => handleInputChange("freeDeliveryMinPrice")}    
                                    />
                            </div> {/* freeDeliveryMinPrice */}

                        </div>
                        <div className="layer right">

                            <div className="input-container">
                                    <label htmlFor="note">Notes:</label>
                                    <textarea
                                    name="note"
                                    id="note"
                                    value={cartInputs["note"] ? cartInputs["note"] : ""}
                                    onChange={() => handleInputChange("note")}
                                    ></textarea>                          
                            </div> {/* note */}
                            
                        </div>
                    </div>
                </div>
                <div className="control-buttons">
                    <button onClick={() => {navigate(`/carts/details/${params.id}`)}}>Details</button>
                    <button className="info" onClick={() => validate()}>Apply</button>
                    <button className="warning" onClick={() => deleteCart()}>Delete</button>
                </div>
            </section>
        </div>
    )
}
