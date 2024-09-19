// chooses one individual at random to display (write code to get random sql table entry)
// displays: creature's name, species, and conservation status
// display extras/stretch goals: photo of actual creature (if using api/possible) or photo of that type of animal, description of species
import { CardHeader } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState, useEffect } from "react";

// const CREATUREINFO = {
//   name: "Arcadia",
//   species: "felis domesticus",
//   cscode: "CE",
// };

export default function FeaturedCreature() {
  const [creature, setCreature] = useState([]);

  async function loadCreature() {
    await fetch("http://localhost:5000/featuredcreature")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCreature(data);
      });
  }

  useEffect(() => {
    loadCreature();
  }, []);

  return (
    <>
      {" "}
      {creature ? (
        <Card>
          <CardContent>"{creature.animalname}"</CardContent>
          <CardContent>{creature.scientificname}</CardContent>
          <CardContent>{creature.cscode}</CardContent>
        </Card>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
