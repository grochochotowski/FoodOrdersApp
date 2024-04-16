import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

import MealBox from "../../components/MealBox";

import "../../styles/orders.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function OrdersDetails() {

    const params = useParams();
    const navigate = useNavigate();

    const [orderDetails, setOrderDetails] = useState({})
    const [meals, setMealse] = useState([])

    useEffect(() => {
        async function fetchData() {
            let apiCallDetails = `https://localhost:7157/api/order/get/${params.id}`
            /*let apiCallMeals = `https://localhost:7157/api/order/cart/${params.id}`*/
            try {
                const responseDetails = await fetch(apiCallDetails)
                const dataDetails = await responseDetails.json()
                setOrderDetails(dataDetails) 

                /*const responseCarts = await fetch(apiCallCarts)
                const dataCarts = await responseCarts.json()
                console.log(dataCarts)
                setOrders(dataCarts)*/

            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData();
    }, []);

    return (
        <div className="container">
            <section className="box details-page">
                <h1>Order &#40;{orderDetails.id}&#41; - {orderDetails.user}</h1>
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
                            <h5>Number of meal:</h5>
                            <p>{orderDetails.positions}</p>
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
