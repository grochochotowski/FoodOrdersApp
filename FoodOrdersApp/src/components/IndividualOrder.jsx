import React from "react"
import { useNavigate } from "react-router-dom"

import "../styles/carts.css"
import "../styles/index.css"
import "../styles/App.css"

export default function IndividualOrder({order}) {

    const navigate = useNavigate();
    
    return (
        <div className="order-box" onClick={() => { navigate(`/orders/details/${order.id}`) }}>
            <img src={order.img} alt="food-img" />
            <div className="order-info">
                <h5>{order.user}</h5>
                <p>Positions: {order.positions}</p>
                <p>Price: {order.totalPrice}zł</p>
            </div>
        </div>
    )
}
