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

function App() {
  return (
    <div className="App">
      <Nav />
      <DashBoard />
      {/* <Card />  */}
      {/* <MenuItem /> */}
    </div>
  );
}

export default App;
