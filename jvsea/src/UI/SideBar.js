import React from "react";
import MenuItem from "./MenuItem";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AttachMoneySharpIcon from "@material-ui/icons/AttachMoneySharp";
import EditSharpIcon from "@material-ui/icons/EditSharp";

export default function SideBar() {
  return (
    <div
      style={{
        background: "gray",
        display: "flex",
        flexDirection: "column",
        width: "80px",
        minHeight: "568px",
      }}
    >
      <MenuItem Icon={AccountCircleIcon} subheading="Toqeer" />
      <MenuItem Icon={DashboardIcon} subheading="Dashboard" />
      <MenuItem Icon={AttachMoneySharpIcon} active subheading="Transaction" />
      <MenuItem Icon={EditSharpIcon} subheading="Editing" />
    </div>
  );
}
