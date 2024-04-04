import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

import MealBox from "../../components/MealBox";

import "../../styles/orders.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function OrdersDetails() {

    const params = useParams();
    const navigate = useNavigate();
    console.log(params.id)

    const [orderDetails, setOrderDetails] = useState({
        "id" : 1,
        "orderPrice": 19.99,
        "notes": "Those are notes for order with id: 1",
        "user" : {
            "firstname" : "Firstname 1",
            "secondname" : "Secondname 1",
            "lastname" : "Lastname 1",
        },
        "organization" : {
            "name" : "Organization 1"
        },
        "restaurant" : {
            "name" : "McDonald's"
        },
    })
    const [meals, setMeals] = useState([
        {
            "id" : 1,
            "img" : "https://source.unsplash.com/random/200x200?sig=1",
            "name" : "Name 1",
            "price" : 5.99,
            "quantity" : 2
        },
        {
            "id" : 2,
            "img" : "https://source.unsplash.com/random/200x200?sig=2",
            "name" : "Name 2",
            "price" : 4.99,
            "quantity" : 3
        },
        {
            "id" : 3,
            "img" : "https://source.unsplash.com/random/200x200?sig=3",
            "name" : "Name 3",
            "price" : 3.99,
            "quantity" : 2
        },
        {
            "id" : 4,
            "img" : "https://source.unsplash.com/random/200x200?sig=4",
            "name" : "Name 4",
            "price" : 2.99,
            "quantity" : 1
        },
        {
            "id" : 5,
            "img" : "https://source.unsplash.com/random/200x200?sig=5",
            "name" : "Name 5",
            "price" : 5.99,
            "quantity" : 2
        },
        {
            "id" : 6,
            "img" : "https://source.unsplash.com/random/200x200?sig=6",
            "name" : "Name 6",
            "price" : 6.99,
            "quantity" : 2
        },
        {
            "id" : 7,
            "img" : "https://source.unsplash.com/random/200x200?sig=7",
            "name" : "Name 7",
            "price" : 7.99,
            "quantity" : 1
        },
        {
            "id" : 8,
            "img" : "https://source.unsplash.com/random/200x200?sig=8",
            "name" : "Name 8",
            "price" : 8.99,
            "quantity" : 2
        }
    ])

    return (
        <div className="container">
            <section className="box details-page">
                <h1>Order &#40;{orderDetails.id}&#41; - {orderDetails.organization.name} - {orderDetails.restaurant.name}</h1>
                <div className="order-info-box">
                    <div className="details-left">
                        <div className="line top-bottom">

                        </div>
                        <div className="line top-bottom">

                        </div>
                        <div className="line top-bottom">
                            
                        </div>
                        <div className="line top-bottom">
                            <h5>Notes:</h5>
                            <p>{orderDetails.notes}</p>
                        </div>
                        
                        <div className="control-buttons">
                            <button onClick={() => {navigate("/orders")}}>Go back</button>
                            <button className="info" onClick={() => {navigate(`/orders/edit/${orderDetails.id}`)}}>Edit</button>
                        </div>
                    </div>
                    <div className="details-right">
                        <div className="orders-shortcuts">
                            {
                                meals.map((meal) => (
                                    <MealBox key={meal.id} meal={meal} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
