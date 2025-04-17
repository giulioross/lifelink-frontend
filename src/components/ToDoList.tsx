import React, { useEffect, useState } from "react";
import axios from "axios";

const ToDoList = () => {
  const [todos, setTodos] = useState<{ titolo: string }[]>([]);
  const [titolo, setTitolo] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/todo", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => setTodos(res.data));
  }, []);

  const addTodo = () => {
    axios
      .post(
        "http://localhost:8080/api/todo",
        { titolo },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      )
      .then((res) => setTodos([...todos, res.data]));
    setTitolo("");
  };

  return (
    <div>
      <h4>To-Do</h4>
      <div className="input-group mb-2">
        <input className="form-control" value={titolo} onChange={(e) => setTitolo(e.target.value)} />
        <button className="btn btn-primary" onClick={addTodo}>
          Aggiungi
        </button>
      </div>
      <ul className="list-group">
        {todos.map((todo: any, i: number) => (
          <li key={i} className="list-group-item">
            {todo.titolo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
