// src/pages/Dashboard.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store"; // Aggiorna il percorso in base alla struttura del progetto
const Dashboard = () => {
  const user = useSelector((state: RootState) => state.utente.utente as { name: string } | null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Welcome, {user ? user.name : "Guest"}!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Here you can add widgets or sections like calendar, to-do, etc. */}
        <div className="bg-white shadow-lg p-4 rounded-lg">Calendar Widget</div>
        <div className="bg-white shadow-lg p-4 rounded-lg">To-Do Widget</div>
        <div className="bg-white shadow-lg p-4 rounded-lg">Email Widget</div>
      </div>
    </div>
  );
};

export default Dashboard;
