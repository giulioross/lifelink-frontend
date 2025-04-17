import React, { useState } from "react";
import { useAppDispatch } from "./store";
import { registraUtente } from "./utenteSlice";

// Definizione del tipo per lo stato del form
interface FormState {
  nome: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const [form, setForm] = useState<FormState>({ nome: "", email: "", password: "" });
  const [error, setError] = useState<string | null>(null); // Stato per gestire errori
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validazione di base
    if (!form.nome || !form.email || !form.password) {
      setError("Tutti i campi sono obbligatori.");
      return;
    }

    setError(null); // Resetta errori
    dispatch(registraUtente(form));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-light rounded shadow-sm">
      <h2>Registrati</h2>
      {error && <div className="alert alert-danger">{error}</div>} {/* Mostra errori */}
      <input className="form-control my-2" name="nome" onChange={handleChange} placeholder="Nome" value={form.nome} required />
      <input className="form-control my-2" name="email" onChange={handleChange} placeholder="Email" value={form.email} type="email" required />
      <input
        className="form-control my-2"
        name="password"
        onChange={handleChange}
        placeholder="Password"
        value={form.password}
        type="password"
        required
      />
      <button type="submit" className="btn btn-primary">
        Registrati
      </button>
    </form>
  );
};

export default RegisterForm;
