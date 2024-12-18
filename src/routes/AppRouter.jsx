import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Client from "../pages/client/Client";
import NewClient from "../pages/client/NewClient";
import EditClient from "../pages/client/EditClient";

function AppRoute() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/client" element={<Client />} />
            </Routes>
        </Router>
    );
}

export default AppRoute;
