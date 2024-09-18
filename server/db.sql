DROP TABLE IF EXISTS species,
animals,
sightings;

CREATE TABLE species (
  id SERIAL PRIMARY KEY,
  commonName VARCHAR(255),
  scientificName VARCHAR(255),
  wildNum INTEGER,
  cscode VARtiCHAR(2),
  timestamp TIMESTAMP
);

CREATE TABLE animals (
  id SERIAL PRIMARY KEY,
  animalName VARCHAR(255),
  tracker VARCHAR(255),
  timestamp TIMESTAMP
);

CREATE TABLE sightings (
  id SERIAL PRIMARY KEY,
  date DATE,
  time TIME,
  animalName VARCHAR(255),
  location VARCHAR(255),
  healthy BOOLEAN,
  email VARCHAR(255),
  timestamp TIMESTAMP
);