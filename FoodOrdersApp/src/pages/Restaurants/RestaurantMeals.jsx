import React, {useState, useEffect} from 'react'

import MealBoxList from '../../components/MealBoxList';

import "../../styles/restaurants.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function RestaurantMeals({restaurant}) {

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

    function newMeal() {
        alert("new meal")
    }

    return (
        <div className="small-container auto">
                <div className="box">
                    <div className="new-meal" onClick={() => newMeal()}>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    {
                        meals.map((meal) => (
                            <MealBoxList key={meal.key} meal={meal}/>
                        ))
                    }
            </div>
        </div>
    )
}
