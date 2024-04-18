    import React, {useState, useEffect} from "react"

    import "../styles/orders.css"
    import "../styles/index.css"
    import "../styles/App.css"

    export default function MealBoxRestaurant({order, meal, toggleNewMeal, updateData}) {
        
        const [quantity, setQuantity] = useState(0);
        const mealBoxRef = React.createRef();

        function updateQuantity(event) {
            let value = event.target.value;
            setQuantity(value);
        }

        useEffect(() => {
            const handleClickOutside = (event) => {
            if (event.target.closest(".meal-box") && !event.target.closest(".quantity-input")) {
                addMeal(meal.id, quantity);
            }
            };
        
            const mealBox = mealBoxRef.current;
            if (mealBox) {
            mealBox.addEventListener("click", handleClickOutside);
            }
        
            return () => {
            if (mealBox) {
                mealBox.removeEventListener("click", handleClickOutside);
            }
            };
        }, [quantity]);

        async function addMeal(mealId, quantity) {
            if (quantity) {
                toggleNewMeal();

                let meal = {
                    "mealId": mealId,
                    "quantity" : quantity
                }
    
                let apiCall = `https://localhost:7157/api/meal/addMeal/${order}`
                let requestOption = {
                    method: 'PATCH',
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
                alert("There has to by minimum 1 meal")
            }
            
        }

        return (
            <div className="meal-box" ref={mealBoxRef}>
                <img src={meal.img ? meal.img : "https://i.pinimg.com/564x/ef/e8/d3/efe8d36db6281666a126189f05bfeff1.jpg"} alt="food-img" />
                <div className="meal-info">
                    <h5>{meal.name}</h5>
                    <p>Price: {quantity * meal.price}zł</p>
                    <input
                        className="quantity-input"
                        id={`quantity-${meal.id}`}
                        type="number"
                        value={quantity}
                        onChange={updateQuantity}
                    />
                </div>
            </div>
        )
    }
