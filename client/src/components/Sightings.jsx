import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// todo: italicize species name

function createData(sighting) {
  const readableDate = new Date (sighting.datetime).toLocaleString();
  console.log(readableDate);
  let sightingData = {
    id: sighting.id,
    timeOfSighting: readableDate,
    nickname: "",
    commonName: "",
    scientificName: "",
    location: "",
    healthy: "",
    tracker: "",
  };
  return {
    ...sightingData,
  };
}

export default function Sightings() {
  const [sightings, setSightings] = useState([]);

  async function loadSightings() {
    await fetch("http://localhost:5000/sightings")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSightings(data);
      });
  }

  useEffect(() => {
    loadSightings();
  }, [sightings]);

  const rows = sightings.map((sighting) => createData(sighting));

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
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.timeOfSighting}
                  </TableCell>
                  <TableCell>"{row.nickname}"</TableCell>
                  <TableCell>
                    {row.commonName + " " + row.scientificName}
                  </TableCell>
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
