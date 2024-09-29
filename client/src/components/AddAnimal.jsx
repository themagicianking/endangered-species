// creates a component that allows the user to add an animal to the database.
// will eventually add directly to the DB.
// make species selection a dropdown menu with all the previously added species

import { useState, useEffect } from "react";

export default function AddAnimal() {
  const [lastAddedAnimal, setLastAddedAnimal] = useState(null);
  const [speciesList, setSpeciesList] = useState(null);

  async function loadSpecies() {
   await fetch("http://localhost:5000/species")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSpeciesList(data);
      });
  }

  useEffect(() => {
    loadSpecies();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const ANIMAL = {
      animalName: event.target["animal-name"].value,
      species: event.species.value,
      addedBy: event.target.tracker.value,
    };
    console.log(ANIMAL);

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="animal-name">Animal Name</label>
      <input id="animal-name" name="animal-name" type="text"></input>
      <label htmlFor="species">Species</label>
      <select id="species" name="species">
        {speciesList ? (speciesList.map((species) => (
          <option value={species.commonname}>
            {species.commonname}, <i>"{species.scientificname}"</i>
          </option>
        ))) : (<option>loading...</option>)}
      </select>
      <label htmlFor="tracker">Tracking Scientist</label>
      <input id="tracker" name="tracker" type="text"></input>
      <button type="submit">Create Animal</button>
    </form>
  );
}
