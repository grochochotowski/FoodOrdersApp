import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

import IndividualOrder from "../../components/IndividualOrder";

import "../../styles/carts.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function CartsDetails() {

    const params = useParams();
    const navigate = useNavigate();

    const [cartDetails, setCartDetails] = useState({})
    const [orders, setOrders] = useState([])

    useEffect(() => {
        async function fetchData() {
            let apiCallDetails = `https://localhost:7157/api/cart/get/${params.id}`
            let apiCallCarts = `https://localhost:7157/api/order/cart/${params.id}`
            try {
                const responseDetails = await fetch(apiCallDetails)
                const dataDetails = await responseDetails.json()
                setCartDetails(dataDetails) 

                const responseCarts = await fetch(apiCallCarts)
                const dataCarts = await responseCarts.json()
                setOrders(dataCarts)

            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData();
    }, []);


    return (
        <div className="container">
            <section className="box details-page">
                <h1>Cart &#40;{cartDetails.id}&#41; - {cartDetails.organization} - {cartDetails.restaurant}</h1>
                <div className="cart-info-box">
                    <div className="details-left">
                        <div className="line top-bottom">
                            <h5>Cost:</h5>
                            <p>{parseFloat(cartDetails.totalCartPrice).toFixed(2)}/{cartDetails.minPrice} zł</p>
                            <h5>Delivery:</h5>
                            {
                                cartDetails.deliveryPrice == 0
                                ? <p>Free</p>
                                : <p>
                                    {cartDetails.deliveryPrice}
                                    zł - {(cartDetails.freeDeliveryMinPrice - cartDetails.totalCartPrice).toFixed(2)}zł
                                    to free delivery
                                </p>
                            }
                        </div>
                        <div className="line top-bottom">
                            <h5>Address:</h5>
                            <p>
                                {cartDetails.address && cartDetails.address.country}
                                , {cartDetails.address && cartDetails.address.city}
                                , {cartDetails.address && cartDetails.address.street}
                                &nbsp;{cartDetails.address && cartDetails.address.building}
                                {cartDetails.address && cartDetails.address.premises && <>/{cartDetails.address && cartDetails.address.premises}</>}
                            </p>
                        </div>
                        <div className="line top-bottom">
                            <h5>Phone number:</h5>
                            <p>{cartDetails.phoneNumber}</p>
                            <h5>Bank account number:</h5>
                            <p>{cartDetails.bankAccountNumber}</p>
                        </div>
                        <div className="line top-bottom">
                            <h5>Notes:</h5>
                            <p>{cartDetails.note}</p>
                        </div>
                        
                        <div className="control-buttons">
                            <button onClick={() => {navigate("/carts")}}>List</button>
                            <button className="info" onClick={() => {navigate(`/carts/edit/${cartDetails.id}`)}}>Edit</button>
                        </div>
                    </div>
                    <div className="details-right">
                        <div className="orders-shortcuts">
                            {
                                orders.map((order) => (
                                    <IndividualOrder key={order.id} order={order} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
