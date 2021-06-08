import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import React from "react";
import BoxShadow from "../UI/BoxShadow";
import Center from "../UI/Center";
import MyButton from "../UI/MyButton";
import Spacer from "../UI/Spacer";

export default function LogIn() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "580px",
        border: "1px solid black",
      }}
    >
      <BoxShadow>
        <div style={{ width: "400px", padding: "40px" }}>
          <div>
            <Center>
              <h2 style={{ textDecoration: "underline" }}>SIGN IN</h2>
            </Center>
            <Spacer space={30} />
            <Center>
              <TextField
                fullWidth
                id="standard-basic"
                label="Email"
                variant="outlined"
                placeholder="Enter the Email"
              />
            </Center>
            <Spacer space={10} />
            <Center>
              <TextField
                fullWidth
                id="standard-basic"
                label="Password"
                variant="outlined"
                placeholder="Enter the Password"
              />
            </Center>
            <Spacer space={10} />
            <Center>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                <div style={{ display: "flex" }}>
                  <input
                    style={{ marginTop: "5px" }}
                    type="radio"
                    value="Male"
                    name="gender"
                  />
                  <span style={{ marginLeft: "10px" }}>
                    <span style={{ fontWeight: "500" }}>Promoter</span>
                    <p style={{ color: "#737070" }}>Promoter Brands</p>
                  </span>
                </div>
                <div style={{ display: "flex" }}>
                  <input
                    style={{ marginTop: "5px" }}
                    type="radio"
                    value="Male"
                    name="gender"
                  />
                  <span style={{ marginLeft: "10px" }}>
                    <span style={{ fontWeight: "500" }}>Advertiser</span>
                    <p style={{ color: "#737070" }}>Manage Brand</p>
                  </span>
                </div>
              </div>
            </Center>
            <Spacer space={5} />
            <MyButton style={{ display: "flex" }}>SIGN IN</MyButton>
            <Spacer space={5} />
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <span style={{ color: "#737070" }}>Forgot Password?</span>
              <span style={{ color: "#737070" }}>Not a member yet?</span>
            </div>
          </div>
        </div>
      </BoxShadow>
    </div>
  );
}
