import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import instance from "../../api/axios"

import IndividualOrder from "../../components/IndividualOrder";

import "../../styles/carts.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function CartsDetails({token}) {

    const params = useParams();
    const navigate = useNavigate();

    const [cartDetails, setCartDetails] = useState({})
    const [orders, setOrders] = useState([])

    useEffect(() => {
        async function fetchData() {
            let apiCallDetails = `/cart/get/${params.id}`
            let apiCallCarts = `/order/cart/${params.id}`
            try {
                const responseDetails = await instance().get(apiCallDetails, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const responseCarts = await instance().get(apiCallCarts, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setCartDetails(responseDetails.data) 
                setOrders(responseCarts.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        if (token) {
            fetchData();
        }
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
                                cartDetails.totalCartPrice > cartDetails.freeDeliveryMinPrice
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
