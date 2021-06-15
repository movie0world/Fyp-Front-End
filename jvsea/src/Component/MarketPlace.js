import {
  Input,
  InputAdornment,
  IconButton,
  TextField,
  Modal,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
  DialogActions,
} from "@material-ui/core";
import React, { useState, useContext } from "react";
import MyButton from "../UI/MyButton";

import Border from "../UI/Border";
import Spacer from "../UI/Spacer";
import BrandStat from "../UI/BrandStat";
import Search from "../UI/Search";
import { useLocation } from "react-router";
import Nav from "./Nav";
import { UserContext } from "../App";

let category = [
  "Clothes",
  "Shoes",
  "Jewlary",
  "Electronics",
  "Bookings",
  "Courses",
  "Furniture",
];

export default function MarketPlace() {
  const [open, setopen] = useState(false);
  const [alert, setalert] = useState(false);
  const [Cat, setCat] = useState(category[0]);
  const action = useContext(UserContext);

  return (
    <div>
      <div style={{ display: "flex", marginTop: "25px" }}>
        <div style={{ width: "15%", marginTop: "24px" }}>
          <MyButton
            fillColor="yellow"
            style={{
              fontWeight: "600",
              display: "flex",
              margin: "0px",
            }}
          >
            CATEGORIES
          </MyButton>
          {category.map((value) => (
            <MyButton
              fillColor={value == Cat ? "#28228c" : null}
              style={{
                display: "flex",
                color: "white",
                margin: "0px",
                border: "0px",
                justifyContent: "flex-start",
                borderBottom: "1px solid white",
              }}
              onPress={() => setCat(value)}
            >
              {value}
            </MyButton>
          ))}
        </div>
        <div style={{ flex: 1, marginRight: "40px", marginLeft: "20px" }}>
          <Search
            Heading="Brands"
            type="text"
            label="Search"
            placeholder="Search Here"
          />
          <Border space={5} />
          <div>
            <Spacer space="15" />
            <div
              style={{
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              Adidas
            </div>
            <Spacer space="5" />
            <div style={{ display: "flex" }}>
              <div
                style={{ flex: 0.9, textAlign: "justify", marginRight: "25px" }}
              >
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>

              <div style={{ flex: 0.2 }}>
                <MyButton
                  style={{ display: "flex" }}
                  onPress={() => {
                    action.user == "promoter" ? setopen(true) : setalert(true);
                  }}
                >
                  Promote
                </MyButton>
              </div>
            </div>
            <Spacer space="5" />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <BrandStat first="Rank" Second="25" />
              <BrandStat first="Sales" Second="2300" />
              <BrandStat first="Conversion" Second="38" per />
              <BrandStat first="Return" Second="3" per />
              <BrandStat first="Catetory" Second={Cat} />
              <BrandStat first="Comission" Second="23" per />
            </div>
            <Border />
          </div>
        </div>

        <Dialog
          open={open}
          onClose={() => setopen(false)}
          // aria-labelledby="simple-modal-title"
          // aria-describedby="simple-modal-description"
        >
          <DialogContent>
            <DialogTitle id="alert-dialog-title">
              {"Your Affiliate Link"}
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
                  <span>https://material-ui.com/components/dialogs/</span>
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

        <Dialog
          open={alert}
          onClose={() => setalert(false)}
          // aria-labelledby="simple-modal-title"
          // aria-describedby="simple-modal-description"
        >
          <DialogContent>
            <DialogTitle id="alert-dialog-title">
              {"Your Affiliate Link"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                You have to Login as a Promoter to Promote Prodct
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                onClick={() => setalert(false)}
                color="primary"
              >
                Login
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
