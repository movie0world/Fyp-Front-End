import React from "react";

import {
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import Spacer from "../../UI/Spacer";

export default function MyTable({ promoter }) {
  //   console.log("test", test);
  function createData(Bname, Clicks, Conversions, Sales, Return, Returnp) {
    return { Bname, Clicks, Conversions, Sales, Return, Returnp };
  }

  const rows = [
    createData("03/07/2021", "21:34:45", "Sent", "Comission", "Verified", 3520),
    createData("03/07/2021", "21:34:45", "Sent", "Comission", "Verified", 415),
    createData(
      "03/07/2021",
      "21:34:45",
      "Recieved",
      "Comission",
      "Verified",
      45
    ),
    createData("03/07/2021", "21:34:45", "Sent", "Comission", "Verified", 450),
    createData("03/07/2021", "21:34:45", "Sent", "Refund", "Verified", 45),
  ];
  return (
    <div style={{ marginTop: "10px" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>#</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Date</TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                Time
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Type
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Com/Refund
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Status
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{row.Bname}</TableCell>
                <TableCell align="right">{row.Clicks}</TableCell>
                <TableCell align="right">{row.Conversions}</TableCell>
                <TableCell align="right">{row.Sales}</TableCell>
                <TableCell align="right">{row.Return}</TableCell>
                <TableCell align="right">{row.Returnp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Spacer space="20" />
    </div>
  );
}
