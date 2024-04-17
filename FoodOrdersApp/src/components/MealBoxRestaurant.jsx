import React, {useState} from "react"

import "../styles/orders.css"
import "../styles/index.css"
import "../styles/App.css"

export default function MealBoxRestaurant({meal}) {
    
    const [quantity, setQuantity] = useState(0);

    function updateQuantity() {
        let value = document.getElementById(`quantity-${meal.id}`).value
        setQuantity(value);
    }

    return (
        <div className="meal-box">
            <img src={meal.img ? meal.img : "https://i.pinimg.com/564x/ef/e8/d3/efe8d36db6281666a126189f05bfeff1.jpg"} alt="food-img" />
            <div className="meal-info">
                <h5>{meal.name}</h5>
                <p>Price: {quantity * meal.price}zł</p>
                <input
                    id={`quantity-${meal.id}`}
                    type="number"
                    value={quantity}
                    onChange={() => updateQuantity()}
                />
            </div>
        </div>
    )
}
