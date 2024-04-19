import React from "react"
import { useNavigate } from "react-router-dom"

import "../styles/carts.css"
import "../styles/index.css"
import "../styles/App.css"

export default function IndividualOrder({order}) {

    const navigate = useNavigate();
    
    return (
        <div className="order-box" onClick={() => { navigate(`/orders/details/${order.id}`) }}>
            <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/package_f909e305-d702-4012-977f-9513452ed849.png?v=1708976749" alt="food-img" />
            <div className="order-info">
                <h5>{order.user}</h5>
                <p>Positions: {order.positions}</p>
                <p>Price: {order.totalPrice}zł</p>
            </div>
        </div>
    )
}
