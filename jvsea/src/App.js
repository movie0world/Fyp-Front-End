import "./App.css";
import React from "react";
import MyButton from "./UI/MyButton";
import Nav from "./Component/Nav";
import LogIn from "./Form/LogIn";
import Signup from "./Form/Sigup";
import MarketPlace from "./Component/MarketPlace";

function App() {
  return (
    <div className="App">
      <Nav />
      <MarketPlace />
    </div>
  );
}

export default App;
