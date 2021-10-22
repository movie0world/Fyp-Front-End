const express = require("express");
const mongoose = require("mongoose");
const website = mongoose.model("Website");
const { v4 } = require("uuid");

const route = express.Router();

route.post("/", async (req, res) => {
  const web = await website.create({
    ...req.body,
    webid: v4(),
    user: req.user.user_id,
  });
  res.send({ webid: web.webid, website: web.domain });
});

route.post("/track", async (req, res) => {
  const web = await website.create({
    ...req.body,
    webid: v4(),
    user: req.user.user_id,
  });
  res.send({ webid: web.webid, website: web.domain });
});

module.exports = route;
