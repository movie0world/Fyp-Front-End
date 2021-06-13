import {
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  Menu,
  NativeSelect,
  Select,
  TextField,
  withStyles,
} from "@material-ui/core";
import React from "react";
import MenuItem from "@material-ui/core/MenuItem";

import Border from "../UI/Border";
import Card from "../UI/Card";
// import MenuItem from "../UI/MenuItem";
import SideBar from "../UI/SideBar";
import Spacer from "../UI/Spacer";

export default function BrandProfile() {
  //   const classes = useStyles();

  const [cat, setcat] = React.useState(10);
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
        <div style={{ fontWeight: "bold", fontSize: "25px" }}>Brand Detail</div>
        <Border space="5" />
        <Spacer space="10" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <TextField
            style={{ marginRight: "12px" }}
            value="Toqeer"
            id="standard-basic"
            label="Name"
            variant="outlined"
          />
          <FormControl
            variant="outlined"
            style={{ minWidth: "200px", marginRight: "12px" }}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={cat}
              onChange={(event) => setcat(event.target.value)}
              label="Category"
            >
              <MenuItem value={10}>Technology</MenuItem>
              <MenuItem value={20}>Health</MenuItem>
              <MenuItem value={30}>News</MenuItem>
            </Select>
          </FormControl>

          <TextField
            style={{ marginRight: "12px" }}
            value="10%"
            id="standard-basic"
            label="Comission"
            variant="outlined"
          />
          <TextField
            style={{ marginRight: "12px" }}
            value="lorem ipsom sklfjlskfjskld"
            id="standard-basic"
            label="Description"
            variant="outlined"
          />
          <TextField
            style={{ marginRight: "12px" }}
            value="< script src='https://toqeer.js'/>"
            id="standard-basic"
            label="Integration Code"
            variant="outlined"
          />
          <FormControl
            variant="outlined"
            style={{
              minWidth: "200px",
              marginRight: "12px",
              marginTop: "12px",
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
              <MenuItem value={10}>Active</MenuItem>
              <MenuItem value={20}>Publish</MenuItem>
              <MenuItem value={30}>Pending</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Spacer space="10" /> <Spacer space="10" />
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
