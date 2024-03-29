// MAIN IMPORTS
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// STYLES
import "./styles/App.css";

// COMPONENTS
import Fallback from "./components/Fallback";
import NavBar from "./components/NavBar";

// PAGES
const Login = lazy(() => import("./pages/Login.jsx"));

export default function App() {
  return (
    <div className="main-container">

        <NavBar />

        <Routes>
            <Route path="/login" element={
                <Suspense fallback={<Fallback />}>
                    <Login />
                </Suspense>
            }/>
        </Routes>


    </div>
  );
}
