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
const Carts = lazy(() => import("./pages/Carts.jsx"));

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
            }/>
        </Routes>


    </div>
  );
}
