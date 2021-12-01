const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const axios = require("axios");
const bcrypt = require("bcrypt");
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
const BankDetail = mongoose.model("BankDetail");
// =========================== Middeleware ===============================

const auth = require("./Middleware/verifyauth");

// =============================== User Route ============================

const UserRoute = require("./route/Auth/User");
const ResetPassword = require("./route/Auth/ResetPassword");
const website = require("./route/Website/website");
const Website = require("./Model/Website");
const User = require("./Model/User");
app.use("/user", UserRoute);
app.use("/reset_password", ResetPassword);
app.use("/website", website);

app.get("/bankdetail/", auth, async (req, res) => {
  const poromid = await BankDetail.findOne({
    user: mongoose.Types.ObjectId(req.user.user_id),
  }).populate("user");
  console.log("bank detail of user", poromid);
  if (poromid) {
    return res.json(poromid);
  } else {
    return res.json(null);
  }
});

app.post("/bankdetail", auth, async (req, res) => {
  console.log("body data", req.body);
  const poromid = await BankDetail.findOne({
    user: mongoose.Types.ObjectId(req.user.user_id),
  }).populate("user");
  console.log("datad fdfdfdf", poromid);
  if (poromid) {
    console.log("i am called");
    poromid.bankName = req.body.bankname;
    poromid.ownerName = req.body.ownername;
    poromid.accountNumber = req.body.accountnumber;
    await poromid.save();

    return res.json({ updated: true });
  } else {
    await BankDetail.create({
      bankName: req.body.bankname,
      ownerName: req.body.ownername,
      user: req.user.user_id,
      accountNumber: req.body.accountnumber,
    });
    return res.json(null);
  }
});

app.get("/promoterid", auth, async (req, res) => {
  console.log(req.user);

  const user = await User.findById(req.user.user_id);
  console.log("value of adverister user", user);
  if (user) {
    return res.json({ user: user });
  }

  const poromid = await Promoter.findOne({
    user: mongoose.Types.ObjectId(req.user.user_id),
  }).populate("user");

  console.log("value of promote", poromid);
  res.json(poromid);
});

app.post("/promoterid", auth, async (req, res) => {
  console.log("called for promoter id", req.body);
  const user = await User.findOne({
    _id: mongoose.Types.ObjectId(req.user.user_id),
  });

  console.log("promoter detial", user);
  user.name = req.body.name;
  user.email = req.body.email;
  user.phoneNumber = req.body.phonenumber;

  if (req.body.password) {
    user.password = await bcrypt.hash(req.body.password, 10);
  }
  await user.save();
  res.json({ updated: true });
});

app.get("/marketitem", (req, res) => {
  website.find({ category: req.body.category });
});

app.post("/createredirecturl", auth, async (req, res) => {
  const promter = await Promoter.findOne({
    user: mongoose.Types.ObjectId(req.user.user_id),
  }).populate("user");
  var redirectid = v4();
  let website = await RedirectUrl.findOne({
    webid: req.body.webid,
    user: promter,
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
