import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login effettuato!");
    } catch {
      alert("Credenziali errate!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-light rounded shadow-sm">
      <h2>Login</h2>
      <input className="form-control my-2" name="email" onChange={handleChange} placeholder="Email" />
      <input className="form-control my-2" name="password" onChange={handleChange} placeholder="Password" type="password" />
      <button type="submit" className="btn btn-success">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
