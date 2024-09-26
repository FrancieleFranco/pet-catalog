import React from "react";
import "./animalDetail.css";

const AnimalDetail = ({ animal }) => {
  return (
    <div className="animal-detail">
      <h2>{animal.name}</h2>
      <img src={animal.image} alt={animal.name} />
      <p>{animal.description}</p>
    </div>
  );
};

export default AnimalDetail;
