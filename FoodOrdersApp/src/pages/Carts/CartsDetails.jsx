import { useState } from "react";
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

    return (
        <div className="container">
            <section className="box details-page">
                <h1>Cart &#40;{cartDetails.id}&#41; - {cartDetails.organization.name} - {cartDetails.restaurant.name}</h1>
                <div className="cart-info-box">
                    <div className="details-left">
                        <div className="line top-bottom">
                            <h5>Cost:</h5>
                            <p>{cartDetails.totalCartPrice}/{cartDetails.minPrice} zł</p>
                            <h5>Delivery:</h5>
                            {
                                cartDetails.deliveryPrice == 0
                                ? <p>Free</p>
                                : <p>
                                    {cartDetails.deliveryPrice}
                                    zł - {cartDetails.freeDeliveryPrice - cartDetails.totalCartPrice}zł
                                    to free delivery
                                </p>
                            }
                        </div>
                        <div className="line top-bottom">
                            <h5>Address:</h5>
                            <p>
                                {cartDetails.address.country}
                                , {cartDetails.address.city}
                                , {cartDetails.address.street}
                                &nbsp;{cartDetails.address.building}
                                {cartDetails.address.premises && <>/{cartDetails.address.premises}</>}
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
                            <p>{cartDetails.notes}</p>
                        </div>
                        
                        <div className="control-buttons">
                            <button onClick={() => {navigate("/carts")}}>Go back</button>
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
