import React, { useState } from "react";
import "./animalItem.css";

const AnimalItem = ({ animal, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAnimal, setEditedAnimal] = useState({
    name: animal.name,
    description: animal.description,
    image: animal.image,
  });

  const handleDelete = () => onDelete(animal.id);

  const handleEdit = () => {
    onEdit(animal.id, editedAnimal);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAnimal((prevAnimal) => ({
      ...prevAnimal,
      [name]: value,
    }));
  };

  return (
    <div className="animal-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedAnimal.name}
            onChange={handleChange}
          />
          <textarea
            name="description"
            value={editedAnimal.description}
            onChange={handleChange}
          />
          <button onClick={handleEdit}>Salvar</button>
        </div>
      ) : (
        <div>
          <h3>{animal.name}</h3>
          <p>{animal.description}</p>
          <img src={animal.image} alt={animal.name} />
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={handleDelete}>Excluir</button>
        </div>
      )}
    </div>
  );
};

export default AnimalItem;
