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
  function createData(Bname, Clicks, Conversions, Sales, Return, Returnp, com) {
    return { Bname, Clicks, Conversions, Sales, Return, Returnp, com };
  }

  const rows = [
    createData("Khaadi", 25, 6, "3%", 3200, 20, "5%"),
    createData("JJ", 250, 8, "5%", 4300, 5, "2%"),
    createData("Gul Ahmad", 52, 6, "9%", 2015, 8, "9%"),
    createData("Borjan", 96, 4, "9%", 8541, 5, "2%"),
    createData("Daewoo", 85, 9, "8%", 9678, 4, "1%"),
  ];
  return (
    <div style={{ marginTop: "10px" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>#</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Brand Name</TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                Clicks
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Sales
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Conversions
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Comissions
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Return
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Return %
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
                <TableCell align="right">{row.com}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Spacer space="20" />
    </div>
  );
}
