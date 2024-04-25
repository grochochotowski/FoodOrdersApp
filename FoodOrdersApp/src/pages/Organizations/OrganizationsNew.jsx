import React, {useState} from "react";
import instance from "../../api/axios.jsx"

export default function OrganizationsNew({hideNew, updateData, token}) {

    const [inputs, setInputs] = useState({
        "name" : ""
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

        let dataToSend = { ...inputs };

        if(valid) createOrganization(dataToSend)
    }

    async function createOrganization(dataToSend) {
        let apiCall = `/organization/create`
        try {
            const response = await instance().post(apiCall, JSON.stringify(dataToSend), {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            })
            hideNew()
            updateData()
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    return (
        <div className="small-container auto">
            <div className="box">
                <h1>New organization</h1>
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
                    </div>
                </div>
                <button onClick={validate}>Create</button>
            </div>
        </div>
    );
}
