var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    token: { type: String, default: null },
    resetPasswordToken: { type: String, default: null },
    resetPasswordExpires: { type: Date, default: null },
    Role: {
      type: String,
      enum: ["advertiser", "promoter"],
      default: "promoter",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
