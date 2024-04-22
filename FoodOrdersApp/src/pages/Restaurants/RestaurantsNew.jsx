import React, {useState} from "react";

export default function RestaurantsNew() {

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
