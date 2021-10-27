var mongoose = require("mongoose");

var Tracker = new mongoose.Schema(
  {
    city: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    browser: { type: String, required: true, trim: true },
    referer: { type: String, trim: true, default: null },
    promoterId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    WebId: { type: mongoose.Schema.Types.ObjectId, ref: "Website" },
  },
  { timestamps: true, autoIndex: false }
);

module.exports = mongoose.model("Tracker", Tracker);
