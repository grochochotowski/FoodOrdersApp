import React, {useState, useEffect} from 'react'

export default function DeleteMeal({order, meal, deleteMealToggle, updateData, token}) {

    
    const [quantity, setQuantity] = useState(0)

    function updateQuantity(event) {
        let value = event.target.value;
        setQuantity(value);
    }

    async function removeMeal(mealId, quantity) {

        if (quantity) {
            deleteMealToggle()

            let removeMealObject = {
                "mealId": parseInt(mealId),
                "quantity" : parseInt(quantity)
            }

            let apiCall = `https://localhost:7157/api/meal/removeMeal/${order}`
            let requestOption = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(removeMealObject)
            }
            const response = await fetch(apiCall, requestOption)
    
            console.log(response)
            updateData()
        }
        else {
            alert("You have to delete atleast 1 meal")
        }
    }

    return (
        <div className="delete-container">
            <div className="box">
                <h4>How many meals delete?</h4>
                <input
                    className="quantity-input"
                    id={`quantity-${meal}`}
                    type="number"
                    value={quantity}
                    onChange={updateQuantity}
                    min={0}
                />
                <button className="warning delete-input-btn" onClick={() => removeMeal(meal, quantity)}>Delete</button>
            </div>
        </div>
    )
}
