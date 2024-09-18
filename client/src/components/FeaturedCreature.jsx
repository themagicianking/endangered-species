// chooses one individual at random to display (write code to get random sql table entry)
// displays: creature's name, species, conservation status, and health status
// display extras/stretch goals: photo of actual creature (if using api/possible) or photo of that type of animal, description of species
import { CardHeader } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const CREATUREINFO = {
  name: "Arcadia",
  species: "felis domesticus",
  cscode: "CE",
  healthy: true,
};

export default function FeaturedCreature() {
  return (
    <Card>
      <CardContent>"{CREATUREINFO.name}"</CardContent>
      <CardContent>{CREATUREINFO.species}</CardContent>
      <CardContent>{CREATUREINFO.cscode}</CardContent>
      <CardContent>{`${CREATUREINFO.healthy}`}</CardContent>
    </Card>
  );
}
