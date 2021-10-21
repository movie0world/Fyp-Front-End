import {
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  Menu,
  NativeSelect,
  Select,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
  DialogActions,
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
import ApiCall from "../BackendCall";

export default function BrandProfileComponent() {
  const formik = useFormik({
    initialValues: {
      brand: "",
      commission: "",
      description: "",
      category: "10",
      domain: "",
    },

    onSubmit: (values) => {
      ApiCall.post("/website", values).then((result) => {
        setwebid(result.data.webid);
        setwebsite(result.data.website);
        setopen(true);
      });
    },
  });

  const [open, setopen] = React.useState(false);
  const [webid, setwebid] = React.useState("");
  const [website, setwebsite] = React.useState("");
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
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Category"
            >
              <MenuItem value={10}>Select the Category</MenuItem>
              <MenuItem value={20}>Technology</MenuItem>
              <MenuItem value={30}>Health</MenuItem>
              <MenuItem value={40}>News</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            style={{ marginRight: "12px" }}
            label="Domain Url"
            type="url"
            name="domain"
            variant="outlined"
            placeholder="exmaple.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.domain}
          />
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
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <MyButton onPress={formik.submitForm}>Submit</MyButton>
        </div>
      </div>
      <Spacer space="10" /> <Spacer space="10" />
      <Dialog
        open={open}
        onClose={() => setopen(false)}
        // aria-labelledby="simple-modal-title"
        // aria-describedby="simple-modal-description"
      >
        <DialogContent>
          <DialogTitle id="alert-dialog-title">
            {
              "To track Your webiste, place the following code in the head section of your website"
            }
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div
                style={{
                  background: "#242323",
                  padding: "15px",
                  color: "white",
                }}
              >
                <textarea
                  cols={60}
                  spellCheck={false}
                  style={{
                    background: "inherit",
                    resize: "none",
                    border: "none",
                    offset: "none",
                    color: "white",
                    focus: "none",
                  }}
                  readOnly
                  className="webscript"
                  cols="60"
                  defaultValue={`<script async defer data-website-id="${webid}" src="${document.location.origin}/tracker.js/"></script>`}
                />
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={() => setopen(false)}
              color="primary"
            >
              Copy
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}
