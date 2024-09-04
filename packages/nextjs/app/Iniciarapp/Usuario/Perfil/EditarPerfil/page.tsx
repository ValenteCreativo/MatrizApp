"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const EditarPerfil: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState<File | null>(null); // Estado para la foto de perfil
  const [cv, setCV] = useState<File | null>(null); // Estado para el CV

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para guardar los cambios, como enviar datos a una API
    router.push("/Iniciarapp/Usuario/Perfil");
  };

  return (
    <div className="edit-profile-container">
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label htmlFor="photo">Foto de Perfil:</label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files ? e.target.files[0] : null)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="cv">Subir CV:</label>
          <input
            type="file"
            id="cv"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setCV(e.target.files ? e.target.files[0] : null)}
          />
        </div>
        <button type="submit" className="save-button">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditarPerfil;
