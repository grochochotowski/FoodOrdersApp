// MAIN IMPORTS
import { Suspense, lazy } from "react";
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

export default function App() {
  return (
    <div className="main-container">

        <NavBar />

        <Routes>
            <Route path="/log-in" element={
                <Suspense fallback={<Fallback />}>
                    <LogIn />
                </Suspense>
            }/>

            <Route path="/carts" element={
                <Suspense fallback={<Fallback />}>
                    <Carts />
                </Suspense>
            }/><Route path="/carts/new" element={
                <Suspense fallback={<Fallback />}>
                    <CartsNew />
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
        </Routes>


    </div>
  );
}
