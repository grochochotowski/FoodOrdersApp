import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import instance from "../../api/axios"

import MealBoxEdit from "../../components/MealBoxEdit";
import NewMeal from "../../components/NewMeal";
import DeleteMeal from "../../components/DeleteMeal";

import "../../styles/orders.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function OrdersEdit({token})
{
    const params = useParams();
    const navigate = useNavigate();
    
    const [orderEdit, setOrderEdit] = useState({})
    const [meals, setMeals] = useState([])
    const [orderInputs, setOrderInputs] = useState({})

    const [newMealOpen, setNewMealOpen] = useState(false)
    const [deleteMealOpen, setDeleteMealOpen] = useState(false)

    const [deleteMealId, setDeleteMealId] = useState(0);
    
    

    function handleInputChange(inputId) {
        const value = document.getElementById(inputId).value;

        setOrderInputs(prev => ({
            ...prev,
            [inputId]: value
        }))
    }

    async function fetchData() {
        let apiCallEdit = `/order/edit/${params.id}`
        let apiCallMeals = `/meal/order/${params.id}`
        try {
            const responseEdit = await instance().get(apiCallEdit, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            const responseMeals = await instance().get(apiCallMeals, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            setOrderEdit(responseEdit.data)
            setOrderInputs({"notes": responseEdit.data.notes});
            setMeals(responseMeals.data)

        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }
    useEffect(() => {
        if(token) {
            fetchData();
        }
    }, []);

    async function sendData(dataToSend) {
        let apiCall = `/order/update/${params.id}`
        try {
            if(token) {
                const response = await instance().put(apiCall, JSON.stringify(dataToSend), {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                });
                console.log(response)
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        window.location.href = `/orders/details/${params.id}`;
    }

    async function deleteOrder() {
        let apiCall = `/order/delete/${params.id}`
        try {
            const response = await instance().delete(apiCall, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            console.log(response)
            window.location.href = `/orders`;

        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    function newMealToggle() {
        setNewMealOpen(prev => !prev)
    }
    function deleteMealToggle() {
        setDeleteMealOpen(prev => !prev)
    }

    function changeDeleteId(mealId) {
        setDeleteMealId(() => mealId);
    }

    useEffect(() => {
        function handleClickOutside(event) {
          if (event.target.closest(".small-container") && !event.target.closest(".box")) newMealToggle();
        }
    
        document.addEventListener("click", handleClickOutside);
    
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    useEffect(() => {
        function handleClickOutsideDelete(event) {
            if (event.target.closest(".delete-container") && !event.target.closest(".box")) deleteMealToggle();
        }
    
        document.addEventListener("click", handleClickOutsideDelete);
    
        return () => {
            document.removeEventListener("click", handleClickOutsideDelete);
        };
    }, []);

    return (
        <div className="container">
            <section className="box">
                <h1>Order &#40;{orderEdit.id}&#41; - Cart {orderEdit.cart}</h1>
                <div className="order-container">
                    <div className="form order-left">
                        
                        <div className="line top-bottom">
                            <div className="layer">

                                <div className="input-container">
                                    <label htmlFor="notes">Notes:</label>
                                    <textarea
                                    name="notes"
                                    id="notes"
                                    value={orderInputs.notes}
                                    onChange={() => handleInputChange("notes")}
                                    ></textarea>                          
                                </div> {/* notes */}

                            </div>
                        </div>
                        <div className="control-buttons">
                            <button onClick={() => {navigate("/orders")}}>List</button>
                            <button className="details-clr" onClick={() => {navigate(`/orders/details/${params.id}`)}}>Details</button>
                            <button className="info" onClick={() => sendData()}>Apply</button>
                            <button className="warning" onClick={() => deleteOrder()}>Delete</button>
                        </div>
                    </div>
                    <div className="order-right">
                        <div className="meals-shortcuts">
                            <div className="new-meal" onClick={() => newMealToggle()}>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            {
                                meals.map((meal) => (
                                    <MealBoxEdit key={meal.key} meal={meal} deleteMealToggle={() => deleteMealToggle()} changeDeleteId={changeDeleteId} token={token}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            {orderEdit.restaurant != undefined && newMealOpen  && (
                <NewMeal order={orderEdit.id} restaurant={orderEdit.restaurant} toggleNewMeal={() => newMealToggle()} updateData={() => fetchData()} token={token}/>
            )}
            
            {deleteMealOpen && (
                <DeleteMeal order={orderEdit.id} meal={deleteMealId} deleteMealToggle={() => deleteMealToggle()} updateData={() => fetchData()} token={token}/>
            )}
        </div>
    )
}
