import React from "react"
import { useNavigate } from "react-router-dom"

import "../styles/carts.css"
import "../styles/index.css"
import "../styles/App.css"

export default function IndividualOrder({key, order}) {

    const navigate = useNavigate();
    
    return (
        <div key={key} className="order-box" onClick={() => { navigate(`/orders/details/${order.id}`) }}>
            <img src={order.img} alt="food-img" />
            <div className="order-info">
                <h5>{order.name}</h5>
                <p>Positions: {order.positions}</p>
                <p>Price: {order.price}zł</p>
            </div>
        </div>
    )
}
