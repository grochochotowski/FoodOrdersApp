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
        "positions" : 9,
        "user" : {
            "firstName" : "FirstName 1",
            "secondName" : "SecondName 1",
            "lastName" : "LastName 1",
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
            "name" : "Meal 1",
            "price" : 5.99,
            "quantity" : 2
        },
        {
            "id" : 2,
            "img" : "https://source.unsplash.com/random/200x200?sig=2",
            "name" : "Meal 2",
            "price" : 4.99,
            "quantity" : 3
        },
        {
            "id" : 3,
            "img" : "https://source.unsplash.com/random/200x200?sig=3",
            "name" : "Meal 3",
            "price" : 3.99,
            "quantity" : 2
        },
        {
            "id" : 4,
            "img" : "https://source.unsplash.com/random/200x200?sig=4",
            "name" : "Meal 4",
            "price" : 2.99,
            "quantity" : 1
        },
        {
            "id" : 5,
            "img" : "https://source.unsplash.com/random/200x200?sig=5",
            "name" : "Meal 5",
            "price" : 5.99,
            "quantity" : 2
        },
        {
            "id" : 6,
            "img" : "https://source.unsplash.com/random/200x200?sig=6",
            "name" : "Meal 6",
            "price" : 6.99,
            "quantity" : 2
        },
        {
            "id" : 7,
            "img" : "https://source.unsplash.com/random/200x200?sig=7",
            "name" : "Meal 7",
            "price" : 7.99,
            "quantity" : 1
        },
        {
            "id" : 8,
            "img" : "https://source.unsplash.com/random/200x200?sig=8",
            "name" : "Meal 8",
            "price" : 8.99,
            "quantity" : 2
        }
    ])

    return (
        <div className="container">
            <section className="box details-page">
                <h1>Order &#40;{orderDetails.id}&#41; - {orderDetails.user.firstName}</h1>
                <div className="order-info-box">
                    <div className="details-left">
                        <div className="line top-bottom">
                            <h5>User:</h5>
                            <p>
                                {orderDetails.user.firstName}
                                {orderDetails.user.secondName &&
                                    <>&nbsp; {orderDetails.user.secondName}</>}
                                &nbsp;{orderDetails.user.lastName}
                            </p>
                        </div>
                        <div className="line top-bottom">
                            <h5>Organization:</h5>
                            <p>{orderDetails.organization.name}</p>
                            <h5>Restaurant:</h5>
                            <p>{orderDetails.restaurant.name}</p>
                        </div>
                        <div className="line top-bottom">
                            <h5>Number of meal:</h5>
                            <p>{orderDetails.positions}</p>
                            <h5>Price:</h5>
                            <p>{orderDetails.orderPrice}</p>
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
                        <div className="meals-shortcuts">
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
