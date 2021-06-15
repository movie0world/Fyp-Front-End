import React, { useState } from "react";
import MenuItem from "../UI/MenuItem";

import Card from "../UI/Card";
import Spacer from "../UI/Spacer";
import Search from "../UI/Search";
import Border from "../UI/Border";
import Table from "../UI/Table";
import TableBrand from "../UI/TableBrand";
import Blockeduser from "../UI/Blockeduser";

// import { BorderAll } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import { InputAdornment, TextField } from "@material-ui/core";
import SideBar from "../UI/SideBar";

export default function AdminDashBoard() {
  const [current, setcurrent] = useState("Brand");

  const selectiontable = () => {
    if (current == "Brand") return <TableBrand />;
    else if (current == "Blocked Users") return <Blockeduser />;
    else return <TableBrand promoter />;
  };
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flex: 1, marginLeft: "60px", marginRight: "60px" }}>
        <Spacer space="10" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Card Heading="Total Sale" SubHeading="1450" Color="green" />
          <Card Heading="Total Revenue" SubHeading="2540" Color="green" />
          <Card Heading="Profit" SubHeading="6841522" Color="green" />
          <Card Heading="Refunds" SubHeading="618521" Color="red" />
          <Card Heading="Total Users" SubHeading="6135813" Color="red" />
        </div>
        <Spacer space="10" />
        <div style={{ display: "flex" }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              background: "#242333",
              padding: "8px",
              marginRight: "3px",
              background: current == "Brand" ? "#242333" : "gray",
              color: current == "Brand" ? "white" : "#242333",
            }}
            onClick={() => setcurrent("Brand")}
          >
            Brand
          </div>
          <div
            onClick={() => setcurrent("Promoters")}
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              background: "#242333",
              padding: "8px",
              marginRight: "3px",
              background: current == "Promoters" ? "#242333" : "gray",
              color: current == "Promoters" ? "white" : "#242333",
            }}
          >
            Promoters
          </div>
          <div
            onClick={() => setcurrent("Blocked Users")}
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              background: current == "Blocked Users" ? "#242333" : "gray",
              color: current == "Blocked Users" ? "white" : "#242333",
              padding: "8px",
            }}
          >
            Blocked Users
          </div>
        </div>
        <Border space="5" />

        <Spacer space="10" />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              marginBottom: "5px",
            }}
          >
            <TextField
              id="standard-basic"
              Heading="Brands"
              type="text"
              style={{ marginRight: "5px" }}
              label="Search"
              placeholder="Search Here"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <div
              style={{
                background: "green",
                color: "white",
                padding: "3px",
                // alignSelf: "center",
              }}
            >
              EXPORT
            </div>
          </div>
        </div>
        <Border space="4" />
        {selectiontable()}
      </div>
    </div>
  );
}
