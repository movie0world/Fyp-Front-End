import "./App.css";
import React, { createContext, useState } from "react";
import MyButton from "./UI/MyButton";
import Nav from "./Component/Nav";
import LogIn from "./Form/LogIn";
import Signup from "./Form/Sigup";
import MarketPlace from "./Component/MarketPlace";
import BrandDashBoard from "./Component/BrandDashBoard";
import PromoterDashBoard from "./Component/ProDashboard";
import Card from "./UI/Card";
import MenuItem from "./UI/MenuItem";
import ProTransaction from "./Component/ProTransaction";
import AdminDashboard from "./Component/AdminDashboard";
import AdminTransaction from "./Component/AdminTransaction";
import AdminLogin from "./Component/AdminLogin";

import BrandTransaction from "./Component/BrandTransaction";
import ProProfile from "./Component/ProProfile";
import BrandProfile from "./Component/BrandProfile";
import ForgetPassword from "./Form/ForgetPassword";
import Home from "./Component/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useLocation,
  useHistory,
} from "react-router-dom";

export const UserContext = createContext();

function App() {
  const [user, setuser] = useState("advertiser");
  const [login, setlogin] = useState(false);
  const [admin, setadmin] = useState(false);
  console.log("from app", user);
  console.log("from app login", login);

  const callComponent = (value) => {
    if (value == "Transaction")
      return login ? (
        admin ? (
          <AdminTransaction />
        ) : user == "advertiser" ? (
          <BrandTransaction />
        ) : (
          <ProTransaction />
        )
      ) : null;
    else if (value == "Editing")
      return login ? (
        user == "advertiser" ? (
          <BrandProfile />
        ) : (
          <ProProfile />
        )
      ) : null;
    return login ? (
      admin ? (
        <AdminDashboard />
      ) : user == "advertiser" ? (
        <BrandDashBoard />
      ) : (
        <PromoterDashBoard />
      )
    ) : null;
  };
  return (
    <div className="App">
      <UserContext.Provider
        value={{ user, setuser, setlogin, login, admin, setadmin }}
      >
        <Router>
          <Nav />
          <Switch>
            <Route path="/Market">
              <MarketPlace />
            </Route>
            <Route path="/Reset_Password">
              <ForgetPassword />
            </Route>
            <Route path="/admin">
              <AdminLogin />
            </Route>
            <Route path="/Login">
              <LogIn />
            </Route>
            <Route path="/Signup">
              <Signup />
            </Route>
            <Route path="/Dashboard">{() => callComponent("Dash")}</Route>
            <Route path="/Transaction">
              {() => callComponent("Transaction")}
            </Route>
            <Route path="/Editing">{() => callComponent("Editing")}</Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        {/* <BrandProfile /> */}
        {/* <Home /> */}
        {/* <DashBoard /> */}
        {/* <ProTransaction /> */}
        {/* <BrandTransaction /> */}
        {/* Login  */}
        {/* Sign ui  */}
        {/* <ProProfile />  */}
        {/* <Card />  */}
        {/* <MenuItem /> */}
        {/* MarketPlace */}
      </UserContext.Provider>
    </div>
  );
}

export default App;
