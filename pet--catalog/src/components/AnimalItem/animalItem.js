import React from "react";
import "./animalItem.css";

const AnimalItem = ({ animal, onDelete, onEdit }) => {
  const handleDelete = () => onDelete(animal.id);
  const handleEdit = () => onEdit(animal.id, {});

  return (
    <div className="animal-item">
      <h3>{animal.name}</h3>
      <p>{animal.description}</p>
      <img src={animal.image} alt={animal.name} />
      <button onClick={handleEdit}>Editar</button>
      <button onClick={handleDelete}>Excluir</button>
    </div>
  );
};

export default AnimalItem;
