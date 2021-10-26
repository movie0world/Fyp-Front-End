var mongoose = require("mongoose");

var Webdetail = new mongoose.Schema(
  {
    trackercount: { type: String, required: true, trim: true },
    referer: { type: String, trim: true },
    promoterId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    WebId: { type: mongoose.Schema.Types.ObjectId, ref: "Website" },
  },
  { timestamps: true, autoIndex: false }
);
