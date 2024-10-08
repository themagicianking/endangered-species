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
  species VARCHAR(255),
  tracker VARCHAR(255),
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sightings (
  id SERIAL PRIMARY KEY,
  datetime TIMESTAMP,
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
    cscode
  )
VALUES
  (
    'African Wild Dog',
    'Lycaon pictus',
    1409,
    'EN'
  ),
  (
    'Hector''s Dolphin',
    'Cephalorhynchus hectori',
    7000,
    'EN'
  ),
  (
    'Marine Iguana',
    'Amblyrhynchus cristatus',
    210000,
    'VU'
  ),
  (
    'Cat',
    'Felis domesticus',
    600000000,
    'LC'
  );

INSERT INTO
  animals(animalName, species, tracker)
VALUES
  ('Arcadia', 'Cat', 'Thane'),
  ('Cerberus', 'Cat', 'Thane');

INSERT INTO
  sightings(
    datetime,
    animalName,
    location,
    healthy,
    email
  )
VALUES
  (
    'July 18, 1999, 01:11:00',
    'Arcadia',
    'Richmond',
    true,
    'tmoonder@gmail.com'
  );