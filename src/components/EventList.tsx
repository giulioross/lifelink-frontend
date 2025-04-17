import React, { useEffect, useState } from "react";
import axios from "axios";

const EventList = () => {
  const [eventi, setEventi] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/eventi", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => setEventi(res.data));
  }, []);

  return (
    <div>
      <h4>Eventi</h4>
      <ul className="list-group">
        {eventi.map((e: any) => (
          <li key={e.id} className="list-group-item">
            <strong>{e.titolo}</strong> – {new Date(e.dataInizio).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
