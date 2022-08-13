import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import Materials from "./Components/Materials";
import NewMaterial from "./Components/NewMaterial";
import RequireAuth from "./Components/RequireAuth";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage/>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Private Routes */}
        <Route element={<RequireAuth />}>
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="newmaterial" element={<NewMaterial />} />
        <Route path="materials" element={<Materials/>} />
        </Route>
      </Route>
    </Routes>

  );
}

export default App;
