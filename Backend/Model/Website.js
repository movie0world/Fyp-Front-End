var mongoose = require("mongoose");
const User = require("./User");

var Webdetail = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },

    domain: { type: String, required: true, trim: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true, autoIndex: false }
);

module.exports = mongoose.model("Website", Webdetail);
