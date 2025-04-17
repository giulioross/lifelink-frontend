import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchToDos = createAsyncThunk("todo/fetch", async () => {
  const res = await axios.get("http://localhost:8080/api/todo");
  return res.data;
});

export const addToDo = createAsyncThunk("todo/add", async (todo: { titolo: string }) => {
  const res = await axios.post("http://localhost:8080/api/todo", todo);
  return res.data;
});

const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [] as any[] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchToDos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    builder.addCase(addToDo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
  },
});

export default todoSlice.reducer;
