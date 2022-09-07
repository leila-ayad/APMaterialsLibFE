import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import LandingPage from "./Components/Pages/LandingPage";
import Login from "./Components/Pages/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Pages/Dashboard";
import Materials from "./Components/Pages/Materials";
import NewMaterial from "./Components/NewMaterial";
import RequireAuth from "./Components/RequireAuth";
import MyMaterials from "./Components/Pages/MyMaterials";


import useAuth from "./Hooks/useAuth";

function App() {
  const { auth } = useAuth();
  const id = auth.memberId;
  return (
   
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="help"
            element={
              <p>
                We don't have a great way to deal with this yet. Email
                leila.alhemali@gmail.com for support!
              </p>
            }
          />
          {/* Private Routes */}
          <Route element={<RequireAuth />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="newmaterial" element={<NewMaterial />} />
            <Route path="materials" element={<Materials />} />
            <Route path={`${id}/your-materials`} element={<MyMaterials />} />
          </Route>
        </Route>
      </Routes>

  );
}

export default App;
