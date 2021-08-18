const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Companies = new Schema({
    firstname: {
        type: String,
    },
    secondname: {
        type: String,
    },
    email: {
        type: String,
    },
    telephone: {
        type: String,
    },
    address: {
        type: String,
    }
});

module.exports = mongoose.model("Companies", Companies);
