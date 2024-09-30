// creates a component that allows the user to add a species to the database
// will eventually add species directly to the database
import { useState } from "react";

export default function AddSpecies() {
  const [lastAddedSpecies, setLastAddedSpecies] = useState(null);

  async function addSpecies(species) {
    fetch("http://localhost:5000/species", {
      method: "POST",
      body: JSON.stringify(species),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLastAddedSpecies(data.rows[0]);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const SPECIES = {
      commonName: event.target["common-name"].value,
      scientificName: event.target["scientific-name"].value,
      wildNum: event.target["wild-num"].value,
      cscode: event.target.cscode.value,
    };
    console.log(SPECIES);
    addSpecies(SPECIES);

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="common-name">Common Name</label>
      <input id="common-name" name="common-name" type="text"></input>
      <label htmlFor="scientific-name">Scientific Name</label>
      <input id="scientific-name" name="scientific-name" type="text"></input>
      <label htmlFor="wild-num">Number living in the wild</label>
      <input id="wild-num" name="wild-num" type="number"></input>
      <label htmlFor="cscode">Conservation status code</label>
      <select id="cscode" name="cscode">
        <option value="EX">EX (Extinct)</option>
        <option value="EW">EX (Extinct in the Wild)</option>
        <option value="CR">CR (Critically Endangered)</option>
        <option value="EN">EN (Endangered)</option>
        <option value="VU">VU (Vulnerable)</option>
        <option value="NT">NT (Near Threatened)</option>
        <option value="CD">CD (Conservation Dependent)</option>
        <option value="LC">LC (Least Concern)</option>
        <option value="DD">DD (Data Deficient)</option>
        <option value="NE">NE (Not Evaluated)</option>
      </select>
      <button type="submit">Create Species</button>
    </form>
  );
}
