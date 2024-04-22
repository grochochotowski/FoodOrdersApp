import React, {useState} from "react";

export default function RestaurantsNew({hideNew, updateData}) {

    const [inputs, setInputs] = useState({
        "name" : "",
        "category": ""
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

        if (inputs.category === "") {
            valid = false
            document.getElementById("category").classList.add("not-valid")
        }
        else {
            document.getElementById("category").classList.remove("not-valid")
        }

        let dataToSend = { ...inputs };

        if(valid) createRestaurant(dataToSend)
    }

    async function createRestaurant(dataToSend) {
        let apiCall = `https://localhost:7157/api/restaurant/create`
        let requestOption = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        }
        const response = await fetch(apiCall, requestOption)

        if (!response.ok) {
            throw new Error('Error fetching data');
        }
        hideNew()
        updateData()
    }

    return (
        <div className="small-container auto">
            <div className="box">
                <h1>New restaurant</h1>
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
                            <label htmlFor="category">Category:</label>
                            <input
                                type="text"
                                id="category"
                                onChange={() => updateInputs("category")}
                                value={inputs.category}
                            />
                        </div>
                    </div>
                </div>
                <button onClick={validate}>Create</button>
            </div>
        </div>
    );
}
