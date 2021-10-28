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
route.get("/inegration/:webid", async (req, res) => {
  console.log("website staus called how many time");
  await website.findOneAndUpdate(
    { webid: req.params.webid },
    { status: "Active" }
  );
  res.status(200).json({ webstatus: "Updated" });
});

module.exports = route;
