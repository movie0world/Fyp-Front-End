import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import BoxShadow from "../UI/BoxShadow";
import Center from "../UI/Center";
import MyButton from "../UI/MyButton";
import Spacer from "../UI/Spacer";
import * as Yup from "yup";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";

const Uservalidation = Yup.object({
  Email: Yup.string().email("Invalid email address").required(),
  Name: Yup.string().min(6).max(10).required(),
  Password: Yup.string()
    .matches(
      "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
      "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
    )
    .required(),
});

export default function Signup() {
  const history = useHistory();
  const [type, settype] = useState("advertiser");
  const [success, setsuccess] = useState(false);
  const action = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      Email: "",
      Name: "",
      Password: "",
    },
    validationSchema: Uservalidation,
    onSubmit: (values) => {
      setsuccess(true);
      // action.setlogin(true);
      setsuccess(true);
      setTimeout(() => {
        history.replace("/Login");
      }, 2000);
    },
  });
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
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={success}
        onClose={() => setsuccess(false)}
      >
        <MuiAlert variant="filled" elevation="6" severity="success">
          Your Account Has been Created.
        </MuiAlert>
      </Snackbar>
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
                label="Email"
                name="Name"
                variant="outlined"
                placeholder="Enter the Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Name}
              />
            </Center>
            {formik.touched.Name && formik.errors.Name ? (
              <div style={{ color: "#B00020" }}>{formik.errors.Name}</div>
            ) : null}
            <Spacer space={10} />
            <Center>
              <TextField
                fullWidth
                id="standard-basic"
                label="Email"
                name="Email"
                variant="outlined"
                placeholder="Enter the Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Email}
              />
            </Center>
            {formik.touched.Email && formik.errors.Email ? (
              <div style={{ color: "#B00020" }}>{formik.errors.Email}</div>
            ) : null}
            <Spacer space={10} />
            <Center>
              <TextField
                fullWidth
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Password}
                id="standard-basic"
                label="Password"
                name="Password"
                variant="outlined"
                placeholder="Enter the Password"
              />
            </Center>
            {formik.touched.Password && formik.errors.Password ? (
              <div style={{ color: "#B00020" }}>{formik.errors.Password}</div>
            ) : null}
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
                    style={{ marginTop: "5px" }}
                    type="radio"
                    value="promoter"
                    checked={type == "promoter"}
                    name="user"
                    onChange={() =>
                      settype(type == "advertiser" ? "promoter" : "advertiser")
                    }
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
                    value="advertiser"
                    checked={type == "advertiser"}
                    name="user"
                    onChange={() =>
                      settype(type == "advertiser" ? "promoter" : "advertiser")
                    }
                  />
                  <span style={{ marginLeft: "10px" }}>
                    <span style={{ fontWeight: "500" }}>Advertiser</span>
                    <p style={{ color: "#737070" }}>Manage Brand</p>
                  </span>
                </div>
              </div>
            </Center>
            <Spacer space={5} />
            <MyButton
              style={{ display: "flex" }}
              onPress={() => formik.handleSubmit()}
            >
              SIGN UP
            </MyButton>
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
