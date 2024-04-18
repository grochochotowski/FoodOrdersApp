import React, {useState, useEffect} from 'react'

import MealBoxRestaurant from './MealBoxRestaurant';

export default function NewMeal({restaurant, toggleNewMeal}) {

    
    const [meals, setMeals] = useState([])

    useEffect(() => {
        async function fetchData() {
            let apiCallMeals = `https://localhost:7157/api/meal/restaurant/${restaurant}`
            try {

                const responseMeals = await fetch(apiCallMeals)
                const dataMeals = await responseMeals.json()
                setMeals(dataMeals)

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
                        <MealBoxRestaurant key={meal.id} meal={meal} toggleNewMeal={() => toggleNewMeal()}/>
                    ))
                }
            </div>
        </div>
    )
}
