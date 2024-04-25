import React, {useState, useEffect} from 'react'
import instance from "../api/axios"

import MealBoxRestaurant from './MealBoxRestaurant';

export default function NewMeal({order, restaurant, toggleNewMeal, updateData, token}) {

    
    const [meals, setMeals] = useState([])

    useEffect(() => {
        async function fetchData() {
            let apiCall = `/meal/restaurant/${restaurant}`
            try {
                const response = await instance().get(apiCall, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
                setMeals(response.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData();
    }, []);

    return (
        <div className="small-container">
            <div className="box">
                {
                    meals.map((meal) => (
                        <MealBoxRestaurant key={meal.id} order={order} meal={meal} toggleNewMeal={() => toggleNewMeal()} updateData={() => updateData()} token={token}/>
                    ))
                }
            </div>
        </div>
    )
}
