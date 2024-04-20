// MAIN IMPORTS
import React, { Suspense, lazy, useState } from "react";
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
const RestaurantsNew = lazy(() => import("./pages/Restaurants/RestaurantsNew.jsx"));


const Meals = lazy(() => import("./pages/Meals/Meals.jsx"));

const Users = lazy(() => import("./pages/Users/Users.jsx"));
const UsersNew = lazy(() => import("./pages/Users/UsersNew.jsx"));

const Organizations = lazy(() => import("./pages/Organizations/Organizations.jsx"));
const OrganizationsNew = lazy(() => import("./pages/Organizations/OrganizationsNew.jsx"));

export default function App() {

    const [user, setUser] = useState(0);

    function handleUserChange(chosenUser) {
        setUser(chosenUser)
    }

  return (
    <div className="main-container">

        <NavBar handleUserChange={handleUserChange} user={user}/>

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
            <Route path="/restaurants/new" element={
                <Suspense fallback={<Fallback />}>
                    <RestaurantsNew />
                </Suspense>
            }/>



            <Route path="/meals/:id" element={
                <Suspense fallback={<Fallback />}>
                    <Meals />
                </Suspense>
            }/>



            <Route path="/users" element={
                <Suspense fallback={<Fallback />}>
                    <Users />
                </Suspense>
            }/>
            <Route path="/users/new" element={
                <Suspense fallback={<Fallback />}>
                    <UsersNew />
                </Suspense>
            }/>



            <Route path="/organizations" element={
                <Suspense fallback={<Fallback />}>
                    <Organizations />
                </Suspense>
            }/>
            <Route path="/organizations/new" element={
                <Suspense fallback={<Fallback />}>
                    <OrganizationsNew />
                </Suspense>
            }/>



        </Routes>
    </div>
  );
}
