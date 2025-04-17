import React, { useState } from "react";
import axios from "axios";

const ProfileCard = () => {
  const [image, setImage] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const uploadImage = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post("http://localhost:8080/api/upload", formData, {
      headers: { Authorization: localStorage.getItem("token") },
    });

    setImage(res.data);
  };

  return (
    <div className="card text-center p-3">
      <h5>Profilo Utente</h5>
      {image && <img src={image} alt="Profilo" className="img-thumbnail mt-2" />}
      <input type="file" className="form-control mt-2" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button className="btn btn-outline-primary mt-2" onClick={uploadImage}>
        Carica Immagine
      </button>
    </div>
  );
};

export default ProfileCard;
