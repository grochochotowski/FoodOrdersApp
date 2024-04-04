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
        "organization" : {
            "name" : "Organization 1"
        },
        "restaurant" : {
            "name" : "McDonald's"
        }
    })

    return (
        <div className="container">
            <section className="box">
                <h1>Cart &#40;{cartDetails.id}&#41; - {cartDetails.organization.name} - {cartDetails.restaurant.name}</h1>

            </section>
        </div>
    )
}
