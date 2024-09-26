import React, { useState } from "react";
import "./animalForm.css";

const AnimalForm = ({ onAddAnimal }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAnimal = { name, description, image };
    onAddAnimal(newAnimal);
    setName("");
    setDescription("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="animal-form">
      <input
        type="text"
        placeholder="Nome do Animal"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descrição do Animal"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Imagem URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button type="submit">Adicionar Animal</button>
    </form>
  );
};

export default AnimalForm;
