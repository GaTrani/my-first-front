import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Client from './pages/client/Client'
import Welcome from './pages/welcome/Welcome';
import Register from './pages/register/Register';
import { AuthProvider } from "./components/Auth/AuthContext";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

export default function AppRouter(){
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Welcome />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route
                        path="/home"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/client" element={<Client />}/>
                    <Route path="/welcome" element={<Welcome/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </Router>
        </AuthProvider>
    )
}