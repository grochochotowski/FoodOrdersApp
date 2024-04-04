import { useState } from "react";
import { Link, useParams } from "react-router-dom"

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
            "img" : "https://source.unsplash.com/random/200x200?sig=1",
            "name" : "Name 1",
            "price" : 5.99,
            "positions" : 2
        },
        {
            "img" : "https://source.unsplash.com/random/200x200?sig=2",
            "name" : "Name 2",
            "price" : 4.99,
            "positions" : 3
        },
        {
            "img" : "https://source.unsplash.com/random/200x200?sig=3",
            "name" : "Name 3",
            "price" : 3.99,
            "positions" : 2
        },
        {
            "img" : "https://source.unsplash.com/random/200x200?sig=4",
            "name" : "Name 4",
            "price" : 2.99,
            "positions" : 5
        },
    ])

    return (
        <div className="container">
            <section className="box">
                <h1>Cart &#40;{cartDetails.id}&#41; - {cartDetails.organization.name} - {cartDetails.restaurant.name}</h1>
                <div className="info">
                    <div className="left">
                        <div className="line">
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
                        <div className="line">
                            <h5>Address:</h5>
                            <p>
                                {cartDetails.address.country}
                                , {cartDetails.address.city}
                                , {cartDetails.address.street}
                                &nbsp;{cartDetails.address.building}
                                {cartDetails.address.premises && <>/{cartDetails.address.premises}</>}
                            </p>
                        </div>
                        <div className="line">
                            <h5>Phone number:</h5>
                            <p>{cartDetails.phoneNumber}</p>
                            <h5>Bank account number:</h5>
                            <p>{cartDetails.bankAccountNumber}</p>
                        </div>
                        <div className="line">
                            <h5>Notes:</h5>
                            <p>{cartDetails.notes}</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="orders">
                            <IndividualOrder order={orders[0]}/>
                            <IndividualOrder order={orders[1]}/>
                            <IndividualOrder order={orders[2]}/>
                            <IndividualOrder order={orders[3]}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
