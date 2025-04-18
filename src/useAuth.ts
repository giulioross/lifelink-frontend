// src/hooks/useAuth.ts
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setAuthToken } from "./authSlice";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setAuthToken(token));
      setIsAuthenticated(true);
    }
  }, [dispatch]);

  return { isAuthenticated };
};

export default useAuth;
