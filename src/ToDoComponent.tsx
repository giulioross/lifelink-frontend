import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToDos, addToDo } from "./todoSlice";

interface ToDo {
  titolo: string;
}

const ToDoComponent = () => {
  const dispatch = useDispatch<any>();
  const todos = useSelector((state: any) => state.todo.todos);
  const [titolo, setTitolo] = useState("");

  useEffect(() => {
    dispatch(fetchToDos());
  }, [dispatch]);

  const handleAdd = () => {
    dispatch(addToDo({ titolo }));
    setTitolo("");
  };

  return (
    <div className="p-3">
      <h3>To-Do List</h3>
      <div className="input-group my-2">
        <input className="form-control" value={titolo} onChange={(e) => setTitolo(e.target.value)} />
        <button className="btn btn-success" onClick={handleAdd}>
          Aggiungi
        </button>
      </div>
      <ul className="list-group">
        {todos.map((todo: ToDo, idx: number) => (
          <li className="list-group-item" key={idx}>
            {todo.titolo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoComponent;
