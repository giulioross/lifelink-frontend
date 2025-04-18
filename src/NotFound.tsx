// src/pages/NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
        <p className="mt-4 text-xl">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-6 text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
