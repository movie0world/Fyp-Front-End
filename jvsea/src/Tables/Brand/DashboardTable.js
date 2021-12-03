import React, { useState, useEffect } from "react";

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
import ApiCall from "../../BackendCall";

const getdate = (value) => {
  var today = new Date(value);
  return (
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
  );
};
const gettime = (value) => {
  var today = new Date(value);
  return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
};

export default function MyTable({ promoter }) {
  const [data, setdata] = useState([]);

  const getdata = async () => {
    const response = await ApiCall.get(`/salesadver`);
    setdata(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getdata();
  }, []);
  //   console.log("test", test);
  function createData(Bname, Clicks, Conversions, Sales, Return, Returnp, com) {
    return { Bname, Clicks, Conversions, Sales, Return, Returnp, com };
  }

  const rows = [
    createData("Kurta", "Asad12", "03/07/2021", "21:34:45", 3200, 3520, 8),
    createData("Kurta", "ali25", "03/07/2021", "21:34:45", 4300, 415, 9),
    createData("Women-Kurta", "hamza12", "03/07/2021", "21:34:45", 2015, 8, 33),
    createData("Purse", "toqeer45", "03/07/2021", "21:34:45", 8541, 450, 64),
    createData("Kurta", "Test12", "03/07/2021", "21:34:45", 9678, 45, 6),
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
                Promoter id
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Date
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Time
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Revenue
              </TableCell>

              <TableCell style={{ fontWeight: "bold" }} align="right">
                Commission
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">
                  {" "}
                  {row.products.map((item) => (
                    <p>
                      {" "}
                      <strong>
                        {`${item.name}  ,`}{" "}
                        <span style={{ fontSize: "10px" }}> &#10005;</span>{" "}
                        <span>{item.qty}</span>{" "}
                      </strong>
                    </p>
                  ))}
                </TableCell>
                <TableCell align="right">{row.promoterId.pro_id}</TableCell>
                <TableCell align="right">{getdate(row.createdAt)}</TableCell>
                <TableCell align="right">{gettime(row.createdAt)}</TableCell>
                <TableCell align="right">
                  <span>&#8360;</span>{" "}
                  {`${row.products.reduce(
                    (num1, num2) =>
                      parseFloat(num2.price.replace(/,/g, "")) + num1,
                    0
                  )}`}
                </TableCell>

                <TableCell align="right">
                  {" "}
                  <span>&#8360;</span>{" "}
                  {`${Math.floor(
                    (row.webid.commission *
                      row.products.reduce(
                        (num1, num2) =>
                          parseFloat(num2.price.replace(/,/g, "")) + num1,
                        0
                      )) /
                      100
                  )}`}
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
