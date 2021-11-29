import { TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React, { useState } from "react";
import MyButton from "../UI/MyButton";
import ApiCall from "../BackendCall";

export default function Probankdetail() {
  const [data, setdata] = useState(null);
  const formik = useFormik({
    enableReinitialize: true,

    initialValues: data || {
      bankname: "",
      ownername: "",
      accountnumber: "",
    },

    onSubmit: async (values) => {
      const response = await ApiCall.post("/bankdetail", values);
      console.log("return value from bank update", response);
    },
  });

  const getdata = async () => {
    const response = await ApiCall.get("/bankdetail");
    console.log("incomming data into bank detail", response);
    if (!response.data) {
      return;
    }
    setdata({
      bankname: response.data.bankName,
      ownername: response.data.ownerName,
      accountnumber: response.data.accountNumber,
    });
  };
  console.log(data);
  React.useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <TextField
          style={{ marginRight: "12px" }}
          name="bankname"
          id="standard-basic"
          label="Bank Name"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bankname}
        />
        <TextField
          style={{ marginRight: "12px" }}
          name="ownername"
          id="standard-basic"
          label="Account Holder"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.ownername}
        />
        <TextField
          style={{ marginRight: "12px" }}
          name="accountnumber"
          id="standard-basic"
          label="Account Number"
          variant="outlined"
          type="Number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.accountnumber}
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
