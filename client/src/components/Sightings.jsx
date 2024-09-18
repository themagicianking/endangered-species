import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// todo: convert timestampt to human readable date

function createData(date, time, nickname, location, healthy, timestamp) {
  return { date, time, nickname, location, healthy, timestamp };
}

const SIGHTINGS = [
  {
    date: "07-18-1999",
    time: "6:00 PM",
    nickname: "Arcadia",
    location: "Richmond",
    healthy: true,
    timestamp: null,
  },
];

const rows = SIGHTINGS.map((sighting) =>
  createData(...Object.values(sighting))
);

export default function Sightings() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Time of Sighting</TableCell>
            <TableCell>Nickname</TableCell>
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
              <TableCell>{row.nickname}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{`${row.healthy}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
