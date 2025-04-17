import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registraUtente = createAsyncThunk("utente/registrati", async (utente: any) => {
  const response = await axios.post("http://localhost:8080/api/utenti", utente);
  return response.data;
});

const utenteSlice = createSlice({
  name: "utente",
  initialState: { utente: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registraUtente.fulfilled, (state, action) => {
      state.utente = action.payload;
    });
  },
});

export default utenteSlice.reducer;
