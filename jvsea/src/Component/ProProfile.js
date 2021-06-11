import { TextField } from "@material-ui/core";
import React from "react";

import Border from "../UI/Border";
import Card from "../UI/Card";
import MenuItem from "../UI/MenuItem";
import SideBar from "../UI/SideBar";
import Spacer from "../UI/Spacer";

export default function Profile() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flex: 1, marginLeft: "60px", marginRight: "60px" }}>
        <Spacer space="20" />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontWeight: "bold", fontSize: "25px" }}>
            Personal Detail
          </div>
          <div
            style={{
              padding: "3px",
            }}
          >
            id:bilala458
          </div>
        </div>
        <Border space="5" />
        <Spacer space="10" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            fullWidth
            style={{ marginRight: "12px" }}
            value="Toqeer"
            id="standard-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            fullWidth
            style={{ marginRight: "12px" }}
            value="toqeer@gmail.com"
            id="standard-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            fullWidth
            style={{ marginRight: "12px" }}
            value="+923245242846"
            id="standard-basic"
            label="Phone"
            variant="outlined"
          />
          <TextField
            fullWidth
            style={{ marginRight: "12px" }}
            value="*********"
            id="standard-basic"
            label="Password"
            variant="outlined"
          />
        </div>
        <Spacer space="20" />

        <div style={{ fontWeight: "bold", fontSize: "25px" }}>Bank Detail</div>

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
      </div>
    </div>
  );
}
