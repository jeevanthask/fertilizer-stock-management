const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let FertilizerStock = new Schema({
  name: {
    type: String,
  },
  producttype: {
    type: String,
  },
  quantity: {
    type: String,
  },
});

module.exports = mongoose.model("FertilizerStock", FertilizerStock);
