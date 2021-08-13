const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Fertilizers = new Schema({
  name: {
    type: String,
  },
  companyname: {
    type: String,
  },
  type: {
    type: String,
  },
});

module.exports = mongoose.model("Fertilizers", Fertilizers);
