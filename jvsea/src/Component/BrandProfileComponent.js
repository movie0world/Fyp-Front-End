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
import Formik, { useFormik } from "formik";
// import MenuItem from "../UI/MenuItem";
import SideBar from "../UI/SideBar";
import Spacer from "../UI/Spacer";
import MyButton from "../UI/MyButton";

export default function BrandProfileComponent() {
  const formik = useFormik({
    initialValues: {
      brand: "",
      commission: "",
      description: "",
      category: "",
    },

    onSubmit: (values) => {},
  });

  const [cat, setcat] = React.useState(10);
  return (
    <div>
      <div style={{ fontWeight: "bold", fontSize: "25px" }}>Brand Detail</div>
      <Border space="5" />
      <Spacer space="10" />
      <div>
        <div style={{ display: "flex" }}>
          <TextField
            fullWidth
            style={{ marginRight: "12px" }}
            label="Brand Name"
            name="brand"
            variant="outlined"
            placeholder="Enter the Brand Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.brand}
          />
          <FormControl
            variant="outlined"
            fullWidth
            style={{ marginRight: "12px" }}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Category"
            >
              <MenuItem value={15}>Select the Category</MenuItem>
              <MenuItem value={10}>Technology</MenuItem>
              <MenuItem value={20}>Health</MenuItem>
              <MenuItem value={30}>News</MenuItem>
            </Select>
          </FormControl>

          <TextField
            style={{ marginRight: "12px" }}
            fullWidth
            type="number"
            id="standard-basic"
            label="Commission"
            variant="outlined"
            name="commission"
            placeholder="Enter the Commission"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.commission}
          />
          <TextField
            style={{ marginRight: "12px" }}
            fullWidth
            id="standard-basic"
            label="Description"
            variant="outlined"
            name="description"
            placeholder="Enter the Description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
        </div>
        <Spacer space="10" />
        <div style={{ display: "flex" }}>
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
              marginRight: "12px",
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

          <MyButton>Submit</MyButton>
        </div>
      </div>
      <Spacer space="10" /> <Spacer space="10" />
    </div>
  );
}
