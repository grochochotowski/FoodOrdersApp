// MAIN IMPORTS
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// STYLES
import "./styles/App.css";

// COMPONENTS
import Fallback from "./components/Fallback";
import NavBar from "./components/NavBar";

// PAGES
const Test = lazy(() => import("./pages/Test.jsx"));

export default function App() {
  return (
    <div className="main-container">

        <NavBar />

        <Routes>
            <Route path="/test" element={
                <Suspense fallback={<Fallback />}>
                    <Test />
                </Suspense>
            }/>
        </Routes>


    </div>
  );
}
