import React from "react";
import MenuItem from "../UI/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AttachMoneySharpIcon from "@material-ui/icons/AttachMoneySharp";
import EditSharpIcon from "@material-ui/icons/EditSharp";
export default function DashBoard() {
  return (
    <div>
      <div
        style={{
          background: "gray",
          display: "flex",
          flexDirection: "column",
          width: "80px",
        }}
      >
        <MenuItem Icon={AccountCircleIcon} subheading="Toqeer" />
        <MenuItem Icon={DashboardIcon} active subheading="Dashboard" />
        <MenuItem Icon={AttachMoneySharpIcon} subheading="Transaction" />
        <MenuItem Icon={EditSharpIcon} subheading="Editing" />
      </div>
      <div style={{ flex: 1 }}> </div>
    </div>
  );
}
