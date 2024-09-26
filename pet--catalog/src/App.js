import React, { useState, useEffect } from "react";
import {
  fetchAnimals,
  addAnimal,
  deleteAnimal,
  updateAnimal,
} from "./service/api.js";
import AnimalList from "./components/AnimalList/animalList";
import AnimalForm from "./components/animalForm/animalForm";
import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import "./App.css";

const App = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAnimals = async () => {
      try {
        const data = await fetchAnimals();
        setAnimals(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadAnimals();
  }, []);

  const handleAddAnimal = async (animal) => {
    const newAnimal = await addAnimal(animal);
    setAnimals([...animals, newAnimal]);
  };

  const handleDeleteAnimal = async (id) => {
    await deleteAnimal(id);
    setAnimals(animals.filter((animal) => animal.id !== id));
  };

  const handleEditAnimal = async (id, updatedAnimal) => {
    const updatedData = await updateAnimal(id, updatedAnimal);
    setAnimals(
      animals.map((animal) => (animal.id === id ? updatedData : animal))
    );
  };

  return (
    <div className="app">
      <Header />
      {loading ? (
        <Loading />
      ) : error ? (
        <Error message={error} />
      ) : (
        <>
          <AnimalForm onAddAnimal={handleAddAnimal} />
          <AnimalList
            animals={animals}
            onDeleteAnimal={handleDeleteAnimal}
            onEditAnimal={handleEditAnimal}
          />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
