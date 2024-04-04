import { useState } from "react";
import { useParams } from "react-router-dom"

import IndividualOrder from "../../components/IndividualOrder";

import "../../styles/carts.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function CartsDetails() {

    const params = useParams();
    console.log(params.id)

    const [cartDetails, setCartDetails] = useState({
        "id" : 1,
        "minPrice": 19.99,
        "totalCartPrice" : 19.99,
        "deliveryPrice" : 0.00,
        "freeDeliveryPrice" : 19.99,
        "phoneNumber": "123 456 789",
        "bankAccountNumber": "12 3456 7890 1234 5678 9012 3456",
        "notes": "Those are notes for order with id: 1",
        "address": {
            "country": "PL",
            "city": "Bialystok",
            "street": "Żurawia",
            "building": "71",
            "premises": "123"
        },
        "organization" : {
            "name" : "Organization 1"
        },
        "restaurant" : {
            "name" : "McDonald's"
        },
    })
    const [orders, setOrders] = useState([
        {
            "id" : 1,
            "img" : "https://source.unsplash.com/random/200x200?sig=1",
            "name" : "Name 1",
            "price" : 5.99,
            "positions" : 2
        },
        {
            "id" : 2,
            "img" : "https://source.unsplash.com/random/200x200?sig=2",
            "name" : "Name 2",
            "price" : 4.99,
            "positions" : 3
        },
        {
            "id" : 3,
            "img" : "https://source.unsplash.com/random/200x200?sig=3",
            "name" : "Name 3",
            "price" : 3.99,
            "positions" : 2
        },
        {
            "id" : 4,
            "img" : "https://source.unsplash.com/random/200x200?sig=4",
            "name" : "Name 4",
            "price" : 2.99,
            "positions" : 5
        },
        {
            "id" : 5,
            "img" : "https://source.unsplash.com/random/200x200?sig=5",
            "name" : "Name 5",
            "price" : 5.99,
            "positions" : 2
        },
        {
            "id" : 6,
            "img" : "https://source.unsplash.com/random/200x200?sig=6",
            "name" : "Name 6",
            "price" : 6.99,
            "positions" : 3
        },
        {
            "id" : 7,
            "img" : "https://source.unsplash.com/random/200x200?sig=7",
            "name" : "Name 7",
            "price" : 7.99,
            "positions" : 2
        },
        {
            "id" : 8,
            "img" : "https://source.unsplash.com/random/200x200?sig=8",
            "name" : "Name 8",
            "price" : 8.99,
            "positions" : 5
        }
    ])

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
