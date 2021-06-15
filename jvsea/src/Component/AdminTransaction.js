import React, { useState } from "react";

import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core/";

import Border from "../UI/Border";
import Card from "../UI/Card";
// import MenuItem from "../UI/MenuItem";
import SideBar from "../UI/SideBar";
import MyButton from "../UI/MyButton";
import Spacer from "../UI/Spacer";
// import { TextField } from "@material-ui/icons";

export default function AdminTransaction() {
  const [cat, setcat] = React.useState(10);
  const [cat2, setcat2] = React.useState(10);
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flex: 1, marginLeft: "60px", marginRight: "60px" }}>
        <Spacer space="10" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Card Heading="Total Transactions" SubHeading="1450" Color="green" />
          <Card Heading="Pending Transactions" SubHeading="10" Color="green" />
          <Card Heading="Total Refund Amount" SubHeading="960 " Color="red" />
        </div>
        <Spacer space="10"></Spacer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Card
            Heading="Amount Sent by Advertisers"
            SubHeading="25000 "
            Color="green"
          />
          <Card
            Heading="Amount Sent to Promoters"
            SubHeading="145"
            Color="red"
          />
          <Card Heading="JVsea Earnings" SubHeading="256055" Color="red" />
        </div>

        <div style={{ fontWeight: "bold", fontSize: "25px" }}>
          Administrator Bank Details
        </div>
        <Border space="5" />
        <Spacer space="10" />
        <div style={{ display: "flex" }}>
          <TextField
            style={{ marginRight: "12px" }}
            value="HBL"
            id="standard-basic"
            label="Bank Name"
            variant="outlined"
          />
          <TextField
            style={{ marginRight: "12px" }}
            value="Toqeer Hussain"
            id="standard-basic"
            label="Account Holder"
            variant="outlined"
          />
          <TextField
            style={{ marginRight: "12px" }}
            value="12458963177"
            id="standard-basic"
            label="Account Number"
            variant="outlined"
          />
        </div>

        <div style={{ fontWeight: "bold", fontSize: "25px" }}>
          Verify Advertiser Transaction
        </div>
        <Border space="5" />
        <Spacer space="10" />
        <div style={{ display: "flex" }}>
          <TextField
            style={{ marginRight: "12px" }}
            value="HBL"
            id="standard-basic"
            label="Bank Name"
            variant="outlined"
          />
          <TextField
            style={{ marginRight: "12px" }}
            value="Toqeer Hussain"
            id="standard-basic"
            label="Account Holder"
            variant="outlined"
          />
          <TextField
            style={{ marginRight: "12px" }}
            value="12458963177"
            id="standard-basic"
            label="Account Number"
            variant="outlined"
          />
          <FormControl
            variant="outlined"
            style={{
              minWidth: "200px",
              marginRight: "12px",
            }}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={cat}
              onChange={(event) => setcat(event.target.value)}
              label="Status"
            >
              <MenuItem value={10}>Pending</MenuItem>
              <MenuItem value={20}>Recieved</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <MyButton>Verify</MyButton>
        </div>

        <div style={{ fontWeight: "bold", fontSize: "25px" }}>
          Verify Promoter Transaction
        </div>
        <Border space="5" />
        <Spacer space="10" />
        <div style={{ display: "flex" }}>
          <TextField
            style={{ marginRight: "12px" }}
            value="HBL"
            id="standard-basic"
            label="Bank Name"
            variant="outlined"
          />
          <TextField
            style={{ marginRight: "12px" }}
            value="Toqeer Hussain"
            id="standard-basic"
            label="Account Holder"
            variant="outlined"
          />
          <TextField
            style={{ marginRight: "12px" }}
            value="12458963177"
            id="standard-basic"
            label="Account Number"
            variant="outlined"
          />
          <FormControl
            variant="outlined"
            style={{
              minWidth: "200px",
              marginRight: "12px",
            }}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={cat2}
              onChange={(event) => setcat2(event.target.value)}
              label="Status"
            >
              <MenuItem value={20}>Pending</MenuItem>
              <MenuItem value={10}>Sent</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <MyButton>Verify</MyButton>
        </div>
      </div>
    </div>
  );
}
