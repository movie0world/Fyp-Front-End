import React, { useState } from "react";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import ApiCall from "../BackendCall";
import Spacer from "../UI/Spacer";

import Border from "../UI/Border";
import MyButton from "../UI/MyButton";

export default function PromoterProfile() {
  const [data, setdata] = useState(null);
  const [proid, setproid] = useState(null);

  const formik = useFormik({
    enableReinitialize: true,

    initialValues: data || {
      name: "",
      email: "",
      phone: "",
      password: "",
    },

    onSubmit: (values) => {},
  });
  const getdata = async () => {
    const response = await ApiCall.get("/promoterid");
    console.log("incomming data", response);
    setdata({
      name: response.data.user.name,
      email: response.data.user.email,
      phone: response.data.user.phone,
    });
    setproid(response.data.pro_id);
  };
  console.log(data);
  React.useEffect(() => {
    getdata();
  }, []);

  // formik.values.name = data.user.name/;
  console.log("outside", data);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontWeight: "bold", fontSize: "25px" }}>
          Personal Detail
        </div>
        <div
          style={{
            padding: "3px",
          }}
        >
          {proid}
        </div>
      </div>
      <Border space="5" />
      <Spacer space="10" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          fullWidth
          style={{ marginRight: "12px" }}
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          id="standard-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          fullWidth
          style={{ marginRight: "12px" }}
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          id="standard-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          fullWidth
          style={{ marginRight: "12px" }}
          id="standard-basic"
          label="Phone"
          variant="outlined"
          name="Phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />

        <TextField
          fullWidth
          style={{ marginRight: "12px" }}
          id="standard-basic"
          label="New Password"
          variant="outlined"
          name="Phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
      </div>
      <div style={{ float: "right", marginTop: "15px", marginBottom: "10px" }}>
        <MyButton
          style={{ display: "flex" }}
          onPress={() => formik.handleSubmit()}
        >
          Update
        </MyButton>
      </div>{" "}
    </div>
  );
}
