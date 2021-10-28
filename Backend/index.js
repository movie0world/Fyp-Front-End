const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const axios = require("axios");
const { detect, detectOS } = require("detect-browser");
const port = 3000;
const mongoose = require("mongoose");

// IP KEY
// 214b1240-3710-11ec-856d-bb3e4f99a06e

// ========================== Express middleWare =========================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// ================= Model & Connection =========================
require("./Model");
const Tracker = mongoose.model("Tracker");
// =========================== Middeleware ===========================

const auth = require("./Middleware/verifyauth");

// =============================== User Route =============================

const UserRoute = require("./route/Auth/User");
const ResetPassword = require("./route/Auth/ResetPassword");
const website = require("./route/Website/website");
const Website = require("./Model/Website");
app.use("/user", UserRoute);
app.use("/reset_password", ResetPassword);
app.use("/website", website);

app.post("/tracker", async (req, res) => {
  const browser = detect(req.headers["user-agent"]);
  const browserOOS = detectOS(req.headers["user-agent"]);
  // const locationaddress = await axios.get(`freegeoip.net/json/${req.ip}`);
  console.log(browserOOS);
  const webid = await Website.findOne({ webid: req.body.payload.website });
  console.log(webid._id);

  Tracker.create({
    city: req.body.payload.city,
    country: req.body.payload.country,
    browser: browser.name,
    webid: webid._id,
  });
  console.log(req.body);

  res.send("Toqeer houssain");
});

app.get("/redirect", (req, res) => {
  console.log("value of refrence", req.headers.referer);
  res.redirect("https://bestwoodworkingideas.xyz/?affiliate_id=Toqeer");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
