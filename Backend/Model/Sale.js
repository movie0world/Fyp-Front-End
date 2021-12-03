var mongoose = require("mongoose");

var SaleItem = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  qty: { type: Number, required: true, trim: true },
  price: { type: String, required: true, trim: true },
});

var Sale = new mongoose.Schema(
  {
    products: [SaleItem],
    promoterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Promoter",
    },
    webid: { type: mongoose.Schema.Types.ObjectId, ref: "Website" },
    track: { type: mongoose.Schema.Types.ObjectId, ref: "Tracker" },
  },
  { timestamps: true, autoIndex: false }
);

module.exports = mongoose.model("Sale", Sale);
