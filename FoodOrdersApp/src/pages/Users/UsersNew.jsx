import React, {useState, useEffect} from "react";
import instance from "../../api/axios.jsx"

export default function UsersNew({hideNew, updateData, updateUsers, token}) {

    const [inputs, setInputs] = useState({
        "firstName" : "",
        "secondName" : "",
        "lastName" : "",
        "organizationId" : 0,
    })
    const [organizations, setOrganizations] = useState([])

    function updateInputs(input) {
        setInputs(prev => (
            {
                ...prev,
                [input]: document.getElementById(input).value
            }
        ))
    }
    function handleSelectChange(event, selectId) {
        const value = parseInt(event.target.value)

        setInputs(prev => ({
            ...prev,
            [selectId]: value
        }))
    }

    function validate() {
        let valid = true;

        if (inputs.firstName === "") {
            valid = false
            document.getElementById("firstName").classList.add("not-valid")
        }
        else {
            document.getElementById("firstName").classList.remove("not-valid")
        }
        if (inputs.lastName === "") {
            valid = false
            document.getElementById("lastName").classList.add("not-valid")
        }
        else {
            document.getElementById("lastName").classList.remove("not-valid")
        }
        if (inputs.organizationId === 0) {
            valid = false
            document.getElementById("organizationId").classList.add("not-valid")
        }
        else {
            document.getElementById("organizationId").classList.remove("not-valid")
        }

        let dataToSend = { ...inputs };

        if(valid) createUser(dataToSend)
    }

    useEffect(() => {
        async function fetchData() {
            let apiCall = `/organization/all`
            try {
                const response = await instance().get(apiCall, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })
                setOrganizations(response.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData();
    }, []);

    async function createUser(dataToSend) {
        let apiCall = `/user/create`
        try {
            const response = await instance().post(apiCall, JSON.stringify(dataToSend), {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            })
            hideNew()
            updateData()
            updateUsers()
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    function generateOrganizationSelect() {
        return(
            <select
            name="organizationId"
            id="organizationId"
            value={user.organizationId}
            onChange={(event) => handleSelectChange(event, "organizationId")}
        >
            <option value={0}>--- Choose organization ---</option>
            {organizations.map(organization => (
                <option key={organization.id} value={organization.id}>{organization.name}</option>
            ))}
        </select>
        )
    }

    return (
        <div className="small-container auto">
            <div className="box">
                <h1>New user</h1>
                <div className="form">
                    <div className="layer">
                        <div className="input-container">
                            <label htmlFor="firstName">First name:</label>
                            <input
                                type="text"
                                id="firstName"
                                onChange={() => updateInputs("firstName")}
                                value={inputs.name}
                            />
                        </div>
                        
                        <div className="input-container">
                            <label htmlFor="secondName">Second name:</label>
                            <input
                                type="text"
                                id="secondName"
                                onChange={() => updateInputs("secondName")}
                                value={inputs.name}
                            />
                        </div>
                        
                        <div className="input-container">
                            <label htmlFor="lastName">Last name:</label>
                            <input
                                type="text"
                                id="lastName"
                                onChange={() => updateInputs("lastName")}
                                value={inputs.name}
                            />
                        </div>
                                          
                    </div>
                    <div className="layer selects">
                        <div className="input-container">
                            <label htmlFor="organizationId">Organization:</label>
                            {generateOrganizationSelect()}
                        </div>
                    </div>
                </div>
                <button onClick={validate}>Create</button>
            </div>
        </div>
    );
}
