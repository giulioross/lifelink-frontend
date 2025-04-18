import { configureStore } from "@reduxjs/toolkit";
import utenteReducer from "./utenteSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    utente: utenteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
