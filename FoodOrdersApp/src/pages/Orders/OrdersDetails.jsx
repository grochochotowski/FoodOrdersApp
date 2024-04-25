import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import instance from "../../api/axios"

import MealBox from "../../components/MealBox";

import "../../styles/orders.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function OrdersDetails({token}) {

    const params = useParams();
    const navigate = useNavigate();

    const [orderDetails, setOrderDetails] = useState({})
    const [meals, setMeals] = useState([])

    useEffect(() => {
        async function fetchData() {
            let apiCallDetails = `/order/get/${params.id}`
            let apiCallMeals = `/meal/order/${params.id}`
            try {
                const responseDetails = await instance().get(apiCallDetails, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const responseMeals = await instance().get(apiCallMeals, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setOrderDetails(responseDetails.data) 
                setMeals(responseMeals.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="container">
            <section className="box details-page">
                <h1>Order &#40;{orderDetails.id}&#41; - Cart {orderDetails.cart}</h1>
                <div className="order-info-box">
                    <div className="details-left">
                        <div className="line top-bottom">
                            <h5>User:</h5>
                            <p>
                                {orderDetails.user}
                            </p>
                        </div>
                        <div className="line top-bottom">
                            <h5>Organization:</h5>
                            <p>{orderDetails.organization}</p>
                            <h5>Restaurant:</h5>
                            <p>{orderDetails.restaurant}</p>
                        </div>
                        <div className="line top-bottom">
                            <h5>Number of meals:</h5>
                            <p>{orderDetails.numberOfMeals}</p>
                            <h5>Price:</h5>
                            <p>{orderDetails.totalPrice}</p>
                        </div>
                        <div className="line top-bottom">
                            <h5>Notes:</h5>
                            <p>{orderDetails.notes}</p>
                        </div>
                        
                        <div className="control-buttons">
                        <button onClick={() => {navigate("/orders")}}>List</button>
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
