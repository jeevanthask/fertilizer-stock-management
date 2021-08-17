const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Fertilizers = new Schema({
    name: {
        type: String,
    },
    companyname: {
        type: String,
    },
    producttype: {
        type: String,
    },
});

module.exports = mongoose.model("Fertilizers", Fertilizers);
