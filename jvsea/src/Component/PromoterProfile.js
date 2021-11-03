import React from "react";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import ApiCall from "../BackendCall";
import Spacer from "../UI/Spacer";
export default function PromoterProfile() {
  React.useEffect(() => {
    ApiCall.get("/promoterid")
      .then((res) => console.log(res))
      .catch((e) => console.log(e.response.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
    },

    onSubmit: (values) => {},
  });
  formik.initialValues.name = "Toqeer hussain";
  console.log(formik.initialValues);

  return (
    <div>
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
      </div>
    </div>
  );
}
