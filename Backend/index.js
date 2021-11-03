const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const axios = require("axios");
const { detect, detectOS } = require("detect-browser");
const port = 3000;
const mongoose = require("mongoose");
const { v4 } = require("uuid");

// IP KEY
// 214b1240-3710-11ec-856d-bb3e4f99a06e

// ========================== Express middleWare ========================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// ================= Model & Connection ==================================
require("./Model");
const Tracker = mongoose.model("Tracker");
const RedirectUrl = mongoose.model("RedirectUrl");
const Promoter = mongoose.model("Promoter");
// =========================== Middeleware ===============================

const auth = require("./Middleware/verifyauth");

// =============================== User Route ============================

const UserRoute = require("./route/Auth/User");
const ResetPassword = require("./route/Auth/ResetPassword");
const website = require("./route/Website/website");
const Website = require("./Model/Website");
app.use("/user", UserRoute);
app.use("/reset_password", ResetPassword);
app.use("/website", website);

app.get("/promoterid", auth, async (req, res) => {
  console.log("called for promoter id");
  const poromid = await Promoter.findOne({
    user: mongoose.Types.ObjectId(req.user.user_id),
  }).populate("user");
  console.log("vlaue of promoter", poromid);
  res.json(poromid);
});

app.post("/createredirecturl", auth, async (req, res) => {
  console.log(req.body);
  console.log(req.user);
  var redirectid = v4();
  let website = await RedirectUrl.findOne({
    webid: req.body.webid,
    user: req.user.user_id,
  }).populate("webid");

  console.log("redirect vlaue", website);
  if (!website) {
    website = await RedirectUrl.create({
      redirectid,
      user: req.user.user_id,
      webid: req.body.webid,
    });
    website = await website.populate("webid");
    console.log("after creation", website);
  }
  res.send(`https://${website.webid.domain}/?affiliate_id=${req.user.user_id}`);
});

app.post("/tracker", async (req, res) => {
  const browser = detect(req.headers["user-agent"]);

  // const locationaddress = await axios.get(`freegeoip.net/json/${req.ip}`);
  console.log(req.body.payload.referer);
  const webid = await Website.findOne({ webid: req.body.payload.website });
  console.log(webid._id);

  Tracker.create({
    city: req.body.payload.city,
    country: req.body.payload.country,
    browser: browser.name,
    webid: webid._id,
    referer: req.body.payload.referrer,
  });
  console.log(req.body);

  res.send("Toqeer houssain");
});

app.get("/redirect/:webid", auth, async (req, res) => {
  let data;
  try {
    data = await Tracker.find({
      user: req.user.user_id,
      webid: req.params.webid,
    }).count();
  } catch (e) {
    res.send("Not found any record");
  }

  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
