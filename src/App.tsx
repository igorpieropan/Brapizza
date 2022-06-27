import React from "react";
import "./App.css";

import * as FaIcons from "react-icons/fa";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/homePage";

function App() {
    return (
        <>
            <Router>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
