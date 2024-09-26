import React from "react";
import AnimalItem from "../AnimalItem/animalItem";
import "./animalList.css";

const AnimalList = ({ animals, onDeleteAnimal, onEditAnimal }) => {
  return (
    <div className="animal-list">
      {animals.map((animal) => (
        <AnimalItem
          key={animal.id}
          animal={animal}
          onDelete={onDeleteAnimal}
          onEdit={onEditAnimal}
        />
      ))}
    </div>
  );
};

export default AnimalList;
