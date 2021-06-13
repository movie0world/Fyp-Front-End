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
import Spacer from "../UI/Spacer";

export default function MyTable({ promoter }) {
  //   console.log("test", test);
  function createData(Bname, Clicks, Conversions, Sales, Return, Returnp) {
    return { Bname, Clicks, Conversions, Sales, Return, Returnp };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 2.6, 8),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 3.5, 9),
    createData("Eclair", 262, 16.0, 24, 6.0, 8, 33),
    createData("Cupcake", 305, 3.7, 67, 4.3, 8, 64),
    createData("Gingerbread", 356, 16.0, 49, 3.9, 13, 6),
  ];
  return (
    <div style={{ marginTop: "10px" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>#</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                {promoter ? "Promoter ID" : "Brand Name"}
              </TableCell>
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
                Returns
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Returns %
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Action
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
                <TableCell
                  align="right"
                  style={{ color: "red", fontWeight: "600" }}
                >
                  Block
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Spacer space="20" />
    </div>
  );
}
