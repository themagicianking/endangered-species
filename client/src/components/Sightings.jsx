import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// todo: italicize species name

function createData(
  date,
  time,
  nickname,
  species,
  location,
  healthy,
  timestamp
) {
  return { date, time, nickname, species, location, healthy, timestamp };
}

const SIGHTINGS = [
  {
    date: "07-18-1999",
    time: "6:00 PM",
    nickname: "Arcadia",
    species: "felis domesticus",
    location: "Richmond",
    healthy: true,
    timestamp: null,
  },
];

const rows = SIGHTINGS.map((sighting) =>
  createData(...Object.values(sighting))
);

export default function Sightings() {
  const [sightings, setSightings] = useState({});

  fetch("http://localhost:5000/sightings")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setSightings({
        date: data.date,
        time: data.time,
        nickname: data.animalName,
        species: data.species,
        location: data.location,
        healthy: data.healthy,
        timestamp: data.createdAt,
      });
    });

  return (
    <>
      {sightings.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Time of Sighting</TableCell>
                <TableCell>Nickname</TableCell>
                <TableCell>Species</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Healthy?</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.date}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.date + " " + row.time}
                  </TableCell>
                  <TableCell>"{row.nickname}"</TableCell>
                  <TableCell>{row.species}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{`${row.healthy}`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>loading data...</p>
      )}
    </>
  );
}
