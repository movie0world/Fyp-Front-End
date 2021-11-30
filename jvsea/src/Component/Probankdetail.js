import { TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React, { useState } from "react";
import MyButton from "../UI/MyButton";
import ApiCall from "../BackendCall";
import * as Yup from "yup";

const bankvalidation = Yup.object({
  bankname: Yup.string().max(20, "length should less than 20").required(),
  ownername: Yup.string().required(),
  accountnumber: Yup.number().positive().integer().required(),
});

export default function Probankdetail() {
  const [data, setdata] = useState(null);
  const formik = useFormik({
    enableReinitialize: true,

    initialValues: data || {
      bankname: "",
      ownername: "",
      accountnumber: "",
    },
    validationSchema: bankvalidation,
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
        <div style={{ display: "flex", flexDirection: "column" }}>
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
          {formik.touched.bankname && formik.errors.bankname ? (
            <div style={{ color: "#B00020" }}>{formik.errors.bankname}</div>
          ) : null}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
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
          {formik.touched.ownername && formik.errors.ownername ? (
            <div style={{ color: "#B00020" }}>{formik.errors.ownername}</div>
          ) : null}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
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
          {formik.touched.accountnumber && formik.errors.accountnumber ? (
            <div style={{ color: "#B00020" }}>
              {formik.errors.accountnumber}
            </div>
          ) : null}
        </div>
      </div>
      <div style={{ float: "right", marginTop: "0px", marginBottom: "10px" }}>
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
