import React from "react";
import MenuItem from "../UI/MenuItem";

import Card from "../UI/Card";
import Spacer from "../UI/Spacer";
import Search from "../UI/Search";
import Border from "../UI/Border";
import Table from "../UI/Table";
// import { BorderAll } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import { InputAdornment, TextField } from "@material-ui/core";
import SideBar from "../UI/SideBar";

export default function ProDashBoard() {
  console.log("promoter");
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flex: 1, marginLeft: "60px", marginRight: "60px" }}>
        <Spacer space="10" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Card Heading="Total Sale" SubHeading="1450" Color="green" />
          <Card Heading="Total Sale" SubHeading="1450" Color="green" />
          <Card Heading="Total Sale" SubHeading="1450" Color="green" />
          <Card Heading="Total Sale" SubHeading="1450" Color="red" />
          <Card Heading="Total Sale" SubHeading="1450" Color="red" />
        </div>
        <Spacer space="10" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontWeight: "bold", fontSize: "25px" }}>
            Recent Sales
          </div>
          <div
            style={{
              background: "green",
              color: "white",
              padding: "3px",
              alignSelf: "center",
            }}
          >
            EXPORT
          </div>
        </div>
        <Border space="5" />
        <Table />
        <Spacer space="10" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "25px" }}>TOP Brands</div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "Center",
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
        <Table />
      </div>
    </div>
  );
}
