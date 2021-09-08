const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Admins = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("Admins", Admins);
