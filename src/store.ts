import { configureStore } from "@reduxjs/toolkit";
import utenteReducer from "./utenteSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    utente: utenteReducer,
  },
});

// Tipizzazione dello stato globale
export type RootState = ReturnType<typeof store.getState>;

// Tipizzazione del dispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// Hook per selezionare lo stato tipizzato
export const useAppSelector: <TSelected>(selector: (state: RootState) => TSelected) => TSelected = useSelector;
