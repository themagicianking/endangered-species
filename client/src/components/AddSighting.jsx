// creates a component that allows the user to add a sighting to the database

import { useState } from "react";

export default function AddSighting() {
  const [lastAddedSighting, setLastAddedSighting] = useState(null);

  async function addSighting(sighting) {
    fetch("http://localhost:5000/sightings", {
      method: "POST",
      body: JSON.stringify(sighting),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLastAddedSighting(data.rows[0]);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const SIGHTING = {
      datetime: event.target.datetime.value,
      animalName: event.target["animal-name"].value,
      location: event.target.location.value,
      healthy: event.target.healthy.checked,
      email: event.target.email.value,
    };

    addSighting(SIGHTING);

    event.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="datetime">Time of Sighting</label>
        <input id="datetime" name="datetime" type="datetime-local"></input>
        <label htmlFor="animal-name">Animal Name</label>
        <input id="animal-name" name="animal-name" type="text"></input>
        <label htmlFor="location">Location</label>
        <input id="location" name="location" type="text"></input>
        <label htmlFor="healthy">Healthy?</label>
        <input id="healthy" name="healthy" type="checkbox"></input>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email"></input>
        <button type="submit">Create Sighting</button>
      </form>
      {lastAddedSighting ? (
        <p>
          Last sighting added was {lastAddedSighting.animalname} at{" "}
          {new Date(lastAddedSighting.datetime).toLocaleString()} in{" "}
          {lastAddedSighting.location}.
        </p>
      ) : (
        <p>Last sighting added will appear here after submission.</p>
      )}
    </>
  );
}
