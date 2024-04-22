// MAIN IMPORTS
import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// STYLES
import "./styles/App.css";

// COMPONENTS
import Fallback from "./components/Fallback";
import NavBar from "./components/NavBar";

// PAGES
const LogIn = lazy(() => import("./pages/LogIn.jsx"));

const Carts = lazy(() => import("./pages/Carts/Carts.jsx"));
const CartsNew = lazy(() => import("./pages/Carts/CartsNew.jsx"));
const CartsDetails = lazy(() => import("./pages/Carts/CartsDetails.jsx"));
const CartsEdit = lazy(() => import("./pages/Carts/CartsEdit.jsx"));

const Orders = lazy(() => import("./pages/Orders/Orders.jsx"));
const OrdersNew = lazy(() => import("./pages/Orders/OrdersNew.jsx"));
const OrdersDetails = lazy(() => import("./pages/Orders/OrdersDetails.jsx"));
const OrdersEdit = lazy(() => import("./pages/Orders/OrdersEdit.jsx"));

const More = lazy(() => import("./pages/More.jsx"));

const Restaurants = lazy(() => import("./pages/Restaurants/Restaurants.jsx"));
const Users = lazy(() => import("./pages/Users/Users.jsx"));
const Organizations = lazy(() => import("./pages/Organizations/Organizations.jsx"));

export default function App() {

    const [user, setUser] = useState(0);
    const [users, setUsers] = useState([])

    async function fetchData() {
        let apiCall = `https://localhost:7157/api/user/all`
        try {
            const response = await fetch(apiCall)
            const data = await response.json()
            setUsers(data)
            handleUserChange(data[0])
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }
    useEffect(() => {

        fetchData();
    }, []);

    function handleUserChange(chosenUser) {
        setUser(chosenUser)
    }

    return (
        <div className="main-container">

            <NavBar handleUserChange={handleUserChange} user={user} users={users}/>

            <Routes>
                <Route path="/fallback" element={
                    <Suspense fallback={<Fallback />}>
                        <Fallback />
                    </Suspense>
                }/>



                <Route path="/log-in" element={
                    <Suspense fallback={<Fallback />}>
                        <LogIn />
                    </Suspense>
                }/>



                <Route path="/carts" element={
                    <Suspense fallback={<Fallback />}>
                        <Carts />
                    </Suspense>
                }/>
                <Route path="/carts/new" element={
                    <Suspense fallback={<Fallback />}>
                        <CartsNew user={user} />
                    </Suspense>
                }/>
                <Route path="/carts/details/:id" element={
                    <Suspense fallback={<Fallback />}>
                        <CartsDetails />
                    </Suspense>
                }/>
                <Route path="/carts/edit/:id" element={
                    <Suspense fallback={<Fallback />}>
                        <CartsEdit />
                    </Suspense>
                }/>



                <Route path="/orders" element={
                    <Suspense fallback={<Fallback />}>
                        <Orders />
                    </Suspense>
                }/>
                <Route path="/orders/new" element={
                    <Suspense fallback={<Fallback />}>
                        <OrdersNew user={user} />
                    </Suspense>
                }/>
                <Route path="/orders/details/:id" element={
                    <Suspense fallback={<Fallback />}>
                        <OrdersDetails />
                    </Suspense>
                }/>
                <Route path="/orders/edit/:id" element={
                    <Suspense fallback={<Fallback />}>
                        <OrdersEdit />
                    </Suspense>
                }/>


                
                <Route path="/more" element={
                    <Suspense fallback={<Fallback />}>
                        <More />
                    </Suspense>
                }/>



                <Route path="/restaurants" element={
                    <Suspense fallback={<Fallback />}>
                        <Restaurants />
                    </Suspense>
                }/>
                <Route path="/users" element={
                    <Suspense fallback={<Fallback />}>
                        <Users updateUsers={() => fetchData()}/>
                    </Suspense>
                }/>
                <Route path="/organizations" element={
                    <Suspense fallback={<Fallback />}>
                        <Organizations />
                    </Suspense>
                }/>



            </Routes>
        </div>
    );
}
