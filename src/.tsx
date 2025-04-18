import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./LoginForm";
import Register from "./RegisterForm"; // Ensure the file exists at this path or update the path if necessary
import Dashboard from "./components/Dashboard";

<Router>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
</Router>;
