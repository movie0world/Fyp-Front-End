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
    createData(
      "Kurta",
      "Asad12",
      "03/07/2021",
      "21:34:45",
      "Islamabad",
      3200,
      3520
    ),
    createData("Kurta", "ali25", "03/07/2021", "21:34:45", "Lahore", 4300, 415),
    createData(
      "Women-Kurta",
      "hamza12",
      "03/07/2021",
      "21:34:45",
      "Lahore",
      2015,
      8
    ),
    createData(
      "Purse",
      "toqeer45",
      "03/07/2021",
      "21:34:45",
      "Karachi",
      8541,
      450
    ),
    createData(
      "Kurta",
      "Test12",
      "03/07/2021",
      "21:34:45",
      "Peshwar",
      9678,
      45
    ),
  ];
  return (
    <div style={{ marginTop: "10px" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>#</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Product Name</TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                Brand Name
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Date
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Time
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Location
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Revenue
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Comission
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
