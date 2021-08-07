const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let farmers = new Schema({
  firstname: {
    type: String,
  },
  secondname: {
    type: String,
  },
  address: {
    type: String,
  },
});
