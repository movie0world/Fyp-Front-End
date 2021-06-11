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
import ProTransaction from "./Component/ProTransaction";
import BrandTransaction from "./Component/BrandTransaction";
import ProProfile from "./Component/ProProfile";
import BrandProfile from "./Component/BrandProfile";
import Home from "./Component/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <BrandProfile /> */}
      {/* <Home /> */}
      <DashBoard />
      {/* <ProTransaction /> */}
      {/* <BrandTransaction /> */}
      {/* Login  */}
      {/* Sign ui  */}
      {/* <ProProfile />  */}
      {/* <Card />  */}
      {/* <MenuItem /> */}
      {/* MarketPlace */}
    </div>
  );
}

export default App;
