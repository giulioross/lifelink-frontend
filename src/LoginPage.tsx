// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { setAuthToken } from "./authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("YOUR_BACKEND_URL/login", { email, password });
      dispatch(setAuthToken(response.data.token));
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login failed! Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="p-8 bg-white rounded shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className="w-full p-2"
          />
        </div>
        <div className="mb-4">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            className="w-full p-2"
          />
        </div>
        <Button type="submit" className="w-full bg-blue-500 text-white">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
