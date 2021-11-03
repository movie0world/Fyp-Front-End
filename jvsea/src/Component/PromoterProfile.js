import React, { useState } from "react";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import ApiCall from "../BackendCall";
import Spacer from "../UI/Spacer";

import Border from "../UI/Border";

export default function PromoterProfile() {
  const [data, setdata] = useState({});

  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },

    onSubmit: (values) => {},
  });
  const getdata = async () => {
    const response = await ApiCall.get("/promoterid");
    setdata(response.data);
    formik.values.name = response.data.name;

    // if (data && data.user) {
    //   formik.setFieldValue("name", data.user.name);
    //   formik.setFieldValue("email", data.user.email);
    //   formik.setFieldValue("phone", data.user.phone);
    // }
  };
  console.log(data);
  React.useEffect(() => {
    getdata();
  }, []);

  formik.values.name = data.user.name;
  console.log(formik.initialValues);

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
          {data.pro_id}
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
          label="Password"
          variant="outlined"
          name="Password"
          placeholder="Enter Your New Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
      </div>
    </div>
  );
}
