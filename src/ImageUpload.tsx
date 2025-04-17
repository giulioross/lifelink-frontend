import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [selected, setSelected] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("");

  const handleUpload = async () => {
    if (!selected) return;

    const formData = new FormData();
    formData.append("file", selected);

    const res = await axios.post("http://localhost:8080/api/upload", formData);
    setUrl(res.data);
  };

  return (
    <div className="p-3">
      <h4>Carica Immagine</h4>
      <input type="file" onChange={(e) => setSelected(e.target.files?.[0] || null)} />
      <button onClick={handleUpload} className="btn btn-primary mt-2">
        Upload
      </button>
      {url && <img src={url} alt="Uploaded" className="mt-3 img-thumbnail" width={200} />}
    </div>
  );
};

export default ImageUpload;
