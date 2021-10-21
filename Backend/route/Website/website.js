const express = require("express");
const mongoose = require("mongoose");
const website = mongoose.model("Website");

const route = express.Router();

route.post("/", async (req, res) => {
  const { domain, name } = req.body;
  console.log("user detail", req.user);
  const web = await website.create({ domain, name, user: req.user.user_id });
  res.send(web);
});

module.exports = route;
