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

export default function Signup() {
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
        <div style={{ width: "370px", padding: "40px" }}>
          <div>
            <Center>
              <h2 style={{ textDecoration: "underline" }}>SIGN UP</h2>
            </Center>
            <Spacer space={30} />
            <Center>
              <TextField
                fullWidth
                id="standard-basic"
                label="Name"
                variant="outlined"
                placeholder="Enter the Name"
              />
            </Center>
            <Spacer space={10} />
            <Center>
              <TextField
                fullWidth
                id="standard-basic"
                label="Email"
                variant="outlined"
                placeholder="Enter the Eamil"
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
            <MyButton style={{ display: "flex" }}>SIGN UP</MyButton>
            <Spacer space={5} />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span style={{ color: "#737070" }}>Already a User? </span>
              <Spacer space={3} />
              <span style={{ color: "blue" }}> Sign in</span>
            </div>
          </div>
        </div>
      </BoxShadow>
    </div>
  );
}
