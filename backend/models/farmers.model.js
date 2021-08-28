const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Farmers = new Schema({
  firstname: {
    type: String,
  },
  secondname: {
    type: String,
  },
  nic: {
    type: String,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("Farmers", Farmers);
