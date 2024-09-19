import express from "express";
import cors from "cors";
import pkg from "pg";
import "dotenv/config";

const APP = express();
const PORT = 5000;
const { Pool } = pkg;
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
});

APP.use(cors());
APP.use(express());

APP.get("/sightingsdata", async (req, res) => {
  const DATABASE = await pool.connect();
  DATABASE.release();
  const SIGHTINGSDATA = await DATABASE.query(
    "SELECT sightings.id, sightings.datetime, sightings.animalName, species.commonName, species.scientificName, sightings.location, sightings.healthy, animals.tracker FROM sightings INNER JOIN animals ON animals.animalName = sightings.animalName INNER JOIN species ON animals.species = species.commonName;"
  );
  res.json(SIGHTINGSDATA.rows);
});

APP.get("/species", async (req, res) => {
  const DATABASE = await pool.connect();
  DATABASE.release();
  const SPECIES = await DATABASE.query("SELECT * FROM species");
  res.json(SPECIES.rows);
});

APP.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
