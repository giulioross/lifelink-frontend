// src/components/Layout.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthToken } from "./authSlice";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setAuthToken(""));
    localStorage.removeItem("token");
  };

  return (
    <div className="flex h-screen bg-gray-200 dark:bg-gray-900">
      <div className="w-1/4 bg-white dark:bg-gray-800 shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">LifeLink</h2>
        <ul className="mt-8">
          <li>
            <Link to="/dashboard" className="text-gray-700 dark:text-white hover:text-blue-500">
              Dashboard
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="text-gray-700 dark:text-white hover:text-red-500 mt-4">
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-6">{children}</div>
    </div>
  );
};

export default Layout;
