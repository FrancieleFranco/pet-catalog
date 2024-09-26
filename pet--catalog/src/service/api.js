const API_URL = "http://localhost:5000/animals";

export const fetchAnimals = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Erro ao buscar animais");
  }
  return await response.json();
};

export const addAnimal = async (animal) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(animal),
  });
  if (!response.ok) {
    throw new Error("Erro ao adicionar animal");
  }
  return await response.json();
};

export const deleteAnimal = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Erro ao excluir animal");
  }
};

export const updateAnimal = async (id, updatedAnimal) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedAnimal),
  });
  if (!response.ok) {
    throw new Error("Erro ao atualizar animal");
  }
  return await response.json();
};
