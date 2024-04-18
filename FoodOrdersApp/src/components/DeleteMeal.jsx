import React, {useState, useEffect} from 'react'

export default function DeleteMeal({order, meal, deleteMealToggle, updateData}) {

    
    const [quantity, setQuantity] = useState(0)

    function updateQuantity(event) {
        let value = event.target.value;
        setQuantity(value);
    }

    async function removeMeal(quantity) {
        if (quantity) {
            deleteMealToggle()

            let meal = {
                "mealId": meal,
                "quantity" : quantity
            }

            let apiCall = `https://localhost:7157/api/meal/removeMeal/${order}`
            let requestOption = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(meal)
            }
            const response = await fetch(apiCall, requestOption)
    
            console.log(response)
    
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            else {
                updateData()
            }
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
                />
                <button className="warning delete-input-btn" onClick={removeMeal}>Delete</button>
            </div>
        </div>
    )
}
