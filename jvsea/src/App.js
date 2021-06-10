import "./App.css";
import React from "react";
import MyButton from "./UI/MyButton";
import Nav from "./Component/Nav";
import LogIn from "./Form/LogIn";
import Signup from "./Form/Sigup";
import MarketPlace from "./Component/MarketPlace";
import DashBoard from "./Component/DashBoard";
import Card from "./UI/Card";
import MenuItem from "./UI/MenuItem";
import Transaction from "./Component/Transaction";
import Profile from "./Component/Profile";
import Home from "./Component/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      {/* <DashBoard /> */}
      {/* <Transaction /> */}
      {/* Login  */}
      {/* Sign ui  */}
      {/* <Profile />  */}
      {/* <Card />  */}
      {/* <MenuItem /> */}
      {/* MarketPlace */}
    </div>
  );
}

export default App;
