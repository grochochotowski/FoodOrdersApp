import { useState } from "react";
import { Link, useParams } from "react-router-dom"

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

    return (
        <div className="container">
            <section className="box">
                <h1>Cart &#40;{cartDetails.id}&#41; - {cartDetails.organization.name} - {cartDetails.restaurant.name}</h1>

            </section>
        </div>
    )
}
