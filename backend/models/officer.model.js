const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Officers = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  position: {
    type: String,
  },
});

module.exports = mongoose.model("Officers", Officers);
