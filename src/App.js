import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import LandingPage from "./Components/Pages/LandingPage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Pages/Dashboard";
import Materials from "./Components/Pages/Materials";
import NewMaterial from "./Components/NewMaterial";
import RequireAuth from "./Components/RequireAuth";
import MyMaterials from "./Components/Pages/MyMaterials";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Private Routes */}
        <Route element={<RequireAuth />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="newmaterial" element={<NewMaterial />} />
          <Route path="materials" element={<Materials />} />
          <Route path="mymaterials" element={<MyMaterials />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
