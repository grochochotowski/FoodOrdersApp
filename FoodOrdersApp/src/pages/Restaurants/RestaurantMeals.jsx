import React, {useState, useEffect} from 'react'

import MealBoxList from '../../components/MealBoxList';

import "../../styles/restaurants.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function RestaurantMeals({restaurant}) {

    const [toggleNew, setToggleNew] = useState(false)
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
        setToggleNew(prev => !prev)
    }

    const [inputs, setInputs] = useState({
        "name" : "",
        "description": "",
        "price": 0,
        "img": "",
        "restaurantId": restaurant,
    })
    function updateInputs(input) {
        setInputs(prev => (
            {
                ...prev,
                [input]: document.getElementById(input).value
            }
        ))
    }

    function validate() {
        let valid = true;

        if (inputs.name === "") {
            valid = false
            document.getElementById("name").classList.add("not-valid")
        }
        else {
            document.getElementById("name").classList.remove("not-valid")
        }

        if (inputs.price === 0) {
            valid = false
            document.getElementById("price").classList.add("not-valid")
        }
        else {
            document.getElementById("price").classList.remove("not-valid")
        }

        let dataToSend = { ...inputs };

        if(valid) createMeal(dataToSend)
    }

    function createMeal(dataToSend) {
        alert(dataToSend)
    }

    return (
        <div className="small-container auto">
                <div className="box">
                    <div className="new-meal" onClick={() => newMeal()}>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    {
                        !toggleNew
                        ?   meals.map((meal) => (
                                <MealBoxList key={meal.key} meal={meal}/>
                            ))
                        :   <div>
                                <div className="form">
                                    <div className="layer">
                                        <div className="input-container">
                                            <label htmlFor="name">Name:</label>
                                            <input
                                                type="text"
                                                id="name"
                                                onChange={() => updateInputs("name")}
                                                value={inputs.name}
                                            />
                                        </div>
                                        <div className="input-container">
                                            <label htmlFor="price">Price:</label>
                                            <input
                                                type="number"
                                                id="price"
                                                onChange={() => updateInputs("price")}
                                                value={inputs.price}
                                            />
                                        </div>
                                    </div>
                                    <div className="layer">
                                        <div className="input-container">
                                            <label htmlFor="img">Image url:</label>
                                            <textarea
                                                type="text"
                                                id="img"
                                                onChange={() => updateInputs("img")}
                                                value={inputs.img}
                                            />
                                        </div>
                                    </div>
                                    <div className="layer">
                                        <div className="input-container">
                                            <label htmlFor="descritpion">Description:</label>
                                            <textarea
                                                type="text"
                                                id="descritpion"
                                                onChange={() => updateInputs("descritpion")}
                                                value={inputs.descritpion}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button style={{marginTop: '1rem'}} onClick={validate}>Create</button>
                            </div>
                    }
            </div>
        </div>
    )
}
