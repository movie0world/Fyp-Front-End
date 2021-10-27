const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const axios = require("axios");
const { detect } = require("detect-browser");
const port = 3000;

// IP KEY
// 214b1240-3710-11ec-856d-bb3e4f99a06e

// ========================== Express middleWare =========================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// ================= Model & Connection =========================
require("./Model");

// =========================== Middeleware ===========================

const auth = require("./Middleware/verifyauth");

// =============================== User Route =============================

const UserRoute = require("./route/Auth/User");
const ResetPassword = require("./route/Auth/ResetPassword");
const website = require("./route/Website/website");
app.use("/user", UserRoute);
app.use("/reset_password", ResetPassword);
app.use("/website", website);

app.post("/tracker", async (req, res) => {
  const browser = detect(req.headers["user-agent"]);
  // const locationaddress = await axios.get(`freegeoip.net/json/${req.ip}`);
  console.log(browser);
  console.log(req.body);

  res.send("Toqeer houssain");
});

app.get("/redirect", (req, res) => {
  res.redirect("https://bestwoodworkingideas.xyz/?affiliate_id=Toqeer");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
