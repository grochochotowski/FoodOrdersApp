import React from "react"

import "../styles/carts.css"
import "../styles/index.css"
import "../styles/App.css"

export default function IndividualOrder({order}) {
  return (
    <div className="order-box">
        <img src={order.img} alt="food-img" />
        <div className="order-info">
            <h5>{order.name}</h5>
            <p>Positions: {order.positions}</p>
            <p>Price: {order.price}zł</p>
        </div>
    </div>
  )
}
