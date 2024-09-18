DROP TABLE IF EXISTS species,
animals,
sightings;

CREATE TABLE species (
  id SERIAL PRIMARY KEY,
  commonName VARCHAR(255),
  scientificName VARCHAR(255),
  wildNum INTEGER,
  cscode VARCHAR(2),
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE animals (
  id SERIAL PRIMARY KEY,
  animalName VARCHAR(255),
  tracker VARCHAR(255),
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sightings (
  id SERIAL PRIMARY KEY,
  date DATE,
  time TIME,
  animalName VARCHAR(255),
  location VARCHAR(255),
  healthy BOOLEAN,
  email VARCHAR(255),
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
  species (
    commonName,
    scientificName,
    wildNum,
    cscode,
    timestamp
  )
VALUES
  (
    "African Wild Dog",
    "Lycaon pictus",
    1409,
    "EN",
    SELECT
      NOW()
  ),
  (
    "Hector's Dolphin",
    "Cephalorhynchus hectori",
    7000,
    "EN",
    SELECT
      NOW()
  ),
  (
    "Marine Iguana",
    "Amblyrhynchus cristatus",
    210000,
    "VU",
    SELECT
      NOW()
  );